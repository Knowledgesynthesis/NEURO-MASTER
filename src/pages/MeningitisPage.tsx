import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card'
import { Button } from '@/components/Button'
import { Bug, Droplets, AlertTriangle } from 'lucide-react'

export default function MeningitisPage() {
  const [wbc, setWbc] = useState('')
  const [proteinLevel, setProteinLevel] = useState<'low' | 'normal' | 'high' | ''>('')
  const [glucoseLevel, setGlucoseLevel] = useState<'low' | 'normal' | ''>('')
  const [predominantCell, setPredominantCell] = useState<'neutrophils' | 'lymphocytes' | ''>('')
  const [interpretation, setInterpretation] = useState('')

  const interpretCSF = () => {
    if (!wbc || !proteinLevel || !glucoseLevel || !predominantCell) {
      setInterpretation('Please complete all fields')
      return
    }

    if (predominantCell === 'neutrophils' && proteinLevel === 'high' && glucoseLevel === 'low') {
      setInterpretation('🔴 Pattern suggests BACTERIAL meningitis - High WBC (neutrophils), High protein, Low glucose')
    } else if (predominantCell === 'lymphocytes' && proteinLevel === 'high' && glucoseLevel === 'normal') {
      setInterpretation('🔵 Pattern suggests VIRAL meningitis - Moderate WBC (lymphocytes), Elevated protein, Normal glucose')
    } else if (predominantCell === 'lymphocytes' && proteinLevel === 'high' && glucoseLevel === 'low') {
      setInterpretation('⚠️ Pattern suggests FUNGAL or TB meningitis - Lymphocytic predominance, High protein, Low glucose')
    } else {
      setInterpretation('⚪ Mixed or atypical pattern - Consider clinical context and other studies')
    }
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Meningitis & Encephalitis</h1>
        <p className="text-muted-foreground">
          CSF interpretation, diagnostic strategies, and empiric management
        </p>
      </div>

      {/* CSF Interpreter */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-primary" />
            <CardTitle>CSF Interpreter Tool</CardTitle>
          </div>
          <CardDescription>
            Pattern recognition for cerebrospinal fluid analysis (educational)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">WBC Count (cells/μL)</label>
            <input
              type="number"
              value={wbc}
              onChange={(e) => setWbc(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-input bg-background"
              placeholder="e.g., 1200"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Predominant Cell Type</label>
            <div className="flex gap-3">
              <Button
                variant={predominantCell === 'neutrophils' ? 'default' : 'outline'}
                onClick={() => setPredominantCell('neutrophils')}
                size="sm"
              >
                Neutrophils
              </Button>
              <Button
                variant={predominantCell === 'lymphocytes' ? 'default' : 'outline'}
                onClick={() => setPredominantCell('lymphocytes')}
                size="sm"
              >
                Lymphocytes
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Protein Level</label>
            <div className="flex gap-3">
              <Button
                variant={proteinLevel === 'normal' ? 'default' : 'outline'}
                onClick={() => setProteinLevel('normal')}
                size="sm"
              >
                Normal
              </Button>
              <Button
                variant={proteinLevel === 'high' ? 'default' : 'outline'}
                onClick={() => setProteinLevel('high')}
                size="sm"
              >
                High
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Glucose Level</label>
            <div className="flex gap-3">
              <Button
                variant={glucoseLevel === 'normal' ? 'default' : 'outline'}
                onClick={() => setGlucoseLevel('normal')}
                size="sm"
              >
                Normal
              </Button>
              <Button
                variant={glucoseLevel === 'low' ? 'default' : 'outline'}
                onClick={() => setGlucoseLevel('low')}
                size="sm"
              >
                Low
              </Button>
            </div>
          </div>

          <Button onClick={interpretCSF} className="w-full">
            Interpret CSF Pattern
          </Button>

          {interpretation && (
            <div className="p-4 rounded-lg bg-muted text-foreground">
              {interpretation}
            </div>
          )}

          <p className="text-xs text-muted-foreground">
            ⚠️ Educational purposes only - Clinical correlation required
          </p>
        </CardContent>
      </Card>

      {/* LP vs CT Decision */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bug className="h-5 w-5 text-primary" />
            <CardTitle>LP vs CT: When to Image First</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Get CT Head BEFORE LP if:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Immunocompromised state</li>
                <li>History of CNS disease (mass, stroke, focal infection)</li>
                <li>New-onset seizure</li>
                <li>Papilledema on exam</li>
                <li>Altered consciousness (GCS ≤11)</li>
                <li>Focal neurologic deficit</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-muted">
              <p className="font-semibold text-sm mb-2">⚠️ Don't delay antibiotics!</p>
              <p className="text-sm text-muted-foreground">
                If CT is needed before LP, give empiric antibiotics immediately after blood cultures.
                Delaying antibiotics to get LP first increases morbidity and mortality.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Empiric Treatment */}
      <Card>
        <CardHeader>
          <CardTitle>Empiric Antimicrobial Strategies</CardTitle>
          <CardDescription>Educational framework - Not prescriptive</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Community-Acquired Bacterial Meningitis:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Third-generation cephalosporin (e.g., ceftriaxone)</li>
                <li>Vancomycin (for resistant pneumococcus)</li>
                <li>Consider dexamethasone (before or with first antibiotic dose)</li>
                <li>Add ampicillin if Listeria risk (age &gt;50, immunocompromised)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Viral Meningitis/Encephalitis:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Acyclovir if HSV encephalitis suspected</li>
                <li>Supportive care for most viral meningitis</li>
                <li>Consider PCR testing for common viruses</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Red Flags */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle>Critical Red Flags</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-destructive">•</span>
              <span>Petechial rash → Think Neisseria meningitidis (meningococcemia)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-destructive">•</span>
              <span>Temporal lobe changes → HSV encephalitis (needs acyclovir ASAP)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-destructive">•</span>
              <span>Recent neurosurgery → Cover for Staph (vancomycin)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-destructive">•</span>
              <span>Basilar skull fracture → Pneumococcal coverage</span>
            </li>
            <li className="flex gap-2">
              <span className="text-destructive">•</span>
              <span>Opening pressure &gt;25 cm H2O → Monitor for increased ICP</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Clinical Pearls */}
      <Card>
        <CardHeader>
          <CardTitle>Clinical Pearls</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Classic triad (fever, neck stiffness, altered mental status) present in &lt;50%</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Kernig and Brudzinski signs have low sensitivity</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>CSF glucose &lt;40 or &lt;40% of serum glucose suggests bacterial</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Bacterial Meningitis Score (BMS) can help rule out bacterial in children</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Partially treated meningitis can have atypical CSF patterns</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
