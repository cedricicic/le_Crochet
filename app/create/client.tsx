"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useState } from "react"
import { ParsedInstruction, parseInstruction } from "@/lib/crochet-parser"
import { Canvas } from "@react-three/fiber"
import { Stitch } from "@/components/crochet/Stitch"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface Instruction {
  type: string
  content: string
  parsed?: ParsedInstruction | null
}

export default function CreatePage() {
  const { data: session, status } = useSession()
  const [instructions, setInstructions] = useState<Instruction[]>([])
  const [currentInstruction, setCurrentInstruction] = useState("")

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "unauthenticated") {
    redirect("/api/auth/signin")
  }

  const addInstruction = (type: string) => {
    if (currentInstruction.trim() !== "") {
      let parsed: ParsedInstruction | null = null
      if (type === "instruction") {
        parsed = parseInstruction(currentInstruction)
        console.log("Parsed instruction:", parsed)
      }
      setInstructions([
        ...instructions,
        { type, content: currentInstruction, parsed },
      ])
      setCurrentInstruction("")
    }
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Column: Input and Instructions */}
          <div>
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-4xl font-extralight tracking-tight mb-4">
                Create your pattern
              </h1>
              <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
                Welcome, {session?.user?.name}. Add your crochet instructions below. Use natural language to describe stitches.
              </p>
            </div>

            <div className="mt-4">
              <Textarea
                className="w-full p-2 border-gray-300 text-sm font-light focus:ring-2 focus:ring-gray-200 transition-all duration-200"
                rows={4}
                value={currentInstruction}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCurrentInstruction(e.target.value)}
                placeholder="e.g., ch 4, slst into first chain to form a ring"
              />
              <div className="flex gap-2 mt-4">
                <Button
                  onClick={() => addInstruction("instruction")}
                  className="bg-black text-white hover:bg-gray-800 px-6 py-2 text-sm font-light"
                  >
                  Add Instruction
                </Button>
                <Button
                  onClick={() => addInstruction("note")}
                  variant="outline"
                  className="border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-black px-6 py-2 text-sm font-light"
                  >
                  Add Note
                </Button>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-extralight tracking-tight mb-4">Instructions</h2>
              <div className="space-y-3 border-l-2 border-gray-100 pl-4">
                {instructions.map((item, index) => (
                  <div
                    key={index}
                  >
                    {item.type === "instruction" ? (
                      <p className="font-light text-gray-800">{item.content}</p>
                    ) : (
                      <p className="font-light text-gray-500 italic">{item.content}</p>
                    )}
                  </div>
                ))}
                {instructions.length === 0 && (
                  <p className="text-gray-400 font-light">Your instructions will appear here.</p>
                )}
              </div>
            </div>
          </div>
          
          {/* Right Column: Visualization */}
          <div>
            <div className="sticky top-12">
              <div className="w-full h-96 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center mb-8">
                <p className="text-gray-400 font-light">2D Diagram Placeholder</p>
              </div>
              <div className="w-full h-96 bg-black rounded-lg">
                <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  {instructions.map((instr, i) => {
                    const parsedInstruction = instr.parsed
                    if (parsedInstruction) {
                      return parsedInstruction.stitches.map((stitch, j) => (
                        <Stitch
                          key={`${i}-${j}`}
                          position={[
                            j * 2.5 - (parsedInstruction.stitches.length * 1.25),
                            i * -2,
                            0,
                          ]}
                        />
                      ))
                    }
                    return null
                  })}
                </Canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 