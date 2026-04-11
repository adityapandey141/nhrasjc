import { useState } from 'react';
import { Users, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface FormData {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

const interests = [
  'Human Rights Advocacy',
  'Women Empowerment',
  'Youth Programs',
  'Anti-Corruption Initiatives',
  'Community Development',
  'Cultural Activities',
  'Content Creation',
  'Event Management',
];

const Volunteer = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setFormData({ name: '', phone: '', email: '', interest: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="volunteer" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            ref={ref}
            className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
          >
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Join Us</span>
            <h2 className="section-title mt-2">Become a Volunteer</h2>
            <p className="text-gray-600 mb-8">
              Join our team of dedicated volunteers working towards a just and equitable society. 
              Your time and skills can create meaningful change in communities across India.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-primary-800" size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-gray-800">Flexible Commitment</h4>
                  <p className="text-gray-600 text-sm">Volunteer as per your availability - weekends, events, or regular</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-accent-600" size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-gray-800">Skill Development</h4>
                  <p className="text-gray-600 text-sm">Gain experience in advocacy, event management, and social work</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Send className="text-secondary-600" size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-gray-800">Certificate & Recognition</h4>
                  <p className="text-gray-600 text-sm">Receive volunteer certificates and recognition for your contribution</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-heading font-bold text-2xl text-primary-800 mb-6">Register as Volunteer</h3>

              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center gap-3">
                  <CheckCircle size={20} />
                  <span>Thank you! We'll contact you soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg flex items-center gap-3">
                  <AlertCircle size={20} />
                  <span>Something went wrong. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Area of Interest *</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white"
                  >
                    <option value="">Select your interest</option>
                    {interests.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                    placeholder="Tell us about yourself and why you want to volunteer..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
