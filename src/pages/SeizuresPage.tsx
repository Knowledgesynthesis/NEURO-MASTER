import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card'
import { Button } from '@/components/Button'
import { Activity, Clock, AlertCircle } from 'lucide-react'

type SeizureStage = 'initial' | 'stage1' | 'stage2' | 'stage3'

export default function SeizuresPage() {
  const [currentStage, setCurrentStage] = useState<SeizureStage>('initial')
  const [response, setResponse] = useState<'responded' | 'continued' | null>(null)

  const resetSimulator = () => {
    setCurrentStage('initial')
    setResponse(null)
  }

  const handleResponse = (responded: boolean) => {
    setResponse(responded ? 'responded' : 'continued')

    if (!responded) {
      if (currentStage === 'initial') setCurrentStage('stage1')
      else if (currentStage === 'stage1') setCurrentStage('stage2')
      else if (currentStage === 'stage2') setCurrentStage('stage3')
    }
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Seizures & Status Epilepticus</h1>
        <p className="text-muted-foreground">
          Classification, acute management, and stepwise treatment protocols
        </p>
      </div>

      {/* Status Epilepticus Simulator */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <CardTitle>Status Epilepticus Management Pathway</CardTitle>
          </div>
          <CardDescription>
            Interactive simulator for stepwise treatment (educational concept only)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-muted">
            <div className="space-y-3">
              {currentStage === 'initial' && (
                <>
                  <p className="font-semibold">Initial Management (0-5 minutes)</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Assess ABCs, provide oxygen</li>
                    <li>Check glucose, give thiamine if indicated</li>
                    <li>Establish IV access</li>
                    <li>Give benzodiazepine (lorazepam, midazolam, or diazepam)</li>
                  </ul>
                </>
              )}

              {currentStage === 'stage1' && (
                <>
                  <p className="font-semibold">Stage 1: Anti-Seizure Medication (5-20 minutes)</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Load with IV anti-seizure medication</li>
                    <li>Options: fosphenytoin, valproate, or levetiracetam</li>
                    <li>Continue monitoring vitals and respiratory status</li>
                    <li>Repeat benzodiazepine if still seizing</li>
                  </ul>
                </>
              )}

              {currentStage === 'stage2' && (
                <>
                  <p className="font-semibold">Stage 2: Additional ASM (20-40 minutes)</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Add second-line anti-seizure medication</li>
                    <li>Consider alternative ASM if first ineffective</li>
                    <li>Prepare for possible intubation</li>
                    <li>Consider ICU transfer</li>
                  </ul>
                </>
              )}

              {currentStage === 'stage3' && (
                <>
                  <p className="font-semibold text-destructive">Stage 3: Refractory Status (40+ minutes)</p>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Transfer to ICU</li>
                    <li>Intubation for airway protection</li>
                    <li>Anesthetic agents (propofol, midazolam, pentobarbital)</li>
                    <li>Continuous EEG monitoring</li>
                  </ul>
                </>
              )}
            </div>
          </div>

          {response === null && currentStage !== 'stage3' && (
            <div className="space-y-3">
              <p className="text-sm font-medium">Did the patient respond to treatment?</p>
              <div className="flex gap-3">
                <Button onClick={() => handleResponse(true)} variant="default">
                  ✓ Seizure Stopped
                </Button>
                <Button onClick={() => handleResponse(false)} variant="destructive">
                  → Still Seizing
                </Button>
              </div>
            </div>
          )}

          {response === 'responded' && (
            <div className="p-4 rounded-lg bg-primary/10 text-primary">
              <p className="font-semibold">✓ Seizure controlled!</p>
              <p className="text-sm mt-1">Continue monitoring and identify/treat underlying cause</p>
            </div>
          )}

          {currentStage === 'stage3' && (
            <div className="p-4 rounded-lg bg-destructive/10 text-destructive">
              <p className="font-semibold">⚠️ Refractory Status Epilepticus</p>
              <p className="text-sm mt-1">Requires ICU-level care with continuous EEG monitoring</p>
            </div>
          )}

          <Button onClick={resetSimulator} variant="outline" className="w-full">
            Reset Simulator
          </Button>

          <p className="text-xs text-muted-foreground">
            ⚠️ Educational purposes only - Not for clinical use
          </p>
        </CardContent>
      </Card>

      {/* Seizure Classification */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            <CardTitle>Seizure Classification</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Focal (Partial) Seizures:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Focal aware:</strong> Consciousness preserved (formerly "simple partial")</li>
                <li><strong>Focal impaired awareness:</strong> Consciousness altered (formerly "complex partial")</li>
                <li><strong>Focal to bilateral tonic-clonic:</strong> Starts focal, generalizes</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Generalized Seizures:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Tonic-clonic:</strong> Stiffening followed by rhythmic jerking</li>
                <li><strong>Absence:</strong> Brief staring spells, 3 Hz spike-wave</li>
                <li><strong>Myoclonic:</strong> Brief muscle jerks</li>
                <li><strong>Atonic:</strong> Sudden loss of muscle tone ("drop attacks")</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Clinical Pearls */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-primary" />
            <CardTitle>Clinical Pearls</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Status epilepticus is defined as &gt;5 minutes of continuous seizure activity</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Don't delay benzodiazepines - they're most effective early</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Always check glucose and consider thiamine in at-risk patients</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Todd's paralysis: post-ictal weakness that can mimic stroke</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>New-onset seizure in adults: consider imaging to rule out structural lesion</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Non-convulsive status can present as altered mental status without obvious motor activity</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
