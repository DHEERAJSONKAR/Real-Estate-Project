const Overview = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-6">
                        <span className="text-primary font-semibold text-xs uppercase tracking-widest">Project Overview</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-secondary leading-tight">
                        {data.title}
                    </h2>
                    {data.subtitle && (
                        <h3 className="text-2xl text-gray-600 mb-8 leading-relaxed">
                            {data.subtitle}
                        </h3>
                    )}
                    {data.description && (
                        <div>
                            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                                {data.description}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Overview;
