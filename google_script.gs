/**
 * Game of Thrones Symposium Registration Backend
 * Deploy as a Web App:
 * 1. Go to script.google.com and create a new project.
 * 2. Paste this code into Code.gs.
 * 3. Deploy > New Deployment > Web App
 * 4. Execute as: Me, Who has access: Anyone
 * 5. Copy the generated Web App URL and update the WEB_APP_URL in your script.js file.
 */

function doPost(e) {
  // Try to parse the incoming JSON payload.
  // Using text/plain in the frontend fetch avoids CORS preflight, and the body will be in e.postData.contents.
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error", 
      message: "Invalid JSON format"
    })).setMimeType(ContentService.MimeType.JSON);
  }

  // The event_id determines which sheet to write to
  const eventId = data.event_id;
  if (!eventId) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error", 
      message: "Missing event_id"
    })).setMimeType(ContentService.MimeType.JSON);
  }

  // Get the active spreadsheet
  // (Assuming this script is bound to a Google Sheet, if not, use SpreadsheetApp.openById('YOUR_SHEET_ID'))
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // Find or create the sheet for this specific event
  let sheet = ss.getSheetByName(eventId);
  if (!sheet) {
    sheet = ss.insertSheet(eventId);
    // Add Headers for a new sheet
    sheet.appendRow(["Timestamp", "Team Name", "Members", "Email", "Phone", "College"]);
    // Freeze header row and make it bold
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, 6).setFontWeight("bold");
  }

  // Prepare row data based on the form fields submitted
  const rowData = [
    new Date(), // Timestamp
    data.teamName || "",
    data.members || "",
    data.email || "",
    data.phone || "",
    data.college || ""
  ];

  // Append data to the specific event sheet
  sheet.appendRow(rowData);

  // Return success response
  return ContentService.createTextOutput(JSON.stringify({
    status: "success", 
    message: "Registration successful"
  })).setMimeType(ContentService.MimeType.JSON);
}

// Handle GET requests (e.g., for pinging, testing, or checking status)
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online", 
    message: "The Maesters are listening... Winter is Coming."
  })).setMimeType(ContentService.MimeType.JSON);
}
