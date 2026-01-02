import { Metadata } from "next";

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The project you\'re looking for doesn\'t exist.',
};

export default function ProjectIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

