export interface projectData {
    id: string;
    name: string;
    purpose: string;
    summary: string;
    status: string;
    url: string;
    github: string;
    image: string;
    image2: string;
    alt: string;
    technologies: string[];
}

export const projectData: projectData[] = [
    {
        id: "ai-cloud-learning-assistant",
        name: "AI Cloud Learning Assistant",
        purpose: "AWS Development",
        summary: "Built an AI-powered educational assistant using AWS serverless architecture (Lambda, S3, DynamoDB, API Gateway) integrated with Google's Gemini AI model and deployed to AWS Amplify with session tracking capabilities.",
        status: "Completed",
        url: "https://staging.d3axr2zqp7tcp4.amplifyapp.com/",
        github: "",
        image: "/projects/ai cloud learning assistant.png",
        image2: "",
        alt: "AI Cloud Learning Assistant",
        technologies: ["AWS", "Lambda", "Gemini"],
    },
    {
        id: "serverless-smart-inbox",
        name: "Serverless Smart Inbox",
        purpose: "AWS Development",
        summary: "Created a serverless Smart Inbox system using AWS (S3, Lambda, Comprehend, SQS, CloudFront) that automatically analyzes customer message sentiment and intelligently routes negative feedback to high-priority queues for urgent handling.",
        status: "Completed",
        url: "https://ddgfhxaogeqob.cloudfront.net/",
        github: "",
        image: "/projects/smart-inbox1.jpeg",
        image2: "/projects/smart-inbox2.jpeg",
        alt: "Serverless Smart Inbox",
        technologies: ["AWS", "Lambda"],
    },
    {
        id: "portfolio-site2",
        name: "Portfolio Site V2",
        purpose: "Web Development",
        summary: "A redone and revamped portfolio website showcasing my ongoing journey of technology development and mastery, featuring projects that address practical real-world challenges.",
        status: "Completed",
        url: "https://www.techsage.software",
        github: "https://github.com/zunigafran/techsagev2",
        image: "/projects/zunigafran-dark.png", 
        image2: "/projects/zunigafran-light.png",
        alt: "Portfolio Site V2",
        technologies: ["NextJS", "TypeScript", "Cursor", "Claude", "Vercel"],
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
        image2: "",
        alt: "Tanium Document",
        technologies: ["Notion", "Word", "Spark"],
    },  
    {
        id: "portfolio-site",
        name: "Previous Portfolio Site",
        purpose: "Web Development",
        summary: "A portfolio website demonstrating my ability to create innovative solutions for real-world problems, highlighting my engineering projects and technical capabilities.",
        status: "Completed",
        url: "https://previousts.vercel.app",
        github: "https://github.com/zunigafran/zfran/tree/main/src",
        image: "/projects/techsagev1.jpeg",
        image2: "",
        alt: "Previous Portfolio Site",
        technologies: ["NextJS", "JavaScript", "Claude", "Vercel"],
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
       image2: "",
       alt: "Lode",
       technologies: ["Figma", "Expo", "TypeScript", "Cursor", "Claude"], //Supabase,
   },
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