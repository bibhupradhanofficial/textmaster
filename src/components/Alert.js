import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiAlertCircle, FiInfo } from 'react-icons/fi';

function Alert(props) {
    const isDark = props.mode === 'dark';

    const icons = {
        success: <FiCheckCircle size={20} />,
        danger: <FiAlertCircle size={20} />,
        warning: <FiAlertCircle size={20} />,
        info: <FiInfo size={20} />
    };

    const colors = {
        success: '#10b981', // emerald-500
        danger: '#ef4444', // red-500
        warning: '#f59e0b', // amber-500
        info: '#3b82f6' // blue-500
    };

    return (
        <div style={{ position: 'fixed', top: '80px', right: '20px', zIndex: 9999 }}>
            <AnimatePresence>
                {props.alert && (
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 50, scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="d-flex align-items-center gap-3 shadow-lg"
                        style={{
                            background: isDark ? 'rgba(30, 41, 59, 0.9)' : 'rgba(255, 255, 255, 0.9)',
                            backdropFilter: 'blur(10px)',
                            padding: '1rem 1.5rem',
                            borderRadius: '12px',
                            borderLeft: `5px solid ${colors[props.alert.type] || colors.info}`,
                            color: isDark ? '#f1f5f9' : '#1f2937',
                            minWidth: '300px',
                            boxShadow: isDark ? '0 10px 15px -3px rgba(0, 0, 0, 0.5)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <span style={{ color: colors[props.alert.type] || colors.info }}>
                            {icons[props.alert.type] || icons.info}
                        </span>
                        <div className="fw-medium">
                            {props.alert.message}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Alert;
