export interface technologies {
    id: string;
    logo: string;
    color?: string;
    alt: string;
}

export const technologies: Record<string, technologies> = {
    "aws": {
        id: "aws",
        logo: "/assets/aws.svg",
        color: "hsl(var(--primary))",
        alt: "AWS"
    },
    "claude": {
        id: "claude",
        logo: "/assets/claude.svg",
        color: "hsl(var(--primary))",
        alt: "Claude"
    },
    "cursor": {
        id: "cursor",
        logo: "/assets/cursor.svg",
        color: "hsl(var(--primary))",
        alt: "Cursor"
    },
    "expo": {
        id: "expo",
        logo: "/assets/expo.svg",
        color: "hsl(var(--primary))",
        alt: "Expo"
    },
    "nextjs": {
        id: "nextjs",
        logo: "/assets/nextjs.svg",
        color: "hsl(var(--primary))",
        alt: "NextJS"
    },
    "python": {
        id: "python",
        logo: "/assets/python.svg",
        color: "hsl(var(--primary))",
        alt: "Python"
    },
    "tailwind": {
        id: "tailwind",
        logo: "/assets/tailwind.svg",
        color: "hsl(var(--primary))",
        alt: "Tailwind"
    },
    "typescript": {
        id: "typescript",
        logo: "/assets/typescript.svg",
        color: "hsl(var(--primary))",
        alt: "Typescript"
    },
    "vercel": {
        id: "vercel",
        logo: "/assets/vercel.svg",
        color: "hsl(var(--primary))",
        alt: "Vercel"
    }
}