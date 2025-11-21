import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card'
import { TrendingDown, AlertTriangle, Activity } from 'lucide-react'

export default function GBSPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Guillain-Barré Syndrome</h1>
        <p className="text-muted-foreground">
          Recognition, monitoring, and management of acute inflammatory demyelinating polyneuropathy
        </p>
      </div>

      {/* Clinical Pattern */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-primary" />
            <CardTitle>Classic Ascending Weakness Pattern</CardTitle>
          </div>
          <CardDescription>
            Recognizing the characteristic presentation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-semibold mb-3">Typical Features:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">1.</span>
                    <span><strong>Ascending weakness:</strong> Starts in legs, progresses upward</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">2.</span>
                    <span><strong>Areflexia:</strong> Loss of deep tendon reflexes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">3.</span>
                    <span><strong>Symmetric:</strong> Both sides affected similarly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">4.</span>
                    <span><strong>Progression:</strong> Typically over days to 4 weeks</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-muted">
                <h3 className="font-semibold mb-3">Associated Features:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Preceding infection (1-3 weeks before) - often GI or respiratory</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Paresthesias and sensory changes</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Facial weakness (bifacial in many cases)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Autonomic dysfunction possible</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-lg border-2 border-primary/50 bg-primary/5">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Activity className="h-4 w-4" />
                Diagnostic Clues
              </h3>
              <ul className="space-y-1 text-sm">
                <li><strong>CSF:</strong> Albuminocytologic dissociation (high protein, normal cell count)</li>
                <li><strong>EMG/NCS:</strong> Demyelinating pattern (prolonged distal latencies, slowed conduction)</li>
                <li><strong>Clinical:</strong> Progressive symmetric weakness + areflexia</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Respiratory Monitoring */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle>Respiratory Monitoring & Crisis</CardTitle>
          </div>
          <CardDescription>
            Critical assessment for intubation timing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-destructive/10 text-destructive-foreground">
            <p className="font-semibold mb-2">⚠️ Respiratory Failure Risk</p>
            <p className="text-sm">
              GBS can progress to respiratory failure requiring mechanical ventilation in 20-30% of cases.
              Close monitoring is essential.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Clinical Indicators to Monitor:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Vital capacity (VC) - concerning if &lt;20 mL/kg</li>
              <li>Negative inspiratory force (NIF) - concerning if &gt;-30 cm H2O</li>
              <li>Inability to count to 20 in one breath</li>
              <li>Weak cough or difficulty clearing secretions</li>
              <li>Tachypnea or use of accessory muscles</li>
              <li>Bulbar weakness (dysphagia, dysarthria)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">20/30/40 Rule (Educational Concept):</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>VC &lt;20 mL/kg</li>
              <li>NIF worse than -30 cm H2O</li>
              <li>PaO2 &lt;70 or elevated PaCO2</li>
              <li>Consider early intubation if multiple parameters met</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Treatment */}
      <Card>
        <CardHeader>
          <CardTitle>Treatment Strategies</CardTitle>
          <CardDescription>Educational overview of immunomodulation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Immunotherapy Options:</h3>
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <div className="p-3 rounded-lg border">
                <p className="font-semibold text-sm mb-2">IVIG (Intravenous Immunoglobulin)</p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Standard dose: 0.4 g/kg/day × 5 days</li>
                  <li>• Generally well tolerated</li>
                  <li>• Side effects: headache, thrombosis risk</li>
                </ul>
              </div>

              <div className="p-3 rounded-lg border">
                <p className="font-semibold text-sm mb-2">Plasmapheresis (PLEX)</p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Typically 5 exchanges over 10-14 days</li>
                  <li>• Requires central access</li>
                  <li>• May have more adverse events</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              <strong>Note:</strong> IVIG and PLEX are equally effective. Combination not superior to monotherapy.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Supportive Care:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>DVT prophylaxis (high risk of thromboembolic events)</li>
              <li>Physical therapy and mobilization</li>
              <li>Pain management (neuropathic pain common)</li>
              <li>Autonomic monitoring (arrhythmias, blood pressure lability)</li>
              <li>Bladder and bowel care</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Variants */}
      <Card>
        <CardHeader>
          <CardTitle>GBS Variants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-sm">Miller Fisher Syndrome:</h3>
              <p className="text-sm text-muted-foreground">
                Triad: Ophthalmoplegia, ataxia, areflexia (GQ1b antibodies)
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Acute Motor Axonal Neuropathy (AMAN):</h3>
              <p className="text-sm text-muted-foreground">
                Pure motor involvement, more common in Asia, associated with Campylobacter
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Acute Motor-Sensory Axonal Neuropathy (AMSAN):</h3>
              <p className="text-sm text-muted-foreground">
                Both motor and sensory axons affected, typically more severe
              </p>
            </div>
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
              <span>Campylobacter jejuni is most common preceding infection</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Autonomic instability can cause dangerous arrhythmias</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Steroids are NOT beneficial in GBS (unlike other inflammatory neuropathies)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Most patients have good recovery but may take months to years</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Proximal weakness and early bulbar involvement predict need for ventilation</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
