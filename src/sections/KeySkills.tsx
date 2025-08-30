import { Card, CardContent } from "@/components/ui/card"

export default function KeySkills() {
  return (
    <Card className="flex-1 min-w-0 shadow-lg">
      <CardContent className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">Key Skills</h2>
        <div className="mb-4">
          <span className="font-semibold">Programming:</span>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700 text-left">
            <li>Python, C++, Visual Studio, AWS, Node.js, Rust, Typescript</li>
          </ul>
        </div>
        <div className="mb-4">
          <span className="font-semibold">AI/ML:</span>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700 text-left">
            <li>PyTorch, PyTorch-Geometric, TensorFlow, Scikit-Learn, Numpy, Pandas</li>
          </ul>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Soft Skills:</span>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700 text-left">
            <li>Problem Solving, Project Management, Team Collaboration</li>
          </ul>
        </div>
        <div>
          <span className="font-semibold">Data Analysis:</span>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700 text-left">
            <li>Excel, MATLAB</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}