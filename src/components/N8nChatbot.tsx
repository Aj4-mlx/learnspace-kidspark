import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useEffect, useRef } from 'react';
import '@n8n/chat/dist/style.css';
import { createChat } from '@n8n/chat';

interface N8nChatbotProps {
    isOpen: boolean;
    onClose: () => void;
}

const N8nChatbot = ({ isOpen, onClose }: N8nChatbotProps) => {
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && chatContainerRef.current) {
            // Clear the container first
            chatContainerRef.current.innerHTML = '';

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
        }
    }, [isOpen]);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[80vh] flex flex-col p-0 gap-0">
                <DialogHeader className="p-4 border-b">
                    <DialogTitle>BICS AI Chatbot Assistant</DialogTitle>
                    <DialogDescription className="sr-only">
                        Interactive AI chatbot for BICS students to get help and information
                    </DialogDescription>
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
