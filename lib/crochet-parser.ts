export type Stitch = {
  stitch: string
  count: number
}

export type ParsedInstruction = {
  stitches: Stitch[]
  raw: string
}

// A simple map of known stitches. This will grow.
const STITCH_MAP: { [key: string]: string } = {
  ch: "chain",
  slst: "slip stitch",
  sc: "single crochet",
  hdc: "half double crochet",
  dc: "double crochet",
  tr: "treble crochet",
  dtr: "double treble crochet",
  dcinc: "double crochet increase",
  dcdec: "double crochet decrease",
  sc2tog: "single crochet 2 together",
  sc3tog: "single crochet 3 together",
  dc2tog: "double crochet 2 together",
  dc3tog: "double crochet 3 together",
}

export const parseInstruction = (
  instruction: string
): ParsedInstruction | null => {
  const parts = instruction.toLowerCase().split(/[\s,]+/) // split by space or comma
  const stitches: Stitch[] = []

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]
    if (STITCH_MAP[part]) {
      let count = 1
      // Check if next part is a number
      if (i + 1 < parts.length && !isNaN(parseInt(parts[i + 1]))) {
        count = parseInt(parts[i + 1])
        i++ // skip next part
      }
      stitches.push({ stitch: part, count })
    }
  }

  if (stitches.length === 0) {
    return null
  }

  return {
    stitches,
    raw: instruction,
  }
} 