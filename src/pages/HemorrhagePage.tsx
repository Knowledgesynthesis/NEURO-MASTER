import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card'
import { Droplet, AlertTriangle, Activity } from 'lucide-react'

export default function HemorrhagePage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Intracranial Hemorrhage</h1>
        <p className="text-muted-foreground">
          Differentiation and acute management of ICH and SAH
        </p>
      </div>

      {/* ICH vs SAH Comparison */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Droplet className="h-5 w-5 text-primary" />
            <CardTitle>ICH vs SAH Differentiation</CardTitle>
          </div>
          <CardDescription>
            Understanding key differences for rapid recognition
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg border-b pb-2">Intracerebral Hemorrhage (ICH)</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-medium">Common Causes:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-2">
                    <li>Hypertension (most common)</li>
                    <li>Anticoagulation</li>
                    <li>Amyloid angiopathy</li>
                    <li>AVM/aneurysm</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Typical Locations:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-2">
                    <li>Basal ganglia</li>
                    <li>Thalamus</li>
                    <li>Cerebellum</li>
                    <li>Pons</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Presentation:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-2">
                    <li>Sudden focal deficits</li>
                    <li>Headache</li>
                    <li>Decreased consciousness</li>
                    <li>Nausea/vomiting</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg border-b pb-2">Subarachnoid Hemorrhage (SAH)</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-medium">Common Causes:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-2">
                    <li>Aneurysm rupture (85%)</li>
                    <li>Trauma</li>
                    <li>AVM</li>
                    <li>Perimesencephalic (benign)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Classic Findings:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-2">
                    <li>Blood in subarachnoid space</li>
                    <li>Cisternal filling on CT</li>
                    <li>May see hydrocephalus</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Presentation:</p>
                  <ul className="list-disc list-inside text-muted-foreground ml-2">
                    <li>"Thunderclap" headache</li>
                    <li>Worst headache of life</li>
                    <li>Neck stiffness</li>
                    <li>Photophobia</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Acute Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            <CardTitle>Acute Management Principles</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">ICH Management:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Blood pressure control (conceptual targets vary by guidelines)</li>
              <li>Reversal of anticoagulation if applicable</li>
              <li>ICP monitoring considerations</li>
              <li>Neurosurgical evaluation for large/expanding bleeds</li>
              <li>Avoid antiplatelets/anticoagulants acutely</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">SAH Management:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Secure airway if needed</li>
              <li>Blood pressure management</li>
              <li>Aneurysm identification (CTA/DSA)</li>
              <li>Nimodipine for vasospasm prevention</li>
              <li>Monitor for rebleeding and hydrocephalus</li>
            </ul>
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
              <span>Rapid neurological deterioration → Consider herniation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-destructive">•</span>
              <span>Cerebellar hemorrhage → High risk of obstructive hydrocephalus</span>
            </li>
            <li className="flex gap-2">
              <span className="text-destructive">•</span>
              <span>Intraventricular extension → Worse prognosis, may need EVD</span>
            </li>
            <li className="flex gap-2">
              <span className="text-destructive">•</span>
              <span>Anticoagulation-related ICH → Urgent reversal needed</span>
            </li>
            <li className="flex gap-2">
              <span className="text-destructive">•</span>
              <span>Aneurysmal SAH → Early securing to prevent rebleeding</span>
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
              <span>Noncontrast CT is first-line imaging for suspected hemorrhage</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>If SAH suspected but CT negative, consider LP for xanthochromia</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Location matters: deep = hypertensive; lobar = amyloid angiopathy</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>ICH score helps predict mortality risk</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Vasospasm in SAH typically peaks 7-10 days after initial bleed</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
