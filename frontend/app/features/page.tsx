import type { Metadata } from "next";
import FeaturesPage from "./client";

export const metadata: Metadata = {
    title: "Features | CROCHET.AI",
    description: "Discover the powerful features of CROCHET.AI to create, visualize, and share crochet patterns.",
};

export default function Features() {
    return <FeaturesPage />;
} 