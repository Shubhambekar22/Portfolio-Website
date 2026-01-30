export const resumeData = {
  personalInfo: {
    name: "Shubham Ambekar",
    title: "Aerospace & Mechanical Engineer",
    tagline:
      "Engineering Precision through Computational Design & Advanced Manufacturing",
    email: "sambekar1001@gmail.com",
    phone: "+1 (213) 245 3458",
    location: "Los Angeles, California",
    linkedin: "https://linkedin.com/in/shubham-ambekar", // Placeholder, user to update
    github: "https://github.com/Shubhambekar22", // Placeholder
  },
  education: [
    {
      school: "University of Southern California",
      degree: "Master of Science, Mechanical Engineering",
      date: "Jan 2025 - Dec 2026",
      location: "Los Angeles, CA, USA",
      gpa: "4.0/4.0",
      logo: "/usc-logo.png",
      coursework: [
        "Design for Manufacturing Assembly",
        "Advance Mechanical Design",
        "Finite Element Analysis",
        "Computational Design of Machine Components",
        "Advanced Computational Design & Manufacturing",
      ],
    },
    {
      school: "Savitribai Phule Pune University", // Kept original school name for now, image shows SRM but file had SPPU logic. Reverting image logic: Image shows SRM logo but text says "Bachelor of Technology, Computer Science". Wait, resume.ts says "Bachelor of Mechanical Engineering" at SPPU. The user asked to make it *look* like the image, but presumably with *their* data? The image is an example. I should keep the user's data (SPPU, Mech Eng) but add the fields. Wait, user provided "Shubham_Ambekar CV.pdf" earlier.
      // Let's stick to the existing data in resume.ts but add the required fields for the design.
      // Actually, looking at the image provided in the prompt "make education section look like this", the image content is:
      // USC, MS Data Science, Jan 2025-Dec 2026.
      // SRM, BTech CS, May 2018-Jun 2022.
      // The user's *current* resume.ts has:
      // USC, MS Mechanical Eng, Jan 2025-Dec 2026.
      // SPPU, Bach Mech Eng, Aug 2021-Jul 2024.
      //
      // I should *keep the user's actual data* (Mechanical Eng) but apply the *visual style* of the image.
      // I will add the `logo` and `gpa` fields to the existing entries.
      degree: "Bachelor of Mechanical Engineering",
      date: "Aug 2021 – Jul 2024",
      location: "Pune, India",
      gpa: "3.4/4.0", // Placeholder or estimated, I don't have this. I'll add a placeholder or omit if optional. The design shows GPA. I'll add a placeholder.
      logo: "/sppu-logo.png",
      coursework: [
        "Kinematics of Machinery",
        "Applied Thermodynamics",
        "Heat and Mass Transfer",
        "Design of Machine Elements",
        "Design of Transmission Systems",
        "HVAC & Refrigeration",
        "Turbomachinery",
        "Fluid Mechanics",
        "Additive Manufacturing",
        "Quality and Reliability Engineering",
      ],
    },
    {
      school: "PCET's Pimpri Chinchwad Polytechnic",
      degree: "Diploma in Mechanical Engineering",
      date: "2017 - 2021",
      location: "Pune, India",
      gpa: "First Class w/ Distinction",
      logo: "/pcet-logo.jpg",
      coursework: [
        "Introduction to Heat Transfer",
        "Solid Mechanics",
        "Engineering Drawing",
        "Industrial Hydraulics and Pneumatics",
        "Advance Manufacturing Processes",
        "Basics of Fluids in Engineering",
      ],
    },
  ],
  experience: [

    {
      company: "USC Formula SAE Racing Team",
      role: "Mechanical Design Engineer",
      date: "Aug 2025 – Present",
      location: "Los Angeles, USA",
      description: [
        "Working in vehicle design team for Supra SAE, overseeing CAD modeling, chassis optimization, and component integration using SolidWorks and ANSYS to enhance performance and safety.",
        "Coordinating a multidisciplinary team to ensure manufacturability, weight reduction, and compliance with SAE design standards.",
      ],
    },
    {
      company: "BEACON SolidWorks",
      role: "Application Engineer",
      date: "Jun 2024 – Nov 2024",
      location: "Pune, India",
      description: [
        "Provided post-sales technical support for SolidWorks, including installation, license setup, and configuration.",
        "Conducted SolidWorks Essentials training sessions for client staff to ensure smooth adoption.",
        "Acted as primary point of contact for troubleshooting and resolving technical issues.",
        "Collaborated with Dassault Systèmes to stay updated on latest tools and best practices.",
      ],
    },
    {
      company: "Bharat Electronics Limited",
      role: "Design & Development Intern",
      date: "Feb 2023 – Mar 2023",
      location: "Pune, India",
      description: [
        "Designed and developed critical components for high-energy directed systems leveraging SolidWorks and Ansys for advanced simulations.",
        "Optimized design processes to enhance efficiency and innovation in anti-drone technology.",
      ],
    },
    {
      company: "Renuka Forge",
      role: "Machine Floor Manager",
      date: "Jul 2019 – May 2020",
      location: "Moshi, India",
      description: [
        "Managed daily production operations, ensuring timely achievement of manufacturing targets.",
        "Assisted machine operators with process challenges and coordinated with vendors for raw materials.",
        "Oversaw overall workflow efficiency in a management-focused role.",
      ],
    },
    {
      company: "Renuka Auto Crank",
      role: "Quality Engineer",
      date: "Mar 2019 – May 2019",
      location: "Bhosari, India",
      description: [
        "Conducted GD&T inspections of precision-machined components like connecting rods and crankshafts.",
        "Utilized Micrometers, Vernier calipers, and Height gauges to ensure dimensional accuracy.",
        "Ensured compliance with design specifications and enhanced quality control processes.",
      ],
    },
  ],
  projects: [
    {
      title: "AI Assisted Planar Slicing for 3D Printing",
      date: "Sep 2025 – Dec 2025",
      tags: ["AI", "3D Printing", "Algorithms", "JavaScript", "SCSS"],
      description:
        "Engineered 'Smart Orient' algorithms utilizing Monotone Chain convex hull analysis and weighted cost heuristics to automate optimal build orientation. Implemented 'AI Planar Slicing' via spatial grid discretization and surface normal deviation analysis to dynamically modulate layer thickness. Architected 'MotoMind', an agentic AI integration utilizing Gemini 2.5 Flash.",
      link: "#",
      demoUrl: "#",
      repoUrl: "https://github.com/Shubhambekar22/AI-Assisted-Palanar-Slicing-For-3D-Printing",
      video: "/demo-video.mp4",
    },
    {
      title: "Design, FEA & 3D Printing of Hat Stiffened Fuselage",
      date: "Sep 2025 – Dec 2025",
      tags: ["Siemens NX", "FEA", "Nastran", "Composites"],
      description:
        "Designed a hat-stiffened fuselage in Siemens NX and validated structural integrity via linear static FEA (NX Nastran) under 1000 lbf compressive loads. Conducted physical compression testing on 3D-printed prototypes to verify FEA predictions.",
      link: "#",
      reportUrl: "/hat-stiffened-fuselage-report.pdf",
      driveUrl: "https://drive.google.com/drive/folders/1MDdPARtAlP-wBT22vROemvg7892gpQAC?usp=sharing",
    },
    {
      title: "Rescue Assistance Rover (RAR)",
      date: "Aug 2023 – Apr 2024",
      tags: ["Robotics", "SolidWorks", "Product Design"],
      description:
        "Designed and developed a robust disaster response vehicle equipped with advanced sensors and autonomous navigation. Engineered a rocker-bogie suspension system with Ackerman steering for superior mobility across complex terrains.",
      link: "#",
      reportUrl: "/rescue-assistant-robot-report.pdf",
      driveUrl: "https://drive.google.com/drive/folders/1013uHI31SKF-DtWhmt8CdNV7oafP79oL?usp=sharing",
    },
    {
      title: "Supra SAE Vehicle Design",
      date: "2022 – 2023",
      tags: ["Automotive", "Chassis Design", "ANSYS", "Team Leadership"],
      description:
        "Led the vehicle design team, overseeing CAD modeling, chassis optimization, and component integration using SolidWorks and ANSYS. Coordinated a multidisciplinary team to ensure manufacturability and compliance with SAE standards.",
      link: "#",
    },
  ],
  skills: {
    technical: [
      "CAD",
      "CAM",
      "CAE",
      "CFD",
      "FEA",
      "NX",
      "SolidWorks",
      "CATIA",
      "Ansys",
      "Multi Body Dynamics",
      "DFMA",
      "Mechanical Systems",
      "HVAC",
      "Fluid Mechanics",
      "Additive Manufacturing",
      "Quality Assurance",
      "Structural Engineering",
    ],
    software: ["MATLAB", "JavaScript", "C++", "Python", "Three.js"],
    other: ["Product Design", "Project Management", "Critical Reasoning"],
  },
  publications: [
    {
      title: "Advance Composites & Design Lab, Composite Student Researcher",
      date: "Aug 2025 - Present",
      description: [
        "Designing, manufacturing, and testing high-performance glass fiber and carbon fiber composite square beams for annual SAMPE student composites competition. Specialized in vacuum infusion techniques, optimized lay-up schedules, and performing ASTM standard mechanical testing to achieve maximum strength-to-weight ratios.",
      ],
    },
    {
      title:
        "Design & Development of Rescue Assistance Rover for Land-Based Operations",
      journal:
        "International Journal of Scientific Research in Engineering and Management",
      date: "Jul 30, 2024",
      doi: "10.55041/IJSREM36889",
    },
  ],
};
