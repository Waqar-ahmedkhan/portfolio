"use client";
import React, { useMemo } from 'react';

const StarField = ({ count = 150 }) => {
  const stars = useMemo(() => {
    return Array.from({ length: count }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 3 + 2}s`,
      size: Math.random() * 2 + 1
    }));
  }, [count]);

  return (
    <>
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: star.animationDuration,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </>
  );
};

const SpaceEnvironment = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <StarField count={150} />
    </div>
  );
};

export default SpaceEnvironment;