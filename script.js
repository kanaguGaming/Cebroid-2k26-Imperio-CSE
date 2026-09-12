// Register GSAP Flip plugin
gsap.registerPlugin(Flip);

// Event Data - Mapped to GoT themes as requested
const eventsData = [
    {
        id: "paper_presentation",
        title: "Paper Presentation",
        theme: "The Highgarden Summit",
        tier: "Tier 1",
        tagline: "A classic presentation of knowledge. Updates tracked by the Maesters.",
        desc: "Present your research papers to the esteemed Archmaesters. Originality and depth of knowledge will decide your fate in the Citadel.",
        rules: [
            "Team must contain minimum 1 member to maximum 4 team members.",
            "10 minutes for presentation, 5 minutes for Q&A.",
            "Plagiarism leads to immediate disqualification.",
            "Each team member must contribute the presentation.",
            "Juries decision will be final.",
            "Report 10-15 minute befor alloted time."
        ],
        teamSize: "Up to 4 members",
        prizes: "1st: \u20b91000",
        contact: "Barani Kumar",
        winner: "Santhos Anandhan & Team",
        runnerUp: "Vaishnavi & Team",
        img: "assets/Tyrell \u2013 Paper Presentation.png"
    },
    {
        id: "shark_tank",
        title: "Shark Tank",
        theme: "The Casterly Rock Pitch",
        tier: "Tier 1",
        tagline: "Project expo with custom gold/silver coin investments via QR.",
        desc: "Pitch your tech project to the masters of the Iron Bank. Secure investments from attendees using custom QR coins and win the Iron Throne of innovation.",
        rules: [
            "Team must contain minimum 1 member to maximum 4 team members.",
            "The project must be original and developed by the team.",
            "Each team must have a functional demonstration or working prototype of their project.",
            "Pitch must be under 5 minutes.",
            "Projects acn be based on Software, hardware, AI/ML, IoT, Applications,  Robotics ect.,",
            "Q&A session of 3 minutes follows each pitch.",
            "Juries decision will be final.",
            "Report 10-15 minute befor alloted time."
        ],
        teamSize: "Up to 4 members",
        prizes: "1st: \u20b91000",
        contact: "Thenmozhi",
        winner: "Srimathi & Team",
        runnerUp: "Santhosh & Team",
        img: "assets/Lanyster - Shark tank.png"
    },
    {
        id: "ctf",
        title: "CTF (Capture the Flag)",
        theme: "Paying the Iron Price",
        tier: "Tier 2",
        tagline: "Cybersecurity CTF. Find the hidden flags in images and files.",
        desc: "Infiltrate the systems and uncover the hidden secrets. Become no one and bypass the security to claim your flags.",
        rules: [
            "Attack only the challenge-provided URLs, files, IPs, and information; never target the CTF platform, scoreboard, hosting servers, or event website, and report any platform vulnerability to the organizers.",
            "Maximum 2 members per team; collaborate only within your registered team, do not share flags/hints/solutions outside it, and use only one account per participant\u2014violations or scoreboard manipulation may lead to disqualification.",
            "Do not disrupt the challenge environment or network; respect participants and organizers, with harassment, toxicity, abuse, teasing, or provoking prohibited.",
            "AI tools or automated assistants must not be used to directly solve challenges or generate solutions; investigative challenges must use non-AI browsers/search engines, while permitted online investigative tools, decoders, and articles may be used.",
            "Organizers may modify rules, adjust challenge points, or disqualify teams for cheating, malicious activity, or rule violations. All decisions made by the CTF organizers are final."
        ],
        teamSize: "Solo or 2 members",
        prizes: "1st: \u20b91000",
        contact: "Harish Kumar",
        winner: "Shalini",
        runnerUp: "Gopinath",
        img: "assets/GreyJoy - CTF.png"
    },
    {
        id: "debug_relay",
        title: "Debug Relay",
        theme: "The Storm's End Relay",
        tier: "Tier 2",
        tagline: "15 pairs. Take turns debugging code. 'I drink and I know things.'",
        desc: "A tag-team coding challenge. One member debugs while the other waits, then swap. Communication and quick thinking are your only allies.",
        rules: [
            "Exactly 2 members per team.",
            "Only one member codes at a time.",
            "Python, java, C programing languages.",
            "Using mobiles, AI tools, External answers may lead to disqualification.",
            "Swap every 2 minutes \u2014 no exceptions.",
            "No external references or internet allowed.",
            "Organizers may modify rules, adjust challenge points, or disqualify teams for cheating, malicious activity, or rule violations. All decisions made by the CTF organizers are final."
        ],
        teamSize: "Exactly 2 members",
        prizes: "1st: \u20b9500",
        contact: "Jaisriram",
        winner: "Ellamal & Aristo Paul",
        runnerUp: "[TBA]",
        img: "assets/barotheon - Debug Relay.png"
    },
    {
        id: "ui_design",
        title: "UI Design",
        theme: "The Mad King's Canvas",
        tier: "Tier 2",
        tagline: "Design a wild, creative, and completely frustrating UI. Chaos is a ladder.",
        desc: "Create the most diabolical, worst possible user experience. The more frustrated the tester, the higher your score. Embrace chaos.",
        rules: [
            "Open to individuals and teams of up to 2 members",
            "Participants may study the provided reference video, but the on-spot task will differ; all designs must be original with no copying or plagiarism.",
            "personal laptops are encouraged, while college systems may be used subject to availability and browser-only development.",
            "Each round may have specific restrictions announced by organizers; participants must complete and submit their work within the given time and stop when time expires.",
            "AI, external tools, pre-prepared projects/code, unauthorized resources, sharing of designs/code/solutions, or accessing another participant's system/files/account without permission are prohibited as per round-specific restrictions.",
            "Submit through the specified method before the deadline; rule violations or failure to follow coordinator instructions may lead to disqualification, and organizers/judges may modify or enforce rules with their decision being final."
        ],
        teamSize: "Individual",
        prizes: "1st: \u20b9500",
        contact: "Gowtham",
        winner: "Vaishnavi & Team",
        runnerUp: "Dinesh & Team",
        img: "assets/Targaryen - UI Design.png"
    },
    {
        id: "tech_quiz",
        title: "Tech Quiz",
        theme: "Trial by the Eyrie",
        tier: "Tier 2",
        tagline: "Kahoot-based technical quiz. Only the most informed survive.",
        desc: "Test your knowledge on the latest tech gossip and hard facts. The little birds have gathered questions from all realms of technology.",
        rules: [
            "Individual participation only.",
            "Laptop is mandatory for the event.",
            "Fastest correct answer gets more points.",
            "No smartphones or secondary devices allowed."
        ],
        teamSize: "Individual",
        prizes: "1st: \u20b91000",
        contact: "Harish Kumar",
        winner: "Thuyavan",
        runnerUp: "Krishna Khanth",
        img: "assets/Arryn – Tech Quiz.png"
    },
    {
        id: "ai_prompt_battle",
        title: "AI Prompt Battle",
        theme: "The Viper's Strike",
        tier: "Tier 3",
        tagline: "Look at an image once, then write the prompt to recreate it.",
        desc: "Harness the power of sight. View an AI-generated image for 10 seconds, then craft the exact prompt to recreate it. Precision is power.",
        rules: [
            "A reference image will be given at the start of each round.",
            "Participants must recreate the image using text prompts only.",
            "Image uploads or image-to-image tools are strictly not allowed.",
            "Participants must bring their own laptop.",
            "Any AI tools can be used for image generation.",
            "participants must submit the chat link used to generate the image at the end of each round."
        ],
        teamSize: "Individual",
        prizes: "1st: \u20b9500",
        contact: "Shalini",
        winner: "Sanjagi & Team",
        runnerUp: "Kabitha",
        img: "assets/Martell - AI promt battle.png"
    },
    {
        id: "techdumb_pictionary",
        title: "TechDumb Pictionary",
        theme: "The Riverrun Riddles",
        tier: "Tier 3",
        tagline: "Rapid-fire picture connection to guess technical words.",
        desc: "You know nothing! Guess the technical term by connecting completely unrelated, dumb pictures drawn by your teammate.",
        rules: [
            "Teams of 2 members.",
            "Images will be displayed on the screen.",
            "Both team members can discuss and identify the technical word.",
            "No external help or electronic devices are allowed.",
            "Answers must be given within the given time limit. "
        ],
        teamSize: "Exactly 2 members",
        prizes: "1st: \u20b9500",
        contact: "Ponvelan",
        winner: "Rakshithadevi & Team",
        runnerUp: "Morani & Team",
        img: "assets/Tully – TechDumb Pictionary.png"
    },
    {
        id: "down_side_up",
        title: "Down Side UP",
        theme: "Beyond the Wall Logic",
        tier: "Tier 3",
        tagline: "Technical questions, but you must provide the WRONG answers only.",
        desc: "Deceive and confuse. Answer technical questions with completely wrong but convincing answers. The more absurd yet believable, the better.",
        rules: [
            "Correct answer = disqualification, convincing false answer = points.",
            "Uses believable technical terms.",
            "Answers within given seconds confidently without hesitation. Each round carries an different time stamps.",
            "Avoids simply adding not to the correct answer.",
            "Answers must be tech-related \u2014 no random gibberish.",
            "Accept the Judge's decisions.No Arguments with Event Co-ordinators.No Arguments with Other Team members."
        ],
        teamSize: "Solo Participation",
        prizes: "1st: \u20b9500",
        contact: "Yogesh",
        winner: "Chandru & Team",
        runnerUp: "Diwakar & Team",
        img: "assets/Giantsbane – Down Side UP.png"
    },
    {
        id: "binary_charades",
        title: "Binary Charades",
        theme: "The Silent Wolf",
        tier: "Tier 3",
        tagline: "Act out technical terms without speaking. Hold the door!",
        desc: "No words allowed. Only actions. Act out complex technical architectures and terms while your partner decodes your silent performance.",
        rules: [
            "Exactly 2 participants per team allowed.",
            "A bowl contains several technical words, One participant randomly picks a word from the bowl.",
            "Act out the word using only gestures and body movements.",
            "The other participant must identify and guess the word.",
            "No talking, sounds, or verbal clues allowed.",
            "Points awarded for every correct guess within time."
        ],
        teamSize: "Exactly 2 members",
        prizes: "1st: \u20b9500",
        contact: "Sanjay",
        winner: "Sanjay & Team",
        runnerUp: "Shalini & Team",
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
    
    // Initialize cards and winners grid
    renderCards();
    renderWinnersGrid();
});

// Render Winners Grid
function renderWinnersGrid() {
    const grid = document.getElementById('winners-grid');
    if (!grid) return;
    grid.innerHTML = '';
    eventsData.forEach(event => {
        const card = document.createElement('div');
        card.className = 'winner-card';
        let tierClass = 'tier-1';
        if (event.tier === 'Tier 2') tierClass = 'tier-2';
        else if (event.tier === 'Tier 3') tierClass = 'tier-3';
        card.innerHTML = `
            <div class="winner-card-header">
                <div class="winner-event-badge ${tierClass}">${event.tier}</div>
                <h3 class="winner-event-title">${event.title}</h3>
            </div>
            <div class="winner-entry">
                <span class="winner-medal gold"><i class="fas fa-trophy"></i></span>
                <div class="winner-info">
                    <span class="winner-label">Winner</span>
                    <span class="winner-name">${event.winner}</span>
                </div>
            </div>
            <div class="winner-entry">
                <span class="winner-medal silver"><i class="fas fa-medal"></i></span>
                <div class="winner-info">
                    <span class="winner-label">Runner-Up</span>
                    <span class="winner-name">${event.runnerUp}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
    // Animate in
    gsap.from('.winner-card', {
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: null
    });
}

// Render Event Cards
function renderCards() {
    eventsData.forEach((event, index) => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.dataset.id = event.id;
        
        let tierClass = "tier-1";
        if (event.tier === "Tier 2") tierClass = "tier-2";
        else if (event.tier === "Tier 3") tierClass = "tier-3";
        
        card.innerHTML = `
            <img src="${event.img}" alt="${event.title}" class="card-bg">
            <div class="tier-badge ${tierClass}">${event.tier}</div>
            <div class="card-content">
                <div class="card-theme">${event.theme}</div>
                <h3 class="card-title">${event.title}</h3>
                <p class="card-tagline">${event.tagline}</p>
                <div class="more-details-btn">more details &rarr;</div>
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

    // ── Populate winners in popup ────────────────────────────────────────────────
    const winnersList = document.getElementById('popup-winners-list');
    if (winnersList) {
        winnersList.innerHTML = `
            <div class="popup-winner-row">
                <span class="winner-medal gold"><i class="fas fa-trophy"></i></span>
                <div class="winner-info">
                    <span class="winner-label">Winner</span>
                    <span class="winner-name">${event.winner}</span>
                </div>
            </div>
            <div class="popup-winner-row">
                <span class="winner-medal silver"><i class="fas fa-medal"></i></span>
                <div class="winner-info">
                    <span class="winner-label">Runner-Up</span>
                    <span class="winner-name">${event.runnerUp}</span>
                </div>
            </div>
        `;
    }

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

// Interactive Dragon Scale Background Parallax
const dragonBg = document.querySelector('.dragon-background');

// Mouse movement parallax
document.addEventListener('mousemove', (e) => {
    // Only apply if the overlay is hidden
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

    // Scroll-hint: hide when scrolled down, re-arm when back at top
    if (scrollY > 80) {
        hideScrollHint();
    } else {
        if (scrollHintShown) {
            scrollHintShown = false;
            resetScrollHintTimer();
        }
    }
});


// =====================================================================
// SCROLL-DOWN HINT — shows after 2 s of staying on #home
// =====================================================================
const scrollHint = document.getElementById('scroll-down-hint');
let scrollHintTimer = null;
let scrollHintShown = false;

function showScrollHint() {
    if (scrollHintShown) return;
    scrollHintShown = true;
    scrollHint.classList.add('visible');
}

function hideScrollHint() {
    scrollHint.classList.remove('visible');
    clearTimeout(scrollHintTimer);
}

function resetScrollHintTimer() {
    clearTimeout(scrollHintTimer);
    if (window.scrollY <= 80) {
        scrollHintTimer = setTimeout(showScrollHint, 2000);
    }
}

// Start the timer after splash ends
(function waitForSplashEnd() {
    const check = setInterval(() => {
        if (splashScreen.style.display === 'none') {
            clearInterval(check);
            resetScrollHintTimer();
        }
    }, 200);
})();

// Dismiss on click — scroll to events
scrollHint.addEventListener('click', () => {
    hideScrollHint();
    window.scrollTo({ top: document.getElementById('events').offsetTop, behavior: 'smooth' });
});

/* =============================================================
   POST-EVENT ELAPSED TIMER
   Counts UP from 4 PM IST on 09 Sep 2026 (event completion)
   Shows Years/Months dynamically once they become non-zero
   ============================================================= */
(function initElapsedTimer() {
    // Event completed at 4:00 PM IST on 09 Sep 2026
    const EVENT_END = new Date('2026-09-09T16:00:00+05:30');

    function pad(n) { return String(Math.max(0, n)).padStart(2, '0'); }

    function setNum(el, val) {
        const v = pad(val);
        if (el && el.textContent !== v) {
            el.classList.remove('flip-anim');
            void el.offsetWidth;
            el.textContent = v;
            el.classList.add('flip-anim');
        }
    }

    function getElapsed() {
        const now = Date.now();
        const diff = now - EVENT_END.getTime();
        if (diff <= 0) {
            return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const totalSeconds = Math.floor(diff / 1000);

        // Calculate years and months from the calendar difference
        const endDate = new Date(EVENT_END);
        const nowDate = new Date(now);

        let years  = nowDate.getFullYear() - endDate.getFullYear();
        let months = nowDate.getMonth()   - endDate.getMonth();

        if (months < 0) { years--; months += 12; }

        // Remaining days after stripping full months
        const pivot = new Date(endDate);
        pivot.setFullYear(pivot.getFullYear() + years);
        pivot.setMonth(pivot.getMonth() + months);
        const remainingMs = now - pivot.getTime();
        const remainingSec = Math.floor(remainingMs / 1000);

        const days    = Math.floor(remainingSec / 86400);
        const hours   = Math.floor((remainingSec % 86400) / 3600);
        const minutes = Math.floor((remainingSec % 3600) / 60);
        const seconds = remainingSec % 60;

        return { years, months, days, hours, minutes, seconds };
    }

    const evtYr  = document.getElementById('evt-yr');
    const evtMo  = document.getElementById('evt-mo');
    const evtD   = document.getElementById('evt-d');
    const evtH   = document.getElementById('evt-h');
    const evtM   = document.getElementById('evt-m');
    const evtS   = document.getElementById('evt-s');
    const yrUnit  = document.getElementById('evt-years-unit');
    const moUnit  = document.getElementById('evt-months-unit');
    const sepYrMo = document.getElementById('sep-yr-mo');
    const sepMoD  = document.getElementById('sep-mo-d');

    function tick() {
        const e = getElapsed();

        // Show years once >= 1
        if (e.years > 0) {
            yrUnit.style.display  = '';
            sepYrMo.style.display = '';
        } else {
            yrUnit.style.display  = 'none';
            sepYrMo.style.display = 'none';
        }

        // Show months once >= 1 OR if years are already shown
        if (e.months > 0 || e.years > 0) {
            moUnit.style.display = '';
            sepMoD.style.display = '';
        } else {
            moUnit.style.display = 'none';
            sepMoD.style.display = 'none';
        }

        setNum(evtYr, e.years);
        setNum(evtMo, e.months);
        setNum(evtD,  e.days);
        setNum(evtH,  e.hours);
        setNum(evtM,  e.minutes);
        setNum(evtS,  e.seconds);
    }

    tick();
    setInterval(tick, 1000);
})();
