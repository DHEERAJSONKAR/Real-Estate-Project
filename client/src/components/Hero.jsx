import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Hero = ({ data }) => {
    const navigate = useNavigate();
    // Static data for pricing card since backend doesn't support it yet
    const location = "BLDG. NO. 223/224, CIRCLE : KANNAMWAR NAGAR I, VIKHROLI (EAST)";

    if (!data) return null;

    return (
        <section className="relative min-h-screen pt-24 flex items-center bg-linear-to-br from-slate-900 via-primary/10 to-white overflow-hidden" id="home">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-linear-to-b from-primary/30 to-transparent rounded-full blur-3xl z-0"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-linear-to-t from-teal-500/20 to-transparent rounded-full blur-3xl z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full">
                                <span className="text-primary font-semibold text-xs uppercase tracking-widest">Premium Real Estate</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
                                <span className="text-secondary">Luxury</span> <span className="gradient-text">Living</span> <span className="text-secondary">Redefined</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                                Experience unparalleled luxury at Vignuharta Infinity. Premium apartments with world-class amenities in the heart of the city.
                            </p>
                        </div>

                        {/* Pricing Cards */}
                        <div className="grid grid-cols-2 gap-4 max-w-md">
                            <div className="glass-effect rounded-2xl p-6 backdrop-blur-xl hover:shadow-xl transition-all">
                                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">1 BHK</p>
                                <p className="text-3xl font-serif font-bold text-secondary">₹ 69.99 L</p>
                                <p className="text-xs text-gray-500 mt-2">Starting from</p>
                            </div>
                            <div className="glass-effect rounded-2xl p-6 backdrop-blur-xl hover:shadow-xl transition-all">
                                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">2 BHK</p>
                                <p className="text-3xl font-serif font-bold text-secondary">₹ 96.99 L</p>
                                <p className="text-xs text-gray-500 mt-2">Starting from</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="btn-primary">Enquire Now</button>
                            <button 
                                onClick={() => navigate('/floor-plans')}
                                className="px-8 py-3 border-2 border-secondary rounded-lg text-secondary hover:bg-secondary hover:text-white transition-all font-semibold uppercase tracking-wide"
                            >
                                View Plans
                            </button>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-3 pt-4">
                            <svg className="w-5 h-5 text-primary mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                            <span className="text-sm text-gray-600">Vikhroli (East), Mumbai</span>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative group h-150">
                        <div className="absolute inset-0 bg-linear-to-br from-primary/40 to-transparent rounded-3xl blur-2xl z-0"></div>
                        <img
                            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Luxury Building"
                            className="w-full h-full object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-secondary/40 via-transparent to-transparent rounded-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
