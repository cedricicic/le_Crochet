import type { Metadata } from "next";
import MarketplacePage from "./client";

export const metadata: Metadata = {
    title: "Marketplace | CROCHET.AI",
    description: "Sell your patterns or discover unique designs from creators worldwide in our integrated marketplace.",
};

export default function Marketplace() {
    return <MarketplacePage />;
} 