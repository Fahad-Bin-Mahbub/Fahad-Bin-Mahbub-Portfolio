export type SocialLink = {
  label: string;
  href: string;
  hint?: string;
};

export const person = {
  name: "Fahad Bin Mahbub",
  headline: "Full‑Stack Developer · HCI / Usable Security Researcher",
  location: "Bangladesh",
  email: "fahadbm3234@gmail.com",
  // Optional: add your phone or remove it if you don't want it public
  phone: "+880 1878422339",
  social: [
    {
      label: "GitHub",
      href: "https://github.com/Fahad-Bin-Mahbub",
      hint: "Update if needed",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fahad-bin-mahbub/",
      hint: "Update if needed",
    },
  ] satisfies SocialLink[],
};

export const highlights = [
  {
    k: "B.Sc. CSE",
    v: "CGPA 3.76/4.00",
    sub: "Shahjalal University of Science and Technology",
  },
  {
    k: "Usable Security",
    v: "Email encryption adoption study",
    sub: "Mixed methods · usability testing · trust & workload",
  },
  {
    k: "IELTS Academic",
    v: "Overall 7.5",
    sub: "L 8.5 · R 8.5 · W 7.0 · S 6.0",
  },
  {
    k: "Problem Solving",
    v: "288 Codeforces",
    sub: "120 VJudge · 29 LeetCode",
  },
] as const;

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
  images?: string[];
};

export type Supervisor = {
  name: string;
  title: string;
  institution: string;
};

export type Research = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
  supervisors?: Supervisor[];
};

export const projects: Project[] = [
  {
    title: "NVIT Institute Portal & LMS",
    subtitle: "Full‑stack web platform (TypeScript, React, Node, MongoDB)",
    description:
      "Built an instructor + talent portal for matching, requests, and online classes. Implemented a custom attendance system and integrated Zoom + Google Meet session management.",
    tags: ["TypeScript", "React", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
    links: [{ label: "Demo / link", href: "#" }],
    featured: true,
  },
  {
    title: "Paymoor Digital Wallet",
    subtitle: "Mobile wallet (React Native)",
    description:
      "Developed frontend flows and API integrations for registration, login, and KYC verification. Enabled add-funds, cash-out via agents, agent discovery, and merchant QR payments.",
    tags: ["React Native", "JavaScript", "APIs"],
    links: [{ label: "Case study", href: "#" }],
    featured: true,
  },
  {
    title: "PaperTrack",
    subtitle: "Secure exam paper tracking platform",
    description:
      "Implemented backend with JWT sessions, password hashing, Google sign-in, role assignments, invitations, exam creation, and paper management with real-time notifications.",
    tags: ["Node.js", "MongoDB", "JWT", "Security"],
    links: [{ label: "Repository", href: "#" }],
    featured: true,
  },
  {
    title: "NeonateCare",
    subtitle: "IoT neonate monitoring demo",
    description:
      "Built a prototype system using DHT11 sensor and ESP8266 to monitor temperature/humidity and control a fan/cradle. Integrated ThingSpeak for cloud communication.",
    tags: ["IoT", "Arduino", "ESP8266", "ThingSpeak"],
    links: [{ label: "Write‑up", href: "#" }],
    featured: false,
  },
  {
    title: "Book‑E Database",
    subtitle: "Full‑stack book exchange marketplace",
    description:
      "Built a React + Node + MySQL platform to sell, lend, buy, or borrow books. Added profiles, categories, search/filter, and cash-on-delivery transaction flow.",
    tags: ["React", "Node.js", "MySQL"],
    links: [{ label: "Repository", href: "#" }],
    featured: false,
  },
  {
    title: "Bachelors — Far From Home",
    subtitle: "Household finance APIs (Spring Boot)",
    description:
      "Designed RESTful APIs for group expense tracking with JWT auth, BCrypt, role-based access, mess-group modules, and monthly summaries using MongoDB.",
    tags: ["Java", "Spring Boot", "JWT", "MongoDB"],
    links: [{ label: "Repository", href: "#" }],
    featured: false,
  },
];

export const research: Research[] = [
  {
    title:
      "Exploring the Adoption of Email Encryption in Bangladesh: Awareness Levels, Challenges, and Usability Insights",
    subtitle: "Undergraduate Thesis · Mixed-methods · Prototype",
    description:
      "Conducted a mixed-methods study on the usability and adoption challenges of email encryption tools among Bangladeshi users. Collected and analyzed survey data alongside in-depth usability testing to evaluate performance, workload, and user trust. Compared multiple encryption solutions using statistical and thematic analysis, and proposed a prototype addressing key usability barriers. Findings revealed a critical gap between security awareness and adoption in Bangladesh, highlighting the importance of usability and trust alongside technical robustness in secure communication systems.",
    tags: ["Usable Security", "HCI", "Privacy", "Research"],
    links: [{ label: "Prototype", href: "#" }],
    supervisors: [
      {
        name: "Dr. Farida Chowdhury",
        title: "Professor, Dept. of CSE",
        institution: "BRAC University, Dhaka, Bangladesh",
      },
      {
        name: "Dr. Md Forhad Rabbi",
        title: "Professor, Dept. of CSE",
        institution: "Shahjalal University of Science and Technology, Sylhet, Bangladesh",
      },
    ],
  },
  {
    title:
      "Sentiment Analysis of Beauty Product Reviews in Bangladesh: A Comprehensive Study Using Transformer-Based Models",
    subtitle: "ICCIT 2024 · Conference Proceedings",
    description:
      "F. Bin Mahbub, M. H. Mim and M. S. Rahman, \"Sentiment Analysis of Beauty Product Reviews in Bangladesh: A Comprehensive Study Using Transformer-Based Models,\" 2024 27th International Conference on Computer and Information Technology (ICCIT), Cox's Bazar, Bangladesh, 2024, pp. 2712-2717.",
    tags: ["NLP", "Transformers", "Sentiment Analysis"],
    links: [
      { label: "DOI", href: "https://doi.org/10.1109/ICCIT64611.2024.11021928" },
    ],
    supervisors: [
      {
        name: "Dr. Mohammad Shahidur Rahman",
        title: "Professor, Dept. of CSE",
        institution: "Shahjalal University of Science and Technology, Sylhet, Bangladesh",
      },
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer (Remote)",
    company: "New Vision Institute of Technology",
    location: "Texas, USA",
    date: "Oct 2023 — Apr 2024",
    projects: [
      {
        name: "NVIT Institute Portal & LMS",
        description: "The platform includes an instructor and talent portal that helps users find suitable matches and request assistance. Developed a full-stack web application using TypeScript, React, Redux Toolkit, Node.js, Express.js, and MongoDB. Implemented a custom attendance system within the instructor portal and integrated Zoom and Google Meet management features to support online classes and live sessions.",
      },
      {
        name: "Paymoor Digital Wallet",
        description: "Developed the frontend and integrated APIs for the registration and login process with KYC verification, enabling users to add funds from banks, cash out through agents, locate nearby agents, and make merchant payments via QR code, using JavaScript and React Native.",
      },
    ],
    bullets: [
      "Built full-stack features with TypeScript, React, Redux Toolkit, Node.js, Express.js, and MongoDB.",
      "Implemented a custom attendance system inside the instructor portal.",
      "Integrated Zoom + Google Meet management to support online classes and live sessions.",
      "Developed mobile wallet frontend with React Native including KYC verification and QR payments.",
    ],
  },
  {
    role: "AI Training Contributor",
    company: "Outlier — AI Training Platform",
    location: "Remote",
    date: "Oct 2024 — Jan 2026",
    bullets: [
      "Contributed to several projects, writing desired model outputs for different prompt types (e.g., database queries, front-end code generation, general query prompts, and voice inputs).",
      "Focused on correctness, completeness, and evaluation-friendly response structure.",
    ],
  },
] as const;

export const education = [
  {
    school: "Shahjalal University of Science and Technology, Sylhet",
    degree: "B.Sc. in Computer Science and Engineering",
    date: "Feb 2020 — Jul 2025",
    detail: "CGPA: 3.76/4.00 · Graduated with distinction",
  },
  {
    school: "Notre Dame College, Dhaka",
    degree: "Higher Secondary Certificate (HSC)",
    date: "2017 — 2019",
    detail: "GPA: 5.00/5.00",
  },
  {
    school: "Anjuman Adarsha Govt. High School, Netrakona, Mymensingh",
    degree: "Secondary School Certificate (SSC)",
    date: "2012 — 2017",
    detail: "GPA: 5.00/5.00",
  },
] as const;

export const skills = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "C/C++", "Python", "SQL"],
  },
  {
    group: "Frameworks",
    items: ["Next.js", "React", "React Native", "Express.js", "Spring Boot"],
  },
  { group: "Databases", items: ["MongoDB", "MySQL", "Prisma", "Firebase"] },
  {
    group: "Data Science",
    items: ["NumPy", "Pandas", "Matplotlib", "scikit-learn"],
  },
  { group: "Tools", items: ["Git", "Docker", "Figma"] },
] as const;

export const awards = [
  "Graduated with distinction in B.Sc. in Computer Science and Engineering",
  "Code Samurai Hackathon — 1st place at SUST (API Development stage)",
  "Scholarship — SSC exam",
  "Scholarship — JSC exam",
] as const;

export const certifications = [
  "Docker Training Course for Absolute Beginner",
  "AWS Academy Cloud Foundations",
  "AWS Academy Cloud Developing",
  "AWS Academy Web Application Builder",
] as const;

export const activities = [
  {
    title: "Executive Member — SUST CSE CARNIVAL 2024",
    date: "2024",
    description:
      "Organized an AI Hackathon to promote innovation and collaboration among students.",
  },
  {
    title: "Patrol Leader — Bangladesh Scouts",
    date: "2014 — 2017",
    description:
      "Organized team activities, promoted teamwork, and represented the patrol in regional scouting events.",
  },
] as const;

export const problemSolving = [
  { platform: "Codeforces", handle: "The_Philomath", solved: 288, link: "https://codeforces.com/profile/The_Philomath" },
  { platform: "VJudge", handle: "philomath", solved: 120, link: "https://vjudge.net/user/philomath" },
  { platform: "LeetCode", handle: "Fahad Bin Mahbub", solved: 39, link: "https://leetcode.com/Fahad-Bin-Mahbub/" },
] as const;
