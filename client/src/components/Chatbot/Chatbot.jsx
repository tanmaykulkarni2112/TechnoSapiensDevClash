import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import botIcon from '../../assets/chatbotimg.png';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const chatRef = useRef(null);

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages((prev) => [...prev, { from: "user", text: input }]);
        setInput("");

        // Fake bot response
        setTimeout(() => {
            setMessages((prev) => [...prev, { from: "bot", text: "I'm thinking..." }]);
        }, 1000);
    };

    // Detect clicks outside the chatbox
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (chatRef.current && !chatRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            {/* Chat Toggle Button */}
            <div className="fixed bottom-24 right-6 z-50">
                <button
                    className="bg-white p-2 rounded-full shadow-lg hover:scale-105 animate-wiggle transition-transform"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <img
                        src={botIcon}
                        alt="Chatbot Icon"
                        className="w-12 h-12 object-contain"
                    />
                </button>
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div
                    ref={chatRef}
                    className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden z-50"
                >
                    {/* Header */}
                    <div className="bg-blue-600 text-white p-4 font-bold flex items-center justify-between">
                        <span>AgriBot 🌾</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-gray-300 text-2xl leading-none"
                        >
                            ×
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-4 space-y-2 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-2 rounded-lg max-w-xs ${
                                    msg.from === "user" ? "bg-blue-100 self-end" : "bg-gray-100 self-start"
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="flex p-2 border-t">
                        <input
                            type="text"
                            className="flex-1 border rounded-l-lg p-2 focus:outline-none"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Ask me anything..."
                        />
                        <button
                            className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 transition"
                            onClick={handleSend}
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
