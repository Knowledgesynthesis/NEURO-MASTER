import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card'
import { Button } from '@/components/Button'
import { AlertCircle, Clock, Brain, Activity } from 'lucide-react'

export default function StrokePage() {
  const [timeLastWell, setTimeLastWell] = useState('')
  const [systolicBP, setSystolicBP] = useState('')
  const [hasContraindications, setHasContraindications] = useState<boolean | null>(null)
  const [result, setResult] = useState<string | null>(null)

  const calculateEligibility = () => {
    const time = parseInt(timeLastWell)
    const bp = parseInt(systolicBP)

    if (isNaN(time) || isNaN(bp)) {
      setResult('Please enter valid numbers for all fields')
      return
    }

    if (hasContraindications === null) {
      setResult('Please select contraindication status')
      return
    }

    if (hasContraindications) {
      setResult('❌ Not eligible - Contraindications present')
    } else if (bp > 185) {
      setResult('⚠️ May require BP control - Systolic BP > 185 mmHg')
    } else if (time > 270) {
      setResult('❌ Outside typical window - Consider thrombectomy if LVO present')
    } else if (time <= 270) {
      setResult('✅ May be eligible for thrombolytic therapy (educational concept)')
    } else {
      setResult('⚠️ Individual assessment required')
    }
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Ischemic Stroke & TIA</h1>
        <p className="text-muted-foreground">
          Learn stroke recognition, tPA eligibility, and thrombectomy criteria
        </p>
      </div>

      {/* tPA Calculator Tool */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <CardTitle>tPA Eligibility Calculator</CardTitle>
          </div>
          <CardDescription>
            Educational tool for understanding thrombolytic therapy criteria (synthetic use only)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Time Last Known Well (minutes)
            </label>
            <input
              type="number"
              value={timeLastWell}
              onChange={(e) => setTimeLastWell(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-input bg-background"
              placeholder="e.g., 120"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Systolic Blood Pressure (mmHg)
            </label>
            <input
              type="number"
              value={systolicBP}
              onChange={(e) => setSystolicBP(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-input bg-background"
              placeholder="e.g., 165"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Known Contraindications?
            </label>
            <div className="flex gap-4">
              <Button
                variant={hasContraindications === false ? "default" : "outline"}
                onClick={() => setHasContraindications(false)}
              >
                No
              </Button>
              <Button
                variant={hasContraindications === true ? "default" : "outline"}
                onClick={() => setHasContraindications(true)}
              >
                Yes
              </Button>
            </div>
          </div>

          <Button onClick={calculateEligibility} className="w-full">
            Calculate Eligibility
          </Button>

          {result && (
            <div className="p-4 rounded-lg bg-muted text-foreground font-medium">
              {result}
            </div>
          )}

          <div className="text-xs text-muted-foreground space-y-1 pt-2">
            <p>⚠️ Educational purposes only - Not for clinical use</p>
            <p>This is a simplified conceptual model for learning</p>
          </div>
        </CardContent>
      </Card>

      {/* Key Concepts */}
      <Card>
        <CardHeader>
          <CardTitle>Key Concepts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Activity className="h-4 w-4" />
              FAST Exam
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li><strong>F</strong>ace drooping - Ask patient to smile</li>
              <li><strong>A</strong>rm weakness - Ask patient to raise both arms</li>
              <li><strong>S</strong>peech difficulty - Ask patient to repeat a phrase</li>
              <li><strong>T</strong>ime to call emergency services</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Thrombectomy Criteria
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Large vessel occlusion (LVO) on imaging</li>
              <li>Can be considered up to 24 hours in selected patients</li>
              <li>CTA/MRA to identify LVO location</li>
              <li>ASPECTS score may help guide decision</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              Stroke Mimics & Pitfalls
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Posterior circulation strokes (vertigo, diplopia, ataxia)</li>
              <li>Hypoglycemia can mimic stroke</li>
              <li>Seizure with Todd's paralysis</li>
              <li>Hemiplegic migraine</li>
              <li>Conversion disorder</li>
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
              <span>"Time is brain" - Every minute counts in acute stroke management</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Always check glucose early - hypoglycemia is a common mimic</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Posterior strokes may have normal initial CT - consider MRI</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>BP management differs before vs after thrombolysis</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Atrial fibrillation is a major risk factor for cardioembolic stroke</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
