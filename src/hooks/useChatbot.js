import { useState } from 'react';
import { chatbotService } from '../services/chatbotService';

export const useChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async (userMessage) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Add user message to chat
      const userMessageObj = {
        content: userMessage,
        sender: 'user',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, userMessageObj]);

      // Get bot response
      const response = await chatbotService.sendMessage(userMessage);
      
      // Add bot response to chat
      const botMessageObj = {
        content: response.message,
        sender: 'bot',
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, botMessageObj]);
    } catch (err) {
      setError(err.message || 'Failed to send message');
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setError(null);
  };

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearChat
  };
}; 