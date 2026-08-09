"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal as TerminalIcon } from "lucide-react";

type Log = {
  command: string;
  output: React.ReactNode;
};

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<Log[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle on backtick (`) or tilde (~)
      if (e.key === "`" || e.key === "~") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      
      // Welcome message
      if (logs.length === 0) {
        setLogs([
          {
            command: "rvkhmnv-os init",
            output: "Welcome to rvkhmnv's secret terminal! Type 'help' to see available commands.",
          },
        ]);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let output: React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <ul className="list-none space-y-1 mt-1">
            <li><span className="text-secondary font-bold">whoami</span> - Get to know me</li>
            <li><span className="text-secondary font-bold">skills</span> - View my tech stack</li>
            <li><span className="text-secondary font-bold">contact</span> - How to reach me</li>
            <li><span className="text-secondary font-bold">clear</span> - Clear the terminal</li>
          </ul>
        );
        break;
      case "whoami":
        output = "I'm a Full-Stack Web Developer passionate about building robust and beautiful applications.";
        break;
      case "skills":
        output = "React, Next.js, TypeScript, TailwindCSS, Python, PostgreSQL, Framer Motion, Three.js";
        break;
      case "contact":
        output = <a href="https://t.me/rakhmanov_f" target="_blank" className="text-primary hover:underline">t.me/rakhmanov_f</a>;
        break;
      case "clear":
        setLogs([]);
        setInput("");
        return;
      default:
        output = <span className="text-red-500">Command not found: {cmd}. Type 'help' for available commands.</span>;
    }

    setLogs((prev) => [...prev, { command: cmd, output }]);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 right-6 w-full max-w-lg z-[99999] px-4 md:px-0"
        >
          <div className="bg-[#1e1e1e] border border-outline-variant/30 rounded-xl overflow-hidden shadow-2xl font-label-code text-sm">
            {/* Header */}
            <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-outline-variant/30">
              <div className="flex items-center gap-2">
                <TerminalIcon className="w-4 h-4 text-on-surface-variant" />
                <span className="text-on-surface-variant text-xs">rvkhmnv@terminal ~</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors flex items-center justify-center group"
              >
                <X className="w-2 h-2 text-red-900 opacity-0 group-hover:opacity-100" />
              </button>
            </div>
            
            {/* Terminal Body */}
            <div 
              className="p-4 h-64 overflow-y-auto text-green-400 font-mono text-sm"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="space-y-4">
                {logs.map((log, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">~/rvkhmnv $</span>
                      <span className="text-white">{log.command}</span>
                    </div>
                    <div className="mt-1 text-gray-300">
                      {log.output}
                    </div>
                  </div>
                ))}
              </div>
              
              <form onSubmit={handleCommand} className="flex items-center gap-2 mt-4">
                <span className="text-blue-400 shrink-0">~/rvkhmnv $</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="bg-transparent border-none outline-none flex-1 text-white shadow-none focus:ring-0 w-full"
                  spellCheck={false}
                  autoComplete="off"
                />
              </form>
              <div ref={bottomRef} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
