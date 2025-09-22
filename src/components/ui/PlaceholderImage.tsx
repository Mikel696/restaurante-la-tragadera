import React from 'react';

interface PlaceholderImageProps {
  alt: string;
  className?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ alt, className = '' }) => {
  return (
    <div
      className={`flex items-center justify-center bg-gray-300 text-gray-500 text-sm text-center p-2 ${className}`}
    >
      {alt}
    </div>
  );
};

export default PlaceholderImage;
