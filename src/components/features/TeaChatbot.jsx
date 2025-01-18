import React, { useState, useRef, useEffect } from 'react';
import { useChatbot } from '../../hooks/useChatbot';

export const TeaChatbot = () => {
  const { messages, isLoading, error, sendMessage } = useChatbot();
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    
    await sendMessage(inputMessage);
    setInputMessage('');
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Tea Assistant</h3>
      </div>
      
      <div className="h-96 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 ${
              msg.sender === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <div
              className={`inline-block p-3 rounded-lg ${
                msg.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="text-center text-gray-500">
            <span>Thinking...</span>
          </div>
        )}
        {error && (
          <div className="text-center text-red-500">
            <span>{error}</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask about tea..."
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}; 