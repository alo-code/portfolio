'use client';
import { TypedStrings } from '@/ui/components/typed';
import { useEffect } from 'react';

export const Preloader = () => {
  useEffect(() => {
    const preInner = document.querySelector('.preloader .pre-inner');

    // Fade out .pre-inner element
    fadeOut(preInner, 2000, () => {
      // Preload hide
      const preloader = document.querySelector('.preloader');
      preloader.style.display = 'none';

      // Add 'loaded' class to body
      document.body.classList.add('loaded');
    });

    function fadeOut(element, duration, callback) {
      let opacity = 6;
      const interval = 1000 / 60; // 60 frames per second
      const step = opacity / (duration / interval);

      function updateOpacity() {
        opacity -= step;
        element.style.opacity = opacity;

        if (opacity <= 0) {
          clearInterval(fadeInterval);
          if (typeof callback === 'function') {
            callback();
          }
        }
      }
      const fadeInterval = setInterval(updateOpacity, interval);
    }
  }, []);

  return (
    <div className="preloader">
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="pre-inner">
            <TypedStrings
              strings={['loading...']}
              options={{
                loop: false,
                typeSpeed: 60
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
