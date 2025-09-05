import { Card, CardContent } from "@/components/ui/card"

export default function Experience() {
  return (
    <Card className="flex-1 min-w-0 shadow-lg">
      <CardContent className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="mb-4">
          <div className="font-semibold">Michigan State University, Heterogeneous Reasoning and Learning Lab</div>
          <div className="text-gray-600 text-sm mb-1">Sep 2024 – Apr 2025</div>
          <div className="italic mb-2">Professorial Assistant Researcher / Software Engineer</div>
          <ul className="list-disc ml-6 space-y-1 text-gray-700 text-left">
            <li>Researched transformer neural networks for DNA sequencing analysis.</li>
            <li>Optimized a “Baby” LLM for high grammatical and structural accuracy trained on 100M words.</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Michigan State University, Microtechnology Lab</div>
          <div className="text-gray-600 text-sm mb-1">Sep 2023 – Apr 2024</div>
          <div className="italic mb-2">Professorial Assistant Researcher</div>
          <ul className="list-disc ml-6 space-y-1 text-gray-700 text-left">
            <li>Tested microelectrodes with various coatings to minimize brain impedance; recorded data in Excel.</li>
            <li>Conducted literature reviews to support paper citations and research direction.</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}