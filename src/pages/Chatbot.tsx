import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import { Sparkles } from 'lucide-react';
import '@n8n/chat/dist/style.css';
import '../chatbot-theme.css';
import { createChat } from '@n8n/chat';
import biscLogo from '../assets/bisc_logo.jpg';

const Chatbot = () => {
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const chatInitializedRef = useRef(false);

    useEffect(() => {
        if (chatContainerRef.current && !chatInitializedRef.current) {
            createChat({
                webhookUrl: 'https://aj4-mlx.app.n8n.cloud/webhook/d92d978d-ba41-450f-9e17-00dc5fe4eed8/chat',
                target: chatContainerRef.current,
                mode: 'fullscreen',
                showWelcomeScreen: true,
                loadPreviousSession: true,
                initialMessages: [
                    'Welcome to BISC AI Assistant! 👋',
                    'How can I help you today?'
                ]
            });
            chatInitializedRef.current = true;
        }
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50 flex flex-col">
            <Navigation />

            <main className="flex-1 flex items-center justify-center px-4 py-10 md:py-14">
                <div className="w-full max-w-6xl grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)] items-stretch">
                    {/* Left hero / promo card */}
                    <section className="relative overflow-hidden rounded-3xl bg-slate-900/90 border border-slate-700/70 shadow-[0_24px_80px_rgba(0,0,0,0.8)] p-7 md:p-9">
                        <div className="pointer-events-none absolute inset-0 opacity-80">
                            <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />
                            <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl" />
                        </div>

                        <div className="relative flex flex-col gap-6">
                            <div className="inline-flex items-center gap-2 self-start rounded-full bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-200 border border-slate-700/80">
                                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                Always-on AI assistant
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-20 w-20 items-center justify-center rounded-3xl overflow-hidden bg-white shadow-[0_18px_40px_rgba(56,189,248,0.6)]">
                                    <img src={biscLogo} alt="BISC Logo" className="h-full w-full object-cover" />
                                </div>
                                <div className="space-y-2">
                                    <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                                        Your intelligent chat companion
                                    </h1>
                                    <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                                        Get instant answers, creative ideas, and friendly guidance tailored for every
                                        BISC learner. Available 24/7 whenever curiosity strikes.
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-3">
                                    <p className="text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wide">
                                        Popular uses
                                    </p>
                                    <ul className="text-sm text-slate-200 space-y-1.5">
                                        <li>• Homework & project help</li>
                                        <li>• Session summaries & recaps</li>
                                        <li>• Creative prompts & stories</li>
                                    </ul>
                                </div>
                                <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-3">
                                    <p className="text-xs font-semibold text-slate-400 mb-1 uppercase tracking-wide">
                                        Safe for kids
                                    </p>
                                    <p className="text-sm text-slate-200">
                                        Conversations are moderated and designed to be age-appropriate and supportive.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 pt-1">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(34,211,238,0.7)] hover:bg-cyan-400 transition-colors"
                                >
                                    Your Learning Companion
                                </button>
                                <div className="flex items-center gap-2 text-xs text-slate-400">
                                    <div className="flex -space-x-2">
                                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-700/90 text-[10px] border border-slate-800">
                                            <Sparkles className="h-3 w-3 text-cyan-300" />
                                        </span>
                                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-700/90 text-[10px] border border-slate-800">
                                            🙂
                                        </span>
                                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-700/90 text-[10px] border border-slate-800">
                                            🌟
                                        </span>
                                    </div>
                                    Trusted by BISC learners every day
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Right chat card */}
                    <section className="relative flex flex-col rounded-3xl bg-slate-900/90 border border-slate-700/70 shadow-[0_24px_80px_rgba(0,0,0,0.8)] overflow-hidden min-h-[540px]">
                        <header className="flex items-center justify-between gap-3 px-5 py-4 border-b border-slate-800/80 bg-slate-900/80">
                            <div>
                                <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">
                                    Live assistant
                                </p>
                                <h2 className="font-heading text-lg font-semibold text-slate-50">
                                    BISC AI Assistant
                                </h2>
                                <p className="text-xs text-slate-400">
                                    Ask anything about sessions, projects, or new ideas.
                                </p>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 border border-emerald-500/40">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    Online
                                </span>
                                <span className="text-[10px] text-slate-500">
                                    Replies in under a minute
                                </span>
                            </div>
                        </header>

                        <div className="flex-1 bg-slate-950/80">
                            <div
                                ref={chatContainerRef}
                                className="h-full w-full"
                                style={{ minHeight: '420px' }}
                            />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Chatbot;
