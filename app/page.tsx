'use client';

import { useState } from 'react';

export default function Home() {
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    setWordCount(words);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">KaloWrite</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">AI Humanizer</a>
                <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">Blog</a>
                <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">Pricing</a>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Try for Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full inline-block text-sm font-medium mb-8">
            👋 50% OFF ON ALL PLANS
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Humanize Your Content
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
            Outsmart AI Detectors
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            KaloWrite humanizes your content and outsmarts even the most robust AI detection tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Try For Free
            </button>
            <p className="text-gray-600">No Credit Card Required</p>
          </div>

          {/* Humanize Tool */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">Word Count</span>
                <span className="text-sm text-gray-500">{wordCount} / 500 words</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${Math.min((wordCount / 500) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
            
            <textarea
              className="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Paste your AI-generated content here to humanize it..."
              onChange={handleTextChange}
            />
            
            <div className="mt-4 flex justify-between items-center">
              <p className="text-sm text-gray-500">Bypass some of the best AI detectors</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Humanize
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your AI-powered writing assistant, designed to craft compelling content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In lorem cras enim id cursus. Massa ultrices adipiscing sagittis et auctor in. Cras amet nunc magna lectus. Arcu id in at neque.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Your AI-powered writing assistant, designed to craft compelling content
              </h3>
              <p className="text-lg text-gray-600">
                In lorem cras enim id cursus. Massa ultrices adipiscing sagittis et auctor in. Cras amet nunc magna lectus. Arcu id in at neque.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-500">Feature Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Humanize AI Content in 3 Simple Steps
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-800 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Employee performance</h3>
              <h4 className="text-xl font-semibold text-gray-700 mb-4">Employee performance</h4>
              <p className="text-gray-600">
                A customized management process that drives excellence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 text-blue-800 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Employee performance</h3>
              <h4 className="text-xl font-semibold text-gray-700 mb-4">Employee performance</h4>
              <p className="text-gray-600">
                A customized management process that drives excellence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 text-blue-800 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Employee performance</h3>
              <h4 className="text-xl font-semibold text-gray-700 mb-4">Employee performance</h4>
              <p className="text-gray-600">
                A customized management process that drives excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© UiCore 2025. All Rights Reserved.</p>
            </div>
            
            <div className="flex items-center space-x-8">
              <h3 className="text-xl font-bold">KaloWrite</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">AI Humanizer</a>
                <a href="#" className="text-gray-400 hover:text-white">Blog</a>
                <a href="#" className="text-gray-400 hover:text-white">Pricing</a>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Try for Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
