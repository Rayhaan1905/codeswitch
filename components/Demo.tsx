"use client"

import React, { useState } from 'react';
import { Copy, Play } from 'lucide-react';

const DemoSection = () => {
  const [inputCode, setInputCode] = useState('');
  const [outputCode, setOutputCode] = useState('');
  const [inputLang, setInputLang] = useState('javascript');
  const [outputLang, setOutputLang] = useState('python');
  const [isConverting, setIsConverting] = useState(false);

  const languages = [
    'javascript', 'python', 'java', 'cpp', 'csharp', 'go', 'rust', 'typescript', 'php', 'ruby', 'kotlin', 'swift'
  ];

  const handleConvert = async () => {
    setIsConverting(true)

    const response = await fetch('/api', {
        method: "POST", body: JSON.stringify({
            inputCode,inputLang,outputLang
        })
    })

    const {output} = await response.json()
    setOutputCode(output)
    setIsConverting(false)

  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div id='demo' className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Try It Live
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Experience the power of CodeSwitch with our interactive demo
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Input Code</h3>
                <select 
                  value={inputLang} 
                  onChange={(e) => setInputLang(e.target.value)}
                  className="bg-slate-700 text-white border border-slate-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {languages.map(lang => (
                    <option key={lang} value={lang}>{lang.charAt(0).toUpperCase() + lang.slice(1)}</option>
                  ))}
                </select>
              </div>
              <textarea
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="Paste your code here..."
                className="w-full h-64 bg-slate-900 text-white border border-slate-600 rounded-lg p-4 font-mono text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
            </div>
            
            {/* Output Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Converted Code</h3>
                <div className="flex items-center gap-3">
                  <select 
                    value={outputLang} 
                    onChange={(e) => setOutputLang(e.target.value)}
                    className="bg-slate-700 text-white border border-slate-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {languages.map(lang => (
                      <option key={lang} value={lang}>{lang.charAt(0).toUpperCase() + lang.slice(1)}</option>
                    ))}
                  </select>
                  {outputCode && (
                    <button
                      onClick={() => copyToClipboard(outputCode)}
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
              <textarea
                value={outputCode}
                readOnly
                placeholder="Converted code will appear here..."
                className="w-full h-64 bg-slate-900 text-white border border-slate-600 rounded-lg p-4 font-mono text-sm resize-none"
              />
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button
              onClick={handleConvert}
              disabled={isConverting || !inputCode.trim()}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isConverting ? (
                <>
                  <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Converting...
                </>
              ) : (
                <>
                  <Play className="inline-block w-4 h-4 mr-2" />
                  Convert Code
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;