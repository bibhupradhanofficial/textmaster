import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiUser, FiInfo } from 'react-icons/fi';

export default function About(props) {
    const isDark = props.mode === 'dark';

    const Section = ({ title, icon: Icon, children }) => (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card mb-4"
        >
            <div className="d-flex align-items-center gap-2 mb-3">
                <Icon size={24} className="text-primary" />
                <h3 className="h4 fw-bold mb-0">{title}</h3>
            </div>
            <div className={isDark ? 'text-white-50' : 'text-muted'}>
                {children}
            </div>
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
                    About Us
                </h1>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <Section title="What is TextMaster?" icon={FiInfo}>
                        <p>
                            TextMaster is a comprehensive web-based text manipulation utility designed to streamline common text formatting and conversion tasks. 
                            The application features a clean, intuitive user interface that organizes functionalities into logical categories.
                        </p>
                        <ul className="list-unstyled mt-3">
                            <li className="mb-2"><strong>• Case Conversion:</strong> Change text to UPPERCASE, lowercase, Title Case, and more.</li>
                            <li className="mb-2"><strong>• Formatting:</strong> Remove extra spaces, manage line breaks, and clean up text.</li>
                            <li className="mb-2"><strong>• Analytics:</strong> Get detailed insights like word count, reading time, and character stats.</li>
                            <li className="mb-2"><strong>• Security:</strong> Base64 encoding/decoding and other utility functions.</li>
                        </ul>
                    </Section>

                    <Section title="Developer" icon={FiUser}>
                        <p>
                            The TextMaster was developed by <strong>Bibhu Pradhan</strong>.
                        </p>
                        <p>
                            Bibhu is a passionate programmer with a strong interest in problem-solving, logical thinking, and building efficient solutions through code.
                        </p>
                        <div className="d-flex gap-3 mt-3">
                            <a href="https://www.linkedin.com/in/bibhupradhanofficial" className="btn btn-vibrant btn-sm text-white text-decoration-none">LinkedIn</a>
                            <a href="https://github.com/bibhupradhanofficial" className="btn btn-outline-primary btn-sm text-decoration-none">GitHub</a>
                        </div>
                    </Section>

                    <Section title="Tech Stack" icon={FiCode}>
                        <p>
                            Built with <strong>React.js</strong> and <strong>Bootstrap 5</strong>, enhanced with <strong>Framer Motion</strong> for smooth animations and a custom Glassmorphism design system.
                        </p>
                    </Section>
                </div>
            </div>
        </div>
    );
}
