import { useNavigate } from 'react-router';
import { useState } from 'react';

const LocationBenefitsPage = () => {
    const navigate = useNavigate();
    const [expandedCard, setExpandedCard] = useState(null);

    const locationBenefits = [
        {
            id: 1,
            icon: '🚇',
            title: 'Metro Connectivity',
            description: 'Just 2 minutes walk from metro station',
            details: 'Direct access to Mumbai Metro Line 7 for seamless connectivity across the city. Reduces commute time significantly.'
        },
        {
            id: 2,
            icon: '🛣️',
            title: 'Highway Access',
            description: 'Direct access to Eastern Express Highway',
            details: 'Immediate access to major highways for quick connectivity to all parts of the city and suburbs.'
        },
        {
            id: 3,
            icon: '✈️',
            title: 'Airport Proximity',
            description: '30 minutes from Domestic Airport',
            details: 'Located at convenient 30-35 minutes drive from Mumbai International Airport with dedicated airport taxi services.'
        },
        {
            id: 4,
            icon: '🚌',
            title: 'Public Transport',
            description: 'Multiple bus routes available',
            details: 'Well-connected with BEST bus services, auto-rickshaws, and taxi services for daily commuting needs.'
        },
        {
            id: 5,
            icon: '🏥',
            title: 'Healthcare Proximity',
            description: 'Top hospitals within 1 km radius',
            details: 'Close to Fortis Hospital, Lilavati Hospital, and various diagnostic centers for emergency and routine care.'
        },
        {
            id: 6,
            icon: '🎓',
            title: 'Educational Institutions',
            description: 'Premium schools nearby',
            details: 'Proximity to top-ranked schools and colleges including international schools for children\'s education.'
        },
        {
            id: 7,
            icon: '🛒',
            title: 'Shopping & Retail',
            description: 'Major malls within 2 km',
            details: 'Close to Vikhroli market, retail stores, restaurants, and shopping malls for all your daily needs.'
        },
        {
            id: 8,
            icon: '🌳',
            title: 'Parks & Recreation',
            description: 'Green spaces and entertainment hubs',
            details: 'Multiple parks, gardens, and recreational facilities for family outings and fitness activities.'
        },
        {
            id: 9,
            icon: '🏦',
            title: 'Banking Services',
            description: 'All major banks nearby',
            details: 'Multiple banks, ATMs, and financial institutions for your banking and investment needs.'
        },
    ];

    return (
        <div className="min-h-screen pt-24">
            {/* Back Button */}
            <div className="container mx-auto px-6 py-6">
                <button
                    onClick={() => navigate('/')}
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold uppercase text-sm tracking-wide"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Home
                </button>
            </div>

            {/* Hero Section */}
            <section className="py-16 bg-linear-to-b from-primary/10 to-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-6">
                            <span className="text-primary font-semibold text-xs uppercase tracking-widest">Strategic Location</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-6">
                            Prime Location Benefits
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Prestige Horizons is strategically located in Vikhroli, one of Mumbai's most sought-after areas, offering unparalleled connectivity and access to all essential services
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {locationBenefits.map((benefit) => (
                            <div
                                key={benefit.id}
                                onClick={() => setExpandedCard(expandedCard === benefit.id ? null : benefit.id)}
                                className="group p-8 bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-primary/10 cursor-pointer hover:border-primary/30"
                            >
                                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-secondary mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {benefit.description}
                                </p>
                                {expandedCard === benefit.id && (
                                    <div className="mt-4 pt-4 border-t border-primary/20">
                                        <p className="text-gray-700 leading-relaxed">
                                            {benefit.details}
                                        </p>
                                    </div>
                                )}
                                <div className="text-primary text-sm font-semibold uppercase tracking-wide mt-4">
                                    {expandedCard === benefit.id ? 'Show Less' : 'Learn More'}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Distance Chart */}
            <section className="py-24 bg-linear-to-b from-slate-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-serif font-bold text-secondary mb-12 text-center">
                            Distance to Key Locations
                        </h2>

                        <div className="space-y-6">
                            {[
                                { location: 'Mumbai Metro Station (Line 7)', distance: '300 m', time: '4 mins walk' },
                                { location: 'Eastern Express Highway', distance: '500 m', time: '6 mins drive' },
                                { location: 'Mumbai Domestic Airport', distance: '18 km', time: '30 mins drive' },
                                { location: 'Mumbai International Airport', distance: '25 km', time: '40 mins drive' },
                                { location: 'Fortis Hospital', distance: '2 km', time: '7 mins drive' },
                                { location: 'Lilavati Hospital', distance: '1.5 km', time: '5 mins drive' },
                                { location: 'Top Schools & Colleges', distance: '1-3 km', time: '10-15 mins' },
                                { location: 'Shopping Malls & Markets', distance: '1-2 km', time: '8-12 mins' },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center justify-between p-6 bg-white rounded-xl border border-primary/10 hover:border-primary/30 transition-all">
                                    <div>
                                        <h4 className="text-lg font-semibold text-secondary mb-1">
                                            {item.location}
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            {item.time}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-serif font-bold text-primary">
                                            {item.distance}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Location Matters */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-serif font-bold text-secondary mb-12 text-center">
                            Why Location Matters
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-linear-to-br from-primary/5 to-transparent rounded-2xl border border-primary/20">
                                <div className="text-3xl mb-4">📍</div>
                                <h3 className="text-xl font-serif font-bold text-secondary mb-3">Investment Value</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Prime locations with excellent connectivity tend to appreciate faster. Prestige Horizons' location ensures strong return on investment over time.
                                </p>
                            </div>
                            <div className="p-8 bg-linear-to-br from-primary/5 to-transparent rounded-2xl border border-primary/20">
                                <div className="text-3xl mb-4">⏱️</div>
                                <h3 className="text-xl font-serif font-bold text-secondary mb-3">Time Savings</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    With excellent public transport and highway access, save valuable time on daily commutes and access to essential services.
                                </p>
                            </div>
                            <div className="p-8 bg-linear-to-br from-primary/5 to-transparent rounded-2xl border border-primary/20">
                                <div className="text-3xl mb-4">🏘️</div>
                                <h3 className="text-xl font-serif font-bold text-secondary mb-3">Quality Living</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Access to premium schools, hospitals, shopping, and recreation makes daily life convenient and comfortable for your entire family.
                                </p>
                            </div>
                            <div className="p-8 bg-linear-to-br from-primary/5 to-transparent rounded-2xl border border-primary/20">
                                <div className="text-3xl mb-4">💼</div>
                                <h3 className="text-xl font-serif font-bold text-secondary mb-3">Career Growth</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Strategic location near business hubs, financial districts, and tech centers supports career development opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-linear-to-r from-primary to-teal-600">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-4xl font-serif font-bold text-white mb-6">Experience Premium Location</h3>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Live in Prestige Horizons and enjoy the perfect blend of convenience, luxury, and connectivity
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="btn-primary"
                    >
                        Back to Home
                    </button>
                </div>
            </section>
        </div>
    );
};

export default LocationBenefitsPage;
