import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
    const [sections, setSections] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingSection, setEditingSection] = useState(null);
    const [editingAmenity, setEditingAmenity] = useState(null);
    const [editingFaq, setEditingFaq] = useState(null);
    const [newAmenity, setNewAmenity] = useState({ title: '', description: '' });
    const [newFaq, setNewFaq] = useState({ question: '', answer: '' });
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const [sectionsRes, amenitiesRes, faqsRes] = await Promise.all([
                api.get('/sections'),
                api.get('/amenities'),
                api.get('/faqs'),
            ]);
            setSections(sectionsRes.data.data);
            setAmenities(amenitiesRes.data.data);
            setFaqs(faqsRes.data.data);
        } catch {
            toast.error('Failed to load data');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await logout();
        toast.success('Logged out successfully');
        navigate('/admin');
    };

    // Section Management
    const handleSectionEdit = (section) => {
        setEditingSection({ ...section });
    };

    const handleSectionSave = async (id) => {
        try {
            await api.put(`/sections/${id}`, editingSection);
            toast.success('Section updated successfully');
            setEditingSection(null);
            fetchData();
        } catch {
            toast.error('Failed to update section');
        }
    };

    // Amenity Management
    const handleAmenityEdit = (amenity) => {
        setEditingAmenity({ ...amenity });
    };

    const handleAmenitySave = async (id) => {
        try {
            await api.put(`/amenities/${id}`, editingAmenity);
            toast.success('Amenity updated successfully');
            setEditingAmenity(null);
            fetchData();
        } catch {
            toast.error('Failed to update amenity');
        }
    };

    const handleAmenityAdd = async () => {
        if (!newAmenity.title || !newAmenity.description) {
            toast.error('Please fill in all fields');
            return;
        }
        try {
            await api.post('/amenities', newAmenity);
            toast.success('Amenity added successfully');
            setNewAmenity({ title: '', description: '' });
            fetchData();
        } catch {
            toast.error('Failed to add amenity');
        }
    };

    const handleAmenityDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this amenity?')) return;
        try {
            await api.delete(`/amenities/${id}`);
            toast.success('Amenity deleted successfully');
            fetchData();
        } catch {
            toast.error('Failed to delete amenity');
        }
    };

    // FAQ Management
    const handleFaqEdit = (faq) => {
        setEditingFaq({ ...faq });
    };

    const handleFaqSave = async (id) => {
        try {
            await api.put(`/faqs/${id}`, editingFaq);
            toast.success('FAQ updated successfully');
            setEditingFaq(null);
            fetchData();
        } catch {
            toast.error('Failed to update FAQ');
        }
    };

    const handleFaqAdd = async () => {
        if (!newFaq.question || !newFaq.answer) {
            toast.error('Please fill in all fields');
            return;
        }
        try {
            await api.post('/faqs', newFaq);
            toast.success('FAQ added successfully');
            setNewFaq({ question: '', answer: '' });
            fetchData();
        } catch {
            toast.error('Failed to add FAQ');
        }
    };

    const handleFaqDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this FAQ?')) return;
        try {
            await api.delete(`/faqs/${id}`);
            toast.success('FAQ deleted successfully');
            fetchData();
        } catch {
            toast.error('Failed to delete FAQ');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100">
                <div className="text-center">
                    <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin mx-auto mb-4"></div>
                    <p className="text-xl text-secondary font-serif">Loading Dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50">
            {/* Header */}
            <header className="bg-linear-to-r from-secondary to-slate-700 shadow-lg border-b border-primary/20 sticky top-0 z-40">
                <div className="container mx-auto px-6 py-6 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-linear-to-r from-primary to-teal-600 flex items-center justify-center text-white font-serif font-bold">
                            PH
                        </div>
                        <div>
                            <h1 className="text-2xl font-serif font-bold text-white">Admin Dashboard</h1>
                            <p className="text-white/70 text-xs uppercase tracking-widest">Prestige Horizons</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-2 bg-red-500/20 text-red-100 rounded-lg hover:bg-red-600 hover:text-white border border-red-500/30 transition-all duration-300 font-semibold uppercase text-sm tracking-wide"
                    >
                        Logout
                    </button>
                </div>
            </header>

            <div className="container mx-auto px-6 py-12">
                {/* Sections Management */}
                <section className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-serif font-bold text-secondary">Manage Sections</h2>
                        <div className="h-1 flex-1 bg-linear-to-r from-primary to-transparent rounded-full"></div>
                    </div>
                    <div className="space-y-6">
                        {sections.map((section) => (
                            <div key={section._id} className="bg-white rounded-2xl shadow-md hover:shadow-lg border border-primary/10 transition-all duration-300 p-8">
                                <h3 className="text-2xl font-serif font-bold mb-6 capitalize bg-linear-to-r from-primary to-teal-600 bg-clip-text text-transparent">
                                    {section.sectionName}
                                </h3>
                                {editingSection && editingSection._id === section._id ? (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-secondary mb-3 uppercase tracking-wide">
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                value={editingSection.title}
                                                onChange={(e) =>
                                                    setEditingSection({ ...editingSection, title: e.target.value })
                                                }
                                                className="w-full px-4 py-3 border border-primary/30 rounded-xl bg-white/80 backdrop-blur focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-secondary mb-3 uppercase tracking-wide">
                                                Subtitle
                                            </label>
                                            <input
                                                type="text"
                                                value={editingSection.subtitle || ''}
                                                onChange={(e) =>
                                                    setEditingSection({ ...editingSection, subtitle: e.target.value })
                                                }
                                                className="w-full px-4 py-3 border border-primary/30 rounded-xl bg-white/80 backdrop-blur focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-secondary mb-3 uppercase tracking-wide">
                                                Description
                                            </label>
                                            <textarea
                                                value={editingSection.description || ''}
                                                onChange={(e) =>
                                                    setEditingSection({ ...editingSection, description: e.target.value })
                                                }
                                                rows="4"
                                                className="w-full px-4 py-3 border border-primary/30 rounded-xl bg-white/80 backdrop-blur focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                            />
                                        </div>
                                        <div className="flex gap-4 pt-4">
                                            <button
                                                onClick={() => handleSectionSave(section._id)}
                                                className="flex-1 bg-linear-to-r from-primary to-teal-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all font-semibold uppercase text-sm tracking-wide"
                                            >
                                                ✓ Save Changes
                                            </button>
                                            <button
                                                onClick={() => setEditingSection(null)}
                                                className="flex-1 bg-gray-200 text-secondary px-6 py-3 rounded-xl hover:bg-gray-300 transition-all font-semibold uppercase text-sm tracking-wide"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="bg-slate-50 rounded-xl p-4 border border-primary/10">
                                                <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-1">Title</p>
                                                <p className="text-lg text-secondary font-semibold">{section.title || '—'}</p>
                                            </div>
                                            {section.subtitle && (
                                                <div className="bg-slate-50 rounded-xl p-4 border border-primary/10">
                                                    <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-1">Subtitle</p>
                                                    <p className="text-lg text-secondary font-semibold">{section.subtitle}</p>
                                                </div>
                                            )}
                                        </div>
                                        {section.description && (
                                            <div className="bg-slate-50 rounded-xl p-4 border border-primary/10">
                                                <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-2">Description</p>
                                                <p className="text-gray-700 leading-relaxed">{section.description}</p>
                                            </div>
                                        )}
                                        <button
                                            onClick={() => handleSectionEdit(section)}
                                            className="w-full bg-primary text-white px-6 py-3 rounded-xl hover:shadow-lg hover:bg-primary/90 transition-all font-semibold uppercase text-sm tracking-wide"
                                        >
                                            Edit Section
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Amenities Management */}
                <section className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-serif font-bold text-secondary">Manage Amenities</h2>
                        <div className="h-1 flex-1 bg-linear-to-r from-primary to-transparent rounded-full"></div>
                    </div>

                    {/* Add New Amenity */}
                    <div className="bg-linear-to-br from-primary/5 to-teal-500/5 rounded-2xl border border-primary/20 p-8 mb-8">
                        <h3 className="text-xl font-serif font-bold mb-6 text-secondary">➕ Add New Amenity</h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Amenity Title (e.g., Swimming Pool)"
                                value={newAmenity.title}
                                onChange={(e) => setNewAmenity({ ...newAmenity, title: e.target.value })}
                                className="w-full px-4 py-3 border border-primary/30 rounded-xl bg-white/80 backdrop-blur focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                            <textarea
                                placeholder="Description"
                                value={newAmenity.description}
                                onChange={(e) => setNewAmenity({ ...newAmenity, description: e.target.value })}
                                rows="3"
                                className="w-full px-4 py-3 border border-primary/30 rounded-xl bg-white/80 backdrop-blur focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                            />
                            <button
                                onClick={handleAmenityAdd}
                                className="w-full bg-linear-to-r from-primary to-teal-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all font-semibold uppercase text-sm tracking-wide"
                            >
                                Add Amenity
                            </button>
                        </div>
                    </div>

                    {/* Existing Amenities */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {amenities.map((amenity) => (
                            <div key={amenity._id} className="bg-white rounded-2xl shadow-md hover:shadow-lg border border-primary/10 transition-all duration-300 p-6">
                                {editingAmenity && editingAmenity._id === amenity._id ? (
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            value={editingAmenity.title}
                                            onChange={(e) =>
                                                setEditingAmenity({ ...editingAmenity, title: e.target.value })
                                            }
                                            className="w-full px-4 py-3 border border-primary/30 rounded-xl bg-white/80 backdrop-blur focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        />
                                        <textarea
                                            value={editingAmenity.description}
                                            onChange={(e) =>
                                                setEditingAmenity({ ...editingAmenity, description: e.target.value })
                                            }
                                            rows="3"
                                            className="w-full px-4 py-3 border border-primary/30 rounded-xl bg-white/80 backdrop-blur focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                        />
                                        <div className="flex gap-3 pt-4">
                                            <button
                                                onClick={() => handleAmenitySave(amenity._id)}
                                                className="flex-1 bg-primary text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all font-semibold uppercase text-xs tracking-wide"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() => setEditingAmenity(null)}
                                                className="flex-1 bg-gray-200 text-secondary px-4 py-2 rounded-lg hover:bg-gray-300 transition-all font-semibold uppercase text-xs tracking-wide"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <h4 className="text-lg font-semibold mb-3 text-secondary">{amenity.title}</h4>
                                        <p className="text-gray-700 mb-6 text-sm leading-relaxed">{amenity.description}</p>
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => handleAmenityEdit(amenity)}
                                                className="flex-1 bg-primary text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all font-semibold uppercase text-xs tracking-wide"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleAmenityDelete(amenity._id)}
                                                className="flex-1 bg-red-500/20 text-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all font-semibold uppercase text-xs tracking-wide border border-red-200"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQs Management */}
                <section className="mb-12">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-serif font-bold text-secondary">Manage FAQs</h2>
                        <div className="h-1 flex-1 bg-linear-to-r from-primary to-transparent rounded-full"></div>
                    </div>

                    {/* Add New FAQ */}
                    <div className="bg-linear-to-br from-primary/5 to-teal-500/5 rounded-2xl border border-primary/20 p-8 mb-8">
                        <h3 className="text-xl font-serif font-bold mb-6 text-secondary">❓ Add New FAQ</h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Question"
                                value={newFaq.question}
                                onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
                                className="w-full px-4 py-3 border border-primary/30 rounded-xl bg-white/80 backdrop-blur focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                            <textarea
                                placeholder="Answer"
                                value={newFaq.answer}
                                onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
                                rows="3"
                                className="w-full px-4 py-3 border border-primary/30 rounded-xl bg-white/80 backdrop-blur focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                            />
                            <button
                                onClick={handleFaqAdd}
                                className="w-full bg-linear-to-r from-primary to-teal-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all font-semibold uppercase text-sm tracking-wide"
                            >
                                Add FAQ
                            </button>
                        </div>
                    </div>

                    {/* Existing FAQs */}
                    <div className="space-y-6">
                        {faqs.map((faq) => (
                            <div key={faq._id} className="bg-white rounded-2xl shadow-md hover:shadow-lg border border-primary/10 transition-all duration-300 p-8">
                                {editingFaq && editingFaq._id === faq._id ? (
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            value={editingFaq.question}
                                            onChange={(e) =>
                                                setEditingFaq({ ...editingFaq, question: e.target.value })
                                            }
                                            className="w-full px-4 py-3 border border-primary/30 rounded-xl bg-white/80 backdrop-blur focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        />
                                        <textarea
                                            value={editingFaq.answer}
                                            onChange={(e) =>
                                                setEditingFaq({ ...editingFaq, answer: e.target.value })
                                            }
                                            rows="3"
                                            className="w-full px-4 py-3 border border-primary/30 rounded-xl bg-white/80 backdrop-blur focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                        />
                                        <div className="flex gap-4 pt-4">
                                            <button
                                                onClick={() => handleFaqSave(faq._id)}
                                                className="w-full bg-linear-to-r from-primary to-teal-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all font-semibold uppercase text-sm tracking-wide"
                                            >
                                                ✓ Save Changes
                                            </button>
                                            <button
                                                onClick={() => setEditingFaq(null)}
                                                className="flex-1 bg-gray-200 text-secondary px-6 py-3 rounded-xl hover:bg-gray-300 transition-all font-semibold uppercase text-sm tracking-wide"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <h4 className="text-xl font-semibold mb-4 text-secondary">{faq.question}</h4>
                                        <p className="text-gray-700 mb-6 leading-relaxed">{faq.answer}</p>
                                        <div className="flex gap-4">
                                            <button
                                                onClick={() => handleFaqEdit(faq)}
                                                className="flex-1 bg-primary text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all font-semibold uppercase text-sm tracking-wide"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleFaqDelete(faq._id)}
                                                className="flex-1 bg-red-500/20 text-red-600 px-6 py-3 rounded-xl hover:bg-red-600 hover:text-white transition-all font-semibold uppercase text-sm tracking-wide border border-red-200"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AdminDashboard;
