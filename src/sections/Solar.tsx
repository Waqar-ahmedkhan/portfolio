"use client";
import { motion } from "framer-motion";

const PlanetSVG = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill={color} />
    <path
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
      stroke="rgba(255,255,255,0.3)"
      strokeWidth="2"
    />
    <path d="M4 12H20" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
    <path d="M12 4V20" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
  </svg>
);

const SolarSystem = () => {
  const planets = [
    { name: "Mercury", color: "#A9A9A9", size: 10, orbitRadius: 300, speed: 15 },
    { name: "Venus", color: "#FFA500", size: 15, orbitRadius: 340, speed: 20 },
    { name: "Earth", color: "#4169E1", size: 20, orbitRadius: 380, speed: 25 },
    { name: "Mars", color: "#FF4500", size: 18, orbitRadius: 420, speed: 30 },
    { name: "Jupiter", color: "#DEB887", size: 30, orbitRadius: 460, speed: 35 },
    { name: "Saturn", color: "#F4A460", size: 28, orbitRadius: 500, speed: 40 },
    { name: "Uranus", color: "#87CEEB", size: 22, orbitRadius: 540, speed: 50 },
    { name: "Neptune", color: "#4169E1", size: 21, orbitRadius: 580, speed: 60 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {planets.map((planet) => (
        <motion.div
          key={planet.name}
          className="absolute top-1/2 left-1/2"
          style={{
            width: planet.orbitRadius * 2,
            height: planet.orbitRadius * 2,
            marginLeft: -planet.orbitRadius,
            marginTop: -planet.orbitRadius,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: planet.speed,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute"
            style={{
              top: "50%",
              left: `calc(50% - ${planet.size / 2}px)`,
            }}
            animate={{ rotate: -360 }}
            transition={{
              duration: planet.speed,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <PlanetSVG color={planet.color} size={planet.size} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default SolarSystem;
