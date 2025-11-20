import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card'
import {
  Zap,
  Droplet,
  Activity,
  Loader2,
  Bug,
  TrendingDown,
  Eye,
  Brain
} from 'lucide-react'

const modules = [
  {
    id: 'stroke',
    title: 'Ischemic Stroke & TIA',
    description: 'tPA/tenecteplase eligibility, thrombectomy, and acute management',
    icon: Zap,
    color: 'text-red-500',
    path: '/stroke',
  },
  {
    id: 'hemorrhage',
    title: 'Intracranial Hemorrhage',
    description: 'ICH vs SAH classification and acute intervention strategies',
    icon: Droplet,
    color: 'text-rose-500',
    path: '/hemorrhage',
  },
  {
    id: 'seizures',
    title: 'Seizures & Status Epilepticus',
    description: 'Seizure classification and stepwise management protocols',
    icon: Activity,
    color: 'text-orange-500',
    path: '/seizures',
  },
  {
    id: 'ms',
    title: 'Multiple Sclerosis',
    description: 'Relapse vs progression and disease-modifying therapy',
    icon: Loader2,
    color: 'text-amber-500',
    path: '/ms',
  },
  {
    id: 'meningitis',
    title: 'Meningitis & Encephalitis',
    description: 'CSF interpretation, LP timing, and empiric treatment',
    icon: Bug,
    color: 'text-yellow-500',
    path: '/meningitis',
  },
  {
    id: 'gbs',
    title: 'Guillain-Barré Syndrome',
    description: 'Ascending weakness pattern and respiratory monitoring',
    icon: TrendingDown,
    color: 'text-green-500',
    path: '/gbs',
  },
  {
    id: 'mg',
    title: 'Myasthenia Gravis',
    description: 'Fluctuating weakness and myasthenic crisis management',
    icon: Eye,
    color: 'text-blue-500',
    path: '/mg',
  },
  {
    id: 'delirium',
    title: 'Delirium vs Dementia',
    description: 'Acute vs chronic cognitive change differentiation',
    icon: Brain,
    color: 'text-purple-500',
    path: '/delirium',
  },
]

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Welcome to Neuro Master
        </h1>
        <p className="text-muted-foreground text-lg">
          Master neurologic emergencies through interactive learning
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => {
          const Icon = module.icon
          return (
            <Link key={module.id} to={module.path}>
              <Card className="h-full transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-muted ${module.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                  </div>
                  <CardDescription className="mt-3">
                    {module.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          )
        })}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>About This Platform</CardTitle>
          <CardDescription>
            Neuro Master is a clinical education platform designed to help medical professionals
            master the diagnosis, stabilization, and management of neurologic emergencies.
            All cases and scenarios are synthetic and for educational purposes only.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This platform covers high-yield topics including stroke, intracranial hemorrhage,
            seizures, multiple sclerosis, CNS infections, and neuromuscular disorders.
            Each module includes interactive tools, case vignettes, and assessments to
            reinforce learning.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
