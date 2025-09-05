import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function PersonalProjects() {
  return (
    <Card className="flex-1 min-w-0 shadow-lg">
      <CardContent className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">Personal Projects</h2>
        <div className="mb-6">
          <div className="font-semibold text-left mb-1">
            SpotMe - A Social Media Application
            <span className="text-sm text-gray-600 ml-2">| Exploring Start-Up Potential</span>
          </div>
          <ul className="list-disc ml-6 space-y-1 text-gray-700 text-left mb-2">
            <li>
              Created a mobile app that randomly selects users to post platform-wide, simulating a lottery of fame.
            </li>
            <li>
              The front-end was implemented using the React Native framework. The back-end is written in Rust using S3 and PostgreSQL for object and data storage respectively.
            </li>
          </ul>
          <Link to="/projects/spotlights">
            <Button variant="outline" className="mt-2">Learn More</Button>
          </Link>
        </div>
        <div className="mb-6">
          <div className="font-semibold text-left mb-1">
            Phatly - A Music Streaming Application
            <span className="text-sm text-gray-600 ml-2">| Exploring Start-Up Potential</span>
          </div>
          <ul className="list-disc ml-6 space-y-1 text-gray-700 text-left mb-2">
            <li>
              Created a music streaming service with a unique feature set and mission to make music streaming more enjoyable.
            </li>
            <li>
              The front-end was implemented using React Native and Vite React for the mobile and web applications respectively. The back-end was written in Rust using S3 and PostgreSQL for object and data storage respectively.
            </li>
          </ul>
          <Link to="/projects/phatly">
            <Button variant="outline" className="mt-2">Learn More</Button>
          </Link>
        </div>
        <div>
          <div className="font-semibold text-left mb-1">
            Graph Neural Network <span className="text-sm text-gray-600 ml-2">| Personal Learning Experience</span>
          </div>
          <ul className="list-disc ml-6 space-y-1 text-gray-700 text-left mb-2">
            <li>
              Developed a GNN in PyTorch using MoleculeNet BBBP dataset to predict blood-brain barrier permeability (<a href="https://github.com/trevor-p-stevens/BBBPGNN" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>); achieved 19.2% test loss.
            </li>
          </ul>
          <Link to="/projects/gnn">
            <Button variant="outline" className="mt-2">Learn More</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}