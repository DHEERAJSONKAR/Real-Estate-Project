const DeveloperStats = ({ data }) => {
    if (!data || !data.content || !data.content.stats) return null;

    const stats = data.content.stats;

    return (
        <section className="py-24 bg-linear-to-b from-white to-slate-50" id="developer">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-6">
                        <span className="text-primary font-semibold text-xs uppercase tracking-widest">Our Legacy</span>
                    </div>
                    <h2 className="section-title">About Developer</h2>
                </div>

                <div className="max-w-4xl mx-auto text-center mb-20">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Vignaharta Developers is more than just a real estate company — we are dream weavers, committed to building not just homes, but better lives. With a legacy of expert craftsmanship and a forward-thinking approach, we're transforming skylines and setting new standards in urban living. Our foundation rests on integrity, excellence, and innovation, ensuring every project is a perfect blend of creativity, functionality, and sustainability.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="group text-center p-8 rounded-2xl bg-white hover:bg-linear-to-br hover:from-primary/10 hover:to-teal-500/10 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                            <div className="text-4xl lg:text-5xl font-serif font-bold gradient-text mb-3 group-hover:scale-110 transition-transform">
                                {stat.value}
                            </div>
                            <span className="text-xs uppercase tracking-wider text-gray-600 font-semibold">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DeveloperStats;
