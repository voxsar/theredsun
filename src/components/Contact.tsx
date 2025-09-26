import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Global Headquarters",
      details: ["500 Market Street", "Suite 1200", "San Francisco, CA 94105"],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: ["+1 (415) 555-0123", "+44 20 3999 5678"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Addresses",
      details: ["hello@theredsun.com", "partnerships@theredsun.com"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM (PST)", "Global support available 24/7"],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-orange-100 bg-gradient-to-br from-red-ncs/10 via-orange-100 to-olivine/10">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="font-title text-5xl lg:text-6xl font-bold text-black/90 mb-6">Contact Us</h1>
            <p className="font-body text-xl text-black/90/70 max-w-3xl mx-auto">
              Ready to transform your business with innovative IT solutions? Get in touch with our team today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-title text-3xl font-bold text-black/90 mb-8">Get in Touch</h2>
                <p className="font-body text-black/90/70 mb-8 leading-relaxed">
                  We'd love to hear from you. Whether you have a specific project in mind or just want to 
                  explore how we can help your business grow, our team is ready to assist you.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-ncs/10 rounded-2xl flex items-center justify-center text-red-ncs flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-title font-semibold text-black/90 mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="font-body text-black/90/70">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="font-body block text-sm font-medium text-black/90 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-ncs/20 focus:border-red-ncs outline-none transition-colors"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="font-body block text-sm font-medium text-black/90 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-ncs/20 focus:border-red-ncs outline-none transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="font-body block text-sm font-medium text-black/90 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-ncs/20 focus:border-red-ncs outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-body block text-sm font-medium text-black/90 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-ncs/20 focus:border-red-ncs outline-none transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-ncs text-white px-8 py-4 rounded-xl hover:bg-red-ncs/90 transition-colors flex items-center justify-center space-x-2 font-medium"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-orange-100">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-light-green/20 to-olivine/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-red-ncs mx-auto mb-4" />
                <p className="font-body text-black/90 font-medium">Interactive map would be embedded here</p>
                <p className="font-body text-black/90/60 text-sm">500 Market Street, Suite 1200, San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;