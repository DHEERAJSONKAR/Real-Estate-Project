const Construction = ({ data }) => {
    if (!data) return null;

    // Hardcoded construction updates for visual match since backend only provides one text block
    const updates = [
        {
            stage: "Under Construction",
            tower: "Tower A",
            status: "Know More",
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            stage: "Completed",
            tower: "Tower B",
            status: "Know More",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            stage: "Completed",
            tower: "Tower C",
            status: "Know More",
            image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        }
    ];

    return (
        <section className="py-24 bg-linear-to-b from-slate-50 to-white" id="construction">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-6">
                        <span className="text-primary font-semibold text-xs uppercase tracking-widest">Project Progress</span>
                    </div>
                    <h2 className="section-title">Construction Updates</h2>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto">Track the progress of our towers and stay updated on development milestones.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {updates.map((item, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-100">
                            <img
                                src={item.image}
                                alt={item.tower}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-secondary/90 via-secondary/30 to-transparent flex flex-col justify-end items-center p-8 text-center">
                                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                                    item.stage.includes('Completed') 
                                        ? 'bg-green-500/90 text-white'
                                        : 'bg-primary/90 text-white'
                                }`}>
                                    {item.stage}
                                </div>
                                <h3 className="text-white text-2xl font-serif font-bold mb-2">{item.tower}</h3>
                                <button className="text-white text-xs border-2 border-white/60 rounded-full px-5 py-2 hover:bg-white hover:text-secondary transition-all uppercase tracking-wider font-semibold">
                                    {item.status}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Construction;
