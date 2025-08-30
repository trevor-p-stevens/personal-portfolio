import { Card, CardContent } from "@/components/ui/card"

export default function AboutMe() {
  return (
    <Card className="flex-1 min-w-0 shadow-lg">
      <CardContent className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed text-left">
          Hi, I’m Trevor. I’m studying Computer Science and Computational Mathematics at Michigan State University. I like working with technology and figuring out how math and coding connect, and I’m always trying to learn something new.
          <br /><br />
          Outside of school, I’m a big soccer fan (Manchester City all the way) and I listen to a lot of music - some of my favorites are Nirvana, The Beatles, and The Strokes. I also enjoy reading, especially authors like Dostoevsky and Kafka.
        </p>
      </CardContent>
    </Card>
  )
}