/**
 * Cebroid 2k26 - Registration & Automated Pass Backend
 */

// ── CONFIGURATION ───────────────────────────────────────────────────
const DRIVE_FOLDER_ID = "1_PcKWU2oJtIXBNGwOTYqhnD7JGsNcUDH";  
const SHEET_NAME      = "Registrations";               
// ────────────────────────────────────────────────────────────────────

function doPost(e) {
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (error) {
    return jsonResponse("error", "Invalid JSON format");
  }

  if (!data.name || !data.phone || !data.email || !data.college || !data.events) {
    return jsonResponse("error", "Missing required registration fields");
  }

  // --- Upload screenshot to Drive ---
  let screenshotLink = "No screenshot provided";
  if (data.screenshotBase64 && data.screenshotBase64.startsWith("data:")) {
    try {
      screenshotLink = uploadToDrive(
        data.screenshotBase64,
        data.screenshotName || "screenshot.png",
        data.name.trim(),
        data.phone.trim()
      );
    } catch (err) {
      Logger.log("Drive upload error: " + err.message);
      screenshotLink = "Upload failed: " + err.message;
    }
  }

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Timestamp",
      "Full Name",
      "Contact Number",
      "Email",
      "College / Institution",
      "Events Selected",
      "Registration Fee",
      "Payment Screenshot", // Column H (8)
      "Ticket Number",      // Column I (9)
      "Verification Status",// Column J (10)
      "Pass Sent"           // Column K (11)
    ]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, 11).setFontWeight("bold").setBackground("#333333").setFontColor("#ffffff");
  }

  // Generate unique ticket number
  const nextRowIndex = sheet.getLastRow();
  const paddedNumber = ("000" + nextRowIndex).slice(-3);
  const ticketNumber = "Cebroid-" + paddedNumber;

  const rowData = [
    new Date(),               // A: Timestamp
    data.name || "",          // B: Full Name
    data.phone || "",         // C: Contact Number
    data.email || "",         // D: Email
    data.college || "",       // E: College / Institution
    data.events || "",        // F: Events Selected
    data.fee || "₹200",       // G: Registration Fee
    screenshotLink,           // H: Payment Screenshot URL
    ticketNumber,             // I: Ticket Number
    "Pending",                // J: Verification Status
    "No"                      // K: Pass Sent
  ];

  sheet.appendRow(rowData);

  // Make the screenshot cell a clickable hyperlink
  if (screenshotLink.startsWith("https://")) {
    const newRow = sheet.getLastRow();
    const linkCell = sheet.getRange(newRow, 8); 
    linkCell.setFormula('=HYPERLINK("' + screenshotLink + '","View Screenshot")');
  }

  return jsonResponse("success", "Registration successful! The Maesters have recorded your pledge.");
}

function doGet(e) {
  return jsonResponse("online", "Cebroid 2k26 Registration API is live. Winter is Coming.");
}

/**
 * TRIGGER: Listens for manual verification in the Google Sheet
 */
function processVerification(e) {
  if (!e || !e.range) return;
  
  const sheet = e.range.getSheet();
  if (sheet.getName() !== SHEET_NAME) return;
  
  const row = e.range.getRow();
  const col = e.range.getColumn();
  
  // Check if the edit happened in Column J (Index 10 - Verification Status) and isn't the header
  if (col === 10 && row > 1) {
    const status = e.value;
    const sentStatus = sheet.getRange(row, 11).getValue(); // Column K (Pass Sent)
    
    // Only send if marked Verified and not already sent
    if (status === "Verified" && sentStatus !== "Yes") {
      sendEntryPass(sheet, row);
      
      // Update Column K so we don't accidentally send duplicates
      sheet.getRange(row, 11).setValue("Yes");
    }
  }
}

/**
 * Generates the QR code and sends the HTML email
 */
function sendEntryPass(sheet, row) {
  // Fetch all 11 columns for the verified row
  const rowData = sheet.getRange(row, 1, 1, 11).getValues()[0];
  
  const name = rowData[1];
  const email = rowData[3];
  const events = rowData[5];
  const ticketNumber = rowData[8]; // Updated to Index 8 (Column I)
  
  // QuickChart API encodes the Ticket Number directly into the QR image
  const qrUrl = "https://quickchart.io/qr?text=" + encodeURIComponent(ticketNumber) + "&size=250&margin=2";
  
  const subject = "Entry Pass: Cebroid 2k26 - " + name;
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #050505; color: #eaeaea; padding: 30px; border: 1px solid #333; border-radius: 10px; text-align: center;">
      <h2 style="color: #e65c00; text-transform: uppercase; font-family: Georgia, serif;">The Iron Bank Acknowledges Your Tribute</h2>
      <p style="font-size: 16px;">Lord/Lady <strong>${name}</strong>, your registration has been verified by the Maesters.</p>
      <p style="font-size: 16px;">Present the sigil below to the Kingsguard at the gates to enter the symposium.</p>
      
      <div style="background: #fff; padding: 15px; display: inline-block; border-radius: 10px; margin: 20px 0;">
        <img src="${qrUrl}" alt="Entry Pass QR Code" width="200" height="200" style="display: block;">
      </div>
      
      <p style="color: #e65c00; font-size: 24px; font-weight: bold; letter-spacing: 2px; margin: 10px 0;">${ticketNumber}</p>
      <p style="color: #888; font-size: 14px; margin-top: 30px;">Events: ${events}</p>
      <hr style="border: 0; border-top: 1px solid #333; margin: 30px 0;">
      <p style="color: #555; font-size: 11px;">Department of CSE - IMPERIO CSE<br>Adhi College Of Engineering & Technology</p>
    </div>
  `;
  
  MailApp.sendEmail({
    to: email,
    subject: subject,
    htmlBody: htmlBody,
    name: "Imperio CSE - Cebroid 2k26"
  });
}

// ── Helpers ───────────────────────────────────────────────────────────

/**
 * Uploads a base64 DataURL to the pre-created Drive folder.
 * Returns the file's shareable view URL.
 */
function uploadToDrive(dataUrl, originalFileName, name, phone) {
  const mimeMatch = dataUrl.match(/^data:([^;]+);base64,/);
  if (!mimeMatch) throw new Error("Cannot parse DataURL MIME type.");
  const mimeType = mimeMatch[1];

  const base64Content = dataUrl.split(",")[1];
  const decoded = Utilities.base64Decode(base64Content);

  const ext = originalFileName.split(".").pop() || "png";
  const safeName = (name + "_" + phone).replace(/[^a-zA-Z0-9_]/g, "_");
  const timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyyMMdd_HHmmss");
  const fileName = safeName + "_" + timestamp + "." + ext;

  const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
  const blob = Utilities.newBlob(decoded, mimeType, fileName);
  const file = folder.createFile(blob);

  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

  return file.getUrl();
}

/** Builds a standard JSON response. */
function jsonResponse(status, message) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: status, message: message }))
    .setMimeType(ContentService.MimeType.JSON);
}

/** Run this manually once to grant permissions */
function authorizeScript() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const email = Session.getActiveUser().getEmail();
  Logger.log("Authorization successful for: " + email);
}