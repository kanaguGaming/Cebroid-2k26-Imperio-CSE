// Register GSAP Flip plugin
gsap.registerPlugin(Flip);

// Event Data - Mapped to GoT themes as requested
const eventsData = [
    {
        id: "paper_presentation",
        title: "Paper Presentation",
        theme: "The Highgarden Summit",
        tagline: "A classic presentation of knowledge. Updates tracked by the Maesters.",
        desc: "Present your research papers to the esteemed Archmaesters. Originality and depth of knowledge will decide your fate in the Citadel.",
        rules: [
            "Submit abstract before the deadline.",
            "10 minutes for presentation, 5 minutes for Q&A.",
            "Plagiarism leads to immediate disqualification.",
            "Presentation must be in English."
        ],
        teamSize: "Up to 4 members",
        prizes: "1st: ₹2000 | 2nd: ₹1000",
        contact: "Maester Aemon",
        phone: "9876543210",
        img: "assets/Tyrell – Paper Presentation.png"
    },
    {
        id: "debug_relay",
        title: "Debug Relay",
        theme: "The Storm's End Relay",
        tagline: "15 pairs. Take turns debugging code. 'I drink and I know things.'",
        desc: "A tag-team coding challenge. One member debugs while the other waits, then swap. Communication and quick thinking are your only allies.",
        rules: [
            "Exactly 2 members per team.",
            "Only one member codes at a time.",
            "Swap every 5 minutes — no exceptions.",
            "No external references or internet allowed."
        ],
        teamSize: "Exactly 2 members",
        prizes: "1st: ₹1000",
        contact: "Podrick Payne",
        phone: "9876543211",
        img: "assets/barotheon - Debug Relay.png"
    },
    {
        id: "tech_quiz",
        title: "Tech Quiz",
        theme: "Trial by the Eyrie",
        tagline: "Kahoot-based technical quiz. Only the most informed survive.",
        desc: "Test your knowledge on the latest tech gossip and hard facts. The little birds have gathered questions from all realms of technology.",
        rules: [
            "Individual participation only.",
            "Laptop is mandatory for the event.",
            "Fastest correct answer gets more points.",
            "No smartphones or secondary devices allowed."
        ],
        teamSize: "Individual",
        prizes: "1st: ₹1000",
        contact: "Little Bird #1",
        phone: "9876543212",
        img: "assets/Arryn – Tech Quiz.png"
    },
    {
        id: "ui_design",
        title: "UI Design",
        theme: "The Mad King's Canvas",
        tagline: "Design a wild, creative, and completely frustrating UI. Chaos is a ladder.",
        desc: "Create the most diabolical, worst possible user experience. The more frustrated the tester, the higher your score. Embrace chaos.",
        rules: [
            "Individual participation only.",
            "Any prior work or templates not allowed.",
            "Must be functional but deliberately infuriating.",
            "Design must be submitted as a live prototype."
        ],
        teamSize: "Individual",
        prizes: "1st: ₹1000",
        contact: "Qyburn",
        phone: "9876543213",
        img: "assets/Targaryen - UI Design.png"
    },
    {
        id: "ctf",
        title: "CTF (Capture the Flag)",
        theme: "Paying the Iron Price",
        tagline: "Cybersecurity CTF. Find the hidden flags in images and files.",
        desc: "Infiltrate the systems and uncover the hidden secrets. Become no one and bypass the security to claim your flags.",
        rules: [
            "Solo or teams of 2 only.",
            "Bring your own laptop — no sharing.",
            "No DDoS or destructive attacks on the server.",
            "Do not copy or share flags between teams."
        ],
        teamSize: "Solo or 2 members",
        prizes: "1st: ₹5000",
        contact: "Jaqen H'ghar",
        phone: "9876543214",
        img: "assets/GreyJoy - CTF.png"
    },
    {
        id: "shark_tank",
        title: "Shark Tank",
        theme: "The Casterly Rock Pitch",
        tagline: "Project expo with custom gold/silver coin investments via QR.",
        desc: "Pitch your tech project to the masters of the Iron Bank. Secure investments from attendees using custom QR coins and win the Iron Throne of innovation.",
        rules: [
            "Team of up to 4 members.",
            "Working prototype is required.",
            "Pitch must be under 5 minutes.",
            "Q&A session of 3 minutes follows each pitch."
        ],
        teamSize: "Up to 4 members",
        prizes: "Most Invested: ₹10000",
        contact: "Kevan Lannister",
        phone: "9876543215",
        img: "assets/Lanyster - Shark tank.png"
    },
    {
        id: "ai_prompt_battle",
        title: "AI Prompt Battle",
        theme: "The Viper's Strike",
        tagline: "Look at an image once, then write the prompt to recreate it.",
        desc: "Harness the power of sight. View an AI-generated image for 10 seconds, then craft the exact prompt to recreate it. Precision is power.",
        rules: [
            "Individual participation only.",
            "No internet browsing during prompt writing.",
            "Closest match to the original image wins.",
            "Prompts must be typed, not dictated."
        ],
        teamSize: "Individual",
        prizes: "1st: ₹2000",
        contact: "Meera Reed",
        phone: "9876543216",
        img: "assets/Martell - AI promt battle.png"
    },
    {
        id: "down_side_up",
        title: "Down Side UP",
        theme: "Beyond the Wall Logic",
        tagline: "Technical questions, but you must provide the WRONG answers only.",
        desc: "Deceive and confuse. Answer technical questions with completely wrong but convincing answers. The more absurd yet believable, the better.",
        rules: [
            "Pairs only.",
            "Hesitation for more than 5 seconds leads to elimination.",
            "Correct answers will get you instantly disqualified.",
            "Answers must be tech-related — no random gibberish."
        ],
        teamSize: "Exactly 2 members",
        prizes: "1st: ₹2000",
        contact: "Sansa Stark",
        phone: "9876543217",
        img: "assets/Giantsbane – Down Side UP.png"
    },
    {
        id: "techdumb_pictionary",
        title: "TechDumb Pictionary",
        theme: "The Riverrun Riddles",
        tagline: "Rapid-fire picture connection to guess technical words.",
        desc: "You know nothing! Guess the technical term by connecting completely unrelated, dumb pictures drawn by your teammate.",
        rules: [
            "Teams of 2 members.",
            "One member draws, the other guesses.",
            "No speaking, mouthing, or pointing allowed.",
            "Scoring is time-based."
        ],
        teamSize: "Exactly 2 members",
        prizes: "1st: ₹2000",
        contact: "Samwell",
        phone: "9876543218",
        img: "assets/Tully – TechDumb Pictionary.png"
    },
    {
        id: "binary_charades",
        title: "Binary Charades",
        theme: "The Silent Wolf",
        tagline: "Act out technical terms without speaking. Hold the door!",
        desc: "No words allowed. Only actions. Act out complex technical architectures and terms while your partner decodes your silent performance.",
        rules: [
            "Teams of 2 members.",
            "No speaking, no pointing at physical objects.",
            "Guessing must be the exact technical term.",
            "Each round is strictly time-limited."
        ],
        teamSize: "Exactly 2 members",
        prizes: "1st: ₹2000",
        contact: "Bran",
        phone: "9876543219",
        img: "assets/Stark - Binary Charades.png"
    }
];

// DOM Elements
const splashScreen = document.getElementById('splash-screen');
const eventsGrid = document.getElementById('events-grid');
const eventOverlay = document.getElementById('event-overlay');
const closeOverlayBtn = document.getElementById('close-overlay');
const detailsView = document.getElementById('event-details-view');
let activeCard = null;

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

// Close nav when a link is clicked (smooth UX on mobile)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

// Splash Screen Logic
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    
    tl.to('.splash-logo', { opacity: 1, duration: 1.5, ease: "power2.inOut" })
      .to('.splash-logo', { opacity: 0, duration: 1, delay: 1.5, ease: "power2.inOut" })
      .to(splashScreen, { opacity: 0, duration: 0.8, onComplete: () => {
          splashScreen.style.display = 'none';
          document.body.style.overflow = 'auto'; // Re-enable scrolling
          
          // Trigger card animations after splash
          gsap.from('.event-card', {
              y: 100,
              opacity: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              clearProps: "all" // CRITICAL: Removes inline styles after animation so CSS hover transforms work again
          });
      }});
      
    document.body.style.overflow = 'hidden'; // Prevent scrolling during splash
    
    // Initialize cards and registration checkboxes
    renderCards();
    renderEventCheckboxes();
});

// Render Event Cards
function renderCards() {
    eventsData.forEach((event, index) => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.dataset.id = event.id;
        
        card.innerHTML = `
            <img src="${event.img}" alt="${event.title}" class="card-bg">
            <div class="card-content">
                <div class="card-theme">${event.theme}</div>
                <h3 class="card-title">${event.title}</h3>
                <p class="card-tagline">${event.tagline}</p>
            </div>
        `;
        
        card.addEventListener('click', (e) => openEventOverlay(event, card));
        eventsGrid.appendChild(card);
    });
}

// Open Overlay with cinematic flash + scale animation
function openEventOverlay(event, card) {
    activeCard = card;

    // ── Set cover photo as background ──────────────────────────────────
    const overlayBg = document.getElementById('overlay-bg-photo');
    overlayBg.style.backgroundImage = `url('${event.img}')`;

    // ── Populate all details ────────────────────────────────────────────
    document.getElementById('detail-title').innerText = event.title;
    document.getElementById('detail-theme').innerText = event.theme;
    document.getElementById('detail-desc').innerText = event.desc;
    document.getElementById('detail-rules').innerHTML = event.rules
        .map(r => `<li><i class="fas fa-chevron-right"></i>${r}</li>`).join('');
    document.getElementById('detail-team-size').innerText = event.teamSize;
    document.getElementById('detail-prizes').innerText = event.prizes;
    document.getElementById('detail-coord-name').innerText = event.contact;
    document.getElementById('detail-coord-phone').href = `tel:${event.phone}`;
    document.getElementById('detail-coord-phone-text').innerText = event.phone;

    // ── Show overlay ────────────────────────────────────────────────────
    eventOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // ── Cinematic animation: flash burst → card maximises ──────────────
    const rect = card.getBoundingClientRect();
    const cardCX = rect.left + rect.width / 2;
    const cardCY = rect.top  + rect.height / 2;
    const vCX    = window.innerWidth  / 2;
    const vCY    = window.innerHeight / 2;

    // Flash element: position at card centre, translate -50% via CSS already
    const flash = document.getElementById('overlay-flash');
    gsap.set(flash, {
        left: cardCX,
        top:  cardCY,
        xPercent: -50,
        yPercent: -50,
        scale: 0,
        opacity: 0
    });

    // Overlay card: start tiny at card centre, then move to viewport centre
    const overlayContent = document.querySelector('.overlay-content');
    gsap.set(overlayContent, {
        x: cardCX - vCX,
        y: cardCY - vCY,
        scale: 0.06,
        opacity: 0,
        transformOrigin: 'center center'
    });

    const tl = gsap.timeline();

    // 1. Flash burst
    tl.to(flash, { scale: 5, opacity: 1, duration: 0.16, ease: 'power2.out' })
    // 2. Flash fades out
      .to(flash, { scale: 14, opacity: 0, duration: 0.4, ease: 'power1.out' }, '<0.06')
    // 3. Popup expands to centre
      .to(overlayContent, {
          x: 0, y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'expo.out'
      }, '<0.04')
    // 4. Inner content cascades in
      .from('.popup-header', { y: -25, opacity: 0, duration: 0.38, ease: 'power3.out' }, '-=0.2')
      .from('.popup-body > *', {
          y: 22, opacity: 0, duration: 0.32,
          stagger: 0.07, ease: 'power2.out'
      }, '-=0.22')
      .from('.popup-register-btn', { y: 16, opacity: 0, duration: 0.3, ease: 'back.out(2)' }, '-=0.1');
}

// Close Overlay
function closeEventOverlay() {
    gsap.to('.overlay-content', {
        scale: 0.85,
        opacity: 0,
        duration: 0.28,
        ease: 'power2.in',
        onComplete: () => {
            eventOverlay.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
}

closeOverlayBtn.addEventListener('click', closeEventOverlay);

// Also close overlay when clicking the backdrop
eventOverlay.addEventListener('click', (e) => {
    if (e.target === eventOverlay) closeEventOverlay();
});

// =====================================================================
// INDIVIDUAL REGISTRATION SECTION
// =====================================================================
const openRegFormBtn = document.getElementById('open-reg-form');
const closeRegFormBtn = document.getElementById('close-reg-form');
const registerBanner = document.getElementById('register-banner');
const registerFormContainer = document.getElementById('register-form-container');
const individualRegForm = document.getElementById('individual-reg-form');
const eventsCheckboxGrid = document.getElementById('events-checkbox-grid');

// Step elements
const step1 = document.getElementById('reg-step-1');
const step2 = document.getElementById('reg-step-2');
const stepInd1 = document.getElementById('step-ind-1');
const stepInd2 = document.getElementById('step-ind-2');
const proceedBtn = document.getElementById('proceed-to-payment');
const backBtn = document.getElementById('back-to-step1');
const step1Error = document.getElementById('step1-error');
const step2Error = document.getElementById('step2-error');

// File upload elements
const screenshotInput = document.getElementById('reg-screenshot');
const fileUploadArea = document.getElementById('file-upload-area');
const filePlaceholder = document.getElementById('file-placeholder');
const filePreview = document.getElementById('file-preview');
const previewImg = document.getElementById('preview-img');
const previewName = document.getElementById('preview-name');
const previewSize = document.getElementById('preview-size');
const removeFileBtn = document.getElementById('remove-file');

// Inject event checkboxes from eventsData
function renderEventCheckboxes() {
    eventsCheckboxGrid.innerHTML = '';
    eventsData.forEach(event => {
        const item = document.createElement('label');
        item.className = 'event-checkbox-item';
        // NOTE: Do NOT set item.htmlFor here — the input is already inside the label.
        // Setting both causes a double-toggle bug (browser fires the click twice).
        item.innerHTML = `
            <input type="checkbox" id="chk-${event.id}" name="events" value="${event.title}">
            <span class="checkbox-custom"></span>
            <span class="checkbox-label">${event.title}</span>
        `;
        eventsCheckboxGrid.appendChild(item);
    });
}

// Open registration form
openRegFormBtn.addEventListener('click', () => {
    registerBanner.classList.add('hidden');
    registerFormContainer.classList.remove('hidden');
    gsap.fromTo('#register-form-container',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
    );
    document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
});

// Close / collapse back to banner (also resets form to step 1)
closeRegFormBtn.addEventListener('click', () => {
    gsap.to('#register-form-container', {
        opacity: 0, y: 20, duration: 0.3, onComplete: () => {
            registerFormContainer.classList.add('hidden');
            registerBanner.classList.remove('hidden');
            gsap.fromTo('#register-banner', { opacity: 0 }, { opacity: 1, duration: 0.4 });
            resetFormToStep1();
        }
    });
});

// Reset entire form back to step 1
function resetFormToStep1() {
    individualRegForm.reset();
    clearFilePreview();
    showStep(1);
    step1Error.classList.add('hidden');
    step2Error.classList.add('hidden');
    document.getElementById('reg-form-message').innerHTML = '';
}

// ── Step Navigation ──────────────────────────────────────────────────

function showStep(num) {
    if (num === 1) {
        step2.classList.add('hidden');
        step1.classList.remove('hidden');
        gsap.fromTo(step1, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.4 });
        stepInd1.classList.add('active');
        stepInd1.classList.remove('completed');
        stepInd2.classList.remove('active');
    } else {
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
        gsap.fromTo(step2, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.4 });
        stepInd1.classList.remove('active');
        stepInd1.classList.add('completed');
        stepInd2.classList.add('active');
    }
}

// Proceed to Step 2 — validate Step 1 first
proceedBtn.addEventListener('click', () => {
    const name = document.getElementById('reg-name').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const college = document.getElementById('reg-college').value.trim();
    const selectedEvents = [...individualRegForm.querySelectorAll('input[name="events"]:checked')].map(cb => cb.value);

    // Validate
    if (!name) return showStep1Error('Please enter your name.');
    if (!/^[0-9]{10}$/.test(phone)) return showStep1Error('Please enter a valid 10-digit contact number.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showStep1Error('Please enter a valid email address.');
    if (!college) return showStep1Error('Please enter your college / institution name.');
    if (selectedEvents.length === 0) return showStep1Error('Please select at least one event to attend.');

    // All good — build summary and go to step 2
    step1Error.classList.add('hidden');
    const summaryEl = document.getElementById('payment-summary-text');
    summaryEl.innerHTML = `
        <strong>${name}</strong> — ${college}<br>
        <span class="summary-events"><i class="fas fa-calendar-check"></i> ${selectedEvents.join(' • ')}</span>
    `;
    showStep(2);
    // Scroll to top of form
    registerFormContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

function showStep1Error(msg) {
    step1Error.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${msg}`;
    step1Error.classList.remove('hidden');
    gsap.fromTo(step1Error, { opacity: 0, y: -5 }, { opacity: 1, y: 0, duration: 0.3 });
}

// Back to Step 1
backBtn.addEventListener('click', () => showStep(1));

// Clear button (Step 1)
document.getElementById('reset-reg-form').addEventListener('click', resetFormToStep1);

// ── File Upload ───────────────────────────────────────────────────────

fileUploadArea.addEventListener('click', () => screenshotInput.click());

// Drag & drop
fileUploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileUploadArea.classList.add('drag-over');
});
fileUploadArea.addEventListener('dragleave', () => fileUploadArea.classList.remove('drag-over'));
fileUploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    fileUploadArea.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelected(file);
});

screenshotInput.addEventListener('change', (e) => {
    if (e.target.files[0]) handleFileSelected(e.target.files[0]);
});

function handleFileSelected(file) {
    // Type check
    if (!file.type.startsWith('image/')) {
        showStep2Error('Please upload an image file (PNG, JPG, WEBP).');
        return;
    }
    // Size check (5MB)
    if (file.size > 5 * 1024 * 1024) {
        showStep2Error('File is too large. Please upload an image under 5 MB.');
        return;
    }
    step2Error.classList.add('hidden');

    const reader = new FileReader();
    reader.onload = (ev) => {
        previewImg.src = ev.target.result;
        previewName.textContent = file.name;
        previewSize.textContent = `${(file.size / 1024).toFixed(1)} KB`;
        filePlaceholder.classList.add('hidden');
        filePreview.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
}

removeFileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    clearFilePreview();
});

function clearFilePreview() {
    screenshotInput.value = '';
    previewImg.src = '';
    previewName.textContent = '';
    previewSize.textContent = '';
    filePlaceholder.classList.remove('hidden');
    filePreview.classList.add('hidden');
}

function showStep2Error(msg) {
    step2Error.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${msg}`;
    step2Error.classList.remove('hidden');
    gsap.fromTo(step2Error, { opacity: 0, y: -5 }, { opacity: 1, y: 0, duration: 0.3 });
}

// ── Form Submission ───────────────────────────────────────────────────

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbx1BsgrVUUeSSilE-ct5LztL0NKD9yz8l6KQbL_m72R9Vh9Zh-wzElfW7xdUnnzNQxO/exec";

individualRegForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('reg-submit-btn');
    const msgDiv = document.getElementById('reg-form-message');

    // Validate Step 2 fields
    const txnId = document.getElementById('reg-txn-id').value.trim();
    if (!txnId) { showStep2Error('Please enter the Transaction ID.'); return; }
    if (!screenshotInput.files[0]) { showStep2Error('Please upload your payment screenshot.'); return; }

    step2Error.classList.add('hidden');
    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Sending Ravens...`;
    submitBtn.disabled = true;
    msgDiv.innerHTML = '';

    // Read screenshot as base64
    const file = screenshotInput.files[0];
    const reader = new FileReader();

    reader.onload = async (ev) => {
        const selectedEvents = [...individualRegForm.querySelectorAll('input[name="events"]:checked')].map(cb => cb.value);

        const data = {
            name: document.getElementById('reg-name').value.trim(),
            phone: document.getElementById('reg-phone').value.trim(),
            email: document.getElementById('reg-email').value.trim(),
            college: document.getElementById('reg-college').value.trim(),
            events: selectedEvents.join(', '),
            fee: '₹200',
            transactionId: txnId,
            screenshotBase64: ev.target.result,      // full DataURL e.g. "data:image/png;base64,..."
            screenshotName: file.name
        };

        try {
            const response = await fetch(WEB_APP_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify(data)
            });
            const result = await response.json();

            if (result.status === 'success') {
                msgDiv.innerHTML = `<span class="msg-success"><i class="fas fa-check-circle"></i> Registration submitted! Our team will verify your payment and send a confirmation to <strong>${data.email}</strong>. 🐉</span>`;
                individualRegForm.reset();
                clearFilePreview();
                showStep(1);
                setTimeout(() => { msgDiv.innerHTML = ''; }, 8000);
            } else {
                throw new Error(result.message || 'Server Error');
            }
        } catch (error) {
            console.error('Submission failed:', error);
            msgDiv.innerHTML = `<span class="msg-error"><i class="fas fa-times-circle"></i> A raven was intercepted. Please try again or contact us directly.</span>`;
        } finally {
            submitBtn.innerHTML = `Submit Registration <i class="fas fa-paper-plane"></i>`;
            submitBtn.disabled = false;
        }
    };

    reader.readAsDataURL(file);
});


// Interactive Dragon Scale Background Parallax
const dragonBg = document.querySelector('.dragon-background');

// Mouse movement parallax
document.addEventListener('mousemove', (e) => {
    // Only apply if the overlay is hidden (user is not filling form)
    if (eventOverlay.classList.contains('hidden')) {
        const x = (window.innerWidth - e.pageX * 2) / 80;
        const y = (window.innerHeight - e.pageY * 2) / 80;
        
        gsap.to(dragonBg, {
            x: x,
            y: y,
            duration: 1.5,
            ease: "power2.out"
        });
    }
});

// Scroll parallax
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Scale the background slightly as we scroll down and move it up
    gsap.to(dragonBg, {
        y: -scrollY * 0.2,
        scale: 1 + (scrollY * 0.0003),
        duration: 0.5,
        ease: "power1.out"
    });
});
