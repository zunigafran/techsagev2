export interface resumeData {
    id: string;
    title: string;
    company: string;
    logo: string;
    period: string;
    summary: string;
    technologies: string[];
    slideshow?: string;
  }

  export interface resumeSlideshow {
    id: string;
  }
  
  export const resumeData: resumeData[] = [
    {
      id: "job-5",
      title: "Cloud Engineer Intern",
      company: "S&P Global",
      logo: "/companies/spglobal.jpg",
      period: "07/2025 to 11/2025",
      summary: "Remediated security vulnerabilities across AWS and Azure infrastructure using TypeScript and Github, supporting 1000+ users. Developed comprehensive technical documentation published to Atlassian Confluence and mastered pipeline engineering through hands-on training in designing deployment systems, gaining deep understanding of business requirements and operational impact.",
      technologies: ["AWS", "Azure", "TypeScript", "Github", "Atlassian Confluence"],
    },
    {
      id: "job-4",
      title: "Account Expeditor- Technical Systems",
      company: "ProSource Wholesale, TX",
      logo: "/companies/prosource.jpg",
      period: "02/2023 to 07/2025",
      summary: "Coordinated cross-functional stakeholders while implementing technical solutions across complex business environments. Streamlined operational efficiency through Agile project workflows and enhanced system reliability by debugging critical issues in business software, improving system uptime by 15%.",
      technologies: ["Python", "Github", "Atlassian Confluence"] // TODO: Add technologies
    },
    {
      id: "job-3",
      title: "Software Engineer Intern",
      company: "ConverseCart AI",
      logo: "/companies/conversecart.jpg",
      period: "07/2024 to 09/2024",
      summary: "Led engineering team to develop a comprehensive dashboard delivering actionable insights and key metrics on company health. Collaborated with senior engineers to research AI/ML models, expanding technical knowledge of advanced machine learning architectures and implementation strategies.",
      technologies: ["Python", "Github", "Atlassian Confluence"] // TODO: Add technologies
    },
    {
      id: "job-2",
      title: "Software Engineer Apprentice",
      company: "Springboard",
      logo: "/companies/springboard.jpg",
      period: "02/2023 to 03/2024",
      summary: "Built robust web applications using Python, Node.JS, Java, and Flask, mastering multiple programming languages and full-stack development. Earned exceptional mentor rating through unwavering commitment and experimented with agentic frameworks including langChain, langGraph, and Pinecone to develop AI agents and automated workflows.",
      technologies: ["DSA", "HTML5", "CSS3", "Javascript", "React", "Node.JS", "Python", "Flask", "Express", "OOP", "APIs", "SQL"]
    },
    {
      id: "job-1",
      title: "Signals Intelligence Analyst (35N)",
      company: "US Army, LA",
      logo: "/companies/army.jpg",
      period: "05/2008 to 12/2018",
      summary: "Maintained active Top Secret clearance with CI Polygraph for sensitive intelligence operations. Supervised operational teams maintaining combat-readiness standards, resulting in soldier promotions and awards. Delivered intelligence products using Signals Intelligence expertise and IC tools (ArcGIS, Analyst Notebook) supporting command operational units.",
      technologies: ["ArcGIS", "Analyst Notebook", "Signals Intelligence", "Top Secret Clearance", "CI Polygraph", "IC Tools", "Data Analysis", "Data Interpreation", "Database Management", "Metadata", "System Administration", "Technical Reporting", "Leadership", "Project Management"]
    }
  ];