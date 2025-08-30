import { Card, CardContent } from "@/components/ui/card"

export default function Biography() {
  return (
    <Card className="flex-1 min-w-0 shadow-lg">
      <CardContent className="flex flex-col items-center gap-6 py-8">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200">
          <img 
            src="/assets/profile.jpg" 
            alt="Trevor Stevens" 
            className="object-cover object-top w-full h-full"
          />
        </div>
        <h2 className="text-2xl font-bold">Trevor Stevens</h2>
        <div className="flex flex-col items-center gap-2 text-gray-700">
          <span>Warwick, New York</span>
          <span>
            <a href="mailto:steve899@msu.edu" className="text-blue-600 hover:underline">steve899@msu.edu</a>
          </span>
          <span>(845) 274-4589</span>
          <span>
            <a href="https://www.linkedin.com/in/trevor-stevens-13093a289" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              linkedin.com/in/trevor-stevens-13093a289
            </a>
          </span>
        </div>
      </CardContent>
    </Card>
  )
}