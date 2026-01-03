export interface resumeData {
    id: string;
    title: string;
    company: string;
    logo: string;
    website: string;
    period: string;
    summary: string;
    technologies: string[];
    image1: string;
    image2: string;
    image3: string;
    image4: string;
  }

  export interface resumeSlideshow {
    id: string;
  }
  
  export const resumeData: resumeData[] = [
    {
      id: "job-5",
      title: "Cloud Engineer Intern",
      company: "S&P Global",
      logo: "/companies/spglobal.png",
      website: "https://www.spglobal.com/",
      period: "07/2025 to 11/2025",
      summary: "Remediated security vulnerabilities across AWS and Azure infrastructure using TypeScript and Github, supporting 1000+ users. Developed comprehensive technical documentation published to Atlassian Confluence and mastered pipeline engineering through hands-on training in designing deployment systems, gaining deep understanding of business requirements and operational impact.",
      technologies: ["AWS", "Azure", "TypeScript", "Github", "Atlassian Confluence", "Security Vulnerability Remediation", "Pipeline Engineering", "Infrastructure Deployment", "Technical Documentation", "Knowledge Transfer", "Cloud Infrastructure Management"],
      image1: "/photos/job5-1.webp",
      image2: "/photos/job5-2.jpg",
      image3: "/photos/job5-3.jpg",
      image4: "/photos/job5-4.webp",
    },
    {
      id: "job-4",
      title: "Account Expeditor- Technical Systems",
      company: "ProSource Wholesale, TX",
      logo: "/companies/prosource.jpg",
      website: "https://www.prosourcewholesale.com/",
      period: "02/2023 to 07/2025",
      summary: "Coordinated cross-functional stakeholders while implementing technical solutions across complex business environments. Streamlined operational efficiency through Agile project workflows and enhanced system reliability by debugging critical issues in business software, improving system uptime by 15%.",
      technologies: ["Agile Methodology", "Business Software Debugging", "System Optimization", "Technical Platforms", "Cross-Functional Coordination", "Stakeholder Management", "Analytical Problem-Solving", "Operational Efficiency", "Project Workflows", "Communication Systems Management"],
      image1: "/photos/job4-1.jpeg",
      image2: "/photos/job4-2.webp",
      image3: "/photos/job4-3.jpg",
      image4: "/photos/job4-4.jpg",
    },
    {
      id: "job-3",
      title: "Software Engineer Intern",
      company: "ConverseCart AI",
      logo: "/companies/conversecart.jpg",
      website: "https://www.getconvosearch.com/",
      period: "07/2024 to 09/2024",
      summary: "Led engineering team to develop a comprehensive dashboard delivering actionable insights and key metrics on company health. Collaborated with senior engineers to research AI/ML models, expanding technical knowledge of advanced machine learning architectures and implementation strategies.",
      technologies: ["Dashboard Development", "AI/ML Model Research", "Machine Learning Architecture", "Engineering Team Leadership", "Data Visualization", "Stakeholder Communication", "Research Collaboration", "Metrics Analysis"],
      image1: "/photos/job3-1.webp",
      image2: "/photos/job3-2.png",
      image3: "/photos/job3-3.jpg",
      image4: "/photos/job3-4.jpg",
    },
    {
      id: "job-2",
      title: "Software Engineer Apprentice",
      company: "Springboard",
      logo: "/companies/springboard.jpg",
      website: "https://www.springboard.com/courses/software-engineering-career-track/",
      period: "02/2023 to 03/2024",
      summary: "Built robust web applications using Python, Node.JS, Java, and Flask, mastering multiple programming languages and full-stack development. Earned exceptional mentor rating through unwavering commitment and experimented with agentic frameworks including langChain, langGraph, and Pinecone to develop AI agents and automated workflows.",
      technologies: ["DSA", "HTML5", "CSS3", "Javascript", "React", "Node.JS", "Python", "Flask", "Express", "OOP", "APIs", "SQL"],
      image1: "/photos/job2-1.jpeg",
      image2: "/photos/job2-2.png",
      image3: "/photos/job2-3.jpg",
      image4: "/photos/job2-4.webp",
    },
    {
      id: "job-1",
      title: "Signals Intelligence Analyst (35N)",
      company: "US Army, LA",
      logo: "/companies/army.jpg",
      website: "https://www.goarmy.com/careers-and-jobs/signal-intelligence/languages-code/35n-signals-intelligence-analyst",
      period: "05/2008 to 12/2018",
      summary: "Maintained active Top Secret clearance with CI Polygraph for sensitive intelligence operations. Supervised operational teams maintaining combat-readiness standards, resulting in soldier promotions and awards. Delivered intelligence products using Signals Intelligence expertise and IC tools (ArcGIS, Analyst Notebook) supporting command operational units.",
      technologies: ["ArcGIS", "Analyst Notebook", "Signals Intelligence", "Top Secret Clearance", "CI Polygraph", "IC Tools", "Data Analysis", "Data Interpreation", "Database Management", "Metadata", "System Administration", "Technical Reporting", "Leadership", "Project Management"],
      image1: "/photos/job1-1.jpg",
      image2: "/photos/job1-2.jpg",
      image3: "/photos/job1-3.avif",
      image4: "/photos/job1-4.avif",
    }
  ];