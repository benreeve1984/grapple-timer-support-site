import Link from 'next/link'

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="px-6 lg:px-8 py-12 max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-grapple-blue hover:text-grapple-green transition-colors mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last updated: December 2024</p>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By downloading, installing, or using Grapple Timer ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-gray-300 leading-relaxed">
              Grapple Timer is a training timer application designed for Brazilian Jiu-Jitsu practitioners. The App provides customizable round timers, audio cues, Siri integration, and optional Spotify music control to enhance training sessions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. License to Use</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Download and install the App on iOS devices that you own or control</li>
              <li>Use the App for your personal, non-commercial training purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Use the App in compliance with all applicable laws and regulations</li>
              <li>Not reverse engineer, decompile, or disassemble the App</li>
              <li>Not use the App for any commercial purposes without our written consent</li>
              <li>Not attempt to gain unauthorized access to any features or systems</li>
              <li>Ensure your device meets the minimum requirements (iOS 17+)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed">
              The App may integrate with third-party services such as Spotify. Your use of these services is subject to their respective terms of service and privacy policies. We are not responsible for the content, features, or practices of third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              All content, features, and functionality of the App, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are the exclusive property of Grapple Timer or its licensors and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties that the App will be uninterrupted or error-free</li>
              <li>Warranties regarding the accuracy or reliability of the App</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              The App is a training aid only. Users should consult with qualified instructors and medical professionals regarding their training regimen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL GRAPPLE TIMER, ITS DEVELOPERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE APP.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Grapple Timer and its developers from any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your access to or use of the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Modifications to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms at any time. If we make changes, we will update the "Last updated" date at the top of this document. Your continued use of the App after any modifications indicates your acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the App will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the App developer is located, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-grapple-blue mt-4">
              <a href="mailto:ben@reeve.one" className="hover:text-grapple-green transition-colors">
                ben@reeve.one
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Entire Agreement</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms constitute the entire agreement between you and Grapple Timer regarding the use of the App and supersede all prior and contemporaneous understandings, agreements, representations, and warranties.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}