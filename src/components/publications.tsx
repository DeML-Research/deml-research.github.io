export function Publications() {
  const publications = [
    {
      title: "Advances in AI-driven Natural Language Processing",
      authors: "Doe, J., Smith, A.",
      year: 2023,
      journal: "Journal of AI Research",
      details: "45(2), 112-128",
    },
    {
      title: "Machine Learning Approaches to Climate Change Prediction",
      authors: "Doe, J.",
      year: 2022,
      journal: "International Conference on Climate Informatics",
      details: "pp. 78-85",
    },
  ]

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Selected Publications</h2>
      <ul className="space-y-4">
        {publications.map((pub, index) => (
          <li key={index} className="text-gray-700">
            <p>
              <span className="font-semibold">{pub.authors} ({pub.year}). </span>
              "{pub.title}" {pub.journal}, {pub.details}.
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
