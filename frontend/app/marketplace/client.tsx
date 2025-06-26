'use client'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

export default function MarketplacePage() {
    return (
        <div className="min-h-screen bg-white text-black">
            {/* Marketplace Section */}
            <section id="marketplace" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="bg-white border border-gray-200 rounded-sm p-8">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                                    <h3 className="font-light">Marketplace Dashboard</h3>
                                    <Badge variant="outline" className="text-xs font-light">
                                        SELLER
                                    </Badge>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-light">Total Sales</span>
                                        <span className="font-light">$2,847</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-light">Active Patterns</span>
                                        <span className="font-light">23</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-light">Downloads</span>
                                        <span className="font-light">1,247</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Badge variant="outline" className="mb-4 border-gray-300 text-xs font-light">
                                MARKETPLACE
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-extralight mb-6">
                                Monetize Your
                                <br />
                                Creative Work
                            </h2>
                            <p className="text-gray-600 font-light mb-8 leading-relaxed">
                                Turn your passion into profit. Our integrated marketplace makes it easy to sell your patterns, track
                                sales, and build a following. Set your own prices and keep 85% of every sale.
                            </p>
                            <div className="flex items-center space-x-6">
                                <Button className="bg-black text-white hover:bg-gray-800 text-sm font-light">Start Selling</Button>
                                <Button variant="ghost" className="text-black hover:bg-white/50">
                                    <Share2 className="w-4 h-4 mr-2" />
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 