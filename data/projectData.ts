export interface projectData {
    id: string;
    name: string;
    purpose: string;
    summary: string;
    status: string;
    url: string;
    github: string;
    image: string;
    alt: string;
    technologies: string[];
}

export const projectData: projectData[] = [
    {
        id: "portfolio-site2",
        name: "Portfolio Site V2",
        purpose: "Web Development",
        summary: "A redone and revamped portfolio website showcasing my ongoing journey of technology development and mastery, featuring projects that address practical real-world challenges.",
        status: "Completed",
        url: "",
        github: "https://github.com/zunigafran/techsagev2",
        image: "",
        alt: "Portfolio Site V2",
        technologies: [],
    }, 
    {
       id: "lode",
       name: "Lode",
       purpose: "App Development",
       summary: "A multi-layered budgeting application similar to YNAB or Origin, featuring AI-powered financial calculations for interest and amortized loans, along with personalized notebooks for tracking goals and milestones. Built with a custom AI model to enhance user financial planning.",
       status: "In Progress",
       github: "",
       url: "",
       image: "",
       alt: "Lode",
       technologies: [],
   },
   {
        id: "tanium-document",
        name: "Tanium Document",
        purpose: "Technical Documentation",
        summary: "Authored comprehensive technical documentation for S&P Global's Collection Platform of Tanium's 45-module endpoint management platform using accessible language, published to Atlassian Confluence to enable knowledge transfer across IT Security, Operations, and Compliance teams for troubleshooting and governance protocols.",
        status: "Completed",
        url: "/projects/Tanium.pdf",
        github: "",
        image: "/projects/tanium_document.png",
        alt: "Tanium Document",
        technologies: ["Notion", "Word", ],
    },  
    {
        id: "portfolio-site",
        name: "Previous Portfolio Site",
        purpose: "Web Development",
        summary: "A portfolio website demonstrating my ability to create innovative solutions for real-world problems, highlighting my engineering projects and technical capabilities.",
        status: "Completed",
        url: "https://github.com/zunigafran/zfran/tree/main/src",
        github: "https://github.com/zunigafran/zfran/tree/main/src",
        image: "/projects/techsagev1.jpeg",
        alt: "Previous Portfolio Site",
        technologies: ["NextJS", "TailwindCSS", "JavaScript", "Vercel"],
    }
]

// Template

// {
//     id: "",
//     name: "",
//     purpose: "",
//     summary: "",
//     url: "https://",
//     github: "https://",
//     image: "https://"
// },