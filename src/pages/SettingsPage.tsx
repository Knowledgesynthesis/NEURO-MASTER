import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/Card'
import { Button } from '@/components/Button'
import { useThemeStore } from '@/store/themeStore'
import { Moon, Sun, Info, AlertTriangle, Brain } from 'lucide-react'

export default function SettingsPage() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Customize your experience and learn about the app
        </p>
      </div>

      {/* Theme Toggle */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            Appearance
          </CardTitle>
          <CardDescription>
            Switch between light and dark mode
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Theme</p>
              <p className="text-sm text-muted-foreground">
                Currently using {theme} mode
              </p>
            </div>
            <Button onClick={toggleTheme} variant="outline" className="gap-2">
              {theme === 'dark' ? (
                <>
                  <Sun className="h-4 w-4" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4" />
                  Dark Mode
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* About the App */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            About Neuro Master
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Mission</h3>
            <p className="text-sm text-muted-foreground">
              Neuro Master is a clinical education platform designed to help medical professionals
              master the diagnosis, stabilization, and management of neurologic emergencies through
              interactive learning modules, case vignettes, and practical tools.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Educational Scope</h3>
            <p className="text-sm text-muted-foreground mb-2">
              This platform covers eight major neurologic topics:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
              <li>• Ischemic Stroke & TIA</li>
              <li>• Intracranial Hemorrhage</li>
              <li>• Seizures & Status Epilepticus</li>
              <li>• Multiple Sclerosis</li>
              <li>• Meningitis & Encephalitis</li>
              <li>• Guillain-Barré Syndrome</li>
              <li>• Myasthenia Gravis & Myasthenic Crisis</li>
              <li>• Delirium vs Dementia</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Target Learners</h3>
            <p className="text-sm text-muted-foreground">
              Emergency medicine residents, internal medicine residents, ICU trainees, neurology-bound
              medical students, physician assistants, nurse practitioners, and other healthcare
              professionals seeking to enhance their neurologic emergency management skills.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4">
              <li>• Interactive clinical tools and calculators</li>
              <li>• Educational case vignettes and scenarios</li>
              <li>• Evidence-based conceptual frameworks</li>
              <li>• Assessment questions with detailed explanations</li>
              <li>• Mobile-first responsive design</li>
              <li>• Dark and light mode support</li>
            </ul>
          </div>

          <div className="flex items-center gap-2 pt-4 border-t">
            <Brain className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-semibold">Version 1.0.0</p>
              <p className="text-xs text-muted-foreground">Educational Platform</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimers */}
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            Important Disclaimers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Educational Purposes Only</h3>
            <p className="text-sm text-muted-foreground">
              This application is designed solely for educational and training purposes. It is NOT
              intended for use in actual clinical decision-making or patient care. All cases,
              scenarios, and examples are synthetic and conceptual.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Not a Substitute for Clinical Judgment</h3>
            <p className="text-sm text-muted-foreground">
              The information provided in this app should never replace professional medical advice,
              diagnosis, or treatment. Always consult with qualified healthcare professionals and
              refer to current clinical guidelines and institutional protocols for patient care
              decisions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">No Protected Health Information (PHI)</h3>
            <p className="text-sm text-muted-foreground">
              This platform does not contain any real patient data, protected health information,
              or identifiable medical records. All clinical scenarios are fictional and created for
              educational purposes only.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Synthetic Data and Conceptual Models</h3>
            <p className="text-sm text-muted-foreground">
              All dosing information, treatment protocols, and clinical criteria presented are
              conceptual frameworks for learning. They are not prescriptive and may not reflect
              the most current evidence or guidelines. Always refer to current literature,
              institutional protocols, and prescribing information.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Guideline Alignment</h3>
            <p className="text-sm text-muted-foreground">
              While this platform aims to align with major guidelines (AHA/ASA, neurocritical care
              guidelines, etc.), it presents simplified educational concepts. Guidelines are updated
              regularly - always consult the most current versions for clinical practice.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Liability Limitation</h3>
            <p className="text-sm text-muted-foreground">
              The creators and contributors of this educational platform assume no liability for
              any errors, omissions, or outcomes resulting from the use of this information. Users
              are responsible for their own clinical decisions and should exercise independent
              professional judgment.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Accessibility</h3>
            <p className="text-sm text-muted-foreground">
              This platform strives to meet WCAG 2.2 AA accessibility standards. If you encounter
              any accessibility issues, please report them for improvement.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-destructive/10 text-destructive-foreground border border-destructive/20">
            <p className="text-sm font-semibold mb-2">⚠️ Remember</p>
            <p className="text-sm">
              Every patient is unique. Clinical context, individual patient factors, and current
              evidence should always guide medical decision-making. This app is a learning tool,
              not a clinical reference.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
