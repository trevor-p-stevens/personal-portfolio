import { Link } from "react-router-dom"

export default function GNNDetail() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 px-4 py-12">
      <Link to="/" className="text-blue-600 hover:underline mb-6 self-start">&larr; Back to Portfolio</Link>
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-2">Graph Neural Network</h2>
        <div className="text-gray-600 mb-4">Personal Learning Experience</div>
        <ul className="list-disc ml-6 space-y-2 text-gray-700 text-left">
          <li>Developed a GNN in PyTorch using MoleculeNet BBBP dataset to predict blood-brain barrier permeability (<a href="https://github.com/trevor-p-stevens/BBBPGNN" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>); achieved 19.2% test loss.</li>
        </ul>
        {/* Add more details here as needed */}
      </div>
    </div>
  )
}