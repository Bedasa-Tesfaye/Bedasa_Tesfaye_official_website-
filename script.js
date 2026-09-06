document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;
    const header = document.getElementById("header");
    const navLinks = document.getElementById("nav-links");
    const hamburger = document.getElementById("hamburger");
    const themeToggle = document.getElementById("theme-toggle");
    const scrollTop = document.getElementById("scroll-top");
    const year = document.getElementById("year");

    // Loading screen
    window.addEventListener("load", () => {
        setTimeout(() => document.getElementById("loader")?.classList.add("hidden"), 350);
    });

    // Mobile navigation
    hamburger?.addEventListener("click", () => {
        const open = navLinks.classList.toggle("open");
        hamburger.classList.toggle("active", open);
        hamburger.setAttribute("aria-expanded", String(open));
    });
    navLinks?.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            hamburger?.classList.remove("active");
            hamburger?.setAttribute("aria-expanded", "false");
        });
    });

    // Theme
    const savedTheme = localStorage.getItem("michu-theme") || "dark";
    html.dataset.theme = savedTheme;
    updateThemeIcon(savedTheme);
    themeToggle?.addEventListener("click", () => {
        const next = html.dataset.theme === "dark" ? "light" : "dark";
        html.dataset.theme = next;
        localStorage.setItem("michu-theme", next);
        updateThemeIcon(next);
    });
    function updateThemeIcon(theme){
        const icon = themeToggle?.querySelector("i");
        if (icon) icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }

    // Header / scroll-to-top
    window.addEventListener("scroll", () => {
        header?.classList.toggle("scrolled", window.scrollY > 20);
        scrollTop?.classList.toggle("visible", window.scrollY > 500);
    }, {passive:true});
    scrollTop?.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));

    // Active navigation
    const sections = [...document.querySelectorAll("main section[id]")];
    const navItems = [...document.querySelectorAll(".nav-links a")];
    const navObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navItems.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
            }
        });
    }, {rootMargin:"-35% 0px -55% 0px", threshold:0});
    sections.forEach(s => navObserver.observe(s));

    // Reveal animations
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }
        });
    }, {threshold:.08});
    document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

    // Solution tabs
    const solutionData = {
        security:{
            icon:"fas fa-shield-halved", label:"SECURITY SYSTEMS", title:"Protect what matters most.",
            text:"Design and install practical surveillance and access solutions that give you visibility, control and confidence.",
            points:["CCTV installation","Remote monitoring","Access control","System maintenance"]
        },
        network:{
            icon:"fas fa-network-wired", label:"NETWORK INFRASTRUCTURE", title:"Keep your business connected.",
            text:"Build stable wired and wireless infrastructure for offices, shops, organizations and growing teams.",
            points:["LAN installation","Router & switch setup","Wi-Fi optimization","Network troubleshooting"]
        },
        digital:{
            icon:"fas fa-code", label:"DIGITAL SOLUTIONS", title:"Turn ideas into working software.",
            text:"Create professional websites and custom web-based systems that improve your digital presence and operations.",
            points:["Business websites","Web applications","Management systems","Custom software"]
        },
        support:{
            icon:"fas fa-headset", label:"IT OPERATIONS", title:"Keep technology working.",
            text:"Get practical technical support, maintenance and troubleshooting for computers and business IT environments.",
            points:["Computer setup","Preventive maintenance","Troubleshooting","Technical support"]
        }
    };
    const icon = document.getElementById("solution-icon");
    const label = document.getElementById("solution-label");
    const title = document.getElementById("solution-title");
    const text = document.getElementById("solution-text");
    const points = document.getElementById("solution-points");

    document.querySelectorAll(".solution-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".solution-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            const d = solutionData[tab.dataset.solution];
            icon.className = d.icon;
            label.textContent = d.label;
            title.textContent = d.title;
            text.textContent = d.text;
            points.innerHTML = d.points.map(p => `<span><i class="fas fa-check"></i> ${p}</span>`).join("");
        });
    });

    // Project filters
    const projectCards = [...document.querySelectorAll(".project-card")];
    document.querySelectorAll(".project-filter").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".project-filter").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.dataset.filter;
            projectCards.forEach(card => {
                const show = filter === "all" || card.dataset.category.split(" ").includes(filter);
                card.classList.toggle("hidden", !show);
            });
        });
    });

    // Contact form: opens the user's email client with a real prefilled request.
    const form = document.getElementById("contact-form");
    form?.addEventListener("submit", e => {
        e.preventDefault();
        const data = new FormData(form);
        const name = data.get("name");
        const phone = data.get("phone");
        const service = data.get("service");
        const message = data.get("message");
        const subject = encodeURIComponent(`Service Request — ${service}`);
        const body = encodeURIComponent(
            `Hello Michu Technology Solutions,\n\n` +
            `Name: ${name}\nPhone: ${phone}\nService: ${service}\n\n` +
            `Project details:\n${message}\n\nThank you.`
        );
        window.location.href = `mailto:bahilutesfaye719@gmail.com?subject=${subject}&body=${body}`;
        const status = document.getElementById("form-status");
        if(status) status.textContent = "Your email client is opening with the request prepared.";
    });

    if(year) year.textContent = new Date().getFullYear();
});
