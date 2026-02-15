import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import api from '../services/api';
import FloorPlans from '../components/FloorPlans';

const FloorPlansPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await api.get('/sections');
            
            // Find floor plans section
            const floorPlansSection = response.data.data.find(
                section => section.sectionName === 'floorPlans'
            );
            
            setData(floorPlansSection);
        } catch (error) {
            toast.error('Failed to load floor plans');
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary mx-auto mb-4"></div>
                    <p className="text-xl text-secondary font-serif">Loading Floor Plans...</p>
                </div>
            </div>
        );
    }

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

            {/* Floor Plans Section */}
            <FloorPlans data={data} />

            {/* Floor Plan Info Section */}
            <section className="py-24 bg-linear-to-b from-white to-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-4xl font-serif font-bold mb-12 text-secondary text-center">Why Choose Our Floor Plans?</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-primary/10">
                                <div className="text-4xl mb-4">🏗️</div>
                                <h4 className="text-xl font-serif font-bold text-secondary mb-3">Modern Design</h4>
                                <p className="text-gray-600 leading-relaxed">Thoughtfully designed spaces that maximize comfort, functionality, and aesthetic appeal</p>
                            </div>
                            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-primary/10">
                                <div className="text-4xl mb-4">💡</div>
                                <h4 className="text-xl font-serif font-bold text-secondary mb-3">Optimal Space Utilization</h4>
                                <p className="text-gray-600 leading-relaxed">Every square foot is optimized for living, working, and entertainment purposes</p>
                            </div>
                            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-primary/10">
                                <div className="text-4xl mb-4">🌟</div>
                                <h4 className="text-xl font-serif font-bold text-secondary mb-3">Premium Finishes</h4>
                                <p className="text-gray-600 leading-relaxed">High-quality materials and premium fixtures throughout the apartment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-4xl font-serif font-bold mb-12 text-secondary text-center">Plan Comparison</h3>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b-2 border-primary">
                                        <th className="px-6 py-4 text-left text-secondary font-serif font-bold">Feature</th>
                                        <th className="px-6 py-4 text-center text-secondary font-serif font-bold">1 BHK</th>
                                        <th className="px-6 py-4 text-center text-secondary font-serif font-bold">2 BHK</th>
                                        <th className="px-6 py-4 text-center text-secondary font-serif font-bold">3 BHK</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { feature: 'Bedrooms', bhk1: '1', bhk2: '2', bhk3: '3' },
                                        { feature: 'Bathrooms', bhk1: '1', bhk2: '2', bhk3: '2.5' },
                                        { feature: 'Living Area', bhk1: '✓', bhk2: '✓', bhk3: '✓' },
                                        { feature: 'Kitchen', bhk1: 'Modular', bhk2: 'Modular', bhk3: 'Premium' },
                                        { feature: 'Balcony', bhk1: '1', bhk2: '2', bhk3: '2' },
                                        { feature: 'Parking', bhk1: '1', bhk2: '2', bhk3: '2' },
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 text-secondary font-semibold">{row.feature}</td>
                                            <td className="px-6 py-4 text-center text-gray-600">{row.bhk1}</td>
                                            <td className="px-6 py-4 text-center text-gray-600">{row.bhk2}</td>
                                            <td className="px-6 py-4 text-center text-gray-600">{row.bhk3}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-linear-to-r from-primary to-teal-600">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-4xl font-serif font-bold text-white mb-6">Find Your Perfect Plan</h3>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Our carefully curated floor plans offer the perfect blend of luxury, comfort, and modern living
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="btn-primary"
                    >
                        Explore More
                    </button>
                </div>
            </section>
        </div>
    );
};

export default FloorPlansPage;
