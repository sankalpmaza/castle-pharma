'use client';

import React from 'react';

interface ImageViewerProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export default function ImageViewer({ 
  src, 
  alt, 
  className = '', 
  containerClassName = ''
}: ImageViewerProps) {
  return (
    <div className={containerClassName}>
      <img
        src={src}
        alt={alt}
        className={className}
      />
    </div>
  );
}
