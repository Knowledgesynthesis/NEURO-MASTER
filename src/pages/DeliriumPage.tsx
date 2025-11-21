import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card'
import { Button } from '@/components/Button'
import { Brain, Clock, AlertCircle } from 'lucide-react'

export default function DeliriumPage() {
  const [onset, setOnset] = useState<'acute' | 'chronic' | ''>('')
  const [fluctuation, setFluctuation] = useState<'yes' | 'no' | ''>('')
  const [attention, setAttention] = useState<'impaired' | 'intact' | ''>('')
  const [result, setResult] = useState('')

  const assessCognition = () => {
    if (!onset || !fluctuation || !attention) {
      setResult('Please complete all fields')
      return
    }

    if (onset === 'acute' && fluctuation === 'yes' && attention === 'impaired') {
      setResult('🔴 Pattern consistent with DELIRIUM - Acute onset, fluctuating course, inattention')
    } else if (onset === 'chronic' && fluctuation === 'no') {
      setResult('🔵 Pattern more consistent with DEMENTIA - Chronic, stable course')
    } else {
      setResult('⚠️ Mixed or atypical pattern - Consider further evaluation and reversible causes')
    }
  }

  const resetTool = () => {
    setOnset('')
    setFluctuation('')
    setAttention('')
    setResult('')
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Delirium vs Dementia</h1>
        <p className="text-muted-foreground">
          Differentiating acute and chronic cognitive changes
        </p>
      </div>

      {/* Assessment Tool */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <CardTitle>Delirium vs Dementia Differentiation Tool</CardTitle>
          </div>
          <CardDescription>
            Educational framework for cognitive assessment (not diagnostic)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Onset of Symptoms</label>
            <div className="flex gap-3">
              <Button
                variant={onset === 'acute' ? 'default' : 'outline'}
                onClick={() => setOnset('acute')}
                size="sm"
              >
                Acute (hours-days)
              </Button>
              <Button
                variant={onset === 'chronic' ? 'default' : 'outline'}
                onClick={() => setOnset('chronic')}
                size="sm"
              >
                Chronic (months-years)
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Course/Fluctuation</label>
            <div className="flex gap-3">
              <Button
                variant={fluctuation === 'yes' ? 'default' : 'outline'}
                onClick={() => setFluctuation('yes')}
                size="sm"
              >
                Fluctuating
              </Button>
              <Button
                variant={fluctuation === 'no' ? 'default' : 'outline'}
                onClick={() => setFluctuation('no')}
                size="sm"
              >
                Stable/Progressive
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Attention</label>
            <div className="flex gap-3">
              <Button
                variant={attention === 'impaired' ? 'default' : 'outline'}
                onClick={() => setAttention('impaired')}
                size="sm"
              >
                Impaired
              </Button>
              <Button
                variant={attention === 'intact' ? 'default' : 'outline'}
                onClick={() => setAttention('intact')}
                size="sm"
              >
                Relatively Intact
              </Button>
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={assessCognition} className="flex-1">
              Assess Pattern
            </Button>
            <Button onClick={resetTool} variant="outline">
              Reset
            </Button>
          </div>

          {result && (
            <div className="p-4 rounded-lg bg-muted text-foreground">
              {result}
            </div>
          )}

          <p className="text-xs text-muted-foreground">
            ⚠️ Educational purposes only - Clinical correlation required
          </p>
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <CardTitle>Feature Comparison</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-semibold">Feature</th>
                  <th className="text-left p-2 font-semibold">Delirium</th>
                  <th className="text-left p-2 font-semibold">Dementia</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="p-2 font-medium">Onset</td>
                  <td className="p-2">Acute (hours-days)</td>
                  <td className="p-2">Insidious (months-years)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Course</td>
                  <td className="p-2">Fluctuating, worse at night</td>
                  <td className="p-2">Stable, progressive</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Duration</td>
                  <td className="p-2">Days to weeks</td>
                  <td className="p-2">Months to years</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Attention</td>
                  <td className="p-2">Impaired (key feature)</td>
                  <td className="p-2">Usually intact until late</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Consciousness</td>
                  <td className="p-2">Altered (drowsy or agitated)</td>
                  <td className="p-2">Usually clear</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Reversibility</td>
                  <td className="p-2">Often reversible</td>
                  <td className="p-2">Usually irreversible</td>
                </tr>
                <tr>
                  <td className="p-2 font-medium">Hallucinations</td>
                  <td className="p-2">Common (especially visual)</td>
                  <td className="p-2">Less common</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* CAM Criteria */}
      <Card>
        <CardHeader>
          <CardTitle>Confusion Assessment Method (CAM)</CardTitle>
          <CardDescription>
            Widely used screening tool for delirium
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-sm font-semibold">Delirium diagnosed if BOTH (1 AND 2) PLUS (3 OR 4):</p>
            <div className="space-y-3 ml-4">
              <div className="p-3 rounded-lg bg-muted">
                <p className="font-semibold text-sm">1. Acute onset and fluctuating course</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Evidence of sudden change from baseline that varies during the day
                </p>
              </div>
              <div className="p-3 rounded-lg bg-muted">
                <p className="font-semibold text-sm">2. Inattention</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Difficulty focusing, easily distracted, trouble following conversation
                </p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50">
                <p className="font-semibold text-sm">3. Disorganized thinking</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Rambling, illogical flow of ideas, unpredictable switching between subjects
                </p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50">
                <p className="font-semibold text-sm">4. Altered level of consciousness</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Lethargic, stuporous, hyperalert, or comatose (anything other than alert)
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Delirium Causes */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-primary" />
            <CardTitle>Common Causes of Delirium</CardTitle>
          </div>
          <CardDescription>
            "I WATCH DEATH" mnemonic
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm">
              <li><strong>I</strong>nfection</li>
              <li><strong>W</strong>ithdrawal (alcohol, benzos)</li>
              <li><strong>A</strong>cute metabolic (electrolytes, glucose)</li>
              <li><strong>T</strong>rauma / pain</li>
              <li><strong>C</strong>NS pathology (stroke, seizure)</li>
              <li><strong>H</strong>ypoxia</li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li><strong>D</strong>eficiencies (B12, thiamine)</li>
              <li><strong>E</strong>ndocrine (thyroid, glucose)</li>
              <li><strong>A</strong>cute vascular (MI, PE)</li>
              <li><strong>T</strong>oxins / drugs</li>
              <li><strong>H</strong>eavy metals</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Management */}
      <Card>
        <CardHeader>
          <CardTitle>Delirium Management Principles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Identify and Treat Underlying Cause:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Complete medical workup (labs, imaging as indicated)</li>
              <li>Review all medications (anticholinergics, sedatives)</li>
              <li>Treat infection, correct metabolic abnormalities</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Non-Pharmacologic Interventions (First-line):</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Reorientation (clocks, calendars, familiar objects)</li>
              <li>Normalize sleep-wake cycle</li>
              <li>Early mobilization</li>
              <li>Adequate hydration and nutrition</li>
              <li>Vision/hearing aids if applicable</li>
              <li>Minimize restraints and catheters</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Pharmacologic Management:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Reserved for severe agitation or safety concerns</li>
              <li>Low-dose antipsychotics may be considered</li>
              <li>Avoid benzodiazepines (except alcohol/benzo withdrawal)</li>
              <li>Use lowest effective dose for shortest duration</li>
            </ul>
          </div>
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
              <span>Hypoactive delirium often missed - patient seems "quiet" but is inattentive</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Delirium can coexist with dementia (often precipitated by acute illness)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Prevention is key: target modifiable risk factors in hospitalized patients</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Sundowning: worsening confusion in evening, common in both delirium and dementia</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Always rule out hypoglycemia and hypoxia first - rapid reversible causes</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
