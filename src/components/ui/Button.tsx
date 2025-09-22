import React from 'react';

// Define the props for the Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  // Base styles for the button
  const baseStyles = 'px-6 py-3 font-bold rounded-lg shadow-md transition-transform transform hover:scale-105';

  // Styles specific to the variant
  const variantStyles = {
    primary: 'bg-brand-red text-white hover:bg-red-700',
    secondary: 'bg-brand-yellow text-brand-dark hover:bg-yellow-500',
  };

  // Combine the classes
  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
