import { useState } from 'react';

const FloorPlans = ({ data }) => {
    const [activeTab, setActiveTab] = useState('1bhk');

    if (!data || !data.content || !data.content.plans) return null;

    const plans = data.content.plans;

    return (
        <section className="py-24 bg-white" id="floor-plans">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-6">
                        <span className="text-primary font-semibold text-xs uppercase tracking-widest">Floor Plans</span>
                    </div>
                    <h2 className="section-title">Choose Your Perfect Layout</h2>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto">Thoughtfully designed spaces that maximize comfort and functionality.</p>
                </div>

                <div className="bg-linear-to-br from-slate-50 to-white rounded-3xl shadow-xl overflow-hidden border border-primary/10 p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left - Floor Plan Image */}
                        <div className="order-2 lg:order-1">
                            <div className="bg-white p-8 border-2 border-primary/20 rounded-2xl shadow-md">
                                <img
                                    src={plans[activeTab].image}
                                    alt="Floor Plan"
                                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Right - Tabs & Details */}
                        <div className="order-1 lg:order-2">
                            {/* Tabs */}
                            <div className="flex flex-wrap gap-3 mb-12">
                                {Object.keys(plans).map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => setActiveTab(key)}
                                        className={`px-6 py-2 rounded-lg font-semibold uppercase text-sm transition-all transform ${activeTab === key ? 'bg-linear-to-r from-primary to-teal-600 text-white shadow-lg scale-105' : 'bg-gray-100 text-secondary hover:bg-gray-200'
                                            }`}
                                    >
                                        {key.toUpperCase()}
                                    </button>
                                ))}
                            </div>

                            {/* Details */}
                            <div className="space-y-8 animate-fade-in">
                                <div>
                                    <h3 className="text-primary uppercase tracking-widest text-xs font-semibold mb-2">Floor Type</h3>
                                    <p className="text-4xl font-serif font-bold text-secondary">{plans[activeTab].type}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-primary uppercase tracking-widest text-xs font-semibold mb-2">Area</h3>
                                        <p className="text-2xl font-serif text-secondary">{plans[activeTab].area}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-primary uppercase tracking-widest text-xs font-semibold mb-2">Starting Price</h3>
                                        <p className="text-2xl font-serif text-primary font-bold">{plans[activeTab].price}</p>
                                    </div>
                                </div>

                                <button className="btn-primary w-full md:w-auto mt-6">
                                    Download Floor Plan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FloorPlans;
