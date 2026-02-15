import { useState } from 'react';

const Township = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!data || !data.content || !data.content.buildings) return null;

    const buildings = data.content.buildings;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % buildings.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + buildings.length) % buildings.length);
    };

    return (
        <section className="py-24 bg-linear-to-b from-white to-slate-50" id="township">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-6">
                        <span className="text-primary font-semibold text-xs uppercase tracking-widest">Multiple Towers</span>
                    </div>
                    <h2 className="section-title">Explore Our Buildings</h2>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">Premium towers with distinctive architecture and world-class facilities.</p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {buildings.map((building, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-112.5">
                                <img
                                    src={building.image}
                                    alt={building.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-secondary/90 via-secondary/40 to-transparent flex flex-col justify-end p-8">
                                    <div className="inline-block px-3 py-1 bg-primary rounded-full text-white text-xs font-semibold mb-4 w-fit">
                                        {building.status}
                                    </div>
                                    <h3 className="text-white text-2xl font-serif font-bold">{building.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Township;
