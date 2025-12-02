import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import { MessageCircle, Sparkles } from 'lucide-react';
import '@n8n/chat/dist/style.css';
import '../chatbot-theme.css';
import { createChat } from '@n8n/chat';

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
                    'Welcome to BICS AI Assistant! 👋',
                    'How can I help you today?'
                ]
            });
            chatInitializedRef.current = true;
        }
    }, []);

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navigation />

            {/* Hero Section */}
            <section className="py-12 md:py-16 gradient-hero">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <MessageCircle className="w-12 h-12 text-primary-foreground" />
                            <Sparkles className="w-8 h-8 text-secondary" />
                        </div>
                        <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-3 text-shadow">
                            BICS AI Assistant
                        </h1>
                        <p className="font-body text-primary-foreground/90 text-base md:text-lg text-shadow">
                            Ask questions, get help with your sessions, or learn more about AI and technology!
                        </p>
                    </div>
                </div>
            </section>

            {/* Chat Container */}
            <div className="flex-1 bg-muted/30">
                <div className="container mx-auto px-4 py-6 h-full">
                    <div className="bg-card rounded-lg border-2 border-primary/20 shadow-lg overflow-hidden h-full">
                        <div
                            ref={chatContainerRef}
                            className="w-full h-full"
                            style={{ minHeight: 'calc(100vh - 320px)' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
