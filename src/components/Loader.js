import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <motion.div
                className="loader"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.5 }}
            >
                <svg
                    className="w-16 h-16 text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <circle className="opacity-25" cx="12" cy="12" r="10" fill="currentColor" />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v2a6 6 0 100 12v2a8 8 0 01-8-8z"
                    />
                </svg>
            </motion.div>
        </div>
    );
};

export default Loader;