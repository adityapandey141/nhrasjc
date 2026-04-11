import { Heart, CreditCard, Building2, QrCode, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Donate = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const bankDetails = {
    bankName: 'State Bank of India',
    accountName: 'National Human Rights & Social Justice Welfare Foundation',
    accountNumber: '1234567890123456',
    ifsc: 'SBIN0001234',
    branch: 'Vadodara Main Branch',
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="donate" className="section-padding bg-gradient-to-br from-secondary-600 to-secondary-700 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-white/80 font-semibold uppercase tracking-wider text-sm">Support Us</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4">Make a Difference Today</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Your contribution helps us continue our mission of protecting human rights and empowering communities. 
            Every donation, big or small, creates lasting impact.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
          <div className="bg-white rounded-2xl p-8 text-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <QrCode className="text-secondary-600" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">Scan & Pay</h3>
                <p className="text-gray-500 text-sm">Quick donation via UPI</p>
              </div>
            </div>

            <div className="flex justify-center mb-6">
              <div className="w-48 h-48 bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <QrCode className="text-gray-400 mx-auto mb-2" size={64} />
                  <p className="text-sm text-gray-500">UPI QR Code</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-2">UPI ID</p>
              <div className="flex items-center justify-center gap-2">
                <code className="bg-gray-100 px-4 py-2 rounded-lg text-primary-800 font-mono">
                  nhrsjwf@sbi
                </code>
                <button
                  onClick={() => copyToClipboard('nhrsjwf@sbi', 'upi')}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {copied === 'upi' ? (
                    <CheckCircle className="text-green-500" size={20} />
                  ) : (
                    <Copy className="text-gray-500" size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Building2 className="text-primary-800" size={24} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">Bank Transfer</h3>
                <p className="text-gray-500 text-sm">Direct bank deposit</p>
              </div>
            </div>

            <div className="space-y-4">
              {Object.entries({
                'Bank Name': bankDetails.bankName,
                'Account Name': bankDetails.accountName,
                'Account Number': bankDetails.accountNumber,
                'IFSC Code': bankDetails.ifsc,
                'Branch': bankDetails.branch,
              }).map(([label, value]) => (
                <div key={label} className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">{label}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-800 text-right text-sm">{value}</span>
                    {(label === 'Account Number' || label === 'IFSC Code') && (
                      <button
                        onClick={() => copyToClipboard(value, label)}
                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                      >
                        {copied === label ? (
                          <CheckCircle className="text-green-500" size={16} />
                        ) : (
                          <Copy className="text-gray-400" size={16} />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="text-white" size={28} />
            <h3 className="font-heading font-bold text-2xl">Why Donate?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="text-accent" size={28} />
              </div>
              <h4 className="font-bold mb-2">80G Tax Benefits</h4>
              <p className="text-white/70 text-sm">Donations are eligible for tax deduction under Section 80G</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-accent" size={28} />
              </div>
              <h4 className="font-bold mb-2">100% Transparent</h4>
              <p className="text-white/70 text-sm">Every rupee is accounted for and used for social welfare</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-accent" size={28} />
              </div>
              <h4 className="font-bold mb-2">Direct Impact</h4>
              <p className="text-white/70 text-sm">Your donation directly reaches those in need</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
