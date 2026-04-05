import React from 'react';
import { FaYoutube, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-gray-300 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {/* Brand Section */}
                        <div className="lg:col-span-1 ">
                            <h2 className="text-white text-2xl font-bold mb-4">DigiTools</h2>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                            </p>
                        </div>

                        {/* Product Column */}
                        <div>
                            <h3 className="text-white font-semibold mb-4 text-lg">Product</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Templates</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Integrations</a></li>
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div>
                            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Press</a></li>
                            </ul>
                        </div>

                        {/* Resources Column */}
                        <div>
                            <h3 className="text-white font-semibold mb-4 text-lg">Resources</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Community</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div className="lg:col-span-1">
                            <h3 className="text-white font-semibold mb-4 text-lg">Social Links</h3>
                            <div className="flex gap-4">
                                <a href="#" className="bg-gray-700 hover:bg-white hover:text-slate-950 text-white p-3 rounded-full transition duration-300">
                                    <FaYoutube size={20} />
                                </a>
                                <a href="#" className="bg-gray-700 hover:bg-white hover:text-slate-950 text-white p-3 rounded-full transition duration-300">
                                    <FaLinkedin size={20} />
                                </a>
                                <a href="#" className="bg-gray-700 hover:bg-white hover:text-slate-950 text-white p-3 rounded-full transition duration-300">
                                    <FaXTwitter size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="divider"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p className="text-gray-400">
                        © 2026 Digitools. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-white transition">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;