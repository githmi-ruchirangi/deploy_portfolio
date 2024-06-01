import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/16/solid';

const ScrollUp: React.FC = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 p-3 rounded-full bg-yellow-400 text-white shadow-md transition-all duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
            <ArrowUpIcon className="w-6 h-6" />
        </button>
    );
};

export default ScrollUp;
