import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface TalkDetailsProps {
  abstract: string
  bibtex: string
}

export function TalkDetails({ abstract, bibtex }: TalkDetailsProps) {
  const [showAbstract, setShowAbstract] = useState(false)
  const [showBibtex, setShowBibtex] = useState(false)

  return (
    <div className="mt-4 space-y-4">
      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAbstract(!showAbstract)}
        >
          abs
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowBibtex(!showBibtex)}
        >
          BibTeX
        </Button>
      </div>
      {showAbstract && (
        <Card>
          <CardContent className="pt-4">
            <p className="text-sm">{abstract}</p>
          </CardContent>
        </Card>
      )}
      {showBibtex && (
        <Card>
          <CardContent className="pt-4">
            <pre className="text-xs overflow-x-auto whitespace-pre-wrap">{bibtex}</pre>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
