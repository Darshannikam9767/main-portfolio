// index.js

export const servicesData = [
  {
    title: "Full-Stack Web Development",
    description:
      "I build complete web applications from database to browser — REST APIs in Flask and Java, clean relational schemas in PostgreSQL, and responsive React interfaces that tie it all together.",
    items: [
      {
        title: "Backend Engineering",
        description: "(Flask & Java Servlets, REST API Design, MVC Architecture)",
      },
      {
        title: "Frontend Development",
        description: "(React, JavaScript, Responsive UI with Tailwind CSS)",
      },
      {
        title: "Database Design",
        description: "(PostgreSQL, SQLAlchemy ORM, Normalized Schema Design)",
      },
    ],
  },
  {
    title: "Secure Authentication & Access Control",
    description:
      "Login systems are where trust is won or lost. I implement hashed password storage, OTP-based recovery flows, and role-based session access so only the right people see the right data.",
    items: [
      {
        title: "Password Security",
        description: "(Werkzeug Hashing, OTP-Based Reset Flows)",
      },
      {
        title: "Role-Based Access",
        description: "(HttpSession Management, Admin/Student Permissions)",
      },
      {
        title: "Injection Prevention",
        description: "(Parameterized Queries, JDBC Best Practices)",
      },
    ],
  },
  {
    title: "AI & Intelligent Features",
    description:
      "Not every problem needs a hardcoded answer. I integrate NLP techniques like TF-IDF and cosine similarity so features understand user intent instead of just matching keywords.",
    items: [
      {
        title: "NLP-Based Matching",
        description: "(TF-IDF Vectorization, Cosine Similarity with scikit-learn)",
      },
      {
        title: "Smart Automation",
        description: "(APScheduler, Automated Logging & Reporting)",
      },
      {
        title: "Data Processing",
        description: "(Pandas & NumPy for Data Handling)",
      },
    ],
  },
  {
    title: "Admin Dashboards & CRUD Systems",
    description:
      "Most real-world apps live and die by their admin tools. I build multi-module dashboards with real-time CRUD, clean REST endpoints, and workflows that make managing data painless.",
    items: [
      {
        title: "Dashboard Development",
        description: "(Real-Time CRUD via Fetch API & REST)",
      },
      {
        title: "Multi-Module Systems",
        description: "(Role-Based Portals, Session-Driven Workflows)",
      },
      {
        title: "API Integration",
        description: "(RESTful Endpoints, Postman-Tested Reliability)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Campus Buddy — AI-Based College Chatbot",
    description:
      "An AI-powered chatbot for college FAQs, built on a Flask REST API with 12+ endpoints. Uses TF-IDF and cosine similarity for intent matching, with unmatched queries auto-logged for continuous improvement.",
    href: "", // TODO: add live demo or GitHub repo link
    image: "/assets/projects/mobile-accessories-store.jpg", // TODO: swap for a real Campus Buddy screenshot
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Flask" },
      { id: 2, name: "PostgreSQL" },
      { id: 3, name: "scikit-learn" },
      { id: 4, name: "Supabase" },
      { id: 5, name: "JavaScript" },
    ],
  },
  {
    id: 2,
    name: "Admin Dashboard — Chatbot Management Interface",
    description:
      "A responsive single-page admin panel with full CRUD for FAQs, announcements, teachers, and departments — all powered by the Fetch API with real-time table updates.",
    href: "", // TODO: add live demo or GitHub repo link
    image: "/assets/projects/electronics-store.jpg", // TODO: swap for a real Admin Dashboard screenshot
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "Fetch API" },
      { id: 5, name: "REST" },
    ],
  },
  {
    id: 3,
    name: "FutureTech ERP — College Management System",
    description:
      "A role-based college management system built with 29 Java Servlet classes across 5 modules: student registration, course management, fee tracking, assignment review, and admin settings.",
    href: "", // TODO: add live demo or GitHub repo link
    image: "/assets/projects/apple-tech-store.jpg", // TODO: swap for a real FutureTech ERP screenshot
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Java" },
      { id: 2, name: "Jakarta EE" },
      { id: 3, name: "Servlets" },
      { id: 4, name: "JDBC" },
    ],
  },
];

// YouTube removed — not on your resume and previously pointed to the
// template author's account. Add it back in this same shape if you want it.
export const socials = [
  { name: "GitHub", href: "https://github.com/Darshannikam9767" },
  { name: "LinkedIn", href: "https://linkedin.com/in/darshannikam" },
  { name: "Instagram", href: "" }, // TODO: add your real Instagram URL
];