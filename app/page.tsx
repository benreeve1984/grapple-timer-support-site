'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState({
    hero: false,
    screen1: false,
    screen2: false,
    screen3: false
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 pt-14 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <Image
                  src="/images/icon.png"
                  alt="Grapple Timer Icon"
                  fill
                  className={`object-contain rounded-3xl shadow-2xl transition-opacity duration-500 ${
                    imageLoaded.hero ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(prev => ({ ...prev, hero: true }))}
                  priority
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-grapple-green to-grapple-blue bg-clip-text text-transparent">
              Grapple Timer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              The Ultimate BJJ Training Timer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
              Train smarter with Siri voice control and adaptive displays designed specifically for Brazilian Jiu-Jitsu athletes.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Experience the Interface
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="relative aspect-[9/19] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/3CE207F5-9137-43D7-8A88-DA461C005015.png"
                alt="Grapple Timer Setup Screen"
                fill
                className={`object-cover transition-opacity duration-500 ${
                  imageLoaded.screen1 ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, screen1: true }))}
              />
            </div>
            <div className="relative aspect-[9/19] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/C17089CC-976D-4D99-AF6E-430E0FBC0567.png"
                alt="Timer Round View"
                fill
                className={`object-cover transition-opacity duration-500 ${
                  imageLoaded.screen3 ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, screen3: true }))}
              />
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[19/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/B0BBF6C6-D139-4632-9F30-6A19B58976E4.png"
                alt="Timer in Landscape Mode"
                fill
                className={`object-contain bg-black transition-opacity duration-500 ${
                  imageLoaded.screen2 ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(prev => ({ ...prev, screen2: true }))}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 lg:px-8 bg-gray-900/50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Built for BJJ Athletes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="🗣️"
              title="Siri Voice Control"
              description="Start your training hands-free with simple voice commands. Perfect when your hands are wrapped or occupied."
            />
            <FeatureCard
              icon="🎯"
              title="Laser Focus"
              description="No distractions, no ads, no data collection. Just you, your training, and perfect timing."
            />
            <FeatureCard
              icon="⏱️"
              title="Adaptive Display"
              description="Massive, color-coded timer that's visible from across the mat. Green for work, red for rest."
            />
            <FeatureCard
              icon="🔔"
              title="Smart Audio Cues"
              description="Clear bell and horn sounds mark round transitions. Works in background with notifications."
            />
            <FeatureCard
              icon="📱"
              title="Orientation Smart"
              description="Optimized layouts for both portrait and landscape modes. Always readable, always accessible."
            />
            <FeatureCard
              icon="⚡"
              title="Quick Presets"
              description="Three ready-to-go training configurations. From quick drills to full competition simulation."
            />
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Technical Excellence
          </h2>
          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <div className="space-y-6">
              <TechDetail label="Platform" value="iOS 17+ Required" />
              <TechDetail label="Architecture" value="Deterministic State Machine for Precise Timing" />
              <TechDetail label="Audio" value="Clear Bell and Horn Sounds for Round Transitions" />
              <TechDetail label="Privacy" value="Zero Data Collection - Everything Stays on Your Device" />
              <TechDetail label="Notifications" value="Rich Background Notifications" />
              <TechDetail label="Performance" value="Optimized for Minimal Battery Impact" />
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-6 lg:px-8 bg-gray-900/50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Need Help?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We're here to help you get the most out of Grapple Timer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="mailto:ben@reeve.one"
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-gray-400">Get help directly from our team</p>
              <p className="text-grapple-blue mt-2">ben@reeve.one</p>
            </a>
            <a
              href="https://github.com/benreeve1984/grapple-timer/issues"
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-xl font-semibold mb-2">Report Issues</h3>
              <p className="text-gray-400">Submit bug reports and feature requests</p>
              <p className="text-grapple-blue mt-2">GitHub Issues →</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-8 border-t border-gray-800">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">
              © 2024 Grapple Timer. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-gray-800/30 rounded-xl p-6 backdrop-blur-sm hover:bg-gray-800/50 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function TechDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between py-3 border-b border-gray-700 last:border-0">
      <span className="font-semibold text-gray-300">{label}</span>
      <span className="text-gray-400">{value}</span>
    </div>
  )
}