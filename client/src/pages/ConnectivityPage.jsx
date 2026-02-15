import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import api from '../services/api';
import Connectivity from '../components/Connectivity';

const ConnectivityPage = () => {
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
            
            // Find connectivity section
            const connectivitySection = response.data.data.find(
                section => section.sectionName === 'connectivity'
            );
            
            setData(connectivitySection);
        } catch (error) {
            toast.error('Failed to load connectivity information');
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
                    <p className="text-xl text-secondary font-serif">Loading...</p>
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

            {/* Connectivity Section */}
            <Connectivity data={data} />

            {/* Additional Info Section */}
            <section className="py-24 bg-linear-to-b from-white to-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-4xl font-serif font-bold mb-12 text-secondary">Key Connectivity Features</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Feature Cards */}
                            {[
                                {
                                    icon: '🚇',
                                    title: 'Metro Proximity',
                                    description: 'Located within minutes of major metro stations for easy commuting'
                                },
                                {
                                    icon: '🛣️',
                                    title: 'Highway Access',
                                    description: 'Direct access to national highways and main roads'
                                },
                                {
                                    icon: '✈️',
                                    title: 'Airport Connectivity',
                                    description: 'Just 30 minutes from the international airport'
                                },
                                {
                                    icon: '🚌',
                                    title: 'Public Transport',
                                    description: 'Well-connected with buses and other public transportation'
                                },
                                {
                                    icon: '🏥',
                                    title: 'Healthcare',
                                    description: 'Top hospitals and medical centers nearby'
                                },
                                {
                                    icon: '🎓',
                                    title: 'Education',
                                    description: 'Premium schools and educational institutions in vicinity'
                                }
                            ].map((feature, index) => (
                                <div key={index} className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-primary/10">
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h4 className="text-xl font-serif font-bold text-secondary mb-3">{feature.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-linear-to-r from-primary to-teal-600">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-4xl font-serif font-bold text-white mb-6">Experience Premium Connectivity</h3>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Prestige Horizons offers unmatched connectivity for modern living with all essential amenities within reach
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

export default ConnectivityPage;
