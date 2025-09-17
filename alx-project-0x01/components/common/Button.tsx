import React from 'react';

interface ButtonProps {
    title: string;
    onClick: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}
        >
            {title}
        </button>
    );
};
export default Button;