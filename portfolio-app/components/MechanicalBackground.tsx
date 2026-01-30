/**
 * MechanicalBackground.tsx
 * 
 * A reusable, interactive 3D background component using Three.js.
 * Renders abstract mechanical geometry (rings, gears) that rotates slowly
 * and reacts subtly to mouse movement.
 * 
 * Props:
 * - size: 'full' | 'contained' (default: 'full')
 * - wireframe: boolean (default: false)
 * - rotationSpeed: number (degrees/second, default: 3)
 * - colorPalette: { base, rim, bg } (custom colors)
 * - interactionEnabled: boolean (default: true)
 */

"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

export interface MechanicalBackgroundProps {
  size?: "full" | "contained";
  wireframe?: boolean;
  rotationSpeed?: number; // degrees per second
  colorPalette?: {
    base?: string;
    rim?: string;
    bg?: string;
  };
  interactionEnabled?: boolean;
}

export default function MechanicalBackground({
  size = "full",
  wireframe = false,
  rotationSpeed = 3,
  colorPalette,
  interactionEnabled = true,
}: MechanicalBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const geometryGroupRef = useRef<THREE.Group | null>(null);
  
  // State to track if we should show fallback
  const [useFallback, setUseFallback] = useState(false);

  // Mouse position tracking
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const targetRotationX = useRef(0);
  const targetRotationY = useRef(0);

  // Default colors
  const colors = {
    base: colorPalette?.base || "#b9c0c6",
    rim: colorPalette?.rim || "#06b6d4", // Cyan tint for portfolio theme matching
    bg: colorPalette?.bg || "#020617", // slate-950
  };

  useEffect(() => {
    // 1. Check for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const shouldReduceMotion = mediaQuery.matches;

    // 2. Initialize Three.js
    if (!containerRef.current) return;

    const cleanup = () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (containerRef.current?.contains(rendererRef.current.domElement)) {
          containerRef.current.removeChild(rendererRef.current.domElement);
        }
      }

      if (sceneRef.current) {
        sceneRef.current.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            if (Array.isArray(object.material)) {
              object.material.forEach((m) => m.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
    };

    cleanup();

    try {
      const scene = new THREE.Scene();
      sceneRef.current = scene;
      
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance" 
      });
      
      rendererRef.current = renderer;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      containerRef.current.appendChild(renderer.domElement);

      const camera = new THREE.PerspectiveCamera(
        35,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 20; // Move back a bit for large model
      cameraRef.current = camera;

      const ambientLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1.0);
      scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(colors.rim, 2.5);
      dirLight.position.set(10, 10, 10);
      scene.add(dirLight);

      const backLight = new THREE.DirectionalLight(colors.rim, 1.5);
      backLight.position.set(-10, -5, -10);
      scene.add(backLight);

      const material = new THREE.MeshStandardMaterial({
        color: colors.base,
        metalness: 0.8,
        roughness: 0.4,
        wireframe: wireframe,
        flatShading: false, // Smooth shading for STL
      });

      const group = new THREE.Group();
      geometryGroupRef.current = group;
      scene.add(group);
      
      // Separate group for continuous rotation to avoid conflict with interaction tilt
      const autoRotationGroup = new THREE.Group();
      group.add(autoRotationGroup);

      // --- STL Loading ---
      const loader = new STLLoader();
      loader.load(
        '/raptor-engine.stl',
        (geometry) => {
          // Center the geometry
          geometry.center();
          
          // Normalize scale (Fit to box)
          geometry.computeBoundingBox();
          const bbox = geometry.boundingBox;
          if (bbox) {
            const maxDim = Math.max(
              bbox.max.x - bbox.min.x,
              bbox.max.y - bbox.min.y,
              bbox.max.z - bbox.min.z
            );
            
            // Scale to approx 9 units to fit nicely with padding
            const scale = 9.0 / maxDim;
            geometry.scale(scale, scale, scale);
            
            // Orientation adjusted
            geometry.rotateX(0); 
            geometry.rotateY(-Math.PI / 4); 
          }

          const mesh = new THREE.Mesh(geometry, material);
          autoRotationGroup.add(mesh); // Add to autoRotationGroup instead of main group
        },
        (xhr) => { },
        (error) => {
          console.error('An error occurred loading the STL', error);
          setUseFallback(true);
        }
      );

      // --- Animation Loop ---
      const animate = () => {
        if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;
        animationFrameId.current = requestAnimationFrame(animate);

        if (!shouldReduceMotion) {
           const radianSpeed = (rotationSpeed * Math.PI) / 180;
           // Continuous rotation on the inner group
           autoRotationGroup.rotation.y += radianSpeed * 0.016; 
           autoRotationGroup.rotation.z += radianSpeed * 0.016 * 0.5;
           
           // Gentle floating on the outer group
           group.position.y = Math.sin(Date.now() * 0.0005) * 0.2;
        }

        if (interactionEnabled && !shouldReduceMotion) {
           const maxTilt = 10 * (Math.PI / 180); 
           targetRotationY.current = mouseX.current * maxTilt;
           targetRotationX.current = mouseY.current * maxTilt;

           // Apply parallax/tilt to the OUTER group
           // This no longer fights with the continuous Z rotation of the inner group
           group.rotation.z = (targetRotationX.current - group.rotation.z) * 0.05;
           
           // Tilt X axis for looking up/down
           group.rotation.x = -Math.PI/2 + (targetRotationX.current * 0.5); 
        }

        rendererRef.current.render(sceneRef.current, cameraRef.current);
      };

      animate();

      const handleResize = () => {
        if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(width, height);
        rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      };
      
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
        cleanup();
      };
      
    } catch (error) {
      console.error("WebGL initialization failed:", error);
      setUseFallback(true);
      cleanup();
    }
  }, [colors.base, colors.bg, colors.rim, interactionEnabled, rotationSpeed, useFallback, wireframe]);




  // --- Event Listeners for Interaction ---
  useEffect(() => {
    if (!interactionEnabled) return;

    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to -1 to 1
      mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [interactionEnabled]);


  // Fallback UI
  if (useFallback) {
    return (
      <div 
        className={`relative overflow-hidden ${size === 'full' ? 'w-full h-full absolute inset-0' : 'w-full h-[400px]'}`}
        style={{ backgroundColor: colors.bg }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
          <circle cx="50" cy="50" r="30" stroke={colors.base} strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="20" stroke={colors.base} strokeWidth="4" strokeDasharray="5,5" fill="none" />
          <line x1="20" y1="20" x2="80" y2="80" stroke={colors.base} strokeWidth="1" />
          <line x1="80" y1="20" x2="20" y2="80" stroke={colors.base} strokeWidth="1" />
        </svg>
      </div>
    );
  }

  return (
    <div 
       ref={containerRef}
       className={`relative overflow-hidden ${size === 'full' ? 'absolute inset-0 w-full h-full' : 'w-full h-[400px]'}`}
       aria-hidden="true"
       role="presentation"
    />
  );
}
