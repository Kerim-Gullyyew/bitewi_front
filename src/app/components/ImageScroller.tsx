import React from 'react';

interface ImageScrollerProps {
  images: string[]; // Array of image URLs
}

const ImageScroller: React.FC<ImageScrollerProps> = ({ images }) => {
  return (
    <>
      {/* Ensure data-animated="true" is set for animation to apply */}
      <div className="scroller" data-direction="right" data-speed="fast" data-animated="true">
        <div className="scroller__inner">
          {images.map((img, index) => (
            <img key={index} src={img} alt="" />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scroller {
          max-width: 600px;
          overflow: hidden;
        }

        .scroller__inner {
          display: flex;
          gap: 1rem;
          animation: scroll var(--_animation-duration, 60s) linear infinite reverse;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  );
};

export default ImageScroller;
