import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useEffect, useRef } from 'react';
import '@n8n/chat/dist/style.css';
import { createChat } from '@n8n/chat';

interface N8nChatbotProps {
    isOpen: boolean;
    onClose: () => void;
}

const N8nChatbot = ({ isOpen, onClose }: N8nChatbotProps) => {
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const chatInitializedRef = useRef(false);

    useEffect(() => {
        if (isOpen && chatContainerRef.current && !chatInitializedRef.current) {
            createChat({
                webhookUrl: 'https://aj4-mlx.app.n8n.cloud/webhook/9b92d849-43a3-49d9-bb60-64c601a757a4/chat',
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
    }, [isOpen]);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[80vh] flex flex-col p-0 gap-0">
                <DialogHeader className="p-4 border-b">
                    <DialogTitle>BICS AI Chatbot Assistant</DialogTitle>
                </DialogHeader>
                <div
                    ref={chatContainerRef}
                    className="flex-1 overflow-hidden bg-white"
                    style={{ minHeight: '500px' }}
                />
            </DialogContent>
        </Dialog>
    );
};

export default N8nChatbot;
