import React, { useState } from 'react';
import { Send, CheckCircle, Clock, DollarSign } from 'lucide-react';

const ProjectQuote = () => {
  const [step, setStep] = useState(1);
  interface QuoteFormData {
    projectType: string;
    budget: string;
    timeline: string;
    name: string;
    email: string;
    company: string;
    phone: string;
    description: string;
    features: string[];
    priority: 'low' | 'medium' | 'high';
  }

  const [formData, setFormData] = useState<QuoteFormData>({
    projectType: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    company: '',
    phone: '',
    description: '',
    features: [],
    priority: 'medium',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData({
      ...formData,
      features: formData.features.includes(feature)
        ? formData.features.filter(f => f !== feature)
        : [...formData.features, feature],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Quote request submitted:', formData);
    setStep(4); // Show success message
  };

  const projectTypes = [
    { id: 'web-app', name: 'Web Application', description: 'Custom web-based applications' },
    { id: 'mobile-app', name: 'Mobile Application', description: 'iOS and Android applications' },
    { id: 'enterprise', name: 'Enterprise Software', description: 'Large-scale business solutions' },
    { id: 'ai-ml', name: 'AI/ML Solution', description: 'Artificial intelligence and machine learning' },
    { id: 'cloud', name: 'Cloud Infrastructure', description: 'Cloud migration and setup' },
    { id: 'consulting', name: 'IT Consulting', description: 'Technology consultation services' },
  ];

  const budgetRanges = [
    { id: 'small', label: 'LKR 500K - 1M', value: 'small' },
    { id: 'medium', label: 'LKR 1M - 3M', value: 'medium' },
    { id: 'large', label: 'LKR 3M - 5M', value: 'large' },
    { id: 'enterprise', label: 'LKR 5M+', value: 'enterprise' },
  ];

  const timelineOptions = [
    { id: '1-3', label: '1-3 months', value: '1-3' },
    { id: '3-6', label: '3-6 months', value: '3-6' },
    { id: '6-12', label: '6-12 months', value: '6-12' },
    { id: '12+', label: '12+ months', value: '12+' },
  ];

  const commonFeatures = [
    'User Authentication', 'Payment Integration', 'Admin Dashboard', 'Mobile Responsive',
    'API Integration', 'Real-time Updates', 'Analytics', 'Multi-language Support',
    'Cloud Hosting', 'Security Features', 'Third-party Integrations', 'Custom Reporting',
  ];

  if (step === 4) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-light-green/20 to-olivine/20 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="w-20 h-20 bg-light-green rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-title text-4xl font-bold text-black/90 mb-6">Quote Request Submitted!</h1>
            <p className="font-body text-xl text-black/90/70 mb-8">
              Thank you for your project inquiry. Our team will review your requirements and
              get back to you within 24 hours with a detailed proposal.
            </p>
            <div className="space-y-4 mb-8">
              <p className="font-body text-black/90/70">
                <strong>What's Next:</strong>
              </p>
              <div className="space-y-2 text-left bg-gray-50 rounded-xl p-6">
                <p className="font-body text-sm text-black/90/70">1. Our team reviews your requirements</p>
                <p className="font-body text-sm text-black/90/70">2. We'll schedule a consultation call</p>
                <p className="font-body text-sm text-black/90/70">3. You'll receive a detailed proposal</p>
                <p className="font-body text-sm text-black/90/70">4. We discuss and refine the project scope</p>
              </div>
            </div>
            <button
              onClick={() => {
                setStep(1);
                setFormData({
                  projectType: '', budget: '', timeline: '', name: '', email: '',
                  company: '', phone: '', description: '', features: [], priority: 'medium',
                });
              }}
              className="bg-red-ncs text-white px-8 py-4 rounded-full hover:bg-red-ncs/90 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-peach/10 via-white to-red-ncs/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h1 className="font-title text-5xl font-bold text-black/90 mb-6">Get Your Project Quote</h1>
          <p className="font-body text-xl text-black/90/70 max-w-3xl mx-auto">
            Tell us about your project and we'll provide you with a detailed quote and timeline.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-title font-bold text-sm ${
                    step >= num
                      ? 'bg-red-ncs text-white'
                      : 'bg-gray-200 text-black/90/60'
                  }`}
                >
                  {num}
                </div>
                {num < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      step > num ? 'bg-red-ncs' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg">
          {step === 1 && (
            <div className="space-y-8">
              <h2 className="font-title text-2xl font-bold text-black/90 mb-6">Project Details</h2>

              {/* Project Type */}
              <div>
                <label className="font-body block text-sm font-medium text-black/90 mb-4">
                  What type of project do you need? *
                </label>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: type.id })}
                      className={`p-4 rounded-xl border-2 text-left transition-colors ${
                        formData.projectType === type.id
                          ? 'border-red-ncs bg-red-ncs/5'
                          : 'border-gray-200 hover:border-red-ncs/50'
                      }`}
                    >
                      <h3 className="font-title font-semibold text-black/90">{type.name}</h3>
                      <p className="font-body text-sm text-black/90/70 mt-1">{type.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="font-body block text-sm font-medium text-black/90 mb-4">
                  What's your budget range? *
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {budgetRanges.map((budget) => (
                    <button
                      key={budget.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: budget.value })}
                      className={`p-4 rounded-xl border-2 text-left transition-colors flex items-center ${
                        formData.budget === budget.value
                          ? 'border-red-ncs bg-red-ncs/5'
                          : 'border-gray-200 hover:border-red-ncs/50'
                      }`}
                    >
                      <DollarSign className="w-5 h-5 text-red-ncs mr-3" />
                      <span className="font-body font-medium text-black/90">{budget.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="font-body block text-sm font-medium text-black/90 mb-4">
                  When do you need this completed? *
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {timelineOptions.map((timeline) => (
                    <button
                      key={timeline.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeline: timeline.value })}
                      className={`p-4 rounded-xl border-2 text-left transition-colors flex items-center ${
                        formData.timeline === timeline.value
                          ? 'border-red-ncs bg-red-ncs/5'
                          : 'border-gray-200 hover:border-red-ncs/50'
                      }`}
                    >
                      <Clock className="w-5 h-5 text-red-ncs mr-3" />
                      <span className="font-body font-medium text-black/90">{timeline.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!formData.projectType || !formData.budget || !formData.timeline}
                  className="bg-red-ncs text-white px-8 py-3 rounded-full hover:bg-red-ncs/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <h2 className="font-title text-2xl font-bold text-black/90 mb-6">Features & Requirements</h2>

              {/* Features */}
              <div>
                <label className="font-body block text-sm font-medium text-black/90 mb-4">
                  Which features do you need? (Select all that apply)
                </label>
                <div className="grid md:grid-cols-3 gap-3">
                  {commonFeatures.map((feature) => (
                    <button
                      key={feature}
                      type="button"
                      onClick={() => handleFeatureToggle(feature)}
                      className={`p-3 rounded-lg border text-sm transition-colors ${
                        formData.features.includes(feature)
                          ? 'border-red-ncs bg-red-ncs/5 text-red-ncs'
                          : 'border-gray-200 hover:border-red-ncs/50'
                      }`}
                    >
                      <span className="font-body">{feature}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Priority */}
              <div>
                <label className="font-body block text-sm font-medium text-black/90 mb-4">
                  Project Priority
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-ncs/20 focus:border-red-ncs outline-none"
                >
                  <option value="low">Low - Flexible timeline</option>
                  <option value="medium">Medium - Standard timeline</option>
                  <option value="high">High - Urgent completion needed</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="font-body block text-sm font-medium text-black/90 mb-2">
                  Project Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-ncs/20 focus:border-red-ncs outline-none resize-none"
                  placeholder="Please describe your project in detail. Include any specific requirements, integrations, or goals you have in mind..."
                  required
                ></textarea>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="border border-dim-gray/20 text-black/90 px-8 py-3 rounded-full hover:border-red-ncs hover:text-red-ncs transition-colors"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  disabled={!formData.description}
                  className="bg-red-ncs text-white px-8 py-3 rounded-full hover:bg-red-ncs/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Final Step
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8">
              <h2 className="font-title text-2xl font-bold text-black/90 mb-6">Contact Information</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-body block text-sm font-medium text-black/90 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-ncs/20 focus:border-red-ncs outline-none"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label className="font-body block text-sm font-medium text-black/90 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-ncs/20 focus:border-red-ncs outline-none"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="font-body block text-sm font-medium text-black/90 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-ncs/20 focus:border-red-ncs outline-none"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="font-body block text-sm font-medium text-black/90 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-ncs/20 focus:border-red-ncs outline-none"
                    placeholder="+94 77 123 4567"
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="border border-dim-gray/20 text-black/90 px-8 py-3 rounded-full hover:border-red-ncs hover:text-red-ncs transition-colors"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  disabled={!formData.name || !formData.email}
                  className="bg-red-ncs text-white px-8 py-3 rounded-full hover:bg-red-ncs/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Quote Request</span>
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProjectQuote;