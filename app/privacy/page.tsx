import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="px-6 lg:px-8 py-12 max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-grapple-blue hover:text-grapple-green transition-colors mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: December 2024</p>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              Grapple Timer is committed to protecting your privacy. This policy explains how we handle your information when you use our iOS application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Grapple Timer is designed with privacy in mind. We collect minimal information:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Training session preferences (stored locally on your device)</li>
              <li>Timer configurations and presets (stored locally)</li>
              <li>Spotify authentication tokens (if you choose to connect Spotify)</li>
              <li>Anonymous crash reports and performance metrics (via Apple's standard analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The limited information we access is used solely to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Provide timer functionality and save your preferences</li>
              <li>Enable Spotify integration (only if you explicitly connect your account)</li>
              <li>Improve app stability and performance</li>
              <li>Fix bugs and technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Storage</h2>
            <p className="text-gray-300 leading-relaxed">
              All your training data and preferences are stored locally on your device. We do not have servers that collect or store your personal information. If you delete the app, all associated data is removed from your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Grapple Timer integrates with the following third-party services:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Spotify:</strong> If you choose to connect Spotify, we use their SDK to control playback. We do not store your Spotify credentials. Spotify's use of your data is governed by their privacy policy.</li>
              <li><strong>Apple Services:</strong> We use standard iOS features like Siri and notifications. These are governed by Apple's privacy policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Sharing</h2>
            <p className="text-gray-300 leading-relaxed">
              We do not sell, trade, or otherwise transfer your information to third parties. We do not use advertising networks or analytics services that track users across apps.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have complete control over your data:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>All data is stored locally and can be deleted by removing the app</li>
              <li>You can disconnect Spotify at any time through the app settings</li>
              <li>You can disable Siri integration through iOS settings</li>
              <li>You can opt out of Apple's analytics in iOS settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Grapple Timer is suitable for users of all ages. We do not knowingly collect personal information from children under 13, as we do not collect personal information from any users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated revision date. Continued use of the app after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions about this privacy policy or how Grapple Timer handles your information, please contact us at:
            </p>
            <p className="text-grapple-blue mt-4">
              <a href="mailto:ben@reeve.one" className="hover:text-grapple-green transition-colors">
                ben@reeve.one
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}