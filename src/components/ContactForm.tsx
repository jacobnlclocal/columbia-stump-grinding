'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mvzorokq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', email: '', service: '', details: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-muted-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">Thanks!</h2>
            <p className="text-muted text-lg mb-8">We got your request and will call you within 24 hours.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-accent hover:text-accent-dark font-medium"
            >
              Submit another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-muted-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
            GET A FREE STUMP GRINDING QUOTE IN UPSTATE SC
          </h2>
          <p className="text-muted text-lg">
            Contact us for a free estimate on stump grinding, brush hogging, or land clearing. We respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-sm text-muted uppercase tracking-wide mb-2">Call or Text</p>
              <a href="tel:8647609203" className="text-3xl font-black text-primary hover:text-accent transition-colors">
                (864) 760-9203
              </a>
            </div>

            <div>
              <p className="text-sm text-muted uppercase tracking-wide mb-2">Email</p>
              <a href="mailto:tigernelson@gmail.com" className="text-lg text-primary hover:text-accent transition-colors">
                tigernelson@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm text-muted uppercase tracking-wide mb-2">Hours</p>
              <p className="text-lg text-primary">Monday – Saturday</p>
              <p className="text-lg text-primary">7:00 AM – 6:00 PM</p>
            </div>

            <div>
              <p className="text-sm text-muted uppercase tracking-wide mb-2">Service Area</p>
              <p className="text-primary">Greenville, Anderson, Pickens & Oconee Counties</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-lg">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-primary mb-2 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-primary mb-2 uppercase">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-primary mb-2 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-primary mb-2 uppercase">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition bg-white"
                  >
                    <option value="">Select one</option>
                    <option value="Stump Grinding">Stump Grinding</option>
                    <option value="Brush Hogging">Brush Hogging</option>
                    <option value="Land Clearing">Land Clearing</option>
                    <option value="Multiple Services">Multiple Services</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="details" className="block text-sm font-bold text-primary mb-2 uppercase">
                  Project Details <span className="font-normal text-muted">(optional)</span>
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition resize-none"
                  placeholder="Number of stumps, acreage, property address, etc."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent-dark disabled:bg-gray-400 text-white px-6 py-4 rounded-md font-bold uppercase tracking-wide transition-colors text-lg"
              >
                {isSubmitting ? 'Sending...' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
