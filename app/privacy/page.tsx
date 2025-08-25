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
              Grapple Timer is committed to protecting your privacy. We believe in complete transparency: <strong>we do not collect, store, or process any personal data whatsoever</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed font-semibold">
              None. We do not collect any data.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Grapple Timer operates entirely on your device. All settings, preferences, and timer configurations are stored locally on your iPhone and never leave your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">No Analytics</h2>
            <p className="text-gray-300 leading-relaxed">
              We do not use any analytics services, crash reporting tools, or performance monitoring systems. We have no way to track your usage of the app, and we prefer it that way.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">No Network Requests</h2>
            <p className="text-gray-300 leading-relaxed">
              Grapple Timer does not make any network requests. We don't have servers. The app works entirely offline on your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">No Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed">
              We do not integrate with any third-party services, SDKs, or external APIs. The app is completely self-contained.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Storage</h2>
            <p className="text-gray-300 leading-relaxed">
              All app data (timer presets, settings, preferences) is stored locally on your device using iOS's standard storage mechanisms. When you delete the app, all data is completely removed. There is no cloud backup, no sync, and no external storage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">No Advertising</h2>
            <p className="text-gray-300 leading-relaxed">
              We do not show ads, use advertising identifiers, or include any advertising SDKs. The app is completely ad-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Privacy Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              Since we don't collect any data, there's nothing to request, delete, or opt out of. Your privacy is protected by design - we simply don't have access to your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Grapple Timer is suitable for users of all ages. Since we collect absolutely no data from anyone, children's privacy is inherently protected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              This privacy policy is unlikely to change because our commitment to collecting zero data is fundamental to the app. If we ever update this policy, the revision date will be updated.
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