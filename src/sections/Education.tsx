import { Card, CardContent } from "@/components/ui/card"

type EducationProps = {
  type: "education" | "publications"
}

export default function Education({ type }: EducationProps) {
  if (type === "education") {
    return (
      <Card className="flex-1 min-w-0 shadow-lg">
        <CardContent className="px-6 py-8">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="mb-3">
            <span className="font-semibold">Michigan State University, College of Engineering</span>
            <div className="text-gray-600 text-sm">East Lansing, MI | Fall 2023 – Spring 2027</div>
          </div>
          <div className="mb-2 text-gray-700">
            Dual B.S. in <span className="font-semibold">Computer Science</span> and <span className="font-semibold">Computational Mathematics</span>, GPA: 3.9/4.0
          </div>
          <div className="mb-4 text-gray-700">
            Honors College and Presidential Scholarship Recipient
          </div>
          <div>
            <span className="font-semibold">Relevant Coursework:</span>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700 text-left">
              <li>CSE 331 - Computer Algorithms and Data Structures</li>
              <li>MTH 483 - Mathematics for Machine Learning</li>
              <li>CSE 404 - Introduction to Machine Learning</li>
              <li>CSE 380 - Cloud Computing</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    )
  }
  return (
    <Card className="flex-1 min-w-0 shadow-lg">
      <CardContent className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">Publications</h2>
        <ul className="list-disc ml-6 space-y-3 text-gray-700 text-left">
          <li>
            X. Liu, T. Stevens, et al., <span className="italic">"Flexible Dual-Sided Polymer Microelectrode Array for Neurophysiological Recordings from an Insect Brain,"</span> 2024 IEEE MEMS, Austin, TX, pp. 247-250.
          </li>
          <li>
            Liu X, Gong Y, Jiang Z, Stevens T, Li W (2024). <span className="italic">Flexible high-density microelectrode arrays for closed-loop brain–machine interfaces: a review.</span> Front. Neurosci., 18:1348434.
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}