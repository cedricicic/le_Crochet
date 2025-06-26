"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/gallery", label: "Gallery" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy" },
  ]

  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-light tracking-wide">
            Le Crochet
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-light transition-colors hover:text-gray-600 ${
                  pathname === href ? "underline underline-offset-4" : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <AuthButtons />
        </div>
      </div>
    </header>
  )
}

function AuthButtons() {
  const { data: session } = useSession()

  if (session && session.user) {
    return (
      <div className="flex items-center space-x-4">
        <Link href="/create">
          <Button className="bg-gray-200 text-black hover:bg-gray-300 text-sm font-light px-6 transition-colors duration-200 ease-in-out">
            Create
          </Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src={session.user.image!} alt={session.user.name ?? ""} />
                <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{session.user.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {session.user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => signOut()}>
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-4">
      <Button 
        onClick={() => signIn("google", { callbackUrl: "/create" })} 
        variant="ghost" 
        className="text-sm font-light transition-colors duration-200 ease-in-out hover:text-gray-700 hover:bg-gray-200"
      >
        Sign In
      </Button>
      {/* <Button 
        onClick={() => signIn("google", { callbackUrl: "/create" })} 
        className="bg-black text-white hover:bg-gray-800 text-sm font-light px-6 transition-colors duration-200 ease-in-out"
      >
        Get Started
      </Button> */}
    </div>
  )
}