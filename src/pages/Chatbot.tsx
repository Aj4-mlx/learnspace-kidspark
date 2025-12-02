import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import '@n8n/chat/dist/style.css';
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
            <div
                ref={chatContainerRef}
                className="flex-1 w-full"
                style={{ height: 'calc(100vh - 64px)' }}
            />
        </div>
    );
};

export default Chatbot;
