"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Users,
  Flame,
  Star,
  Clipboard,
  Send,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Trophy,
  Smile,
  Frown,
  Rocket,
  Globe
} from 'lucide-react';
import Link from 'next/link';

// Types
type InputType = 'text' | 'rating' | 'choice' | 'select';

interface Question {
  id: number;
  text: string;
  type: InputType;
  options?: string[];
}

interface RelationshipType {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  gradient: string;
  questions: Question[];
}

// Data
const relationships: RelationshipType[] = [
  {
    id: 'serious',
    title: 'The Serious Partner 💍',
    description: 'Deep, romantic, and future-focused questions for the one.',
    icon: <Heart className="w-8 h-8" />,
    color: 'bg-rose-500',
    gradient: 'from-rose-500 to-pink-600',
    questions: [
      { id: 1, text: "What's your favorite memory of us together?", type: 'text' },
      { id: 2, text: "One thing you'd change about our relationship?", type: 'text' },
      { id: 3, text: "What is your ideal marriage timeline?", type: 'select', options: ['Soon', '1-2 years', '3-5 years', 'Just taking it day by day'] },
      { id: 4, text: "Rate our current communication level (10 = Perfect)", type: 'rating' },
      { id: 5, text: "Where do you see us in 10 years?", type: 'text' },
      { id: 6, text: "What's my most annoying habit that you actually find cute?", type: 'text' },
      { id: 7, text: "If we could move anywhere tomorrow, where would it be?", type: 'text' },
      { id: 8, text: "How many kids do you realistically want?", type: 'select', options: ['None', '1', '2', '3+', 'Waiting for the right time'] },
      { id: 9, text: "What was your honest first impression of me?", type: 'text' },
      { id: 10, text: "Rate our chemistry on a scale of 1-10", type: 'rating' },
      { id: 11, text: "Do you believe in soulmates?", type: 'choice' },
      { id: 12, text: "What's your primary love language?", type: 'select', options: ['Words of Affirmation', 'Acts of Service', 'Receiving Gifts', 'Quality Time', 'Physical Touch'] },
      { id: 13, text: "Which of my friends is your secret favorite?", type: 'text' },
      { id: 14, text: "What's the best gift I ever gave you?", type: 'text' },
      { id: 15, text: "Are you genuinely happy with our current routine?", type: 'choice' },
      { id: 16, text: "What's one secret you've never told me before?", type: 'text' },
      { id: 17, text: "How often do you think about our future together?", type: 'select', options: ['Every single day', 'Very often', 'Sometimes', 'Only when we discuss it'] },
      { id: 18, text: "Rate our compatibility (1-10)", type: 'rating' },
      { id: 19, text: "What song defines our relationship?", type: 'text' },
      { id: 20, text: "Would you still love me if I was a worm?", type: 'choice' },
      { id: 21, text: "Would you be my Valentine?", type: 'choice' },
      { id: 22, text: "Write my phone number by head if we are that close", type: 'text' },
    ]
  },
  {
    id: 'talking',
    title: 'The Talking Stage 🫣',
    description: 'Flirty, risky, and clarifying questions to figure it out.',
    icon: <Users className="w-8 h-8" />,
    color: 'bg-purple-500',
    gradient: 'from-purple-500 to-indigo-600',
    questions: [
      { id: 1, text: "Am I currently your only crush?", type: 'choice' },
      { id: 2, text: "Rate my flirting skills so far (1-10)", type: 'rating' },
      { id: 3, text: "Am I a Red or Green flag in your eyes?", type: 'choice' },
      { id: 4, text: "In your words, 'What are we' right now?", type: 'text' },
      { id: 5, text: "What is your favorite thing about me so far?", type: 'text' },
      { id: 6, text: "Who was the first person you told about me?", type: 'text' },
      { id: 7, text: "Rate our first date (or the idea of it) 1-10", type: 'rating' },
      { id: 8, text: "What's your 'type' and how well do I fit it?", type: 'text' },
      { id: 9, text: "What's the most attractive thing about me?", type: 'select', options: ['Personality', 'Looks', 'Style', 'Intelligence', 'Energy'] },
      { id: 10, text: "Are you a 'one at a time' talker?", type: 'choice' },
      { id: 11, text: "What is your biggest dealbreaker in dating?", type: 'text' },
      { id: 12, text: "Rate my social media presence (1-10)", type: 'rating' },
      { id: 13, text: "Would you go on a second date with me?", type: 'choice' },
      { id: 14, text: "Do you believe in love at first sight?", type: 'choice' },
      { id: 15, text: "What's the riskiest text you've thought about sending me?", type: 'text' },
      { id: 16, text: "If we went out tonight, exactly where would you take me?", type: 'text' },
      { id: 17, text: "Are you more of a Cats or Dogs person?", type: 'select', options: ['Cats', 'Dogs', 'Both', 'Neither'] },
      { id: 18, text: "How long was your longest 'talking stage'?", type: 'text' },
      { id: 19, text: "On a scale of 1-10, how much do I stress you out?", type: 'rating' },
      { id: 20, text: "Are we official yet (or getting close)?", type: 'choice' },
      { id: 21, text: "Would you be my Valentine?", type: 'choice' },
      { id: 22, text: "Write my phone number by head if we are that close", type: 'text' },
    ]
  },
  {
    id: 'situationship',
    title: 'The Situationship 🌪️',
    description: 'Intense, confusing, and direct questions for the blurred lines.',
    icon: <Flame className="w-8 h-8" />,
    color: 'bg-orange-500',
    gradient: 'from-orange-500 to-red-600',
    questions: [
      { id: 1, text: "Are you seeing other people right now?", type: 'choice' },
      { id: 2, text: "Internal check: Do you actually miss me when I'm gone?", type: 'choice' },
      { id: 3, text: "Honest truth: Why haven't we made it official?", type: 'text' },
      { id: 4, text: "What's the 'vibe' between us right now?", type: 'select', options: ['Friends with Benefits', 'Exclusively unsure', 'Deeply obsessed', 'It is complicated'] },
      { id: 5, text: "Rate our last hangout (1-10)", type: 'rating' },
      { id: 6, text: "Do you catch yourself thinking about me often?", type: 'choice' },
      { id: 7, text: "What do your friends actually think of me?", type: 'text' },
      { id: 8, text: "If I stopped texting tomorrow, how much would you care (1-10)?", type: 'rating' },
      { id: 9, text: "What is our biggest obstacle to being a couple?", type: 'text' },
      { id: 10, text: "Do you realisticly see this going anywhere?", type: 'choice' },
      { id: 11, text: "Rate my 'ghosting' potential (1-10)", type: 'rating' },
      { id: 12, text: "Who is more obsessed with whom?", type: 'select', options: ['Me', 'You', 'Equal vibes', 'Neither'] },
      { id: 13, text: "What is your favorite late-night memory of us?", type: 'text' },
      { id: 14, text: "What's the one thing you would change about 'us'?", type: 'text' },
      { id: 15, text: "Do you consider us just 'friends with benefits'?", type: 'choice' },
      { id: 16, text: "Scale of 1-10, how confusing do you find me?", type: 'rating' },
      { id: 17, text: "What's the one question you're too scared to ask me?", type: 'text' },
      { id: 18, text: "Would you be jealous if you saw me with someone else?", type: 'choice' },
      { id: 19, text: "Describe our dynamic in exactly one word.", type: 'text' },
      { id: 20, text: "Is this the end or just the beginning?", type: 'select', options: ['The end', 'Just the beginning', 'The middle', 'Endless loop'] },
      { id: 21, text: "Would you be my Valentine?", type: 'choice' },
      { id: 22, text: "Write my phone number by head if we are that close", type: 'text' },
    ]
  },
  {
    id: 'bestie',
    title: 'The Bestie 👯‍♀️',
    description: 'Chaotic, roast-heavy, and loyal questions for your partner in crime.',
    icon: <Star className="w-8 h-8" />,
    color: 'bg-yellow-500',
    gradient: 'from-yellow-400 to-orange-500',
    questions: [
      { id: 1, text: "Who realistically dies first in a zombie apocalypse?", type: 'select', options: ['Me', 'You', 'We go out together', 'I sell you out'] },
      { id: 2, text: "Who was my absolute worst ex-partner?", type: 'text' },
      { id: 3, text: "Rate my outfit choices on a bad day (1-10)", type: 'rating' },
      { id: 4, text: "Between us, who is the real 'bad influence'?", type: 'select', options: ['Me', 'You', 'The Universe', 'Our shared group chat'] },
      { id: 5, text: "If we shared a bank account, what would we go broke on?", type: 'text' },
      { id: 6, text: "Rate our loyalty level (1-10)", type: 'rating' },
      { id: 7, text: "What's the funniest (or most illegal) thing we've done?", type: 'text' },
      { id: 8, text: "Who is more likely to end up in jail for a day?", type: 'select', options: ['Me', 'You', 'Both of us together', 'Neither, we are too smart'] },
      { id: 9, text: "What's my most embarrassing moment you ever witnessed?", type: 'text' },
      { id: 10, text: "Are we friends for life? No backing out.", type: 'choice' },
      { id: 11, text: "Rate my driving skills (1-10)", type: 'rating' },
      { id: 12, text: "Who is the better cook (be honest)?", type: 'select', options: ['Me', 'You', 'Uber Eats', 'My Mom'] },
      { id: 13, text: "If we were a famous duo, who would we be?", type: 'text' },
      { id: 14, text: "What is the one thing I do that drives you absolutely crazy?", type: 'text' },
      { id: 15, text: "What's our most legendary inside joke?", type: 'text' },
      { id: 16, text: "Scale of 1-10, how much do you trust me with your unlocked phone?", type: 'rating' },
      { id: 17, text: "If I called you at 3 AM to hide a body, would you come?", type: 'choice' },
      { id: 18, text: "In this friendship, who is actually the 'main character'?", type: 'select', options: ['Me', 'You', 'We share the crown', 'The drama'] },
      { id: 19, text: "What is our shared retirement plan?", type: 'text' },
      { id: 20, text: "Would you still be my friend if I became a cringe influencer?", type: 'choice' },
      { id: 21, text: "Would you be my Valentine?", type: 'choice' },
      { id: 22, text: "Write my phone number by head if we are that close", type: 'text' },
    ]
  },
];

export default function DefineTheVibe() {
  const [step, setStep] = useState<'welcome' | 'quiz' | 'result'>('welcome');
  const [selectedRel, setSelectedRel] = useState<RelationshipType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentValue, setCurrentValue] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [countryCode, setCountryCode] = useState<string>('+1');

  // Fetch country code on mount
  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const code = data.country_calling_code || '+1';
        setCountryCode(code.startsWith('+') ? code : `+${code}`);
      } catch (error) {
        // Default to +1 if fetch fails
        setCountryCode('+1');
      }
    };
    fetchCountryCode();
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const handleStart = (rel: RelationshipType) => {
    setSelectedRel(rel);
    setStep('quiz');
    setCurrentIndex(0);
    setAnswers({});
    setCurrentValue('');
  };

  const handleNext = () => {
    if (!selectedRel) return;

    // Save current answer
    const q = selectedRel.questions[currentIndex];
    setAnswers(prev => ({ ...prev, [q.id]: currentValue || 'No answer' }));

    if (currentIndex < selectedRel.questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setCurrentValue('');
    } else {
      setStep('result');
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setCurrentValue(answers[selectedRel?.questions[currentIndex - 1].id || 0] || '');
    } else {
      setStep('welcome');
    }
  };

  const generateWhatsAppLink = () => {
    if (!selectedRel) return '';
    let message = `*Vibe Audit Result: ${selectedRel.title}*\n\n`;
    selectedRel.questions.forEach((q, idx) => {
      message += `*Q${idx + 1}: ${q.text}*\n${answers[q.id]}\n\n`;
    });

    // Check if Question 22 (phone number) was answered
    const phoneAnswer = answers[22];
    const cleanNumber = phoneAnswer ? phoneAnswer.replace(/\D/g, '') : '';

    // If we have a reasonable number of digits, use it as the target
    if (cleanNumber.length >= 7) {
      // Prepend the country code
      const fullNumber = `${countryCode}${cleanNumber}`;
      return `https://wa.me/${fullNumber}?text=${encodeURIComponent(message)}`;
    }

    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  };

  const copyToClipboard = () => {
    if (!selectedRel) return;
    let message = `Vibe Audit Result: ${selectedRel.title}\n\n`;
    selectedRel.questions.forEach((q, idx) => {
      message += `Q${idx + 1}: ${q.text}\n${answers[q.id]}\n\n`;
    });
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Progress calculation
  const progress = selectedRel ? ((currentIndex + 1) / selectedRel.questions.length) * 100 : 0;

  return (
    <main className="min-h-screen bg-[#0f0f13] text-white selection:bg-rose-500/30 overflow-x-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12 md:py-20">
        <AnimatePresence mode="wait">
          {/* Welcome Screen */}
          {step === 'welcome' && (
            <motion.div
              key="welcome"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeIn}
              className="text-center space-y-8"
            >
              <div className="flex justify-end mb-4">
                <Link
                  href="/astra"
                  className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
                >
                  Explore Astra Services
                </Link>
              </div>
              <div className="space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="inline-flex items-center justify-center p-4 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl mb-4"
                >
                  <Heart className="w-12 h-12 text-rose-500 fill-rose-500" />
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter bg-linear-to-r from-white via-rose-200 to-rose-400 bg-clip-text text-transparent">
                  Define the Vibe
                </h1>
                <p className="text-zinc-400 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
                  The Extended Valentine Audit that determines exactly where you stand. Choose your path wisely.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                {relationships.map((rel) => (
                  <motion.button
                    key={rel.id}
                    whileHover={{ scale: 1.02, translateY: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleStart(rel)}
                    className="group relative p-6 text-left bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden transition-all hover:border-white/20 hover:bg-white/8"
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 bg-linear-to-br ${rel.gradient} blur-3xl group-hover:opacity-20 transition-opacity`} />
                    <div className="relative z-10 space-y-3">
                      <div className={`w-12 h-12 rounded-2xl ${rel.color} flex items-center justify-center shadow-lg`}>
                        {rel.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{rel.title}</h3>
                        <p className="text-sm text-zinc-400 leading-snug">{rel.description}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Quiz Screen */}
          {step === 'quiz' && selectedRel && (
            <motion.div
              key="quiz"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeIn}
              className="space-y-8"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handleBack}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors group"
                >
                  <ArrowLeft className="w-6 h-6 text-zinc-400 group-hover:text-white" />
                </button>
                <div className="text-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Step {currentIndex + 1} of 22</span>
                  <div className="text-sm font-medium text-rose-400">{selectedRel.title}</div>
                </div>
                <div className="w-10 h-10" /> {/* Spacer */}
              </div>

              {/* Progress Bar */}
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div
                  className={`h-full bg-linear-to-r ${selectedRel.gradient}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>

              {/* Question Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
                >
                  <div className="space-y-8">
                    <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                      {selectedRel.questions[currentIndex].text}
                    </h2>

                    {/* Input Variants */}
                    <div className="mt-8">
                      {selectedRel.questions[currentIndex].type === 'text' && (
                        <div className="space-y-4">
                          {selectedRel.questions[currentIndex].id === 22 && (
                            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl p-4">
                              <span className="text-lg font-bold text-zinc-400 whitespace-nowrap">{countryCode}</span>
                              <input
                                autoFocus
                                type="text"
                                inputMode="tel"
                                value={currentValue}
                                onChange={(e) => setCurrentValue(e.target.value.replace(/\D/g, ''))}
                                onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                                placeholder="Enter phone number"
                                className="flex-1 bg-transparent text-lg focus:outline-none placeholder:text-zinc-600"
                              />
                            </div>
                          )}
                          {selectedRel.questions[currentIndex].id !== 22 && (
                            <input
                              autoFocus
                              type="text"
                              value={currentValue}
                              onChange={(e) => setCurrentValue(e.target.value)}
                              onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                              placeholder="Type your answer..."
                              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-lg focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all placeholder:text-zinc-600"
                            />
                          )}
                          {selectedRel.questions[currentIndex].id === 22 && (
                            <button
                              onClick={() => {
                                setAnswers(prev => ({ ...prev, [22]: "I don't know it" }));
                                setStep('result');
                              }}
                              className="text-zinc-500 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2 px-2"
                            >
                              <Frown className="w-4 h-4" />
                              No, I don&apos;t know it
                            </button>
                          )}
                        </div>
                      )}

                      {selectedRel.questions[currentIndex].type === 'rating' && (
                        <div className="space-y-6">
                          <div className="flex justify-between items-center px-2">
                            {[...Array(10)].map((_, i) => (
                              <button
                                key={i}
                                onClick={() => setCurrentValue((i + 1).toString())}
                                className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${currentValue === (i + 1).toString()
                                  ? selectedRel.color + ' ring-4 ring-white/10 scale-125'
                                  : 'bg-white/5 hover:bg-white/10'
                                  }`}
                              >
                                {i + 1}
                              </button>
                            ))}
                          </div>
                          <div className="flex justify-between text-xs font-bold text-zinc-500 uppercase tracking-tighter">
                            <span>Could be better</span>
                            <span>Legendary</span>
                          </div>
                        </div>
                      )}

                      {selectedRel.questions[currentIndex].type === 'choice' && (
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            { label: 'Yes', icon: <Smile className="w-5 h-5" /> },
                            { label: 'No', icon: <Frown className="w-5 h-5" /> }
                          ].map((opt) => (
                            <button
                              key={opt.label}
                              onClick={() => setCurrentValue(opt.label)}
                              className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${currentValue === opt.label
                                ? `border-rose-500 bg-rose-500/10`
                                : 'border-white/5 bg-white/5 hover:bg-white/10'
                                }`}
                            >
                              {opt.icon}
                              <span className="font-bold text-lg">{opt.label}</span>
                            </button>
                          ))}
                        </div>
                      )}

                      {selectedRel.questions[currentIndex].type === 'select' && (
                        <div className="space-y-3">
                          {selectedRel.questions[currentIndex].options?.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => setCurrentValue(opt)}
                              className={`w-full p-5 text-left rounded-2xl border-2 transition-all flex justify-between items-center ${currentValue === opt
                                ? 'border-rose-500 bg-rose-500/10'
                                : 'border-white/5 bg-white/5 hover:bg-white/10'
                                }`}
                            >
                              <span className="font-medium text-lg">{opt}</span>
                              <div className={`w-6 h-6 rounded-full border-2 border-white/20 flex items-center justify-center transition-all ${currentValue === opt ? 'bg-rose-500 border-rose-500' : ''}`}>
                                {currentValue === opt && <CheckCircle2 className="w-4 h-4 text-white" />}
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={handleNext}
                      disabled={!currentValue}
                      className="w-full mt-8 py-5 rounded-2xl bg-linear-to-r from-rose-500 to-rose-600 font-bold text-xl shadow-lg shadow-rose-500/20 disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      {currentIndex === 21 ? 'See Verdict' : 'Continue'}
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

          {/* Result Screen */}
          {step === 'result' && selectedRel && (
            <motion.div
              key="result"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeIn}
              className="text-center space-y-12"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-rose-500/20 backdrop-blur-xl rounded-full border border-rose-500/30 p-4 mb-4 relative">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 bg-rose-500/20 blur-xl rounded-full"
                  />
                  <Trophy className="w-12 h-12 text-rose-500 relative z-10" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black bg-linear-to-r from-white to-rose-400 bg-clip-text text-transparent">
                  Audit Complete
                </h1>
                <p className="text-zinc-400 text-lg">
                  You&apos;ve defined the vibe. Now share it with them.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 space-y-6 max-h-[40vh] overflow-y-auto text-left scrollbar-hide">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
                  <div className={`p-2 rounded-lg ${selectedRel.color}`}>
                    {selectedRel.icon}
                  </div>
                  <h3 className="font-bold">The Verdict Summary</h3>
                </div>
                {selectedRel.questions.map((q, idx) => (
                  <div key={q.id} className="space-y-1">
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Question {idx + 1}</p>
                    <p className="text-zinc-100 font-medium">{answers[q.id]}</p>
                  </div>
                ))}
              </div>

              {/* Astra IT Promo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="group relative p-6 bg-linear-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all text-left"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 blur-2xl rounded-full -mr-8 -mt-8 group-hover:bg-indigo-500/20 transition-all" />
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <h3 className="font-bold text-lg leading-tight">Crafted by Astra IT</h3>
                    <p className="text-sm text-zinc-400">Want a viral web app like this? Astra IT specializes in high-end development and ROI-driven marketing.</p>
                  </div>
                  <Link
                    href="/astra"
                    className="sm:ml-auto w-full sm:w-auto px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <Globe className="w-4 h-4" />
                    Learn More
                  </Link>
                </div>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-5 rounded-2xl bg-[#25D366] text-white font-bold text-lg flex items-center justify-center gap-3 hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-green-500/20"
                >
                  <Send className="w-6 h-6" />
                  Send on WhatsApp
                </a>
                <button
                  onClick={copyToClipboard}
                  className="flex-1 py-5 rounded-2xl bg-white/5 border border-white/10 font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/10 active:scale-95 transition-all"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Clipboard className="w-6 h-6" />
                      Copy Answers
                    </>
                  )}
                </button>
              </div>

              <button
                onClick={() => setStep('welcome')}
                className="text-zinc-500 hover:text-white font-bold text-sm uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mx-auto"
              >
                Start Over
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <footer className="fixed bottom-8 left-0 right-0 z-10 text-center">
        <p className="text-zinc-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
          &copy; 2024 Define The Vibe &bull; Made by <Link href="/astra">astra.it.com</Link>
        </p>
      </footer>
    </main>
  );
}
