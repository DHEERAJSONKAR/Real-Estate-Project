import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-linear-to-b from-secondary to-slate-900 text-white" id="contact">
            {/* Top CTA Section */}
            <div className="bg-linear-to-r from-primary to-teal-600 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Own Your Dream Home?</h3>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">Get in touch with our expert team today and explore the perfect property for you.</p>
                    <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-1">
                        Schedule a Visit
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-linear-to-r from-primary to-teal-600 flex items-center justify-center font-serif font-bold text-lg">
                                PH
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif font-bold text-lg leading-none">PRESTIGE HORIZONS</span>
                                <span className="text-[9px] tracking-widest uppercase text-white/50">Premium Living</span>
                            </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            Building dreams through architectural excellence and premium living spaces.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 1 2 1z"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="/" className="text-white/70 hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#overview" className="text-white/70 hover:text-primary transition-colors">Overview</a></li>
                            <li><a href="#amenities" className="text-white/70 hover:text-primary transition-colors">Amenities</a></li>
                            <li><a href="#contact" className="text-white/70 hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-6 text-white">Get In Touch</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span className="text-white/70">Vikhroli (East), Mumbai</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <span className="text-white/70">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span className="text-white/70">info@limsroofing.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Admin */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-6 text-white">Admin Portal</h4>
                        <Link to="/admin" className="inline-block px-4 py-2 bg-white/10 hover:bg-primary rounded-lg text-white/70 hover:text-white text-sm font-semibold transition-all">
                            Admin Login →
                        </Link>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-8 md:pt-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                        <p>&copy; 2026 Prestige Horizons. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
