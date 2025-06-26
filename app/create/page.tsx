import type { Metadata } from "next";
import CreatePage from "./client";

export const metadata: Metadata = {
    title: "Create | Le Crochet",
    description: "Create a new crochet pattern.",
};

export default function Create() {
    return <CreatePage />;
} 