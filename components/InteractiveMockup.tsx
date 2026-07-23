"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Folder,
  FileText,
  MessageSquare,
  Search,
  Upload,
  Calendar,
  Shield,
  Clock,
  ChevronRight,
  Send,
  User,
  Users,
  Eye,
  Settings,
  Bell,
  Sparkles,
  CheckCircle,
  FileUp,
} from "lucide-react";

interface MockDoc {
  name: string;
  size: string;
  date: string;
  expiry?: string;
  category: string;
}

interface Message {
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

export default function InteractiveMockup() {
  const [activeFolder, setActiveFolder] = useState<string>("Finance");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [showToast, setShowToast] = useState<string | null>(null);
  const [chatInput, setChatInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Hello! I am your FamilyOS AI Assistant. I have indexed all your family documents. How can I help you today?",
      timestamp: "10:00 AM",
    },
  ]);
  const [ocrText, setOcrText] = useState<string>("");
  const [ocrAnimating, setOcrAnimating] = useState<boolean>(false);

  // Mock document database grouped by folder
  const [documents, setDocuments] = useState<Record<string, MockDoc[]>>({
    Finance: [
      { name: "Home_Deed_Signed.pdf", size: "2.4 MB", date: "Jan 12, 2026", category: "Finance" },
      { name: "Q3_Tax_Summary.pdf", size: "1.8 MB", date: "Nov 03, 2025", category: "Finance" },
      { name: "Car_Title_Subaru.pdf", size: "950 KB", date: "May 22, 2025", category: "Finance" },
    ],
    Health: [
      { name: "Immunization_Leo.pdf", size: "1.2 MB", date: "Jun 14, 2025", category: "Health" },
      { name: "Dental_Insurance_Card.pdf", size: "480 KB", date: "Aug 01, 2025", expiry: "Dec 31, 2026", category: "Health" },
      { name: "Medical_Checkup_Report.pdf", size: "3.1 MB", date: "Oct 19, 2025", category: "Health" },
    ],
    Estate: [
      { name: "Will_And_Trust_2025.pdf", size: "4.5 MB", date: "Dec 20, 2025", category: "Estate" },
      { name: "Power_Of_Attorney.pdf", size: "1.1 MB", date: "Dec 20, 2025", category: "Estate" },
    ],
    Travel: [
      { name: "Passports_Leo_Emma.pdf", size: "1.6 MB", date: "Mar 10, 2024", expiry: "Oct 14, 2028", category: "Travel" },
      { name: "Flight_Itinerary_Tokyo.pdf", size: "850 KB", date: "Jul 20, 2026", category: "Travel" },
    ],
  });

  const folders = ["Finance", "Health", "Estate", "Travel"];
  const familyMembers = [
    { name: "Sarah (You)", role: "Organizer", avatar: "S" },
    { name: "David", role: "Co-owner", avatar: "D" },
    { name: "Leo", role: "Child", avatar: "L" },
    { name: "Emma", role: "Child", avatar: "E" },
  ];

  // OCR Upload simulation
  const handleUploadClick = () => {
    setIsUploading(true);
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            // Add new document
            const newDoc: MockDoc = {
              name: "Home_Insurance_2026.pdf",
              size: "1.5 MB",
              date: "Today",
              expiry: "Jul 23, 2027",
              category: "Finance",
            };
            setDocuments((prevDocs) => ({
              ...prevDocs,
              Finance: [newDoc, ...prevDocs.Finance],
            }));
            setIsUploading(false);
            setActiveFolder("Finance");
            setShowToast("Document uploaded and processed successfully!");
            // Trigger OCR parsing text display
            setOcrAnimating(true);
            setOcrText("OCR: Extracted policy number POL-99238-A. Expiration date identified: July 23, 2027. Coverage: $450,000.");
            // Auto add notification comment from AI
            setTimeout(() => {
              setMessages((prev) => [
                ...prev,
                {
                  sender: "ai",
                  text: "I detected a new Home Insurance Policy document. I've set an expiration tracker for July 23, 2027, and updated the Family Calendar. Would you like me to highlight the deductible clauses?",
                  timestamp: "Just now",
                },
              ]);
              setOcrAnimating(false);
            }, 3000);
          }, 500);
          return 100;
        }
        return prev + 20;
      });
    }, 200);
  };

  const handleSendChat = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setMessages((prev) => [...prev, { sender: "user", text: userMsg, timestamp: "Just now" }]);
    setChatInput("");

    // Simulate AI response
    setTimeout(() => {
      let aiText = "I couldn't find details matching that query. Try asking about home insurance, passport expiry dates, or child health records.";
      if (userMsg.toLowerCase().includes("insurance") || userMsg.toLowerCase().includes("home")) {
        aiText = "Based on 'Home_Insurance_2026.pdf' (uploaded today), your coverage is $450,000, and it expires on July 23, 2027. Your monthly premium is $145.20.";
      } else if (userMsg.toLowerCase().includes("passport") || userMsg.toLowerCase().includes("travel")) {
        aiText = "Looking at 'Passports_Leo_Emma.pdf' in the Travel folder: Leo's passport is valid until Oct 14, 2028. Emma's passport is valid until Oct 14, 2028 as well.";
      } else if (userMsg.toLowerCase().includes("will") || userMsg.toLowerCase().includes("estate")) {
        aiText = "I found 'Will_And_Trust_2025.pdf' in your Estate folder, updated on Dec 20, 2025. Under Section 4, the primary executors are Sarah and David. The secondary backup executor is listed as Robert Miller.";
      }

      setMessages((prev) => [...prev, { sender: "ai", text: aiText, timestamp: "Just now" }]);
    }, 1000);
  };

  const selectPresetPrompt = (prompt: string) => {
    setChatInput(prompt);
    // Autofire
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "user", text: prompt, timestamp: "Just now" }]);
      let aiText = "";
      if (prompt.includes("insurance")) {
        aiText = "Based on 'Home_Insurance_2026.pdf' (uploaded today), your coverage is $450,000, and it expires on July 23, 2027. Your monthly premium is $145.20.";
      } else if (prompt.includes("passport")) {
        aiText = "Looking at 'Passports_Leo_Emma.pdf' in the Travel folder: Leo's passport is valid until Oct 14, 2028. Emma's passport is valid until Oct 14, 2028 as well.";
      } else if (prompt.includes("executors")) {
        aiText = "I found 'Will_And_Trust_2025.pdf' in your Estate folder, updated on Dec 20, 2025. Under Section 4, the primary executors are Sarah and David. The secondary backup executor is listed as Robert Miller.";
      }
      setMessages((prev) => [...prev, { sender: "ai", text: aiText, timestamp: "Just now" }]);
      setChatInput("");
    }, 200);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="relative w-full max-w-6xl mx-auto glass-card rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {/* Toast Alert */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-green-500/90 border border-green-400 text-white text-xs font-semibold shadow-lg backdrop-blur-md"
          >
            <CheckCircle className="w-4 h-4" />
            {showToast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* OS Title Bar */}
      <div className="flex items-center justify-between px-6 py-3.5 bg-brand-navy-deep/90 border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
          <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
          <span className="text-xs text-slate-500 ml-4 font-mono">familyos_desktop_v1.0.4.sh</span>
        </div>
        <div className="flex items-center gap-4 text-slate-400 text-xs">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/5">
            <Shield className="w-3 h-3 text-brand-blue" />
            <span className="font-semibold text-[10px] tracking-wider text-slate-300">SECURE ZERO-KNOWLEDGE</span>
          </div>
          <Bell className="w-4 h-4 hover:text-white cursor-pointer" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] text-slate-200">
        {/* Left Sidebar - Col 3 */}
        <div className="lg:col-span-3 bg-brand-navy-deep/60 border-r border-white/5 p-5 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-brand-blue rounded-lg flex items-center justify-center font-bold text-white text-xs">F</div>
              <span className="font-bold text-sm tracking-tight text-white">FamilyOS</span>
            </div>

            {/* Folder Navigation */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold px-2 mb-1">
                Document Vault
              </span>
              {folders.map((folder) => (
                <button
                  key={folder}
                  onClick={() => setActiveFolder(folder)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                    activeFolder === folder
                      ? "bg-brand-blue/15 text-brand-blue border border-brand-blue/20"
                      : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Folder className={`w-4 h-4 ${activeFolder === folder ? "text-brand-blue" : "text-slate-400"}`} />
                    <span>{folder}</span>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                    {documents[folder].length}
                  </span>
                </button>
              ))}
            </div>

            {/* Family Members */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold px-2 mb-1">
                Family Members
              </span>
              <div className="flex flex-col gap-1.5">
                {familyMembers.map((member) => (
                  <div key={member.name} className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-brand-violet/20 border border-brand-violet/40 text-brand-violet text-[10px] font-bold flex items-center justify-center">
                        {member.avatar}
                      </div>
                      <span className="text-xs text-slate-300 font-medium">{member.name}</span>
                    </div>
                    <span className="text-[9px] text-slate-500">{member.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats or Actions */}
          <div className="border-t border-white/5 pt-4 mt-6 flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-brand-violet" /> Last synced</span>
              <span className="font-mono">1 min ago</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-gradient-to-r from-brand-blue to-brand-violet rounded-full"></div>
            </div>
            <div className="flex justify-between text-[9px] text-slate-500 font-medium">
              <span>Vault Storage (4.2 GB)</span>
              <span>85% free</span>
            </div>
          </div>
        </div>

        {/* Center Main Dashboard Content - Col 5 */}
        <div className="lg:col-span-5 p-6 flex flex-col justify-between">
          <div className="flex flex-col gap-5">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search family vault..."
                  className="w-full pl-9 pr-4 py-2 text-xs bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-brand-blue/50"
                  disabled
                />
              </div>

              {/* Upload Button */}
              <button
                onClick={handleUploadClick}
                disabled={isUploading}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-brand-blue hover:bg-brand-blue-electric rounded-lg transition-all shadow-[0_4px_15px_rgba(59,130,246,0.3)] disabled:opacity-50"
              >
                {isUploading ? (
                  <>
                    <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Parsing...</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Doc</span>
                  </>
                )}
              </button>
            </div>

            {/* In-progress Upload Shimmer */}
            <AnimatePresence>
              {isUploading && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-3 bg-white/5 border border-white/10 rounded-xl flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-1.5 font-medium"><FileUp className="w-4 h-4 text-brand-blue" /> Home_Insurance_2026.pdf</span>
                    <span className="font-mono text-[10px]">{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                    <div className="bg-brand-blue h-full transition-all duration-100" style={{ width: `${uploadProgress}%` }}></div>
                  </div>
                  <span className="text-[10px] text-slate-400 animate-pulse">Running OCR & AI parsing for expiry dates...</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Vault Folder Heading */}
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {activeFolder} Folder
              </h4>
              <span className="text-xs text-slate-500 font-medium">Updated 3 days ago</span>
            </div>

            {/* Document List */}
            <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto pr-1">
              {documents[activeFolder].map((doc) => (
                <div
                  key={doc.name}
                  className="group flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/15 hover:bg-white/10 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-slate-800 text-slate-300">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white group-hover:text-brand-blue transition-colors">
                        {doc.name}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5 text-[10px] text-slate-500">
                        <span>{doc.size}</span>
                        <span>•</span>
                        <span>{doc.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {doc.expiry && (
                      <span className="flex items-center gap-1 text-[9px] px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">
                        <Clock className="w-2.5 h-2.5" /> Expiry: {doc.expiry}
                      </span>
                    )}
                    <Eye className="w-3.5 h-3.5 text-slate-400 group-hover:text-white cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* OCR Panel Display */}
          <div className="mt-4 p-3 bg-brand-navy-deep/80 border border-white/5 rounded-xl">
            <div className="flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-brand-violet" />
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">AI Document Analyzer</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed min-h-[44px]">
              {ocrAnimating ? (
                <span className="text-brand-violet font-mono animate-pulse">Running zero-knowledge parser...</span>
              ) : ocrText ? (
                <span className="font-mono text-slate-300">{ocrText}</span>
              ) : (
                "Select or upload a document to view real-time AI metadata extraction."
              )}
            </p>
          </div>
        </div>

        {/* Right Chat Panel - Col 4 */}
        <div className="lg:col-span-4 bg-brand-navy-deep/40 border-l border-white/5 p-5 flex flex-col justify-between">
          <div className="flex flex-col h-[400px] justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                <MessageSquare className="w-4 h-4 text-brand-blue" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Family AI Assistant</span>
              </div>

              {/* Chat Thread */}
              <div className="flex flex-col gap-3 py-3 overflow-y-auto max-h-[220px]">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col max-w-[85%] ${
                      msg.sender === "user" ? "self-end items-end" : "self-start items-start"
                    }`}
                  >
                    <div
                      className={`px-3 py-2 rounded-xl text-xs leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-brand-blue text-white rounded-tr-none"
                          : "bg-white/5 border border-white/10 text-slate-200 rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[8px] text-slate-500 mt-1">{msg.timestamp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Presets / Prompts */}
            <div className="flex flex-col gap-1.5 pt-2">
              <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold mb-1">
                Suggested Queries
              </span>
              <button
                onClick={() => selectPresetPrompt("When does Emma's passport expire?")}
                className="w-full text-left px-2.5 py-1.5 rounded text-[10px] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-slate-300 flex items-center justify-between"
              >
                <span>Check Passport Expiries</span>
                <ChevronRight className="w-3 h-3 text-slate-500" />
              </button>
              <button
                onClick={() => selectPresetPrompt("Who are the executors listed in our Will?")}
                className="w-full text-left px-2.5 py-1.5 rounded text-[10px] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-slate-300 flex items-center justify-between"
              >
                <span>Find Executors in Will</span>
                <ChevronRight className="w-3 h-3 text-slate-500" />
              </button>
            </div>
          </div>

          {/* Input field */}
          <form onSubmit={handleSendChat} className="flex gap-2 border-t border-white/5 pt-4 mt-4">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask about family files..."
              className="flex-1 px-3 py-2 text-xs bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-blue/50"
            />
            <button
              type="submit"
              className="p-2 bg-white text-brand-navy-deep rounded-lg hover:bg-slate-200 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
