import React, { useState } from 'react';
import { Shield, Lock } from 'lucide-react';

const ReportForm = () => {
  const [isAnonymous, setIsAnonymous] = useState(true);

  return (
    <section className="py-16 bg-[#023047]/20"> {/* Light sky blue background */}
    <div className="container mx-auto px-4">
            <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#023047] mb-4">
            Secure Whistleblower Portal
          </h2>
          <p className="text-[#219ebc] max-w-2xl mx-auto">
            Take a stand against corruption with our encrypted reporting system. Your voice 
            matters in building a transparent and accountable public sector for Ghana's future.
          </p>
        </div>

      <div className="max-w-4xl mx-auto ">
        <div className="bg-white rounded-xl shadow-xl p-8 border border-[#219ebc]/20">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Shield className="w-8 h-8 text-[#fb8500]" /> {/* UT orange icon */}
            <h2 className="text-2xl font-bold text-[#023047]">Submit a Report</h2>
          </div>
  
          <div className="bg-[#8ecae6]/20 border border-[#219ebc]/30 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <Lock className="w-5 h-5 text-[#219ebc] mt-0.5" />
              <div>
                <h3 className="font-medium text-[#023047]">Your Privacy is Protected</h3>
                <p className="text-sm text-[#219ebc]">All reports are encrypted and handled with strict confidentiality.</p>
              </div>
            </div>
          </div>
  
          <form className="space-y-6">
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="rounded border-[#219ebc] text-[#fb8500] focus:ring-[#fb8500]"
                />
                <span className="text-[#023047]">Submit Anonymously</span>
              </label>
  
              {!isAnonymous && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-[#023047] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border-[#8ecae6] focus:border-[#219ebc] focus:ring-[#219ebc]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#023047] mb-1">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-lg border-[#8ecae6] focus:border-[#219ebc] focus:ring-[#219ebc]"
                    />
                  </div>
                </>
              )}
  
              <div>
                <label className="block text-sm font-medium text-[#023047] mb-1">
                  Incident Type
                </label>
                <select className="w-full rounded-lg border-[#8ecae6] focus:border-[#219ebc] focus:ring-[#219ebc]">
                  <option>Financial Misconduct</option>
                  <option>Asset Misappropriation</option>
                  <option>Corruption</option>
                  <option>Fraud</option>
                  <option>Other</option>
                </select>
              </div>
  
              <div>
                <label className="block text-sm font-medium text-[#023047] mb-1">
                  Description
                </label>
                <textarea
                  rows={6}
                  className="w-full rounded-lg border-[#8ecae6] focus:border-[#219ebc] focus:ring-[#219ebc]"
                  placeholder="Provide detailed information about the incident..."
                ></textarea>
              </div>
  
              <div>
                <label className="block text-sm font-medium text-[#023047] mb-1">
                  Supporting Documents
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-[#8ecae6] border-dashed rounded-lg hover:border-[#219ebc] transition-colors">
                  <div className="space-y-1 text-center">
                    <div className="text-sm text-[#023047]">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-[#fb8500] hover:text-[#ffb703] transition-colors">
                        <span>Upload files</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-[#219ebc]">
                      PDF, DOC, JPG up to 10MB each
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            <button
              type="submit"
              className="w-full bg-[#fb8500] text-white py-3 px-4 rounded-lg hover:bg-[#ffb703] transition-colors shadow-md hover:shadow-lg"
            >
              Submit Report
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default ReportForm;