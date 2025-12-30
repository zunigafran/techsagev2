export interface languages {
    id: string;
    logo: string;
    color?: string;
    alt: string;
}

export const languages: Record<string, languages> = {
    "aws": {
        id: "aws",
        logo: "/logos/aws.svg",
        color: "hsl(var(--primary))",
        alt: "AWS"
    },
    "claude": {
        id: "claude",
        logo: "/logos/claude.svg",
        color: "hsl(var(--primary))",
        alt: "Claude"
    },
    "cursor": {
        id: "cursor",
        logo: "/logos/cursor.svg",
        color: "hsl(var(--primary))",
        alt: "Cursor"
    },
    "expo": {
        id: "expo",
        logo: "/logos/expo.svg",
        color: "hsl(var(--primary))",
        alt: "Expo"
    },
    "javascript": {
        id: "javascript",
        logo: "/logos/javascript.svg",
        color: "hsl(var(--primary))",
        alt: "JavaScript"
    },
    "nextjs": {
        id: "nextjs",
        logo: "/logos/nextjs.svg",
        color: "hsl(var(--primary))",
        alt: "NextJS"
    },
    "nodejs": {
        id: "nodejs",
        logo: "/logos/nodejs.svg",
        color: "hsl(var(--primary))",
        alt: "NodeJS"
    },
    "notion": {
        id: "notion",
        logo: "/logos/notion.svg",
        color: "hsl(var(--primary))",
        alt: "Notion"
    },
    "python": {
        id: "python",
        logo: "/logos/python.svg",
        color: "hsl(var(--primary))",
        alt: "Python"
    },
    "tailwind": {
        id: "tailwind",
        logo: "/logos/tailwind.svg",
        color: "hsl(var(--primary))",
        alt: "Tailwind"
    },
    "typescript": {
        id: "typescript",
        logo: "/logos/typescript.svg",
        color: "hsl(var(--primary))",
        alt: "Typescript"
    },
    "vercel": {
        id: "vercel",
        logo: "/logos/vercel.svg",
        color: "hsl(var(--primary))",
        alt: "Vercel"
    },
    "word": {
        id: "word",
        logo: "/logos/word.svg",
        color: "hsl(var(--primary))",
        alt: "Word"
    }
}