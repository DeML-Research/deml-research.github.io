import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="mt-12 py-6">
      <div className="max-w-3xl mx-auto">
        <Separator className="mb-6" />
        <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
          <div>Innovate</div>
          <div>Educate</div>
          <div>Inspire</div>
        </div>
      </div>
    </footer>
  )
}
