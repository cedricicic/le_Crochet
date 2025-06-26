import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-light tracking-wide">
            Le Crochet
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/gallery" className="text-sm font-light hover:text-gray-600 transition-colors">
              Gallery
            </Link>
            <Link href="/marketplace" className="text-sm font-light hover:text-gray-600 transition-colors">
              Marketplace
            </Link>
            <Link href="/contact" className="text-sm font-light hover:text-gray-600 transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm font-light hover:text-gray-600 transition-colors">
              Privacy
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-sm font-light">
              Sign In
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 text-sm font-light px-6">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  )
} 