import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card'
import { Button } from '@/components/Button'
import { BookOpen, CheckCircle2, XCircle } from 'lucide-react'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
}

const questions: Question[] = [
  {
    id: 1,
    question: "A 68-year-old presents with sudden right-sided weakness and aphasia. Last known well 90 minutes ago. BP 170/95. No contraindications to thrombolysis. What is the most appropriate next step?",
    options: [
      "Obtain MRI brain before treatment",
      "Start aspirin immediately",
      "Administer tPA after noncontrast CT rules out hemorrhage",
      "Wait for BP to decrease to <140/90 before treatment"
    ],
    correctAnswer: 2,
    explanation: "tPA should be given as soon as possible after ruling out hemorrhage with CT. BP <185/110 is the threshold. Time is brain - every minute counts.",
    category: "Stroke"
  },
  {
    id: 2,
    question: "A patient with bacterial meningitis presents with fever, headache, and neck stiffness. Which CSF finding is most consistent with bacterial meningitis?",
    options: [
      "WBC 1200 (lymphocytes), protein high, glucose normal",
      "WBC 1500 (neutrophils), protein high, glucose low",
      "WBC 50 (lymphocytes), protein normal, glucose normal",
      "WBC 300 (lymphocytes), protein high, glucose low"
    ],
    correctAnswer: 1,
    explanation: "Bacterial meningitis typically shows high WBC with neutrophil predominance, elevated protein, and LOW glucose (bacteria consume glucose).",
    category: "Meningitis"
  },
  {
    id: 3,
    question: "A 45-year-old with ascending symmetric weakness and areflexia over 3 days. LP shows protein 120 mg/dL, WBC 2 cells/μL. What is the most likely diagnosis?",
    options: [
      "Myasthenia gravis",
      "Guillain-Barré syndrome",
      "Acute ischemic stroke",
      "Multiple sclerosis"
    ],
    correctAnswer: 1,
    explanation: "GBS presents with ascending symmetric weakness, areflexia, and albuminocytologic dissociation (high protein, normal cell count) on LP.",
    category: "GBS"
  },
  {
    id: 4,
    question: "A 55-year-old with known myasthenia gravis presents with difficulty swallowing and shortness of breath. Vital capacity is 18 mL/kg. What is the most appropriate management?",
    options: [
      "Increase pyridostigmine dose",
      "Start oral prednisone",
      "ICU admission with consideration for intubation and IVIG/PLEX",
      "Discharge with close outpatient follow-up"
    ],
    correctAnswer: 2,
    explanation: "This is myasthenic crisis (respiratory failure). VC <20 mL/kg indicates impending respiratory failure requiring ICU care, possible intubation, and rapid immunotherapy (IVIG or plasmapheresis).",
    category: "Myasthenia Gravis"
  },
  {
    id: 5,
    question: "Status epilepticus for 15 minutes despite two doses of lorazepam. What is the next step?",
    options: [
      "Repeat lorazepam",
      "Load with IV fosphenytoin, levetiracetam, or valproate",
      "Immediate intubation and propofol",
      "Observe and wait"
    ],
    correctAnswer: 1,
    explanation: "After benzodiazepine failure, the next step is to load with an anti-seizure medication (fosphenytoin, levetiracetam, or valproate). Anesthetic agents are for refractory status.",
    category: "Seizures"
  },
  {
    id: 6,
    question: "An 82-year-old hospitalized patient is confused, unable to focus attention, with symptoms fluctuating throughout the day. Onset was acute (yesterday). What is the most likely diagnosis?",
    options: [
      "Alzheimer's dementia",
      "Delirium",
      "Depression",
      "Normal aging"
    ],
    correctAnswer: 1,
    explanation: "Acute onset, fluctuating course, and inattention are hallmarks of delirium. Dementia is chronic and progressive. Always search for underlying cause.",
    category: "Delirium"
  },
  {
    id: 7,
    question: "A patient with multiple sclerosis presents with new onset vision loss in one eye with pain on eye movement. What is the most likely diagnosis?",
    options: [
      "Cataracts",
      "Optic neuritis",
      "Retinal detachment",
      "Glaucoma"
    ],
    correctAnswer: 1,
    explanation: "Optic neuritis is a common MS relapse manifestation, presenting with vision loss, pain with eye movement, and RAPD (relative afferent pupillary defect).",
    category: "Multiple Sclerosis"
  },
  {
    id: 8,
    question: "A 72-year-old on warfarin presents with sudden severe headache and decreased consciousness. CT shows intracerebral hemorrhage. What is the priority?",
    options: [
      "Neurosurgical consultation only",
      "Immediate warfarin reversal and blood pressure control",
      "Start anticonvulsants prophylactically",
      "MRI brain for better characterization"
    ],
    correctAnswer: 1,
    explanation: "Anticoagulation-related ICH requires urgent reversal (PCC, vitamin K) and blood pressure control. Neurosurgical evaluation is also important but reversal is the immediate priority.",
    category: "Hemorrhage"
  },
  {
    id: 9,
    question: "Which of the following is a common trigger for myasthenic crisis?",
    options: [
      "High-protein diet",
      "Infection (especially pneumonia)",
      "Vitamin supplementation",
      "Regular exercise"
    ],
    correctAnswer: 1,
    explanation: "Infection is the most common trigger for myasthenic crisis. Other triggers include surgery, certain medications (aminoglycosides, beta-blockers), and pregnancy.",
    category: "Myasthenia Gravis"
  },
  {
    id: 10,
    question: "A patient is suspected to have bacterial meningitis. CT head is needed due to papilledema. When should antibiotics be given?",
    options: [
      "After LP is performed",
      "After CT is completed",
      "Immediately after blood cultures are drawn",
      "Only if CT shows no mass effect"
    ],
    correctAnswer: 2,
    explanation: "Never delay antibiotics for imaging or LP in suspected bacterial meningitis. Give antibiotics immediately after blood cultures. Delaying treatment increases mortality.",
    category: "Meningitis"
  }
]

export default function AssessmentPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    if (!showResults) {
      setSelectedAnswers({ ...selectedAnswers, [questionId]: answerIndex })
    }
  }

  const handleSubmit = () => {
    setShowResults(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleReset = () => {
    setSelectedAnswers({})
    setShowResults(false)
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correct++
      }
    })
    return correct
  }

  const score = showResults ? calculateScore() : 0
  const percentage = showResults ? Math.round((score / questions.length) * 100) : 0

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Assessment</h1>
        <p className="text-muted-foreground">
          Test your knowledge with clinical vignettes and MCQs
        </p>
      </div>

      {showResults && (
        <Card className="border-2 border-primary">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <CardTitle>Your Results</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-2">
              <p className="text-4xl font-bold text-primary">{percentage}%</p>
              <p className="text-lg">
                {score} out of {questions.length} correct
              </p>
              <p className="text-sm text-muted-foreground">
                Review the explanations below to reinforce your learning
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-6">
        {questions.map((q, index) => {
          const isAnswered = selectedAnswers[q.id] !== undefined
          const isCorrect = selectedAnswers[q.id] === q.correctAnswer
          const showExplanation = showResults && isAnswered

          return (
            <Card key={q.id} className={showResults && isAnswered ? (isCorrect ? 'border-green-500' : 'border-red-500') : ''}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        Question {index + 1} • {q.category}
                      </span>
                      {showResults && isAnswered && (
                        isCorrect ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )
                      )}
                    </div>
                    <CardTitle className="text-lg">{q.question}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {q.options.map((option, optionIndex) => {
                  const isSelected = selectedAnswers[q.id] === optionIndex
                  const isCorrectOption = optionIndex === q.correctAnswer
                  const showCorrect = showResults && isCorrectOption
                  const showIncorrect = showResults && isSelected && !isCorrectOption

                  return (
                    <button
                      key={optionIndex}
                      onClick={() => handleAnswerSelect(q.id, optionIndex)}
                      disabled={showResults}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        showCorrect
                          ? 'border-green-500 bg-green-500/10'
                          : showIncorrect
                          ? 'border-red-500 bg-red-500/10'
                          : isSelected
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      } ${showResults ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium">
                          {String.fromCharCode(65 + optionIndex)}
                        </span>
                        <span className="text-sm">{option}</span>
                      </div>
                    </button>
                  )
                })}

                {showExplanation && (
                  <div className={`mt-4 p-4 rounded-lg ${isCorrect ? 'bg-green-500/10' : 'bg-blue-500/10'}`}>
                    <p className="text-sm font-semibold mb-1">
                      {isCorrect ? '✓ Correct!' : 'Explanation:'}
                    </p>
                    <p className="text-sm">{q.explanation}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="flex gap-4 sticky bottom-20 md:bottom-4 bg-background p-4 border rounded-lg shadow-lg">
        {!showResults ? (
          <Button
            onClick={handleSubmit}
            className="flex-1"
            disabled={Object.keys(selectedAnswers).length !== questions.length}
          >
            Submit Answers ({Object.keys(selectedAnswers).length}/{questions.length})
          </Button>
        ) : (
          <Button onClick={handleReset} className="flex-1" variant="outline">
            Reset Assessment
          </Button>
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>About This Assessment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This assessment contains synthetic clinical vignettes designed for educational purposes.
            All scenarios are conceptual and should not be used for clinical decision-making.
            The questions cover key concepts from all eight neurology modules to reinforce learning.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
