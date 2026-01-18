import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

export default function Contact(props) {
    const isDark = props.mode === 'dark';

    const ContactCard = ({ icon: Icon, title, value, delay }) => (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="glass-card text-center p-4 h-100"
        >
            <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-circle mb-3" 
                style={{ background: isDark ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)' }}>
                <Icon size={24} className="text-primary" />
            </div>
            <h3 className="h5 fw-bold mb-2">{title}</h3>
            <p className={`mb-0 ${isDark ? 'text-white-50' : 'text-muted'}`}>{value}</p>
        </motion.div>
    );

    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold mb-3" style={{ 
                    background: isDark 
                        ? 'linear-gradient(to right, #818cf8, #f472b6)' 
                        : 'linear-gradient(to right, #6366f1, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Get in Touch
                </h1>
                <p className={`lead ${isDark ? 'text-white-50' : 'text-muted'}`}>
                    Have questions? We'd love to hear from you.
                </p>
            </div>

            <div className="row g-4 mb-5">
                <div className="col-md-4">
                    <ContactCard icon={FiMail} title="Email" value="contact@textmaster.com" delay={0.1} />
                </div>
                <div className="col-md-4">
                    <ContactCard icon={FiPhone} title="Phone" value="+1 (555) 123-4567" delay={0.2} />
                </div>
                <div className="col-md-4">
                    <ContactCard icon={FiMapPin} title="Location" value="San Francisco, CA" delay={0.3} />
                </div>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card"
            >
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h3 className="fw-bold mb-4">Send us a message</h3>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="Your Name" />
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control" placeholder="Your Email" />
                            </div>
                            <div className="col-12">
                                <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-vibrant px-5 py-2 mt-3">
                                    <FiSend className="me-2" /> Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
