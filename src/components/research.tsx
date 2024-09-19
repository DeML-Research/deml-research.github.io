export function Research() {
  const interests = [
    'Artificial Intelligence',
    'Machine Learning',
    'Natural Language Processing',
    'Computer Vision',
    'Robotics',
  ]

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Research Interests</h2>
      <ul className="list-disc list-inside text-gray-700">
        {interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    </section>
  )
}
