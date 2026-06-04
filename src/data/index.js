export const services = [
  { icon: "✦", title: "UI / UX Design", desc: "End-to-end interface design grounded in research, usability principles, and aesthetic excellence." },
  { icon: "◈", title: "Web Design", desc: "Responsive, visually striking web experiences that convert visitors into customers." },
  { icon: "⬡", title: "Landing Pages", desc: "High-conversion landing pages with compelling narrative flow and micro-interactions." },
  { icon: "◉", title: "App Design", desc: "Intuitive mobile and desktop applications with seamless user journeys and polished UI." },
];

export const experiences = [
  {
    company: "SYZY Technologies, Salem",
    role: "UI/UX Designer Intern",
    period: "Present",
    desc: "Assisting in end-to-end interface design, creating wireframes and high-fidelity mockups, and collaborating with developers to implement modern, user-friendly solutions.",
  },
  {
    company: "Your University / College",
    role: "Design Student",
    period: "2020 — 2024",
    desc: "Studied design principles, completed multiple academic case studies, and honed skills in Figma, User Research, and Interface Architecture.",
  }
];

export const whyCards = [
  { num: "100%", label: "User-Centric Focus", desc: "Every design decision I make is backed by a desire to solve real user problems." },
  { num: "Fast", label: "Learner & Adapter", desc: "I quickly pick up new tools, trends, and technologies to stay ahead of the curve." },
  { num: "Fresh", label: "Perspective", desc: "Bringing modern, innovative ideas to the table without being constrained by old habits." },
];

export const projects = [
  {
    id: "lms",
    thumbClass: "thumb-lms",
    name: "LMS",
    title: "Learning Management System - Full Product Design",
    desc: "A complete LMS web app covering login, dashboard, course management, and core learning journeys.",
    tags: ["Product Design", "UX Research"],
    year: "2026",
    color: "#FF642D",
    bgGradient: "linear-gradient(135deg, #FFF8F2, #FFD3BD)",
    overview: "Designed a complete learning management system for a real client through Syzy Technologies, shaping the experience from early user flows and information architecture through high-fidelity screens and an interactive prototype.",
    role: "UI/UX Design Intern",
    duration: "Client project, 2026",
    tools: ["Figma", "UX Research", "Prototyping"],
    screenshots: [
      { src: "/images/lms-instructor-course.png", alt: "Instructor course page with add new course modal", caption: "Instructor course page" },
      { src: "/images/lms-certification.png", alt: "Student certification achievement page", caption: "Student certification page" },
      { src: "/images/lms-course-video.png", alt: "Student course video materials page", caption: "Student course video page" },
      { src: "/images/lms-student-home.png", alt: "Student home page with course cards", caption: "Student home page" },
    ],
    challenge: "The product needed to support multiple learning workflows without feeling heavy or confusing. The key challenge was organizing login, dashboard, course management, and user journeys into a clear structure that could move smoothly into development.",
    process: [
      { step: "01", title: "Research & Flow Mapping", desc: "Applied UX research and design thinking to understand the main user journeys before moving into visual design." },
      { step: "02", title: "Information Architecture", desc: "Mapped the app structure across login, dashboard, course management, and core LMS flows." },
      { step: "03", title: "High-Fidelity Design", desc: "Designed polished screens in Figma with a focus on clarity, consistency, and scalable layouts." },
      { step: "04", title: "Prototype & Handoff", desc: "Delivered a fully interactive prototype prepared for development handoff." },
    ],
    outcomes: [
      { metric: "End-to-end", label: "Product flow designed" },
      { metric: "Client", label: "Real project via Syzy" },
      { metric: "Figma", label: "Interactive prototype" },
      { metric: "Ready", label: "Development handoff" },
    ],
  },
  {
    id: "flowflux-crm",
    thumbClass: "thumb-flowflux",
    name: "FLOWFLUX",
    title: "FlowFlux CRM - Full Web Application UI Redesign",
    desc: "A full-featured CRM redesign focused on usability, visual consistency, and reusable UI patterns.",
    tags: ["CRM", "UI Redesign"],
    year: "2026",
    color: "#2850C8",
    bgGradient: "linear-gradient(135deg, #F5F8FF, #DCE7FF)",
    overview: "Led the complete UI redesign of FlowFlux, a full-featured CRM web application, improving the entire interface for stronger usability, consistency, and development-ready implementation.",
    role: "UI/UX Design Intern",
    duration: "2026",
    tools: ["Figma", "Figma Make", "Auto Layout"],
    screenshots: [
      { src: "/images/flowflux-before-customer-profile.png", alt: "Before UI customer profile form", caption: "Before - customer profile form" },
      { src: "/images/flowflux-after-supplier-form.png", alt: "Redesigned CRM supplier form", caption: "After - supplier form redesign" },
      { src: "/images/flowflux-dashboard.png", alt: "FlowFlux CRM dashboard redesign", caption: "Dashboard redesign" },
    ],
    challenge: "The CRM needed a cleaner, more cohesive interface across many screens and journeys. The redesign had to improve usability while keeping the system scalable for future modules.",
    process: [
      { step: "01", title: "Interface Audit", desc: "Reviewed the existing CRM experience to identify inconsistent UI patterns and usability friction." },
      { step: "02", title: "Screen Redesign", desc: "Redesigned core screens and user journeys in Figma with improved hierarchy and visual clarity." },
      { step: "03", title: "Component System", desc: "Used Auto Layout and reusable components to support a cohesive, scalable design system." },
      { step: "04", title: "Code Handoff", desc: "Used Figma Make to convert redesigned screens into production-ready code for faster developer handoff." },
    ],
    outcomes: [
      { metric: "Full app", label: "CRM UI redesigned" },
      { metric: "Reusable", label: "Component-led system" },
      { metric: "Figma Make", label: "Code-ready screens" },
      { metric: "Improved", label: "Visual consistency" },
    ],
  },
  {
    id: "flowflux-website",
    thumbClass: "thumb-flowflux-site",
    name: "ONBOARD",
    title: "FlowFlux CRM - Client Onboarding Product Website",
    desc: "A responsive product website designed from scratch and developed using Figma Make with client onboarding, SEO, and production-ready handoff in mind.",
    tags: ["Product Website", "SEO", "Responsive UI"],
    year: "2026",
    color: "#7C3AED",
    bgGradient: "linear-gradient(135deg, #FAF5FF, #E9D5FF)",
    overview: "Designed a product website from scratch for FlowFlux CRM to support client onboarding needs identified during a client meeting, then developed the website using Figma Make. The work covered concept, user flows, responsive layouts, high-fidelity prototype design, and SEO-conscious page structure.",
    role: "UI/UX Design Intern",
    duration: "2026",
    tools: ["Figma", "Figma Make", "Responsive Design", "SEO"],
    liveUrl: "https://dev.flowflux.in/",
    challenge: "Clients needed a clearer onboarding touchpoint that explained the product, supported SEO visibility, and guided them into the CRM experience. The design had to be responsive, polished, and easy to hand off.",
    process: [
      { step: "01", title: "Client Need Discovery", desc: "Translated onboarding requirements from a client meeting into a focused website experience." },
      { step: "02", title: "User Flow Planning", desc: "Planned website flow and page structure around product clarity and client onboarding." },
      { step: "03", title: "Responsive & SEO Structure", desc: "Created desktop and mobile layouts with clear content hierarchy, scannable sections, and SEO-friendly page structure." },
      { step: "04", title: "Figma Make Development", desc: "Used Figma Make to develop the website from the approved designs and prepare production-ready output for seamless handoff." },
    ],
    outcomes: [
      { metric: "From scratch", label: "Website concept designed" },
      { metric: "SEO", label: "Search-ready page structure" },
      { metric: "Client-led", label: "Onboarding need solved" },
      { metric: "Figma Make", label: "Website developed" },
    ],
  },
  {
    id: "hotel-website",
    thumbClass: "thumb-hotel",
    name: "VEKASA",
    title: "Hotel Grand Vekasa - Website Design",
    desc: "A responsive hotel website for Hotel Grand Vekasa, designed with SEO and developed using Figma Make for production-ready output.",
    tags: ["Hotel Website", "SEO", "Builder.io"],
    year: "2026",
    color: "#B45309",
    bgGradient: "linear-gradient(135deg, #FFF7ED, #FED7AA)",
    overview: "Designed the Hotel Grand Vekasa website from scratch, then developed it using Figma Make while adding SEO-conscious structure for better discoverability.",
    role: "UI/UX Design Intern",
    duration: "2026",
    tools: ["Figma", "Figma Make", "Builder.io", "SEO"],
    comingSoonLabel: "Live Site Coming Soon",
    challenge: "Hotel Grand Vekasa needed a polished, responsive website experience that could present the hotel clearly, support search visibility, and move quickly from design to implementation.",
    process: [
      { step: "01", title: "Concept Direction", desc: "Defined the visual and structural direction for the Hotel Grand Vekasa website from the ground up." },
      { step: "02", title: "High-Fidelity UI & SEO", desc: "Designed refined website screens in Figma with attention to layout, content hierarchy, responsiveness, and SEO-friendly sections." },
      { step: "03", title: "Figma Make Development", desc: "Used Figma Make to develop the approved website design into production-ready output." },
      { step: "04", title: "Responsive Polish", desc: "Ensured layouts remained usable and visually consistent across desktop and mobile devices." },
    ],
    outcomes: [
      { metric: "0-1", label: "Website designed from scratch" },
      { metric: "SEO", label: "Search-friendly content structure" },
      { metric: "Figma Make", label: "Website developed" },
      { metric: "Faster", label: "Reduced handoff time" },
    ],
  },
];
export const testimonials = [
  { initials: "FS", name: "Fawzi Sayed", role: "UI/UX Designer, Dubai", text: "Rasikaa transformed our product's UX from the ground up. Her ability to empathize with users while keeping business goals front of mind is truly rare." },
  { initials: "AR", name: "Aisha Rahman", role: "Product Manager, Bangalore", text: "Working with Rasikaa was seamless. She delivered a polished, conversion-focused design ahead of schedule and was incredibly communicative throughout." },
  { initials: "KM", name: "Kiran Mehta", role: "CTO, Mumbai Startup", text: "Rasikaa's design system work saved our team hundreds of hours. Her attention to detail, documentation quality, and creative thinking are unmatched." },
];

export const blogs = [
  { thumbBg: "linear-gradient(135deg,#FFF8F2,#FFD3BD)", emoji: "🎨", tag: "UI / UX Design", date: "10 Nov, 2023", title: "Design Unraveled: Behind the Scenes of UI/UX Magic", desc: "A deep dive into my process — from fuzzy briefs to polished, ship-ready interfaces." },
  { thumbBg: "linear-gradient(135deg,#FFF8F2,#FFD3BD)", emoji: "📊", tag: "App Design", date: "09 Oct, 2023", title: "Sugee: Reinventing Loan Management for Rural India", desc: "How thoughtful UX research reshaped a complex financial product for underserved communities." },
  { thumbBg: "linear-gradient(135deg,#FFF8F2,#FFD3BD)", emoji: "🎬", tag: "App Design", date: "13 Aug, 2023", title: "Cinetrade: An Innovative Way to Invest in Digital Media", desc: "Designing for a brand new paradigm — where creativity meets investment strategy." },
];

export const marqueeItems = [
  "UI/UX Design", "User Research", "Wireframing", "App Design",
  "Dashboard Design", "Landing Pages", "Prototyping", "Glassmorphism",
];
