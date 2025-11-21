import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card'
import { Eye, AlertTriangle, Activity } from 'lucide-react'

export default function MGPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Myasthenia Gravis</h1>
        <p className="text-muted-foreground">
          Fluctuating weakness, crisis recognition, and neuromuscular junction dysfunction
        </p>
      </div>

      {/* Clinical Features */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary" />
            <CardTitle>Characteristic Weakness Pattern</CardTitle>
          </div>
          <CardDescription>
            Fatigable weakness improving with rest
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-semibold mb-3">Classic Features:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Fluctuating weakness:</strong> Worse with use, better with rest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Ocular symptoms:</strong> Ptosis and diplopia (most common initial)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Bulbar symptoms:</strong> Dysarthria, dysphagia, facial weakness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><strong>Limb weakness:</strong> Proximal &gt; distal</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-semibold mb-3">Key Distinguishing Features:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Reflexes preserved (unlike GBS)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>No sensory involvement</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Diurnal variation (worse as day progresses)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>Respiratory muscles may be affected</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-lg border-2 border-primary/50 bg-primary/5">
              <h3 className="font-semibold mb-2">Clinical Bedside Tests (Conceptual):</h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Ice pack test:</strong> Ptosis improves with cold application to eyelid</li>
                <li><strong>Sustained upgaze:</strong> Ptosis develops or worsens after sustained upward gaze</li>
                <li><strong>Repetitive activity:</strong> Weakness worsens with repeated movements</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Myasthenic Crisis */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle>Myasthenic Crisis Recognition</CardTitle>
          </div>
          <CardDescription>
            Life-threatening respiratory failure requiring immediate intervention
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-destructive/10 text-destructive-foreground">
            <p className="font-semibold mb-2">⚠️ Crisis Definition</p>
            <p className="text-sm">
              Respiratory failure from severe bulbar or respiratory muscle weakness requiring intubation.
              Medical emergency with significant mortality if not rapidly treated.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Warning Signs:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Difficulty swallowing or speaking</li>
              <li>Weak cough or inability to handle secretions</li>
              <li>Shortness of breath or rapid shallow breathing</li>
              <li>Inability to lift head off pillow</li>
              <li>Vital capacity declining</li>
              <li>Negative inspiratory force (NIF) worsening</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Common Triggers:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Infection (most common - especially pneumonia)</li>
              <li>Medication changes or nonadherence</li>
              <li>Surgery or anesthesia</li>
              <li>Pregnancy</li>
              <li>Certain medications (aminoglycosides, beta-blockers, others)</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-muted">
            <h3 className="font-semibold mb-2">Crisis Management Principles:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>ICU admission for close monitoring</li>
              <li>Intubation if respiratory failure</li>
              <li>IVIG or plasmapheresis (immunotherapy)</li>
              <li>Hold or reduce anticholinesterase (risk of excess secretions)</li>
              <li>Identify and treat precipitating cause</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Diagnostic Studies */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            <CardTitle>Diagnostic Approach</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Antibody Testing:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li><strong>AChR antibodies:</strong> Most specific (85% of generalized MG)</li>
              <li><strong>MuSK antibodies:</strong> Seen in some seronegative patients</li>
              <li><strong>Seronegative MG:</strong> 10-15% have no detectable antibodies</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Electrodiagnostic Testing:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li><strong>Repetitive nerve stimulation (RNS):</strong> Decremental response (&gt;10% decline)</li>
              <li><strong>Single-fiber EMG:</strong> Most sensitive test, shows increased jitter</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Associated Conditions:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li><strong>Thymoma:</strong> Get chest CT in all MG patients (10-15% have thymoma)</li>
              <li><strong>Thyroid disease:</strong> Screen thyroid function</li>
              <li><strong>Other autoimmune:</strong> Increased association with other autoimmune disorders</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Treatment */}
      <Card>
        <CardHeader>
          <CardTitle>Treatment Strategies</CardTitle>
          <CardDescription>Educational overview - not prescriptive</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Symptomatic Treatment:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li><strong>Anticholinesterase:</strong> Pyridostigmine (first-line symptomatic therapy)</li>
              <li>Improves strength by increasing ACh at neuromuscular junction</li>
              <li>Side effects: cramping, diarrhea, excess secretions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Immunosuppression:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li><strong>Corticosteroids:</strong> Prednisone commonly used</li>
              <li><strong>Steroid-sparing agents:</strong> Azathioprine, mycophenolate, others</li>
              <li>Monitor for initial worsening when starting steroids</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Rapid Immunotherapy:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li><strong>IVIG:</strong> For crisis or severe exacerbation</li>
              <li><strong>Plasmapheresis:</strong> Alternative to IVIG</li>
              <li>Both provide temporary improvement (weeks)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Thymectomy:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Recommended for thymoma</li>
              <li>Consider in generalized MG, especially younger patients</li>
              <li>Benefit may take months to years to manifest</li>
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
              <span>Ocular MG: 50% generalize within 2 years, most within first year</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Medications to AVOID: aminoglycosides, fluoroquinolones, beta-blockers, magnesium</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Cogan's lid twitch: eyelid twitches upward when returning to primary gaze</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Neonatal MG: Transient in 10-20% of infants born to mothers with MG</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Lambert-Eaton syndrome: Similar but strength IMPROVES with activity (vs MG)</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
