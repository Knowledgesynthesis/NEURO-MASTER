import { Link, useLocation } from 'react-router-dom'
import { Brain, Home, BookOpen, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/assessment', icon: BookOpen, label: 'Assessment' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Brain className="h-6 w-6 text-primary" />
            <span>Neuro Master</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className="container py-6 md:py-8">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="sticky bottom-0 z-50 w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
        <div className="container flex h-16 items-center justify-around">
          {navItems.map(({ to, icon: Icon, label }) => (
            <Link
              key={to}
              to={to}
              className={cn(
                "flex flex-col items-center gap-1 text-xs transition-colors",
                location.pathname === to
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
