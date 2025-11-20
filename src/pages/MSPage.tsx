import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card'
import { Loader2, AlertCircle, Pill } from 'lucide-react'

export default function MSPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Multiple Sclerosis</h1>
        <p className="text-muted-foreground">
          Relapse recognition, acute management, and disease-modifying strategies
        </p>
      </div>

      {/* Relapse vs Progression */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Loader2 className="h-5 w-5 text-primary" />
            <CardTitle>Relapse vs Progression</CardTitle>
          </div>
          <CardDescription>
            Distinguishing acute flares from chronic disease progression
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg border-b pb-2">MS Relapse (Flare)</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>New or worsening symptoms lasting &gt;24 hours</li>
                <li>Absence of fever or infection</li>
                <li>Typical duration: days to weeks</li>
                <li>May show new MRI lesions</li>
                <li>Responds to corticosteroids</li>
              </ul>
              <div className="mt-4 p-3 rounded-lg bg-muted">
                <p className="text-sm font-medium mb-2">Common Relapse Symptoms:</p>
                <ul className="text-xs space-y-1">
                  <li>• Optic neuritis (vision loss, pain with eye movement)</li>
                  <li>• Transverse myelitis (weakness, sensory changes)</li>
                  <li>• Brainstem symptoms (diplopia, vertigo, ataxia)</li>
                  <li>• Focal weakness or numbness</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg border-b pb-2">Disease Progression</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Gradual worsening over months</li>
                <li>Not associated with acute attacks</li>
                <li>Minimal response to steroids</li>
                <li>May represent transition to progressive MS</li>
                <li>Brain atrophy on imaging</li>
              </ul>
              <div className="mt-4 p-3 rounded-lg bg-muted">
                <p className="text-sm font-medium mb-2">MS Disease Courses:</p>
                <ul className="text-xs space-y-1">
                  <li>• <strong>RRMS:</strong> Relapsing-remitting (most common)</li>
                  <li>• <strong>SPMS:</strong> Secondary progressive</li>
                  <li>• <strong>PPMS:</strong> Primary progressive</li>
                  <li>• <strong>CIS:</strong> Clinically isolated syndrome</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Acute Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Pill className="h-5 w-5 text-primary" />
            <CardTitle>Acute Relapse Management</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">High-Dose Corticosteroids (Educational)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Typically used for moderate to severe relapses</li>
              <li>Shortens duration but doesn't affect long-term outcome</li>
              <li>May be given IV or oral (high dose)</li>
              <li>Monitor for hyperglycemia, mood changes, insomnia</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">When to Consider Plasma Exchange</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Severe relapses not responding to steroids</li>
              <li>Fulminant CNS demyelination</li>
              <li>Significant functional impairment</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Symptomatic Management</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Spasticity: baclofen, tizanidine, physical therapy</li>
              <li>Fatigue: amantadine, modafinil, energy conservation</li>
              <li>Neuropathic pain: gabapentin, pregabalin, duloxetine</li>
              <li>Bladder dysfunction: anticholinergics, catheterization</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Disease-Modifying Therapies */}
      <Card>
        <CardHeader>
          <CardTitle>Disease-Modifying Therapies Overview</CardTitle>
          <CardDescription>
            Reducing relapse rate and slowing progression (educational concepts)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Injectable Therapies:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Interferon beta preparations</li>
                <li>Glatiramer acetate</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Oral Therapies:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Fingolimod, dimethyl fumarate, teriflunomide</li>
                <li>Cladribine, siponimod, ozanimod</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Infusion Therapies (High Efficacy):</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Natalizumab (PML risk - requires JCV monitoring)</li>
                <li>Ocrelizumab (B-cell depletion)</li>
                <li>Alemtuzumab (intensive immune modulation)</li>
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
              <span>McDonald criteria: Dissemination in time AND space</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Uhthoff phenomenon: Symptoms worsen with heat/exercise</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Lhermitte sign: Electric shock sensation with neck flexion</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Optic neuritis: RAPD, central scotoma, pain with eye movement</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>MRI: Periventricular, juxtacortical, infratentorial lesions</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>CSF: Oligoclonal bands (not specific but supportive)</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
