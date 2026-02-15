import { useState } from 'react';

const Amenities = ({ amenities }) => {
    const [showMore, setShowMore] = useState(false);
    
    if (!amenities || amenities.length === 0) return null;

    // Map amenities to icons/images (mock mapping for visual design)
    // Map amenities to icons/images
    const getIcon = (title) => {
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes('gym') || lowerTitle.includes('fitness')) {
            return (
                <svg className="w-10 h-10 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 39v-3.875a3.375 3.375 0 016.75 0V39M12 9h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            );
        }
        if (lowerTitle.includes('pool')) {
            return (
                <svg className="w-10 h-10 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
            );
        }
        if (lowerTitle.includes('garden') || lowerTitle.includes('park')) {
            return (
                <svg className="w-10 h-10 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            );
        }
        if (lowerTitle.includes('play')) {
            return (
                <svg className="w-10 h-10 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            );
        }
        // Default
        return (
            <svg className="w-10 h-10 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
        );
    };

    return (
        <section className="py-24 bg-white" id="amenities">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-6">
                        <span className="text-primary font-semibold text-xs uppercase tracking-widest">World-Class Facilities</span>
                    </div>
                    <h2 
                        className="section-title cursor-pointer hover:text-primary/80 transition-colors group inline-block relative"
                        onClick={() => {
                            const element = document.getElementById('amenities');
                            if (element) {
                                setTimeout(() => {
                                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }, 100);
                            }
                        }}
                    >
                        Premium Amenities
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 group-hover:w-full bg-linear-to-r from-primary to-teal-600 transition-all duration-300"></span>
                    </h2>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
                        Experience luxury living with thoughtfully curated amenities designed for modern lifestyle and wellness.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
                    {/* Featured Image */}
                    <div className="relative group h-125 order-2 lg:order-1">
                        <div className="absolute inset-0 bg-linear-to-br from-primary/40 to-transparent rounded-3xl blur-2xl z-0"></div>
                        <img
                            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Amenities Overview"
                            className="w-full h-full object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Right - Grid & Button */}
                    <div className="order-1 lg:order-2">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                            {amenities.map((amenity) => (
                                <div key={amenity._id} className="flex flex-col items-center group cursor-pointer">
                                    <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-primary/10 to-teal-500/10 flex items-center justify-center p-5 mb-4 group-hover:from-primary group-hover:to-teal-600 group-hover:text-white shadow-md transition-all duration-300 border border-primary/20">
                                        {getIcon(amenity.title)}
                                    </div>
                                    <h4 className="text-center text-secondary font-semibold group-hover:text-primary transition-colors text-sm">
                                        {amenity.title}
                                    </h4>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <button 
                                onClick={() => {
                                    console.log('Button clicked! Current state:', showMore);
                                    setShowMore(!showMore);
                                }}
                                className="btn-primary w-full active:scale-95">
                                {showMore ? '✓ Show Less' : 'View More Amenities'}
                            </button>
                            {showMore && (
                                <div className="glass-effect rounded-2xl p-8 backdrop-blur-xl border border-primary/20 animate-fade-in">
                                    <h3 className="font-serif text-xl font-bold text-secondary mb-4">Additional Amenities</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-center gap-3">
                                            <span className="text-primary">✓</span> Olympic-size Swimming Pool
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="text-primary">✓</span> State-of-the-art Fitness Center
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="text-primary">✓</span> Spa & Wellness Center
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="text-primary">✓</span> Multi-sport Courts
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="text-primary">✓</span> Kids Play Area
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Amenities;
