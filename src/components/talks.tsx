import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function Talks() {
  const talks = [
    {
      title: "The Future of AI in Healthcare",
      conference: "International Conference on AI and Medicine",
      date: "June 15, 2023",
      location: "Virtual",
      description: "Discussed the potential applications of AI in diagnosing diseases, personalized treatment plans, and improving patient outcomes."
    },
    {
      title: "Machine Learning for Climate Change Prediction",
      conference: "Global Climate Tech Summit",
      date: "September 22, 2022",
      location: "New York, NY",
      description: "Presented research on using machine learning models to predict climate change patterns and potential mitigation strategies."
    },
    {
      title: "Ethics in AI: Challenges and Solutions",
      conference: "Tech Ethics Symposium",
      date: "March 10, 2022",
      location: "San Francisco, CA",
      description: "Explored the ethical considerations in AI development and proposed guidelines for responsible AI implementation."
    }
  ]

  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Recent Talks</h2>
      <div className="space-y-4">
        {talks.map((talk, index) => (
          <div key={index}>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">{talk.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base font-semibold text-gray-700">{talk.conference}</p>
                <p className="text-sm text-gray-600 mb-2">{talk.date} - {talk.location}</p>
                <p className="text-sm sm:text-base text-gray-700">{talk.description}</p>
              </CardContent>
            </Card>
            {index < talks.length - 1 && (
              <Separator className="my-4" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
