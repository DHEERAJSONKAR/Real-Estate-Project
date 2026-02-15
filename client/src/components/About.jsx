const About = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-24 bg-linear-to-b from-white to-slate-50" id="overview">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Images with modern layout */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-6 h-125">
                            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
                                <img
                                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                    alt="Interior"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="space-y-6">
                                <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group h-55">
                                    <img
                                        src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                        alt="Exterior"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group h-55">
                                    <img
                                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                        alt="Detail"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Text */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full">
                                <span className="text-primary font-semibold text-xs uppercase tracking-widest">About Our Vision</span>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-serif font-bold text-secondary leading-tight">
                                {data.title || "Crafting Dreams"}
                            </h2>
                        </div>

                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            <p className="text-lg">
                                At Vignuharta Infinity, every detail reflects the grandest gesture of life in the most authentic and desirable home. Guided by a humanist approach, architecture places people at the heart of every space.
                            </p>
                            <p className="text-lg">
                                Built on foundations of comfort, we evoke a true sense of freedom, protection, and belonging that transforms mere structures into cherished homes.
                            </p>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            {[
                                { icon: '🏗️', label: 'Premium Construction' },
                                { icon: '🲥', label: '20+ Amenities' },
                                { icon: '🎯', label: 'Prime Location' },
                                { icon: '✨', label: 'Luxury Living' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <span className="text-3xl">{item.icon}</span>
                                    <span className="font-semibold text-secondary">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        <button className="btn-primary mt-8">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
