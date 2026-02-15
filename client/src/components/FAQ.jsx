import { useState } from 'react';

const FAQ = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    if (!faqs || faqs.length === 0) return null;

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-linear-to-b from-white to-slate-50" id="faq">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-6">
                        <span className="text-primary font-semibold text-xs uppercase tracking-widest">Common Questions</span>
                    </div>
                    <h2 className="section-title">Frequently Asked Questions</h2>
                </div>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq._id}
                            className="border border-primary/20 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg bg-white"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full text-left px-6 py-4 transition-all duration-200 flex justify-between items-center ${openIndex === index ? 'bg-linear-to-r from-primary to-teal-600 text-white' : 'bg-white hover:bg-slate-50 text-secondary'
                                    }`}
                            >
                                <span className="font-semibold text-lg font-serif leading-relaxed pr-4">
                                    {faq.question}
                                </span>
                                <span className={`text-2xl font-light shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    ↓
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 py-6 bg-white/50 border-t border-primary/20 animate-fade-in">
                                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
