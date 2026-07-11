import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  MessageSquare,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RefreshCw,
  Search,
  Award,
  Languages,
  Volume2,
  Sparkles,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Trophy,
  Check,
  Eye,
  EyeOff
} from 'lucide-react';
import { text1Sentences, text2Dialogue, quiz1Questions, quiz2Questions, vocabulary } from './data';
import { Sentence, DialogueLine, QuizQuestion, VocabularyItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'text1' | 'text2' | 'vocab'>('text1');
  const [speechSupported, setSpeechSupported] = useState(false);
  const [activeSpeechId, setActiveSpeechId] = useState<string | null>(null);

  // Check speech synthesis support on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      setSpeechSupported(true);
    }
  }, []);

  const speakSpanish = (text: string, id: string) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text.replace(/^[—\-\s]+/, ''));
      utterance.lang = 'es-ES';
      utterance.rate = 0.85; // Slightly slower for language learners
      utterance.onend = () => setActiveSpeechId(null);
      utterance.onerror = () => setActiveSpeechId(null);
      setActiveSpeechId(id);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900 pb-12">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200/60 sticky top-0 z-30 shadow-[0_1px_3px_0_rgba(0,0,0,0.03)]">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 text-white p-2.5 rounded-xl shadow-xs">
              <Languages className="w-6 h-6" id="app-logo-icon" />
            </div>
            <div>
              <h1 className="text-2xl font-bold font-display tracking-tight text-slate-900 flex items-center gap-2">
                Aprende Español <span className="text-indigo-600">🇪🇸 ⇄ 🇦🇲</span>
              </h1>
              <p className="text-sm text-slate-500 font-semibold mt-0.5 tracking-wide">
                Ինտերակտիվ իսպաներեն-հայերեն ուսուցում
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex bg-slate-100/80 p-1 rounded-xl w-full sm:w-auto border border-slate-200/40 shadow-inner" id="main-navigation">
            <button
              id="tab-text1"
              onClick={() => setActiveTab('text1')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4.5 py-2 text-base font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                activeTab === 'text1'
                  ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/50'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>Կառլոսը և կամուրջը</span>
            </button>
            <button
              id="tab-text2"
              onClick={() => setActiveTab('text2')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4.5 py-2 text-base font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                activeTab === 'text2'
                  ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/50'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              <span>Շաբաթվա օրերն ու ամիսները</span>
            </button>
            <button
              id="tab-vocab"
              onClick={() => setActiveTab('vocab')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4.5 py-2 text-base font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                activeTab === 'vocab'
                  ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/50'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Search className="w-5 h-5" />
              <span>Բառարան</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 mt-6">
        <AnimatePresence mode="wait">
          {activeTab === 'text1' && (
            <motion.div
              key="text1-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <Text1Section
                speakSpanish={speakSpanish}
                speechSupported={speechSupported}
                activeSpeechId={activeSpeechId}
              />
            </motion.div>
          )}

          {activeTab === 'text2' && (
            <motion.div
              key="text2-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <Text2Section
                speakSpanish={speakSpanish}
                speechSupported={speechSupported}
                activeSpeechId={activeSpeechId}
              />
            </motion.div>
          )}

          {activeTab === 'vocab' && (
            <motion.div
              key="vocab-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <VocabSection
                speakSpanish={speakSpanish}
                speechSupported={speechSupported}
                activeSpeechId={activeSpeechId}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

/* ==========================================
   SECTION 1: Carlos y el puente
   ========================================== */
function Text1Section({
  speakSpanish,
  speechSupported,
  activeSpeechId
}: {
  speakSpanish: (text: string, id: string) => void;
  speechSupported: boolean;
  activeSpeechId: string | null;
}) {
  const [openedTranslations, setOpenedTranslations] = useState<Record<number, boolean>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showQuizTranslation, setShowQuizTranslation] = useState<Record<number, boolean>>({});

  const toggleTranslation = (id: number) => {
    setOpenedTranslations((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const showAllTranslations = () => {
    const all: Record<number, boolean> = {};
    text1Sentences.forEach((s) => {
      all[s.id] = true;
    });
    setOpenedTranslations(all);
  };

  const hideAllTranslations = () => {
    setOpenedTranslations({});
  };

  const handleSelectOption = (questionId: number, optionKey: string) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionKey }));
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const toggleQuizTranslation = (qId: number) => {
    setShowQuizTranslation((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const score = useMemo(() => {
    let correctCount = 0;
    quiz1Questions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctKey) {
        correctCount++;
      }
    });
    return correctCount;
  }, [quizAnswers]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left & Middle Column: Story Content */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-2xl border border-slate-200/60 p-6 md:p-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.05)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-5 mb-6 gap-4">
            <div>
              <span className="bg-indigo-50 text-indigo-700 text-xs md:text-sm font-bold uppercase tracking-wider px-3 py-1.5 rounded-md border border-indigo-100/50">
                Մակարդակ A1 • Ընթերցանություն
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mt-4">
                Carlos y el puente <span className="text-slate-400 font-normal">/</span> Կառլոսը և կամուրջը
              </h2>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-center">
              <button
                id="show-all-btn-1"
                onClick={showAllTranslations}
                className="flex items-center gap-1.5 text-sm font-extrabold bg-slate-50 hover:bg-slate-100 text-slate-700 px-4 py-2.5 rounded-lg border border-slate-200/80 transition-colors cursor-pointer"
                title="Ցուցադրել բոլոր թարգմանությունները"
              >
                <Eye className="w-4 h-4" />
                <span>Բացել բոլորը</span>
              </button>
              <button
                id="hide-all-btn-1"
                onClick={hideAllTranslations}
                className="flex items-center gap-1.5 text-sm font-extrabold bg-slate-50 hover:bg-slate-100 text-slate-700 px-4 py-2.5 rounded-lg border border-slate-200/80 transition-colors cursor-pointer"
                title="Թաքցնել բոլոր թարգմանությունները"
              >
                <EyeOff className="w-4 h-4" />
                <span>Թաքցնել բոլորը</span>
              </button>
            </div>
          </div>

          <div className="text-sm md:text-base text-slate-700 mb-6 bg-indigo-50/40 p-5 rounded-xl border border-indigo-100/60 flex items-start gap-3">
            <span className="text-lg">💡</span>
            <p className="leading-relaxed font-medium">
              <strong className="text-slate-900 font-bold">Ինչպե՞ս սովորել.</strong> Կտտացրեք ցանկացած նախադասության վրա՝ դրա հայերեն թարգմանությունն անմիջապես տեսնելու համար: Օգտագործեք <Volume2 className="w-4.5 h-4.5 inline text-indigo-600 mx-0.5 align-middle" /> կոճակը՝ արտասանությունը լսելու համար:
            </p>
          </div>

          {/* Interactive Story Blocks */}
          <div className="space-y-3">
            {text1Sentences.map((sentence) => {
              const isOpen = !!openedTranslations[sentence.id];
              const isSpeaking = activeSpeechId === `t1-${sentence.id}`;
              const isTitle = sentence.es.startsWith('Carlos y') || sentence.es.includes('puente') && sentence.id === 1;

              return (
                <div
                  key={sentence.id}
                  id={`sentence-block-${sentence.id}`}
                  className={`group rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-indigo-200/80 bg-indigo-50/15 shadow-[0_2px_8px_-3px_rgba(99,102,241,0.08)] border-l-4 border-l-indigo-600'
                      : 'border-slate-200/60 bg-white hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between p-4 gap-3">
                    {/* Sentence text clickable */}
                    <button
                      onClick={() => toggleTranslation(sentence.id)}
                      className="flex-1 text-left font-sans text-base md:text-lg text-slate-800 leading-relaxed group-hover:text-slate-950 transition-colors cursor-pointer"
                    >
                      <span className="font-extrabold text-slate-400 mr-3 text-xs md:text-sm font-mono select-none">
                        {String(sentence.id).padStart(2, '0')}
                      </span>
                      <span className={sentence.es.startsWith('—') ? 'text-indigo-900 font-bold' : 'font-semibold'}>
                        {sentence.es}
                      </span>
                    </button>

                    {/* Audio Speaker */}
                    {speechSupported && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakSpanish(sentence.es, `t1-${sentence.id}`);
                        }}
                        className={`p-2 rounded-lg transition-colors cursor-pointer ${
                          isSpeaking
                            ? 'bg-indigo-100 text-indigo-700 animate-pulse'
                            : 'text-slate-400 hover:text-indigo-600 hover:bg-indigo-50/80'
                        }`}
                        title="Լսել արտասանությունը"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>

                  {/* Dynamic Armenian translation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-slate-50/60 border-t border-slate-100/50"
                      >
                        <div className="px-5 py-3.5 text-slate-700 text-sm md:text-base font-sans font-semibold italic leading-relaxed border-l-3 border-indigo-500 pl-4.5 bg-indigo-50/5">
                          {sentence.hy}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Column: Quiz & Side-info */}
      <div className="space-y-6">
        {/* Quick Stats / Achievements */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 shadow-md relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 text-slate-700/10">
            <Trophy className="w-32 h-32" />
          </div>
          <div className="relative z-10 space-y-4">
            <div className="bg-indigo-500 text-white text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md w-fit">
              Ձեր Առաջընթացը
            </div>
            <h3 className="text-xl font-bold font-display tracking-tight text-white">Կառլոսը և կամուրջը</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-slate-300 font-semibold">
                <span>Կարդացված նախադասություններ</span>
                <span>{Object.keys(openedTranslations).length} / {text1Sentences.length}</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700/50">
                <div
                  className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(Object.keys(openedTranslations).length / text1Sentences.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quiz panel */}
        <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-xs space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
            <GraduationCap className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg font-bold font-display text-slate-900">
              Գիտելիքների ստուգում (Quiz)
            </h3>
          </div>

          <div className="space-y-6">
            {quiz1Questions.map((q, idx) => {
              const selectedKey = quizAnswers[q.id];
              const showTranslate = !!showQuizTranslation[q.id];
              const isCorrect = selectedKey === q.correctKey;

              return (
                <div key={q.id} className="space-y-3 pb-5 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-base font-bold text-slate-800 leading-relaxed">
                      <span className="text-indigo-600 mr-1.5 font-mono font-bold">{idx + 1}.</span>
                      {q.questionEs}
                    </h4>
                    <button
                      onClick={() => toggleQuizTranslation(q.id)}
                      className="text-sm text-indigo-600 hover:text-indigo-700 font-bold flex items-center gap-0.5 shrink-0 bg-indigo-50 px-2 py-1 rounded-md transition-colors cursor-pointer"
                      title="Թարգմանել հարցը հարմար"
                    >
                      <Languages className="w-3.5 h-3.5" />
                      <span>{showTranslate ? 'ES' : '🇦🇲'}</span>
                    </button>
                  </div>

                  {showTranslate && (
                    <p className="text-sm text-slate-500 font-semibold bg-slate-50 p-2 rounded-lg border-l-2 border-indigo-500 italic">
                      {q.questionHy}
                    </p>
                  )}

                  {/* Options */}
                  <div className="grid grid-cols-1 gap-2">
                    {q.options.map((opt) => {
                      const isOptionSelected = selectedKey === opt.key;
                      let optionStyle = 'border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-slate-700 hover:border-slate-300';

                      if (isOptionSelected) {
                        if (quizSubmitted) {
                          optionStyle = isCorrect
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                            : 'border-rose-500 bg-rose-50 text-rose-800';
                        } else {
                          optionStyle = 'border-indigo-500 bg-indigo-50 text-indigo-900 ring-2 ring-indigo-100/50';
                        }
                      } else if (quizSubmitted && opt.key === q.correctKey) {
                        optionStyle = 'border-emerald-500 bg-emerald-50/50 text-emerald-800';
                      }

                      return (
                        <button
                          key={opt.key}
                          onClick={() => handleSelectOption(q.id, opt.key)}
                          disabled={quizSubmitted}
                          className={`text-left text-sm md:text-base font-semibold p-3.5 rounded-lg border transition-all flex items-center justify-between gap-2 cursor-pointer ${optionStyle}`}
                        >
                          <div>
                            <span className="font-extrabold mr-1.5">{opt.key})</span>
                            <span>{opt.es}</span>
                            {showTranslate && (
                              <span className="block text-slate-500 text-xs md:text-sm mt-1 italic font-medium">
                                {opt.hy}
                              </span>
                            )}
                          </div>
                          {isOptionSelected && quizSubmitted && (
                            <span>
                              {isCorrect ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              ) : (
                                <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                              )}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation if submitted */}
                  {quizSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-xs md:text-sm font-semibold p-3.5 rounded-lg border leading-relaxed ${
                        isCorrect
                          ? 'bg-emerald-50/40 border-emerald-100 text-slate-600'
                          : 'bg-rose-50/40 border-rose-100 text-slate-600'
                      }`}
                    >
                      <p className="font-extrabold text-slate-700">
                        {isCorrect ? 'Correcto! 🎉' : `Correcto: ${q.correctKey}`}
                      </p>
                      <p className="mt-1">{q.explanationEs}</p>
                      <p className="mt-1 text-slate-500 italic border-t border-slate-100 pt-1.5 mt-1.5 font-sans font-medium">
                        {q.explanationHy}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit/Reset area */}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            {!quizSubmitted ? (
              <button
                id="submit-quiz-1"
                onClick={() => setQuizSubmitted(true)}
                disabled={Object.keys(quizAnswers).length < quiz1Questions.length}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed text-white text-sm md:text-base font-bold py-3.5 rounded-xl transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Ստուգել պատասխանները</span>
              </button>
            ) : (
              <div className="space-y-3">
                <div className="bg-indigo-50/40 border border-indigo-100/50 p-3 rounded-xl flex items-center justify-between text-base shadow-3xs">
                  <span className="font-semibold text-slate-700">Արդյունք՝</span>
                  <span className="font-bold text-indigo-700">
                    {score} / {quiz1Questions.length} ({Math.round((score / quiz1Questions.length) * 100)}%)
                  </span>
                </div>
                <button
                  id="reset-quiz-1"
                  onClick={resetQuiz}
                  className="w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs md:text-sm font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-3xs"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Փորձել նորից</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   SECTION 2: Los días de la semana y los meses (Dialogue)
   ========================================== */
function Text2Section({
  speakSpanish,
  speechSupported,
  activeSpeechId
}: {
  speakSpanish: (text: string, id: string) => void;
  speechSupported: boolean;
  activeSpeechId: string | null;
}) {
  const [subTab, setSubTab] = useState<'study' | 'practice'>('study');
  const [openedTranslations, setOpenedTranslations] = useState<Record<number, boolean>>({});

  // Practice Mode states
  // We keep a record of completed/filled values for each gap.
  // Format: key of userGaps: `lineId-gapIndex` -> string
  const [userGaps, setUserGaps] = useState<Record<string, string>>({});
  const [validated, setValidated] = useState(false);
  const [activeGapKey, setActiveGapKey] = useState<string | null>(null);

  // Quiz states
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showQuizTranslation, setShowQuizTranslation] = useState<Record<number, boolean>>({});

  const toggleTranslation = (id: number) => {
    setOpenedTranslations((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const showAllTranslations = () => {
    const all: Record<number, boolean> = {};
    text2Dialogue.forEach((d) => {
      all[d.id] = true;
    });
    setOpenedTranslations(all);
  };

  const hideAllTranslations = () => {
    setOpenedTranslations({});
  };

  // Extract all distinct correct words for the Word Bank
  const wordBank = useMemo(() => {
    const words: string[] = [];
    text2Dialogue.forEach((line) => {
      line.gaps?.forEach((gap) => {
        if (!words.includes(gap.word)) {
          words.push(gap.word);
        }
      });
    });
    // Let's sort alphabetically or leave scrambled
    return words.sort(() => Math.random() - 0.5);
  }, []);

  const handleGapSelect = (gapKey: string, word: string) => {
    setUserGaps((prev) => ({ ...prev, [gapKey]: word }));
    setActiveGapKey(null);
  };

  const checkPractice = () => {
    setValidated(true);
  };

  const resetPractice = () => {
    setUserGaps({});
    setValidated(false);
    setActiveGapKey(null);
  };

  const fillAllAnswers = () => {
    const answers: Record<string, string> = {};
    text2Dialogue.forEach((line) => {
      line.gaps?.forEach((gap, idx) => {
        answers[`${line.id}-${idx}`] = gap.word;
      });
    });
    setUserGaps(answers);
    setValidated(true);
  };

  const practiceStats = useMemo(() => {
    let totalGaps = 0;
    let correctGaps = 0;
    text2Dialogue.forEach((line) => {
      line.gaps?.forEach((gap, idx) => {
        totalGaps++;
        const key = `${line.id}-${idx}`;
        if (userGaps[key]?.toLowerCase().trim() === gap.word.toLowerCase().trim()) {
          correctGaps++;
        }
      });
    });
    return { totalGaps, correctGaps };
  }, [userGaps]);

  // Quiz calculations
  const handleSelectOption = (questionId: number, optionKey: string) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionKey }));
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const toggleQuizTranslation = (qId: number) => {
    setShowQuizTranslation((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const score = useMemo(() => {
    let correctCount = 0;
    quiz2Questions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctKey) {
        correctCount++;
      }
    });
    return correctCount;
  }, [quizAnswers]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Columns: Dialogue Content */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-2xl border border-slate-200/60 p-6 md:p-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.05)]">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-5 mb-6 gap-4">
            <div>
              <span className="bg-indigo-50 text-indigo-700 text-xs md:text-sm font-bold uppercase tracking-wider px-3 py-1.5 rounded-md border border-indigo-100/50">
                Մակարդակ A1 • Երկխոսություն
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mt-4">
                Días de la semana y meses <span className="text-slate-400 font-normal">/</span> Շաբաթվա օրերն ու ամիսները
              </h2>
            </div>
          </div>

          {/* Sub-navigation for study / practice */}
          <div className="flex bg-slate-100/80 p-1 rounded-xl mb-6 w-full max-w-sm border border-slate-200/40" id="subtab-navigation">
            <button
              id="subtab-study"
              onClick={() => {
                setSubTab('study');
                setActiveGapKey(null);
              }}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-sm font-bold rounded-lg transition-all cursor-pointer ${
                subTab === 'study'
                  ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/50'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Ընթերցանություն (Study)</span>
            </button>
            <button
              id="subtab-practice"
              onClick={() => {
                setSubTab('practice');
                setOpenedTranslations({});
              }}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-sm font-bold rounded-lg transition-all cursor-pointer ${
                subTab === 'practice'
                  ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/50'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Խաղ-Պրակտիկա (Practice)</span>
            </button>
          </div>

          {subTab === 'study' ? (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-indigo-50/40 p-4 rounded-xl border border-indigo-100/60 mb-2 gap-4">
                <p className="text-sm md:text-base text-slate-700 font-medium">
                  💡 <strong className="text-slate-800 font-bold">Կարդալու ռեժիմ.</strong> Կտտացրեք յուրաքանչյուր խոսքի վրա՝ թարգմանությունը տեսնելու համար:
                </p>
                <div className="flex gap-2">
                  <button
                    id="show-all-btn-2"
                    onClick={showAllTranslations}
                    className="text-xs md:text-sm font-extrabold bg-white hover:bg-slate-50 text-slate-700 px-3.5 py-2 rounded-lg border border-slate-200 shadow-2xs transition-colors cursor-pointer"
                  >
                    Բացել բոլորը
                  </button>
                  <button
                    id="hide-all-btn-2"
                    onClick={hideAllTranslations}
                    className="text-xs md:text-sm font-extrabold bg-white hover:bg-slate-50 text-slate-700 px-3.5 py-2 rounded-lg border border-slate-200 shadow-2xs transition-colors cursor-pointer"
                  >
                    Թաքցնել բոլորը
                  </button>
                </div>
              </div>

              {/* Dialogue container */}
              <div className="space-y-3 relative before:absolute before:left-14 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-100">
                {text2Dialogue.map((line) => {
                  const isOpen = !!openedTranslations[line.id];
                  const isSpeaking = activeSpeechId === `t2-${line.id}`;
                  const isLucia = line.speaker === 'Lucía';

                  return (
                    <div
                      key={line.id}
                      className={`group relative flex gap-4 p-3.5 rounded-xl border transition-all duration-200 ${
                        isOpen
                          ? 'border-indigo-200 bg-indigo-50/10 shadow-3xs border-l-4 border-l-indigo-600'
                          : 'border-slate-50 hover:border-slate-200 hover:bg-slate-50/40'
                      }`}
                    >
                      {/* Speaker Badge */}
                      <div className="w-16 shrink-0 text-right">
                        <span
                          className={`inline-block text-sm font-bold px-2.5 py-1.5 rounded-md tracking-wider ${
                            isLucia
                              ? 'bg-rose-50 text-rose-700 border border-rose-100'
                              : 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                          }`}
                        >
                          {line.speaker}
                        </span>
                      </div>

                      {/* Line content */}
                      <div className="flex-1 space-y-1.5">
                        <div className="flex items-start justify-between gap-3">
                          <button
                            onClick={() => toggleTranslation(line.id)}
                            className="text-left text-base md:text-lg text-slate-800 leading-relaxed font-bold group-hover:text-slate-950 transition-colors cursor-pointer"
                          >
                            {line.es}
                          </button>

                          {speechSupported && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                speakSpanish(line.es, `t2-${line.id}`);
                              }}
                              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                                isSpeaking
                                  ? 'bg-indigo-100 text-indigo-700 animate-pulse'
                                  : 'text-slate-400 hover:text-indigo-600 hover:bg-indigo-50/80'
                              }`}
                              title="Լսել արտասանությունը"
                            >
                              <Volume2 className="w-4.5 h-4.5" />
                            </button>
                          )}
                        </div>

                        {/* Armenian translation */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-slate-50/80 rounded-lg p-3 border-l-2 border-indigo-500"
                            >
                              <span className="text-xs md:text-sm font-bold text-slate-400 block mb-1 uppercase tracking-wider">
                                {line.speakerHy}
                              </span>
                              <p className="text-sm md:text-base text-slate-700 font-semibold leading-relaxed italic">
                                {line.hy}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* PRACTICE MODE: Fill in the gaps */
            <div className="space-y-6">
              {/* Alert & stats */}
              <div className="bg-indigo-50/40 p-5 rounded-xl border border-indigo-100/60 space-y-4">
                <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium">
                  ✍️ <strong className="text-slate-800">Պրակտիկա (Fill in the blanks).</strong> Լրացրեք երկխոսության բաց թողնված իսպաներեն բառերը (օրեր, ամիսներ, եղանակներ): Կտտացրեք ցանկացած <span className="bg-indigo-100/60 px-2 py-0.5 rounded text-indigo-900 font-extrabold">[...]</span> բացատի վրա, որպեսզի ընտրեք ճիշտ բառը:
                </p>

                {validated && (
                  <div className="bg-white p-4 rounded-lg border border-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm md:text-base shadow-3xs">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-indigo-500" />
                      <span className="font-bold text-slate-700">
                        Ճիշտ լրացված՝ {practiceStats.correctGaps} / {practiceStats.totalGaps}
                      </span>
                    </div>
                    <div className="w-full sm:w-1/2 bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200/30">
                      <div
                        className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(practiceStats.correctGaps / practiceStats.totalGaps) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Dialogue practice list */}
              <div className="space-y-4 relative before:absolute before:left-14 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-100">
                {text2Dialogue.map((line) => {
                  const isLucia = line.speaker === 'Lucía';
                  const hasGaps = !!line.gaps && line.gaps.length > 0;

                  // Split sentence by gaps to insert input elements
                  // Since we have specific gap keywords, we will render the text. To keep it super simple and bulletproof,
                  // we will render the words of line.es. If a word is a target gap, we render a gap picker instead.
                  // Let's create an elegant helper to render the line.es text with gaps.
                  const renderLineWithGaps = () => {
                    if (!line.gaps) return line.es;

                    // Let's tokenise based on gap words
                    // To do it accurately, we can search for gap words inside the sentence, or pre-split.
                    // A simple regex split using gap words:
                    const sortedGaps = [...line.gaps].sort((a, b) => b.word.length - a.word.length);
                    let esText = line.es;

                    // Let's render using parts
                    // We can match words. Let's do a reliable sequential rendering.
                    // We identify the gap positions. For each gap word, replace it with a token like `__GAP_0__`, etc.
                    let tokenizedText = esText;
                    line.gaps.forEach((gap, gapIdx) => {
                      // Case insensitive replace of precise word
                      const regex = new RegExp(`\\b${gap.word}\\b`, 'i');
                      tokenizedText = tokenizedText.replace(regex, `__GAP_${gapIdx}__`);
                    });

                    const parts = tokenizedText.split(/(__GAP_\d+__)/g);

                    return parts.map((part, partIdx) => {
                      const match = part.match(/__GAP_(\d+)__/);
                      if (match) {
                        const gapIdx = parseInt(match[1]);
                        const gap = line.gaps![gapIdx];
                        const gapKey = `${line.id}-${gapIdx}`;
                        const currentValue = userGaps[gapKey] || '';
                        const isCorrect = currentValue.toLowerCase().trim() === gap.word.toLowerCase().trim();
                        const showCorrectValue = validated && !isCorrect;

                        return (
                          <span key={gapKey} className="inline-block mx-1.5 relative align-middle">
                            <button
                              id={`gap-btn-${gapKey}`}
                              onClick={() => {
                                if (validated) return;
                                setActiveGapKey(activeGapKey === gapKey ? null : gapKey);
                              }}
                              className={`px-3 py-1.5 rounded-lg text-sm font-extrabold transition-all border outline-none cursor-pointer ${
                                currentValue
                                  ? validated
                                    ? isCorrect
                                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                                      : 'bg-rose-100 text-rose-800 border-rose-300'
                                    : 'bg-indigo-100 text-indigo-900 border-indigo-300 ring-2 ring-indigo-200'
                                  : activeGapKey === gapKey
                                  ? 'bg-indigo-50 text-indigo-800 border-indigo-400 ring-2 ring-indigo-100 min-w-[85px]'
                                  : 'bg-slate-100 text-slate-500 border-slate-300 hover:bg-slate-200 min-w-[85px]'
                              }`}
                            >
                              {currentValue || `[ ${gap.hint} ]`}
                              <ChevronDown className="w-3.5 h-3.5 inline ml-1 text-slate-400" />
                            </button>

                            {/* Options popup */}
                            {activeGapKey === gapKey && (
                              <div className="absolute z-40 top-full left-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-lg p-2 min-w-[170px] space-y-1">
                                <span className="block text-xs text-slate-400 font-extrabold px-1.5 py-1 uppercase tracking-wider">
                                  Ընտրել բառը ({gap.hint})
                                </span>
                                {/* Create 3 options: the correct one and 2 distractors */}
                                {(() => {
                                  // Get distractors from the word bank
                                  const distractors = wordBank
                                    .filter((w) => w.toLowerCase() !== gap.word.toLowerCase())
                                    .slice(0, 2);
                                  const choices = [gap.word, ...distractors].sort();

                                  return choices.map((choice) => (
                                    <button
                                      key={choice}
                                      onClick={() => handleGapSelect(gapKey, choice)}
                                      className="w-full text-left text-sm px-3 py-2 hover:bg-indigo-50 hover:text-indigo-950 rounded-lg transition-colors cursor-pointer font-bold"
                                    >
                                      {choice}
                                    </button>
                                  ));
                                })()}
                              </div>
                            )}

                            {/* Show correct answer next to it if user made a mistake and checked */}
                            {showCorrectValue && (
                              <span className="block text-xs font-bold text-emerald-700 mt-1">
                                ✓ {gap.word}
                              </span>
                            )}
                          </span>
                        );
                      }
                      return <span key={partIdx}>{part}</span>;
                    });
                  };

                  return (
                    <div
                      key={line.id}
                      className="group relative flex gap-4 p-3.5 md:p-4 rounded-xl border border-slate-50 hover:border-slate-100 hover:bg-slate-50/20"
                    >
                      {/* Speaker Badge */}
                      <div className="w-16 shrink-0 text-right">
                        <span
                          className={`inline-block text-sm font-bold px-2.5 py-1.5 rounded-md tracking-wider ${
                            isLucia
                              ? 'bg-rose-50 text-rose-700 border border-rose-100'
                              : 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                          }`}
                        >
                          {line.speaker}
                        </span>
                      </div>

                      {/* Line content with gaps */}
                      <div className="flex-1 space-y-1.5">
                        <div className="flex items-start justify-between gap-3">
                          <div className="text-base md:text-lg text-slate-800 leading-relaxed font-bold">
                            {renderLineWithGaps()}
                          </div>

                          {/* Trigger Armenian translation for hint */}
                          <button
                            onClick={() => toggleTranslation(line.id)}
                            className="p-1.5 text-slate-300 hover:text-slate-600 rounded-md transition-colors"
                            title="Տեսնել հայերեն թարգմանությունը"
                          >
                            <Languages className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Translation revealed below for aid */}
                        <AnimatePresence>
                          {openedTranslations[line.id] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-slate-50 p-3 rounded-lg border-l-2 border-slate-400"
                            >
                              <p className="text-sm md:text-base text-slate-700 font-semibold italic">
                                {line.hy}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                {!validated ? (
                  <>
                    <button
                      id="check-practice-btn"
                      onClick={checkPractice}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm md:text-base font-extrabold py-3 px-6 rounded-xl shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Check className="w-4 h-4" />
                      <span>Ստուգել լրացվածները</span>
                    </button>
                    <button
                      id="fill-answers-btn"
                      onClick={fillAllAnswers}
                      className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-sm md:text-base font-extrabold py-3 px-5 rounded-xl transition-all cursor-pointer shadow-3xs"
                    >
                      Ցույց տալ պատասխանները
                    </button>
                  </>
                ) : (
                  <button
                    id="reset-practice-btn"
                    onClick={resetPractice}
                    className="bg-slate-900 hover:bg-slate-800 text-white text-sm md:text-base font-extrabold py-3 px-6 rounded-xl shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4 animate-spin-once" />
                    <span>Փորձել նորից</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Column: Quiz Section */}
      <div className="space-y-6">
        <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-xs space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
            <GraduationCap className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg font-bold font-display text-slate-900">
              Գիտելիքների ստուգում (Quiz)
            </h3>
          </div>

          <div className="space-y-6">
            {quiz2Questions.map((q, idx) => {
              const selectedKey = quizAnswers[q.id];
              const showTranslate = !!showQuizTranslation[q.id];
              const isCorrect = selectedKey === q.correctKey;

              return (
                <div key={q.id} className="space-y-3 pb-5 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-base font-bold text-slate-800 leading-relaxed">
                      <span className="text-indigo-600 mr-1.5 font-mono font-bold">{idx + 1}.</span>
                      {q.questionEs}
                    </h4>
                    <button
                      onClick={() => toggleQuizTranslation(q.id)}
                      className="text-sm text-indigo-600 hover:text-indigo-700 font-bold flex items-center gap-0.5 shrink-0 bg-indigo-50 px-2 py-1 rounded-md transition-colors cursor-pointer"
                      title="Թարգմանել հարցը հայերեն"
                    >
                      <Languages className="w-3.5 h-3.5" />
                      <span>{showTranslate ? 'ES' : '🇦🇲'}</span>
                    </button>
                  </div>

                  {showTranslate && (
                    <p className="text-sm text-slate-500 font-semibold bg-slate-50 p-2 rounded-lg border-l-2 border-indigo-500 italic">
                      {q.questionHy}
                    </p>
                  )}

                  {/* Options */}
                  <div className="grid grid-cols-1 gap-2">
                    {q.options.map((opt) => {
                      const isOptionSelected = selectedKey === opt.key;
                      let optionStyle = 'border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-slate-700 hover:border-slate-300';

                      if (isOptionSelected) {
                        if (quizSubmitted) {
                          optionStyle = isCorrect
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                            : 'border-rose-500 bg-rose-50 text-rose-800';
                        } else {
                          optionStyle = 'border-indigo-500 bg-indigo-50 text-indigo-900 ring-2 ring-indigo-100/50';
                        }
                      } else if (quizSubmitted && opt.key === q.correctKey) {
                        optionStyle = 'border-emerald-500 bg-emerald-50/50 text-emerald-800';
                      }

                      return (
                        <button
                          key={opt.key}
                          onClick={() => handleSelectOption(q.id, opt.key)}
                          disabled={quizSubmitted}
                          className={`text-left text-sm md:text-base font-semibold p-3.5 rounded-lg border transition-all flex items-center justify-between gap-2 cursor-pointer ${optionStyle}`}
                        >
                          <div>
                            <span className="font-extrabold mr-1.5">{opt.key})</span>
                            <span>{opt.es}</span>
                            {showTranslate && (
                              <span className="block text-slate-500 text-xs md:text-sm mt-1 italic font-medium">
                                {opt.hy}
                              </span>
                            )}
                          </div>
                          {isOptionSelected && quizSubmitted && (
                            <span>
                              {isCorrect ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              ) : (
                                <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                              )}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation if submitted */}
                  {quizSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-xs md:text-sm font-semibold p-3.5 rounded-lg border leading-relaxed ${
                        isCorrect
                          ? 'bg-emerald-50/40 border-emerald-100 text-slate-600'
                          : 'bg-rose-50/40 border-rose-100 text-slate-600'
                      }`}
                    >
                      <p className="font-extrabold text-slate-700">
                        {isCorrect ? 'Correcto! 🎉' : `Correcto: ${q.correctKey}`}
                      </p>
                      <p className="mt-1">{q.explanationEs}</p>
                      <p className="mt-1 text-slate-500 italic border-t border-slate-100 pt-1.5 mt-1.5 font-sans font-medium">
                        {q.explanationHy}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit/Reset area */}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            {!quizSubmitted ? (
              <button
                id="submit-quiz-2"
                onClick={() => setQuizSubmitted(true)}
                disabled={Object.keys(quizAnswers).length < quiz2Questions.length}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed text-white text-sm md:text-base font-bold py-3.5 rounded-xl transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Ստուգել պատասխանները</span>
              </button>
            ) : (
              <div className="space-y-3">
                <div className="bg-indigo-50/40 border border-indigo-100/50 p-3 rounded-xl flex items-center justify-between text-base shadow-3xs">
                  <span className="font-semibold text-slate-700">Արդյունք՝</span>
                  <span className="font-bold text-indigo-700">
                    {score} / {quiz2Questions.length} ({Math.round((score / quiz2Questions.length) * 100)}%)
                  </span>
                </div>
                <button
                  id="reset-quiz-2"
                  onClick={resetQuiz}
                  className="w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-sm md:text-base font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-3xs"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Փորձել նորից</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   SECTION 3: Vocabulary Glossary & Hub
   ========================================== */
function VocabSection({
  speakSpanish,
  speechSupported,
  activeSpeechId
}: {
  speakSpanish: (text: string, id: string) => void;
  speechSupported: boolean;
  activeSpeechId: string | null;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const list = new Set<string>();
    vocabulary.forEach((item) => {
      list.add(item.category);
    });
    return ['All', ...Array.from(list)];
  }, []);

  const filteredVocabulary = useMemo(() => {
    return vocabulary.filter((item) => {
      const matchesSearch =
        item.es.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.hy.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/60 p-6 md:p-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.05)] space-y-6">
      {/* Header */}
      <div className="border-b border-slate-100 pb-5">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900">
          Բառարան (Glosario Vocabulario)
        </h2>
        <p className="text-sm md:text-base text-slate-600 font-medium mt-1.5">
          Տեքստերում հանդիպող հիմնական բառերի և արտահայտությունների հայերեն թարգմանությունն ու արտասանությունը:
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col xl:flex-row gap-4 items-stretch xl:items-center justify-between">
        {/* Search input */}
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4.5 h-4.5" />
          </span>
          <input
            id="vocab-search-input"
            type="text"
            placeholder="Փնտրել բառը (իսպաներեն կամ հայերեն)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 text-base bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2" id="vocab-categories">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2.5 text-sm font-extrabold rounded-lg transition-all cursor-pointer ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category === 'All' ? 'Բոլորը' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Vocabulary Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" id="vocab-grid">
        <AnimatePresence mode="popLayout">
          {filteredVocabulary.map((item, idx) => {
            const isSpeaking = activeSpeechId === `vocab-${idx}`;
            return (
              <motion.div
                key={`${item.es}-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="p-4 bg-slate-50 hover:bg-indigo-50/15 border border-slate-200/40 hover:border-indigo-200 rounded-xl transition-all duration-200 flex items-center justify-between gap-3 group shadow-3xs"
              >
                <div className="space-y-1">
                  <span className="text-[11px] font-extrabold text-slate-400 tracking-wider uppercase">
                    {item.category}
                  </span>
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-indigo-800 transition-colors">
                    {item.es}
                  </h4>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed font-semibold">
                    {item.hy}
                  </p>
                </div>

                {speechSupported && (
                  <button
                    onClick={() => speakSpanish(item.es, `vocab-${idx}`)}
                    className={`p-2.5 rounded-lg transition-colors cursor-pointer shrink-0 ${
                      isSpeaking
                        ? 'bg-indigo-100 text-indigo-700 animate-pulse'
                        : 'text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 bg-white'
                    }`}
                    title="Լսել արտասանությունը"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {filteredVocabulary.length === 0 && (
          <div className="col-span-full text-center py-12 text-slate-400 space-y-2">
            <Search className="w-12 h-12 mx-auto text-slate-300" />
            <p className="text-base font-bold text-slate-700">Ոչինչ չի գտնվել</p>
            <p className="text-sm text-slate-400">Փորձեք փոխել որոնման բառը կամ կատեգորիան:</p>
          </div>
        )}
      </div>
    </div>
  );
}
