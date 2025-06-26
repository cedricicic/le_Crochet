"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function CreatePage() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "unauthenticated") {
    redirect("/api/auth/signin")
  }

  return (
    <div className="container mx-auto px-6 py-4">
      <h1 className="text-2xl font-bold">Create Page</h1>
      <p>Welcome, {session?.user?.name}</p>
    </div>
  )
} 