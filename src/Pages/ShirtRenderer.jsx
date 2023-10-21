import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

const ShirtRenderer = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Load the shirt model
    const loader = new GLTFLoader();
    loader.load("/Male_Tshirt.obj", (shirt) => {
      scene.add(shirt);
    });

    // Set up camera position
    camera.position.z = 5;

    // Create a light source
    const light = new THREE.PointLight(0xffffff);
    light.position.set(0, 0, 10);
    scene.add(light);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the shirt model
      if (scene.getObjectByName('shirt')) {
        scene.getObjectByName('shirt').rotation.x += 0.01;
        scene.getObjectByName('shirt').rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });

    return () => {
      // Clean up Three.js resources
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ShirtRenderer;
