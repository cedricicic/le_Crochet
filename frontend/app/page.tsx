import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
} from "lucide-react"

export default function CrochetPlatform() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-gray-300 text-xs font-light px-3 py-1">
           The only pattern builder you'll ever need
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extralight tracking-tight mb-6 leading-tight">
              Create, Visualize, and Share
              <br />
              <span className="font-light">Crochet Patterns</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your ideas into detailed crochet patterns using natural language. Visualize in 3D, collaborate
              with others, and share in our marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-sm font-light">
                Start building your pattern
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extralight mb-6">
            Ready to Transform Your
            <br />
            Crochet Experience?
          </h2>
          <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using AI to bring their crochet visions to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input placeholder="Enter your email" className="border-gray-300 text-sm font-light" />
            <Button className="bg-black text-white hover:bg-gray-800 px-8 text-sm font-light whitespace-nowrap">
              Get Started Free
            </Button>
          </div>
          <p className="text-xs text-gray-500 font-light mt-4">No credit card required. Start creating in minutes.</p>
        </div>
      </section>
    </div>
  )
}
