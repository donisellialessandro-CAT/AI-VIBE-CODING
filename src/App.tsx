import { useEffect, useMemo, useState } from 'react';
import { AtlasView } from './components/AtlasView';
import { ConfigView } from './components/ConfigView';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { QuizView } from './components/QuizView';
import { ResultsView } from './components/ResultsView';
import { QUESTION_BANK } from './data/questions';
import {
  AnswerMode,
  AppSection,
  Question,
  QuestionAttempt,
  QuizConfig,
  QuizSession,
  TopicId,
} from './types/quiz';
import {
  createQuizSession,
  createReviewSession,
  filterQuestions,
} from './utils/evaluator';

const STORAGE_KEY_SESSION = 'interrogami_le_corbusier_session_v1';
const STORAGE_KEY_CONFIG = 'interrogami_le_corbusier_config_v1';

const DEFAULT_CONFIG: QuizConfig = {
  topic: 'tutti',
  answerMode: AnswerMode.Multipla,
  difficulty: 'tutte',
  questionCount: 5,
};

function detectSpeechSupport(): boolean {
  if (typeof window === 'undefined') return false;
  const win = window as unknown as {
    SpeechRecognition?: unknown;
    webkitSpeechRecognition?: unknown;
  };
  return Boolean(win.SpeechRecognition || win.webkitSpeechRecognition);
}

function loadSavedConfig(): QuizConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CONFIG);
    if (!raw) return DEFAULT_CONFIG;
    const parsed = JSON.parse(raw) as Partial<QuizConfig>;
    return {
      topic: parsed.topic ?? DEFAULT_CONFIG.topic,
      answerMode: parsed.answerMode ?? DEFAULT_CONFIG.answerMode,
      difficulty: parsed.difficulty ?? DEFAULT_CONFIG.difficulty,
      questionCount: parsed.questionCount ?? DEFAULT_CONFIG.questionCount,
    };
  } catch {
    return DEFAULT_CONFIG;
  }
}

function loadSavedSession(): QuizSession | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SESSION);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as QuizSession;
    if (!parsed || !Array.isArray(parsed.questionIds) || parsed.questionIds.length === 0) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export default function App() {
  const [speechSupported] = useState<boolean>(() => detectSpeechSupport());
  const [config, setConfig] = useState<QuizConfig>(() => loadSavedConfig());
  const [session, setSession] = useState<QuizSession | null>(() => loadSavedSession());
  const [atlasTopic, setAtlasTopic] = useState<TopicId>(TopicId.CinquePunti);

  const [section, setSection] = useState<AppSection>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autostart') === '1') {
        return AppSection.Configura;
      }
    }
    return AppSection.Home;
  });

  const questionMap = useMemo<Record<string, Question>>(() => {
    return QUESTION_BANK.reduce(
      (acc, q) => {
        acc[q.id] = q;
        return acc;
      },
      {} as Record<string, Question>,
    );
  }, []);

  const availableQuestions = useMemo(
    () => filterQuestions(QUESTION_BANK, config.topic, config.difficulty),
    [config.topic, config.difficulty],
  );

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(config));
    } catch {
      // ignore storage quota failures
    }
  }, [config]);

  useEffect(() => {
    try {
      if (session) {
        localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
      } else {
        localStorage.removeItem(STORAGE_KEY_SESSION);
      }
    } catch {
      // ignore storage quota failures
    }
  }, [session]);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const handleNavigate = (next: AppSection) => {
    setSection(next);
    scrollToTop();
  };

  const handleStartQuiz = (overrideConfig?: QuizConfig) => {
    const activeConfig = overrideConfig ?? config;
    const newSession = createQuizSession(QUESTION_BANK, activeConfig, speechSupported);
    if (newSession.questionIds.length === 0) return;
    setSession(newSession);
    setSection(AppSection.Interrogazione);
    scrollToTop();
  };

  const handleRecordAttempt = (attempt: QuestionAttempt) => {
    setSession((prev) => {
      if (!prev) return prev;
      if (prev.attempts[attempt.questionId]) return prev; // Prevent retroactive overwriting
      return {
        ...prev,
        attempts: {
          ...prev.attempts,
          [attempt.questionId]: attempt,
        },
      };
    });
  };

  const handleUpdateAttempt = (attempt: QuestionAttempt) => {
    setSession((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        attempts: {
          ...prev.attempts,
          [attempt.questionId]: attempt,
        },
      };
    });
  };

  const handleNextQuestion = () => {
    setSession((prev) => {
      if (!prev) return prev;
      const isLast = prev.currentIndex >= prev.questionIds.length - 1;
      if (isLast) {
        setSection(AppSection.Risultati);
        scrollToTop();
        return { ...prev, completed: true };
      }
      scrollToTop();
      return { ...prev, currentIndex: prev.currentIndex + 1 };
    });
  };

  const handleReviewMistakes = () => {
    if (!session) return;
    const review = createReviewSession(session, speechSupported);
    if (!review) return;
    setSession(review);
    setSection(AppSection.Interrogazione);
    scrollToTop();
  };

  const handleExploreAtlas = (initialTopic?: TopicId) => {
    if (initialTopic) {
      setAtlasTopic(initialTopic);
    }
    setSection(AppSection.Atlante);
    scrollToTop();
  };

  const handleQuizFromAtlas = (topic: TopicId) => {
    const nextConfig: QuizConfig = {
      ...config,
      topic,
    };
    setConfig(nextConfig);
    setSection(AppSection.Configura);
    scrollToTop();
  };

  return (
    <div className="min-h-screen flex flex-col arch-grid-bg text-[#171717]">
      <Header
        currentSection={section}
        hasActiveSession={Boolean(session && !session.completed)}
        hasCompletedSession={Boolean(session && session.completed)}
        onNavigate={handleNavigate}
        onStartPrimary={() => handleNavigate(AppSection.Configura)}
      />

      <main className="flex-1">
        {section === AppSection.Home && (
          <HomeView
            totalQuestionsCount={QUESTION_BANK.length}
            hasResumeSession={Boolean(session && !session.completed)}
            onStartConfigure={() => handleNavigate(AppSection.Configura)}
            onExploreAtlas={handleExploreAtlas}
            onResumeSession={() => handleNavigate(AppSection.Interrogazione)}
          />
        )}

        {section === AppSection.Configura && (
          <ConfigView
            config={config}
            availableCount={availableQuestions.length}
            speechSupported={speechSupported}
            onChangeConfig={setConfig}
            onStartQuiz={() => handleStartQuiz()}
            onBackHome={() => handleNavigate(AppSection.Home)}
          />
        )}

        {section === AppSection.Interrogazione && session && (
          <QuizView
            session={session}
            questionMap={questionMap}
            onRecordAttempt={handleRecordAttempt}
            onUpdateAttempt={handleUpdateAttempt}
            onNextQuestion={handleNextQuestion}
            onQuitToConfig={() => handleNavigate(AppSection.Configura)}
          />
        )}

        {section === AppSection.Risultati && session && (
          <ResultsView
            session={session}
            questionMap={questionMap}
            onRetrySameConfig={() => handleStartQuiz(session.config)}
            onReviewMistakes={handleReviewMistakes}
            onConfigureNew={() => handleNavigate(AppSection.Configura)}
            onUpdateAttempt={handleUpdateAttempt}
          />
        )}

        {section === AppSection.Atlante && (
          <AtlasView
            selectedTopic={atlasTopic}
            onSelectTopic={setAtlasTopic}
            onQuizTopic={handleQuizFromAtlas}
          />
        )}
      </main>

      <footer className="border-t border-[#171717] bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs font-mono-tech text-[#52524E]">
          <span>INTERROGAMI! · LE CORBUSIER / ARCHITETTURA MODERNA</span>
          <span>Nessun dato personale raccolto · Stato salvato localmente nel browser</span>
        </div>
      </footer>
    </div>
  );
}
