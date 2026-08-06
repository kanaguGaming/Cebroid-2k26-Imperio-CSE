// Register GSAP Flip plugin
gsap.registerPlugin(Flip);

// Event Data - Mapped to GoT themes as requested
const eventsData = [
    {
        id: "paper_presentation",
        title: "Paper Presentation",
        theme: "Samwell Tarly / The Citadel",
        tagline: "A classic presentation of knowledge. Updates tracked by the Maesters.",
        desc: "Present your research papers to the esteemed Archmaesters. Originality and depth of knowledge will decide your fate in the Citadel.",
        rules: [
            "Maximum 4 members per team.",
            "Submit abstract before the deadline.",
            "10 minutes for presentation, 5 minutes for Q&A."
        ],
        prizes: "1st: 5000 Gold Dragons, 2nd: 3000 Gold Dragons",
        contact: "Maester Aemon: 9876543210",
        img: "assets/Tyrell – Paper Presentation.png"
    },
    {
        id: "debug_relay",
        title: "Debug Relay",
        theme: "Tyrion Lannister",
        tagline: "15 pairs. Take turns debugging code. 'I drink and I know things.'",
        desc: "A tag-team coding challenge. One member debugs while the other waits, then swap. Communication and quick thinking are key.",
        rules: [
            "Exactly 2 members per team.",
            "Only one member codes at a time.",
            "Swap every 10 minutes."
        ],
        prizes: "1st: 4000 Gold Dragons",
        contact: "Podrick Payne: 9876543211",
        img: "assets/barotheon - Debug Relay.png"
    },
    {
        id: "tech_quiz",
        title: "Tech Quiz",
        theme: "Lord Varys / Master of Whisperers",
        tagline: "Kahoot-based technical quiz. Only the most informed survive.",
        desc: "Test your knowledge on the latest tech gossip and hard facts. The little birds have gathered questions from all realms.",
        rules: [
            "Individual participation only.",
            "Mobile phones allowed for Kahoot.",
            "Fastest correct answer gets more points."
        ],
        prizes: "1st: 2000 Gold Dragons",
        contact: "Little Bird #1: 9876543212",
        img: "assets/Arryn – Tech Quiz.png"
    },
    {
        id: "ui_design",
        title: "UI Design",
        theme: "Cersei Lannister",
        tagline: "Design a wild, creative, and completely frustrating UI. Chaos is a ladder.",
        desc: "Create the most diabolical, worst possible user experience. The more frustrated the user, the higher your score.",
        rules: [
            "Individual participation.",
            "Figma or HTML/CSS/JS allowed.",
            "Must be functional but infuriating."
        ],
        prizes: "1st: 3000 Gold Dragons",
        contact: "Qyburn: 9876543213",
        img: "assets/Targaryen - UI Design.png"
    },
    {
        id: "ctf",
        title: "CTF (Capture the Flag)",
        theme: "Arya Stark / Faceless Men",
        tagline: "Cybersecurity CTF. Find the hidden flags in images and files.",
        desc: "Infiltrate the systems and uncover the hidden secrets. Become no one and bypass the security.",
        rules: [
            "Solo or Teams of 2.",
            "Bring your own weapons (laptops).",
            "No DDoS or destructive attacks on the server."
        ],
        prizes: "1st: 5000 Gold Dragons",
        contact: "Jaqen H'ghar: 9876543214",
        img: "assets/GreyJoy - CTF.png"
    },
    {
        id: "shark_tank",
        title: "Shark Tank",
        theme: "Tywin Lannister / Iron Bank",
        tagline: "Project expo with custom gold/silver coin investments via QR.",
        desc: "Pitch your tech project to the masters of the Iron Bank. Secure investments from attendees using custom QR coins.",
        rules: [
            "Team of up to 4.",
            "Working prototype required.",
            "Pitch must be under 5 minutes."
        ],
        prizes: "Most Invested: 10000 Gold Dragons",
        contact: "Kevan Lannister: 9876543215",
        img: "assets/Lanyster - Shark tank.png"
    },
    {
        id: "ai_prompt_battle",
        title: "AI Prompt Battle",
        theme: "Bran Stark / Three-Eyed Raven",
        tagline: "Look at an image once, then write the prompt to recreate it.",
        desc: "Harness the power of sight. View an AI-generated image for 10 seconds, then craft the exact prompt to recreate it.",
        rules: [
            "Individual participation.",
            "No internet browsing during prompt writing.",
            "Closest match wins."
        ],
        prizes: "1st: 2000 Gold Dragons",
        contact: "Meera Reed: 9876543216",
        img: "assets/Martell - AI promt battle.png"
    },
    {
        id: "down_side_up",
        title: "Down Side UP",
        theme: "Petyr Baelish",
        tagline: "Technical questions, but you must provide the WRONG answers only.",
        desc: "Deceive and confuse. Answer technical questions with completely wrong but convincing answers.",
        rules: [
            "Pairs only.",
            "Hesitation leads to elimination.",
            "Right answers will get you disqualified."
        ],
        prizes: "1st: 2000 Gold Dragons",
        contact: "Sansa Stark: 9876543217",
        img: "assets/Giantsbane – Down Side UP.png"
    },
    {
        id: "techdumb_pictionary",
        title: "TechDumb Pictionary",
        theme: "Jon Snow",
        tagline: "Rapid-fire picture connection to guess technical words.",
        desc: "You know nothing! Guess the technical term by connecting completely unrelated, dumb pictures.",
        rules: [
            "Teams of 2.",
            "One member guesses, other cannot speak.",
            "Time based scoring."
        ],
        prizes: "1st: 2000 Gold Dragons",
        contact: "Samwell: 9876543218",
        img: "assets/Tully – TechDumb Pictionary.png"
    },
    {
        id: "binary_charades",
        title: "Binary Charades",
        theme: "Hodor",
        tagline: "Act out technical terms without speaking. Hold the door!",
        desc: "No words allowed. Only actions. Act out complex technical architectures and terms.",
        rules: [
            "Teams of 2.",
            "No speaking, no pointing at objects.",
            "Guessing must be exact."
        ],
        prizes: "1st: 2000 Gold Dragons",
        contact: "Bran: 9876543219",
        img: "assets/Stark - Binary Charades.png"
    }
];

// DOM Elements
const splashScreen = document.getElementById('splash-screen');
const eventsGrid = document.getElementById('events-grid');
const eventOverlay = document.getElementById('event-overlay');
const closeOverlayBtn = document.getElementById('close-overlay');
const detailsView = document.getElementById('event-details-view');
const formView = document.getElementById('registration-form-view');
const registerBtn = document.getElementById('register-btn');
const backToDetailsBtn = document.getElementById('back-to-details');
const registrationForm = document.getElementById('registration-form');
let activeCard = null;

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
    
    // Initialize cards
    renderCards();
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

// Open Overlay with FLIP-like feel / GSAP
function openEventOverlay(event, card) {
    activeCard = card;
    
    // Populate details
    document.getElementById('detail-title').innerText = event.title;
    document.getElementById('detail-theme').innerText = `Theme: ${event.theme}`;
    document.getElementById('detail-desc').innerText = event.desc;
    document.getElementById('detail-rules').innerHTML = event.rules.map(r => `<li>${r}</li>`).join('');
    document.getElementById('detail-prizes').innerText = event.prizes;
    document.getElementById('detail-contact').innerText = event.contact;
    
    // Populate form data
    document.getElementById('form-event-name').innerText = event.title;
    document.getElementById('form-event-id').value = event.id;
    
    // Reset views
    detailsView.classList.remove('hidden');
    detailsView.classList.add('view-active');
    formView.classList.add('hidden');
    formView.classList.remove('view-active');
    document.getElementById('form-message').innerText = "";
    registrationForm.reset();
    
    // Show overlay
    eventOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Animate content in
    gsap.fromTo('.overlay-content', 
        { scale: 0.8, opacity: 0, y: 50 }, 
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.5)" }
    );
}

// Close Overlay
closeOverlayBtn.addEventListener('click', () => {
    gsap.to('.overlay-content', { 
        scale: 0.9, 
        opacity: 0, 
        y: 30,
        duration: 0.3, 
        onComplete: () => {
            eventOverlay.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
});

// View Switching inside Overlay
registerBtn.addEventListener('click', () => {
    // Crossfade to form
    gsap.to(detailsView, {
        opacity: 0, y: -20, duration: 0.3, onComplete: () => {
            detailsView.classList.remove('view-active');
            detailsView.classList.add('hidden');
            
            formView.classList.remove('hidden');
            formView.classList.add('view-active');
            
            gsap.fromTo(formView, 
                { opacity: 0, y: 20 }, 
                { opacity: 1, y: 0, duration: 0.4 }
            );
        }
    });
});

backToDetailsBtn.addEventListener('click', () => {
    // Crossfade back to details
    gsap.to(formView, {
        opacity: 0, y: 20, duration: 0.3, onComplete: () => {
            formView.classList.remove('view-active');
            formView.classList.add('hidden');
            
            detailsView.classList.remove('hidden');
            detailsView.classList.add('view-active');
            
            gsap.fromTo(detailsView, 
                { opacity: 0, y: -20 }, 
                { opacity: 1, y: 0, duration: 0.4 }
            );
        }
    });
});

// Form Submission (Fetch API to Google Apps Script)
// Note: REPLACE THIS URL WITH YOUR ACTUAL DEPLOYED GOOGLE APPS SCRIPT WEB APP URL
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyfjubLQDtMULrnEMOyRNig85SOJYWu6ZFl56clbjE2br-XEce-SRSUZmMyfu9vOhyB/exec"; 

registrationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = registrationForm.querySelector('.submit-btn');
    const msgDiv = document.getElementById('form-message');
    
    submitBtn.innerText = "Sending Ravens...";
    submitBtn.disabled = true;
    
    const formData = new FormData(registrationForm);
    const data = Object.fromEntries(formData.entries());
    
    try {
        // Using no-cors completely bypasses browser CORS restrictions, which is essential when testing from file:/// 
        await fetch(WEB_APP_URL, {
            method: 'POST',
            mode: 'no-cors', // Critical for local testing
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(data)
        });
        
        // With no-cors, the response is opaque, meaning we can't read the JSON result.
        // However, if fetch didn't throw a network error, the request was successfully sent.
        msgDiv.innerHTML = `<span style="color: #27ae60;">The Maesters have recorded your entry!</span>`;
        registrationForm.reset();
        
        setTimeout(() => {
            closeOverlayBtn.click();
        }, 2000);
        
    } catch (error) {
        console.error("Submission failed:", error);
        msgDiv.innerHTML = `<span style="color: #e74c3c;">A raven was intercepted (Network Error). Check your connection.</span>`;
    } finally {
        submitBtn.innerText = "Submit Pledge";
        submitBtn.disabled = false;
    }
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
