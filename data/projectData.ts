export interface projectData {
    id: string;
    name: string;
    purpose: string;
    summary: string;
    link: string;
    image: string
}

export const projectData: projectData[] = [
    {
        id: "portfolio-site",
        name: "Portfolio Site V2",
        purpose: "Web Development",
        summary: "Project 1 summary",
        link: "https://www.project1.com",
        image: "https://www.project1.com/image.png"
    }, 
    {
       id: "lode",
       name: "Lode",
       purpose: "App Development",
       summary: "",
       link: "https://",
       image: "https://"
   },
   {
        id: "",
        name: "",
        purpose: "",
        summary: "",
        link: "https://",
        image: "https://"
    },  
    {
        id: "portfolio-site",
        name: "Previous Portfolio Site",
        purpose: "Web Development",
        summary: "A portfolio website demonstrating my ability to create innovative solutions for real-world problems, highlighting my engineering projects and technical capabilities.",
        link: "https://github.com/zunigafran/zfran/tree/main/src",
        image: "/projects/techsagev1.jpeg"
    }
]

// Template

// {
//     id: "",
//     name: "",
//     purpose: "",
//     summary: "",
//     link: "https://",
//     image: "https://"
// },