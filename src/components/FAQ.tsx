'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How much does stump grinding cost in Greenville SC?',
      answer: 'Stump grinding costs in the Greenville and Upstate SC area typically range from $75-$300 per stump depending on size, location, and accessibility. Larger stumps or those in tight spaces may cost more. We always provide free on-site estimates so you know exactly what to expect before we start.',
    },
    {
      question: 'What areas do you serve in Upstate South Carolina?',
      answer: 'We serve all of Upstate South Carolina including Greenville, Spartanburg, Anderson, Pickens, and Oconee Counties. This includes Greenville, Anderson, Easley, Clemson, Seneca, Pickens, Simpsonville, Greer, Mauldin, Pendleton, Liberty, Central, Six Mile, and surrounding communities.',
    },
    {
      question: 'What is the difference between stump grinding and stump removal?',
      answer: 'Stump grinding uses a specialized machine to grind the stump 6-8 inches below ground level, leaving the roots to decay naturally underground. Stump removal pulls the entire stump and root ball out of the ground, which is more invasive, expensive, and leaves a larger hole. For most homeowners in the Upstate, stump grinding is the preferred and more cost-effective method.',
    },
    {
      question: 'How long does brush hogging take?',
      answer: 'Brush hogging time depends on the size and condition of your property. A typical residential lot (1-2 acres) in places like Easley or Anderson can be cleared in a few hours. Larger properties or heavily overgrown areas common in rural Pickens and Oconee counties may take a full day or more. We provide time estimates during our free consultation.',
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes, Nelson Land & Stump Services is fully licensed and insured. We carry liability insurance to protect your property and our team while working on your land. We\'re happy to provide proof of insurance upon request.',
    },
    {
      question: 'Do you offer free estimates?',
      answer: 'Yes! We offer free on-site estimates for all our services including stump grinding, brush hogging, and land clearing throughout the Upstate SC area. Just give us a call at (864) 760-9203 or fill out our contact form, and we\'ll schedule a convenient time to assess your project.',
    },
    {
      question: 'What happens to the wood chips after stump grinding?',
      answer: 'After grinding, the stump becomes a pile of wood chips mixed with soil. We can leave the chips for you to use as mulch in your garden or landscaping, or we can haul them away for an additional fee. Most customers use them to fill in the hole where the stump was and let it settle over time.',
    },
    {
      question: 'How soon can you schedule my job?',
      answer: 'We typically can schedule jobs within 1-2 weeks, depending on current demand and weather conditions. For urgent situations like storm cleanup in the Greenville or Anderson area, we do our best to accommodate same-week appointments. Call us at (864) 760-9203 to check our current availability.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4" style={{ fontFamily: 'var(--font-oswald)' }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-muted text-lg">
            Common questions about stump grinding and land clearing in Upstate SC
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-primary pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-muted">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted mb-4">Still have questions?</p>
          <a
            href="tel:8647609203"
            className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-md font-bold uppercase tracking-wide transition-colors"
          >
            Call (864) 760-9203
          </a>
        </div>
      </div>
    </section>
  );
}
