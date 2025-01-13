import api from '../config/api';

export const chatbotService = {
  sendMessage: async (message) => {
    const response = await api.post('/chatbot/chat', { message });
    return { message: response.data.response };
  }
}; 