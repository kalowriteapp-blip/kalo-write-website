'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [wordCount, setWordCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    setWordCount(words);
  };

  return (
    <div className="min-h-screen bg-brand-background text-brand-text">
      {/* Navigation */}
      <nav className="bg-brand-background shadow-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image src="./assets/images/kalowrite logo.png" alt="KaloWrite" width={120} height={40} className="h-6 sm:h-7 md:h-8 lg:h-9 w-auto transition-all duration-300" />
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-brand-text hover:text-brand-primary px-3 py-2 text-sm font-body">AI Humanizer</a>
                <a href="#" className="text-brand-text hover:text-brand-primary px-3 py-2 text-sm font-body">Blog</a>
                <a href="#" className="text-brand-text hover:text-brand-primary px-3 py-2 text-sm font-body">Pricing</a>
                <button className="bg-brand-primary text-white px-4 py-2 rounded-xl text-sm font-body hover:bg-brand-primary-hover transition-colors">
                  Try for Free
                </button>
              </div>
            </div>

            {/* Mobile menu button and Try for Free button */}
            <div className="flex items-center space-x-3 md:hidden">
              <button className="bg-brand-primary text-white px-3 py-2 rounded-xl text-xs sm:text-sm font-body hover:bg-brand-primary-hover transition-colors">
                Try for Free
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-brand-text hover:text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-background p-2"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg
                  className={`h-6 w-6 transition-transform duration-200 ${mobileMenuOpen ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-800">
              <a
                href="#"
                className="text-brand-text hover:text-brand-primary block px-3 py-2 text-base font-body hover:bg-gray-800/50 rounded-xl transition-colors"
              >
                AI Humanizer
              </a>
              <a
                href="#"
                className="text-brand-text hover:text-brand-primary block px-3 py-2 text-base font-body hover:bg-gray-800/50 rounded-xl transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-brand-text hover:text-brand-primary block px-3 py-2 text-base font-body hover:bg-gray-800/50 rounded-xl transition-colors"
              >
                Pricing
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-brand-background py-16 relative overflow-hidden">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: 'url(./assets/images/hero background dots.png)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full inline-block text-sm font-body mb-8 border border-brand-primary/20">
            👋 50% OFF ON ALL PLANS
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline text-brand-text mb-4">
            Humanize Your Content
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-headline text-brand-text/80 mb-6">
            Outsmart AI Detectors
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-brand-text/70 mb-8 max-w-2xl mx-auto font-body">
            KaloWrite humanizes your content and bypasses even the most robust AI detection tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-brand-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-body hover:bg-brand-primary-hover transition-colors shadow-lg">
              Try For Free
            </button>
            <p className="text-brand-text/60 font-body text-sm">No Credit Card Required</p>
          </div>

          {/* Humanize Tool */}
          <div className="bg-gray-900/30 rounded-xl shadow-lg p-6 max-w-3xl mx-auto border border-gray-800">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-brand-text/60 font-body">Word Count</span>
                <span className="text-sm text-brand-text/60 font-body">{wordCount} / 500 words</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-brand-primary h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${Math.min((wordCount / 500) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
            
            <textarea
              className="w-full h-32 p-4 bg-gray-800 border border-gray-700 rounded-lg resize-none focus:ring-2 focus:ring-brand-primary focus:border-transparent text-brand-text placeholder-brand-text/50 font-body text-sm"
              placeholder="Paste your AI-generated content here to humanize it..."
              onChange={handleTextChange}
            />
            
            <div className="mt-4 flex justify-between items-center">
              <p className="text-sm text-brand-text/60 font-body">Bypass some of the best AI detectors</p>
              <button className="bg-brand-primary text-white px-4 py-2 rounded-lg font-body hover:bg-brand-primary-hover transition-colors text-sm">
                Humanize
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-brand-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl font-headline text-brand-text mb-6">
                Built and tested against the world&apos;s best AI detection tools
              </h2>
              <p className="text-lg text-brand-text/70 font-body leading-relaxed">
                We studied some of the world&apos;s best AI detection models and reverse engineered them. KaloWrite breaks down your content and its semantics and removes key AI patterns such as perplexity and burstiness.
              </p>
            </div>
            <div className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-xl h-80 flex items-center justify-center border border-brand-primary/20">
              <div className="text-center">
                <div className="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-brand-text/60 font-body">AI Detection Analysis</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-xl h-80 flex items-center justify-center border border-brand-primary/20">
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <span className="text-brand-text/60 font-body">Content Humanization</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-headline text-brand-text mb-6">
                Get natural sounding humanized content within seconds
              </h2>
              <p className="text-lg text-brand-text/70 font-body leading-relaxed">
                Whether you&apos;re writing an essay or an SEO blog article, KaloWrite ensures your text sounds natural and human. Your content transforms into natural and personal rather than robotic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-brand-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline text-brand-text mb-6">
              Humanize AI Content in 3 Simple Steps
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-brand-primary/20 text-brand-primary w-16 h-16 rounded-full flex items-center justify-center text-xl font-headline mx-auto mb-6 border border-brand-primary/30">
                1
              </div>
              <h3 className="text-sm font-body text-brand-primary mb-2">STEP 1</h3>
              <h4 className="text-xl font-headline text-brand-text mb-4">Paste Your AI Text</h4>
              <h5 className="text-lg font-headline text-brand-text/80 mb-4">Paste Your AI Text</h5>
              <p className="text-brand-text/70 font-body text-sm leading-relaxed">
                Paste your AI content that you need humanized.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-primary/20 text-brand-primary w-16 h-16 rounded-full flex items-center justify-center text-xl font-headline mx-auto mb-6 border border-brand-primary/30">
                2
              </div>
              <h3 className="text-sm font-body text-brand-primary mb-2">STEP 2</h3>
              <h4 className="text-xl font-headline text-brand-text mb-4">Click Humanize</h4>
              <h5 className="text-lg font-headline text-brand-text/80 mb-4">Click Humanize</h5>
              <p className="text-brand-text/70 font-body text-sm leading-relaxed">
                Click the Humanize button and wait a few seconds.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-primary/20 text-brand-primary w-16 h-16 rounded-full flex items-center justify-center text-xl font-headline mx-auto mb-6 border border-brand-primary/30">
                3
              </div>
              <h3 className="text-sm font-body text-brand-primary mb-2">STEP 3</h3>
              <h4 className="text-xl font-headline text-brand-text mb-4">Voila!</h4>
              <h5 className="text-lg font-headline text-brand-text/80 mb-4">Voila!</h5>
              <p className="text-brand-text/70 font-body text-sm leading-relaxed">
                You now have 100% humanized content within seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-background text-brand-text py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-brand-text/60 font-body text-sm">© KaloWrite 2025. All Rights Reserved.</p>
            </div>
            
            <div className="flex items-center space-x-8">
              <Image src="./assets/images/kalowrite logo.png" alt="KaloWrite" width={100} height={30} className="h-5 sm:h-6 md:h-7 w-auto transition-all duration-300" />
              <div className="flex space-x-6">
                <a href="#" className="text-brand-text/60 hover:text-brand-primary font-body transition-colors text-sm">AI Humanizer</a>
                <a href="#" className="text-brand-text/60 hover:text-brand-primary font-body transition-colors text-sm">Blog</a>
                <a href="#" className="text-brand-text/60 hover:text-brand-primary font-body transition-colors text-sm">Pricing</a>
                <button className="bg-brand-primary text-white px-4 py-2 rounded-xl text-sm font-body hover:bg-brand-primary-hover transition-colors">
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
