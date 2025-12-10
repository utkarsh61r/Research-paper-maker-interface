import { useState } from 'react';
import { MessageCircle, Send, X, Sparkles, Lightbulb, Wand2, CheckCircle } from 'lucide-react';

const suggestions = [
  { icon: Wand2, text: 'Rewrite this paragraph', color: 'from-blue-500 to-cyan-500' },
  { icon: Sparkles, text: 'Generate introduction', color: 'from-purple-500 to-pink-500' },
  { icon: CheckCircle, text: 'Fix citations', color: 'from-green-500 to-emerald-500' },
  { icon: Lightbulb, text: 'Explain concept', color: 'from-orange-500 to-red-500' },
];

export function AskAIButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { type: 'ai', text: 'Hi! I\'m your AI research assistant. How can I help you today?' },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { type: 'user', text: message }]);
      setMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'ai',
          text: 'I\'m analyzing your request. Here are some suggestions to improve your paper...'
        }]);
      }, 1000);
    }
  };

  const handleSuggestion = (text: string) => {
    setMessage(text);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group animate-bounce"
        >
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 animate-in slide-in-from-bottom-4 duration-300 flex flex-col max-h-[600px]">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white">AI Assistant</h3>
                <div className="flex items-center gap-2 text-white/80 text-xs">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Online
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Quick Suggestions */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">Quick actions:</p>
            <div className="grid grid-cols-2 gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestion(suggestion.text)}
                  className="group relative flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${suggestion.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  <suggestion.icon className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors relative z-10" />
                  <span className="text-xs text-gray-700 dark:text-gray-300 relative z-10">{suggestion.text.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 min-h-[300px]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-none'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}