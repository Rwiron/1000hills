
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const baseStyles = "px-8 py-3 font-semibold uppercase tracking-wider text-sm transition-all duration-200 focus:outline-none";
  const variants = {
    primary: "bg-[#f69110] text-black border-2 border-[#f69110] hover:bg-black hover:text-white hover:border-black",
    secondary: "bg-black text-white border-2 border-black hover:bg-[#f69110] hover:text-black hover:border-[#f69110]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
