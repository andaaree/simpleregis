

export default function Tos({accepted
    ,setAccepted
    ,handleDecline
    ,handleAccept}) {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="max-w-3xl w-full bg-white shadow-xl rounded-lg overflow-hidden flex flex-col max-h-[90vh]">

            {/* Header */}
            <div className="px-8 py-6 border-b border-gray-200 bg-white">
              <h1 className="text-2xl font-bold text-gray-900">Terms of Service</h1>
              <p className="text-sm text-gray-500 mt-1">Last updated: December 8, 2025</p>
            </div>

            {/* Scrollable Content Area */}
            <div className="p-8 overflow-y-auto custom-scrollbar text-gray-700 space-y-6">
              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">1. Introduction</h2>
                <p className="leading-relaxed">
                  Welcome to [Your Company Name]. By accessing or using our website, mobile application, or any other services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">2. User Accounts</h2>
                <p className="leading-relaxed mb-3">
                  When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>You are responsible for safeguarding the password that you use to access the Service.</li>
                  <li>You agree not to disclose your password to any third party.</li>
                  <li>You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">3. Intellectual Property</h2>
                <p className="leading-relaxed">
                  The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of [Your Company Name] and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">4. Termination</h2>
                <p className="leading-relaxed">
                  We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">5. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  In no event shall [Your Company Name], nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">6. Changes to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </section>

               <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                 <p className="text-sm text-blue-700">
                   <strong>Note:</strong> This is a sample template. Please consult with a legal professional to ensure your Terms of Service comply with local laws and regulations.
                 </p>
               </div>
            </div>

            {/* Action Footer */}
            <div className="px-8 py-6 border-t border-gray-200 bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center">
                <input
                  id="agree-checkbox"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                />
                <label htmlFor="agree-checkbox" className="ml-2 block text-sm text-gray-900 select-none cursor-pointer">
                  I have read and agree to the <span className="font-medium text-blue-600">Terms of Service</span>
                </label>
              </div>

              <div className="flex space-x-3 w-full sm:w-auto">
                <button
                  onClick={handleDecline}
                  className="w-full sm:w-auto px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  disabled={!accepted}
                  className={`w-full sm:w-auto px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${
                    accepted
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-blue-300 cursor-not-allowed"
                  }`}
                >
                  Accept Terms
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}
