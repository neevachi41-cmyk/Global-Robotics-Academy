import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

/* eslint-disable react-hooks/exhaustive-deps, no-unused-vars */

// IoT Device Models
function IoTModel({ isActive, type, color }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current && isActive) {
      meshRef.current.rotation.y += 0.005;
      // Subtle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  const renderIoTDevice = () => {
    switch(type) {
      case 'sensor':
        return (
          <group>
            {/* Smart Sensor Hub */}
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.6, 0.6, 0.3, 16]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Sensor dome */}
            <mesh position={[0, 0.2, 0]}>
              <sphereGeometry args={[0.4, 16, 16]} />
              <meshStandardMaterial color="#dcece2" transparent opacity={0.7} />
            </mesh>
            {/* LED indicators */}
            {[0, 1, 2].map((i) => (
              <mesh key={i} position={[0.3 * Math.cos(i * 2.09), 0.3, 0.3 * Math.sin(i * 2.09)]}>
                <sphereGeometry args={[0.05, 8, 8]} />
                <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={0.8} />
              </mesh>
            ))}
            {/* Antenna */}
            <mesh position={[0, 0.6, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.4, 8]} />
              <meshStandardMaterial color="#6b7178" />
            </mesh>
          </group>
        );
      
      case 'microcontroller':
        return (
          <group>
            {/* IoT Board */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[1.2, 0.8, 0.1]} />
              <meshStandardMaterial color="#2d3748" />
            </mesh>
            {/* Chip */}
            <mesh position={[0, 0, 0.06]}>
              <boxGeometry args={[0.4, 0.4, 0.05]} />
              <meshStandardMaterial color="#1a202c" />
            </mesh>
            {/* Components */}
            {[0, 1, 2, 3].map((i) => (
              <mesh key={i} position={[-0.4 + i * 0.27, 0.2, 0.06]}>
                <boxGeometry args={[0.08, 0.08, 0.03]} />
                <meshStandardMaterial color={color} />
              </mesh>
            ))}
            {/* Pins */}
            {[0, 1, 2, 3, 4].map((i) => (
              <mesh key={i} position={[-0.5 + i * 0.25, -0.45, 0]}>
                <cylinderGeometry args={[0.02, 0.02, 0.15, 8]} />
                <meshStandardMaterial color="#0096B9" />
              </mesh>
            ))}
          </group>
        );
      
      case 'smartHome':
        return (
          <group>
            {/* Smart Home Hub */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.8, 1.2, 0.3]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Screen */}
            <mesh position={[0, 0.3, 0.16]}>
              <boxGeometry args={[0.6, 0.4, 0.05]} />
              <meshStandardMaterial color="#1a202c" emissive="#00FFFF" emissiveIntensity={0.3} />
            </mesh>
            {/* Control buttons */}
            {[0, 1, 2].map((i) => (
              <mesh key={i} position={[-0.2 + i * 0.2, -0.3, 0.16]}>
                <circleGeometry args={[0.08, 16]} />
                <meshStandardMaterial color="#dcece2" />
              </mesh>
            ))}
            {/* WiFi indicator */}
            <mesh position={[0.3, 0.5, 0.16]}>
              <coneGeometry args={[0.1, 0.15, 16]} />
              <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={0.5} />
            </mesh>
          </group>
        );
      
      case 'industrial':
        return (
          <group>
            {/* Industrial IoT Gateway */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[1, 1.5, 0.8]} />
              <meshStandardMaterial color="#2d3748" />
            </mesh>
            {/* Front panel */}
            <mesh position={[0, 0, 0.41]}>
              <boxGeometry args={[0.8, 1.2, 0.05]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Status lights */}
            {[0, 1, 2, 3].map((i) => (
              <mesh key={i} position={[-0.25 + i * 0.17, 0.4, 0.44]}>
                <sphereGeometry args={[0.05, 8, 8]} />
                <meshStandardMaterial color={i % 2 === 0 ? "#00FFFF" : "#0096B9"} emissive={i % 2 === 0 ? "#00FFFF" : "#0096B9"} emissiveIntensity={0.8} />
              </mesh>
            ))}
            {/* Vents */}
            {[0, 1, 2].map((i) => (
              <mesh key={i} position={[0, -0.4 + i * 0.15, 0.44]}>
                <boxGeometry args={[0.6, 0.03, 0.02]} />
                <meshStandardMaterial color="#1a202c" />
              </mesh>
            ))}
          </group>
        );
      
      case 'wearable':
        return (
          <group>
            {/* Smart Watch */}
            <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
              <boxGeometry args={[0.6, 0.8, 0.1]} />
              <meshStandardMaterial color="#1a202c" />
            </mesh>
            {/* Watch face */}
            <mesh position={[0, 0.15, 0.06]} rotation={[0, 0, Math.PI / 6]}>
              <circleGeometry args={[0.25, 32]} />
              <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={0.4} />
            </mesh>
            {/* Band */}
            <mesh position={[0, -0.5, 0]}>
              <boxGeometry args={[0.3, 0.4, 0.08]} />
              <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[0, 0.5, 0]}>
              <boxGeometry args={[0.3, 0.3, 0.08]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Heart rate sensor */}
            <mesh position={[0, -0.3, 0.05]}>
              <circleGeometry args={[0.08, 16]} />
              <meshStandardMaterial color="#0096B9" emissive="#0096B9" emissiveIntensity={0.5} />
            </mesh>
          </group>
        );
      
      case 'agriculture':
        return (
          <group>
            {/* Smart Agriculture Sensor */}
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.3, 0.2, 1.2, 16]} />
              <meshStandardMaterial color="#2d3748" />
            </mesh>
            {/* Sensor head */}
            <mesh position={[0, 0.6, 0]}>
              <sphereGeometry args={[0.35, 16, 16]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Solar panel */}
            <mesh position={[0.5, 0.4, 0]} rotation={[0, 0, -Math.PI / 4]}>
              <boxGeometry args={[0.4, 0.4, 0.05]} />
              <meshStandardMaterial color="#1a365d" />
            </mesh>
            {/* Moisture sensor */}
            <mesh position={[0, -0.6, 0]}>
              <cylinderGeometry args={[0.1, 0.1, 0.3, 8]} />
              <meshStandardMaterial color="#0096B9" />
            </mesh>
            {/* Antenna */}
            <mesh position={[0, 1, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
              <meshStandardMaterial color="#6b7178" />
            </mesh>
          </group>
        );
      
      case 'automotive':
        return (
          <group>
            {/* Automotive IoT Module */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[1.4, 0.9, 0.4]} />
              <meshStandardMaterial color="#2d3748" />
            </mesh>
            {/* Heat sink */}
            <mesh position={[0, 0.45, 0]}>
              <boxGeometry args={[1.2, 0.1, 0.3]} />
              <meshStandardMaterial color="#4a5568" />
            </mesh>
            {/* Fins */}
            {[0, 1, 2, 3, 4].map((i) => (
              <mesh key={i} position={[-0.4 + i * 0.2, 0.55, 0]}>
                <boxGeometry args={[0.08, 0.15, 0.25]} />
                <meshStandardMaterial color="#718096" />
              </mesh>
            ))}
            {/* Connectors */}
            <mesh position={[-0.7, 0, 0]}>
              <boxGeometry args={[0.15, 0.3, 0.2]} />
              <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[0.7, 0, 0]}>
              <boxGeometry args={[0.15, 0.3, 0.2]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Status LED */}
            <mesh position={[0, 0, 0.21]}>
              <sphereGeometry args={[0.04, 8, 8]} />
              <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={1} />
            </mesh>
          </group>
        );
      
      case 'fightingBot':
        return (
          <group>
            {/* Fighting Bot Body */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.8, 0.6, 1.0]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Head */}
            <mesh position={[0, 0.5, 0.2]}>
              <sphereGeometry args={[0.25, 16, 16]} />
              <meshStandardMaterial color="#2d3748" />
            </mesh>
            {/* Eyes */}
            <mesh position={[-0.1, 0.55, 0.4]}>
              <sphereGeometry args={[0.06, 8, 8]} />
              <meshStandardMaterial color="#0096B9" emissive="#0096B9" emissiveIntensity={1} />
            </mesh>
            <mesh position={[0.1, 0.55, 0.4]}>
              <sphereGeometry args={[0.06, 8, 8]} />
              <meshStandardMaterial color="#0096B9" emissive="#0096B9" emissiveIntensity={1} />
            </mesh>
            {/* Arms */}
            <mesh position={[-0.6, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[0.3, 0.15, 0.15]} />
              <meshStandardMaterial color="#4a5568" />
            </mesh>
            <mesh position={[0.6, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
              <boxGeometry args={[0.3, 0.15, 0.15]} />
              <meshStandardMaterial color="#4a5568" />
            </mesh>
            {/* Weapon/Fist */}
            <mesh position={[-0.9, 0.2, 0]}>
              <sphereGeometry args={[0.12, 8, 8]} />
              <meshStandardMaterial color="#1a202c" />
            </mesh>
            <mesh position={[0.9, 0.2, 0]}>
              <sphereGeometry args={[0.12, 8, 8]} />
              <meshStandardMaterial color="#1a202c" />
            </mesh>
            {/* Legs */}
            <mesh position={[-0.25, -0.5, 0]}>
              <boxGeometry args={[0.2, 0.4, 0.2]} />
              <meshStandardMaterial color="#2d3748" />
            </mesh>
            <mesh position={[0.25, -0.5, 0]}>
              <boxGeometry args={[0.2, 0.4, 0.2]} />
              <meshStandardMaterial color="#2d3748" />
            </mesh>
            {/* Armor plating */}
            <mesh position={[0, 0, 0.55]}>
              <boxGeometry args={[0.6, 0.4, 0.1]} />
              <meshStandardMaterial color="#1a202c" />
            </mesh>
          </group>
        );
      
      case 'roboticArm':
        return (
          <group>
            {/* Base */}
            <mesh position={[0, -0.5, 0]}>
              <cylinderGeometry args={[0.4, 0.5, 0.3, 16]} />
              <meshStandardMaterial color="#2d3748" />
            </mesh>
            {/* Lower arm */}
            <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
              <boxGeometry args={[0.15, 0.8, 0.15]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Joint */}
            <mesh position={[0.2, 0.3, 0]}>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshStandardMaterial color="#4a5568" />
            </mesh>
            {/* Upper arm */}
            <mesh position={[0.4, 0.6, 0]} rotation={[0, 0, -Math.PI / 8]}>
              <boxGeometry args={[0.12, 0.6, 0.12]} />
              <meshStandardMaterial color="#718096" />
            </mesh>
            {/* Wrist joint */}
            <mesh position={[0.5, 0.9, 0]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial color="#4a5568" />
            </mesh>
            {/* Claw/Gripper */}
            <mesh position={[0.6, 1.1, 0]} rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[0.08, 0.2, 0.08]} />
              <meshStandardMaterial color="#1a202c" />
            </mesh>
            <mesh position={[0.6, 1.1, 0]} rotation={[0, 0, -Math.PI / 4]}>
              <boxGeometry args={[0.08, 0.2, 0.08]} />
              <meshStandardMaterial color="#1a202c" />
            </mesh>
            {/* Control panel */}
            <mesh position={[0, -0.3, 0.35]}>
              <boxGeometry args={[0.2, 0.15, 0.05]} />
              <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={0.3} />
            </mesh>
          </group>
        );
      
      case 'humanoidRobot':
        return (
          <group>
            {/* Head */}
            <mesh position={[0, 1.2, 0]}>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshStandardMaterial color="#2d3748" />
            </mesh>
            {/* Face screen */}
            <mesh position={[0, 1.15, 0.15]}>
              <boxGeometry args={[0.25, 0.15, 0.05]} />
              <meshStandardMaterial color="#00FFFF" emissive="#00FFFF" emissiveIntensity={0.5} />
            </mesh>
            {/* Torso */}
            <mesh position={[0, 0.7, 0]}>
              <boxGeometry args={[0.5, 0.6, 0.3]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Chest plate */}
            <mesh position={[0, 0.8, 0.16]}>
              <boxGeometry args={[0.3, 0.2, 0.05]} />
              <meshStandardMaterial color="#1a202c" />
            </mesh>
            {/* Core reactor */}
            <mesh position={[0, 0.8, 0.19]}>
              <circleGeometry args={[0.08, 16]} />
              <meshStandardMaterial color="#0096B9" emissive="#0096B9" emissiveIntensity={1} />
            </mesh>
            {/* Arms */}
            <mesh position={[-0.4, 0.6, 0]} rotation={[0, 0, Math.PI / 8]}>
              <boxGeometry args={[0.12, 0.5, 0.12]} />
              <meshStandardMaterial color="#4a5568" />
            </mesh>
            <mesh position={[0.4, 0.6, 0]} rotation={[0, 0, -Math.PI / 8]}>
              <boxGeometry args={[0.12, 0.5, 0.12]} />
              <meshStandardMaterial color="#4a5568" />
            </mesh>
            {/* Hands */}
            <mesh position={[-0.6, 0.3, 0]}>
              <sphereGeometry args={[0.08, 8, 8]} />
              <meshStandardMaterial color="#2d3748" />
            </mesh>
            <mesh position={[0.6, 0.3, 0]}>
              <sphereGeometry args={[0.08, 8, 8]} />
              <meshStandardMaterial color="#2d3748" />
            </mesh>
            {/* Legs */}
            <mesh position={[-0.15, 0.2, 0]}>
              <boxGeometry args={[0.15, 0.5, 0.15]} />
              <meshStandardMaterial color="#4a5568" />
            </mesh>
            <mesh position={[0.15, 0.2, 0]}>
              <boxGeometry args={[0.15, 0.5, 0.15]} />
              <meshStandardMaterial color="#4a5568" />
            </mesh>
            {/* Feet */}
            <mesh position={[-0.15, -0.1, 0.05]}>
              <boxGeometry args={[0.15, 0.08, 0.2]} />
              <meshStandardMaterial color="#1a202c" />
            </mesh>
            <mesh position={[0.15, -0.1, 0.05]}>
              <boxGeometry args={[0.15, 0.08, 0.2]} />
              <meshStandardMaterial color="#1a202c" />
            </mesh>
          </group>
        );
      
      case 'droneShip':
        return (
          <group>
            {/* Main body */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[1.2, 0.3, 0.6]} />
              <meshStandardMaterial color={color} />
            </mesh>
            {/* Cockpit */}
            <mesh position={[0.3, 0.15, 0]}>
              <sphereGeometry args={[0.2, 16, 16]} />
              <meshStandardMaterial color="#00FFFF" transparent opacity={0.7} />
            </mesh>
            {/* Wings */}
            <mesh position={[0, 0, -0.5]}>
              <boxGeometry args={[1.8, 0.08, 0.4]} />
              <meshStandardMaterial color="#2d3748" />
            </mesh>
            <mesh position={[0, 0, 0.5]}>
              <boxGeometry args={[1.8, 0.08, 0.4]} />
              <meshStandardMaterial color="#2d3748" />
            </mesh>
            {/* Engines */}
            <mesh position={[-0.7, 0, -0.4]}>
              <cylinderGeometry args={[0.15, 0.12, 0.4, 8]} />
              <meshStandardMaterial color="#4a5568" />
            </mesh>
            <mesh position={[0.7, 0, -0.4]}>
              <cylinderGeometry args={[0.15, 0.12, 0.4, 8]} />
              <meshStandardMaterial color="#4a5568" />
            </mesh>
            <mesh position={[-0.7, 0, 0.4]}>
              <cylinderGeometry args={[0.15, 0.12, 0.4, 8]} />
              <meshStandardMaterial color="#4a5568" />
            </mesh>
            <mesh position={[0.7, 0, 0.4]}>
              <cylinderGeometry args={[0.15, 0.12, 0.4, 8]} />
              <meshStandardMaterial color="#4a5568" />
            </mesh>
            {/* Engine glow */}
            <mesh position={[-0.7, 0, -0.65]}>
              <sphereGeometry args={[0.1, 8, 8]} />
              <meshStandardMaterial color="#0096B9" emissive="#0096B9" emissiveIntensity={1} />
            </mesh>
            <mesh position={[0.7, 0, -0.65]}>
              <sphereGeometry args={[0.1, 8, 8]} />
              <meshStandardMaterial color="#0096B9" emissive="#0096B9" emissiveIntensity={1} />
            </mesh>
            <mesh position={[-0.7, 0, 0.65]}>
              <sphereGeometry args={[0.1, 8, 8]} />
              <meshStandardMaterial color="#0096B9" emissive="#0096B9" emissiveIntensity={1} />
            </mesh>
            <mesh position={[0.7, 0, 0.65]}>
              <sphereGeometry args={[0.1, 8, 8]} />
              <meshStandardMaterial color="#0096B9" emissive="#0096B9" emissiveIntensity={1} />
            </mesh>
            {/* Weapons */}
            <mesh position={[-0.6, 0.1, 0]}>
              <boxGeometry args={[0.3, 0.05, 0.05]} />
              <meshStandardMaterial color="#1a202c" />
            </mesh>
            <mesh position={[0.6, 0.1, 0]}>
              <boxGeometry args={[0.3, 0.05, 0.05]} />
              <meshStandardMaterial color="#1a202c" />
            </mesh>
            {/* Antenna */}
            <mesh position={[0, 0.25, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
              <meshStandardMaterial color="#6b7178" />
            </mesh>
          </group>
        );
      
      default:
        return null;
    }
  };

  return (
    <group ref={meshRef}>
      {renderIoTDevice()}
    </group>
  );
}

// Loading fallback component
function Loader() {
  return (
    <Html center>
      <div style={{ color: 'var(--orange)', fontFamily: 'IBM Plex Mono', fontSize: '10px' }}>
        Loading 3D Model...
      </div>
    </Html>
  );
}

const Slideshow3D = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const autoplayTimerRef = useRef(null);
  const resumeTimerRef = useRef(null);
  
  // IoT device types and colors for different slides
  const iotDevices = [
    { type: 'sensor', color: '#00FFFF', name: 'Smart Sensor' },
    { type: 'microcontroller', color: '#0096B9', name: 'Microcontroller' },
    { type: 'smartHome', color: '#dcece2', name: 'Smart Home Hub' },
    { type: 'industrial', color: '#6b7178', name: 'Industrial Gateway' },
    { type: 'wearable', color: '#12181c', name: 'Wearable Device' },
    { type: 'agriculture', color: '#bcd8c7', name: 'Agri-Sensor' },
    { type: 'automotive', color: '#f7f6f2', name: 'Automotive IoT' },
    { type: 'fightingBot', color: '#0096B9', name: 'Fighting Bot' },
    { type: 'roboticArm', color: '#00FFFF', name: 'Robotic Arm' },
    { type: 'humanoidRobot', color: '#6b7178', name: 'Humanoid Robot' },
    { type: 'droneShip', color: '#dcece2', name: 'Drone Ship' },
  ];

  const pad = (n) => n < 10 ? '0' + n : '' + n;

  const startAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
    autoplayTimerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % iotDevices.length);
    }, 3200);
  };

  const stopAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  };

  const handleNext = () => {
    stopAutoplay();
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(prev => (prev + 1) % iotDevices.length);
      setIsTransitioning(false);
      startAutoplay();
    }, 500);
  };

  const handlePrev = () => {
    stopAutoplay();
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(prev => (prev - 1 + iotDevices.length) % iotDevices.length);
      setIsTransitioning(false);
      startAutoplay();
    }, 500);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      stopAutoplay();
      clearTimeout(resumeTimerRef.current);
    };
  }, []);

  return (
    <div className="slideshow-container">
      <div className="slideshow-frame">
        <div className="stage-outer">
          <div className="diamond">
            <div className="stage-3d">
              <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                style={{ width: '100%', height: '100%' }}
              >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} />
                
                <Suspense fallback={<Loader />}>
                  {iotDevices.map((device, index) => (
                    <group key={device.type} visible={index === current}>
                      <IoTModel isActive={index === current} type={device.type} color={device.color} />
                    </group>
                  ))}
                </Suspense>
                
                <OrbitControls 
                  enableZoom={false}
                  enablePan={false}
                  autoRotate={false}
                />
              </Canvas>
            </div>
          </div>
        </div>
        <div className="slide-indicator">
          <span id="idxLabel">{pad(current + 1)} / {pad(iotDevices.length)}</span>
          <span id="graNum">{pad(current + 1)}</span>
        </div>
        <div className="iot-label">
          {iotDevices[current].name}
        </div>
      </div>
      <div className="slide-controls">
        <button onClick={handlePrev} className="control-btn">←</button>
        <button onClick={handleNext} className="control-btn">→</button>
      </div>
    </div>
  );
};

export default Slideshow3D;