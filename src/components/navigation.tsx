import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navigation({ activeSection, setActiveSection, isMobile }) {
  const [open, setOpen] = useState(false)
  const navItems = ['about', 'research', 'publications', 'talks', 'contact']

  const NavButton = ({ item }) => (
    <Button
      variant={activeSection === item ? "default" : "ghost"}
      onClick={() => {
        setActiveSection(item)
        setOpen(false)
      }}
      className="w-full justify-start"
    >
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </Button>
  )

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="mt-4">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="flex flex-col space-y-4 mt-4">
            {navItems.map((item) => (
              <NavButton key={item} item={item} />
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <nav className="mt-8">
      <ul className="flex flex-wrap justify-center gap-4">
        {navItems.map((item) => (
          <li key={item}>
            <NavButton item={item} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
