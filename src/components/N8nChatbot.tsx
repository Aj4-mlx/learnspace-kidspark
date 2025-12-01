import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useState } from 'react';

interface N8nChatbotProps {
    isOpen: boolean;
    onClose: () => void;
}

const N8nChatbot = ({ isOpen, onClose }: N8nChatbotProps) => {
    const [iframeLoaded, setIframeLoaded] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
                <DialogHeader>
                    <DialogTitle>BICS AI Chatbot Assistant</DialogTitle>
                </DialogHeader>
                <div className="flex-1 overflow-hidden bg-white rounded-lg">
                    <iframe
                        src="https://aj4-mlx.app.n8n.cloud/webhook/9b92d849-43a3-49d9-bb60-64c601a757a4/chat"
                        className="w-full h-full border-0"
                        title="N8N Chatbot"
                        onLoad={() => setIframeLoaded(true)}
                        allow="camera; microphone; clipboard-read; clipboard-write"
                    />
                    {!iframeLoaded && (
                        <div className="flex items-center justify-center h-full bg-muted">
                            <p className="text-muted-foreground">Loading chatbot...</p>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default N8nChatbot;
