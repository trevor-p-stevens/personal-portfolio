import { Card, CardContent } from "@/components/ui/card"

export default function Clubs() {
  return (
    <Card className="flex-1 min-w-0 shadow-lg">
      <CardContent className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">Clubs & Activities</h2>
        <div className="mb-6">
          <div className="font-semibold text-left mb-1">
            QuantZ - Secretary of Innovation
          </div>
          <div className="text-left">
            <a
              href="https://www.quantzmsu.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              (quantzmsu.org)
            </a>
          </div>
          <ul className="list-disc ml-6 space-y-1 text-gray-700 text-left">
            <li>Michigan State University's premier quantitative and STEM finance club.</li>
            <li>Streamlined communication between the algorithm development team and hardware optimization team.</li>
          </ul>
        </div>
        <div className="mb-6">
          <div className="font-semibold text-left mb-1">AI Club – Member</div>
          <ul className="list-disc ml-6 space-y-1 text-gray-700 text-left">
            <li>
              Participated in workshops and hackathons focused on machine learning, neural networks, and AI applications. Collaborated with peers on small AI projects and attended guest lectures from industry professionals.
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-left mb-1">Intramural Soccer & Volleyball – Team Member</div>
          <ul className="list-disc ml-6 space-y-1 text-gray-700 text-left">
            <li>
              Played competitive soccer and volleyball in MSU’s intramural leagues, building teamwork and leadership skills.
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}