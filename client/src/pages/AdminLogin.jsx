import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error('Please fill in all fields');
            return;
        }

        try {
            setLoading(true);
            await login(email, password);
            toast.success('Login successful!');
            navigate('/admin/dashboard');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-primary/20 to-slate-50 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-linear-to-b from-primary/30 to-transparent rounded-full blur-3xl z-0"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-linear-to-t from-teal-500/20 to-transparent rounded-full blur-3xl z-0"></div>

            <div className="w-full max-w-md px-6 relative z-10">
                {/* Logo Card */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-linear-to-r from-primary to-teal-600 flex items-center justify-center text-white font-serif font-bold text-2xl mx-auto mb-6 shadow-lg">
                        PH
                    </div>
                    <h2 className="text-4xl font-serif font-bold text-secondary mb-2">Admin Portal</h2>
                    <p className="text-gray-600">Manage your listings</p>
                </div>

                {/* Login Card */}
                <div className="glass-effect rounded-3xl p-10 backdrop-blur-xl border border-white/20 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-secondary mb-3 uppercase tracking-wide">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-primary/30 rounded-xl bg-white/80 backdrop-blur focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300"
                                placeholder="admin@gmail.com"
                                disabled={loading}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-secondary mb-3 uppercase tracking-wide">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-primary/30 rounded-xl bg-white/80 backdrop-blur focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300"
                                placeholder="••••••••"
                                disabled={loading}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-linear-to-r from-primary to-teal-600 text-white py-3 rounded-xl font-semibold uppercase tracking-wide transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {loading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Logging in...
                                </div>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-3 bg-white/80 text-gray-500 backdrop-blur">Demo Credentials</span>
                        </div>
                    </div>

                    {/* Demo credentials info */}
                    <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                        <p className="text-xs text-gray-700 space-y-1">
                            <span className="block"><strong>Email:</strong> admin@gmail.com</span>
                            <span className="block"><strong>Password:</strong> 1234</span>
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-center text-sm text-gray-600 mt-8">
                    Secure admin panel for property management
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;
