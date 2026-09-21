'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import styles from './ThreeDLogo.module.css';

export default function ThreeDLogo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // --- Scene Setup ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 6.8);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x5eead4, 1.2);
    dirLight2.position.set(-5, -4, 3);
    scene.add(dirLight2);

    const greenPointLight = new THREE.PointLight(0x22c55e, 2.5, 12);
    greenPointLight.position.set(2, 2, 3);
    scene.add(greenPointLight);

    const mintPointLight = new THREE.PointLight(0x0d9488, 2.5, 12);
    mintPointLight.position.set(-2, -2, 3);
    scene.add(mintPointLight);

    // --- Main Logo Group ---
    const logoGroup = new THREE.Group();
    scene.add(logoGroup);

    // Cube Dimensions
    const size = 1.6;
    const boxGeo = new THREE.BoxGeometry(size, size, size);
    const innerGeo = new THREE.BoxGeometry(size * 0.55, size * 0.55, size * 0.55);
    const edgesGeo = new THREE.EdgesGeometry(boxGeo);

    // 1. TOP-LEFT CUBE: Emerald Circuit Glass
    const emeraldMat = new THREE.MeshPhysicalMaterial({
      color: 0x16a34a,
      emissive: 0x15803d,
      emissiveIntensity: 0.25,
      roughness: 0.12,
      metalness: 0.1,
      transmission: 0.88,
      thickness: 1.2,
      ior: 1.52,
      transparent: true,
      opacity: 0.92,
    });
    const cube1 = new THREE.Mesh(boxGeo, emeraldMat);

    // Glowing wireframe edges
    const edgesMat1 = new THREE.LineBasicMaterial({
      color: 0x4ade80,
      linewidth: 2,
      transparent: true,
      opacity: 0.85,
    });
    const line1 = new THREE.LineSegments(edgesGeo, edgesMat1);
    cube1.add(line1);

    // Inner glowing core
    const coreMat1 = new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      emissive: 0x4ade80,
      emissiveIntensity: 1.2,
      roughness: 0.2,
    });
    const core1 = new THREE.Mesh(innerGeo, coreMat1);
    cube1.add(core1);

    // 2. TOP-RIGHT CUBE: Mint Teal Crystal Glass
    const mintMat = new THREE.MeshPhysicalMaterial({
      color: 0x0d9488,
      emissive: 0x14b8a6,
      emissiveIntensity: 0.2,
      roughness: 0.08,
      metalness: 0.05,
      transmission: 0.92,
      thickness: 1.4,
      ior: 1.58,
      transparent: true,
      opacity: 0.9,
    });
    const cube2 = new THREE.Mesh(boxGeo, mintMat);

    const edgesMat2 = new THREE.LineBasicMaterial({
      color: 0x5eead4,
      linewidth: 2,
      transparent: true,
      opacity: 0.9,
    });
    const line2 = new THREE.LineSegments(edgesGeo, edgesMat2);
    cube2.add(line2);

    const coreMat2 = new THREE.MeshStandardMaterial({
      color: 0x2dd4bf,
      emissive: 0x5eead4,
      emissiveIntensity: 1.0,
      roughness: 0.25,
    });
    const core2 = new THREE.Mesh(innerGeo, coreMat2);
    cube2.add(core2);

    // 3. BOTTOM-CENTER CUBE: Polished Chrome Obsidian Emerald
    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0x064e3b,
      metalness: 0.92,
      roughness: 0.15,
      emissive: 0x047857,
      emissiveIntensity: 0.15,
    });
    const cube3 = new THREE.Mesh(boxGeo, chromeMat);

    const edgesMat3 = new THREE.LineBasicMaterial({
      color: 0x34d399,
      linewidth: 1.5,
      transparent: true,
      opacity: 0.7,
    });
    const line3 = new THREE.LineSegments(edgesGeo, edgesMat3);
    cube3.add(line3);

    // Add cubes to group
    logoGroup.add(cube1);
    logoGroup.add(cube2);
    logoGroup.add(cube3);

    // Base positions (ByteCraft Triangle)
    const basePos1 = new THREE.Vector3(-1.18, 0.95, 0);
    const basePos2 = new THREE.Vector3(1.18, 0.95, 0);
    const basePos3 = new THREE.Vector3(0, -1.05, 0);

    cube1.position.copy(basePos1);
    cube2.position.copy(basePos2);
    cube3.position.copy(basePos3);

    // Initial slight isometric angle
    logoGroup.rotation.x = 0.25;
    logoGroup.rotation.y = -0.3;

    // --- Floating Ambient Dust/Data Particles ---
    const particleCount = 28;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 6;
      particlePositions[i + 1] = (Math.random() - 0.5) * 6;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x16a34a,
      size: 0.08,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // --- Interactive State & Controls ---
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0.25;
    let targetRotationY = -0.3;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let hoverExpansion = 1.0;
    let targetExpansion = 1.0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      mouseX = x;
      mouseY = y;

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleMouseEnter = () => {
      targetExpansion = 1.12;
      setIsInteracting(true);
    };

    const handleMouseLeave = () => {
      isDragging = false;
      targetExpansion = 1.0;
      setIsInteracting(false);
    };

    // Touch Support for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1 && isDragging) {
        const touch = e.touches[0];
        const deltaX = touch.clientX - previousMousePosition.x;
        const deltaY = touch.clientY - previousMousePosition.y;

        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;

        previousMousePosition = { x: touch.clientX, y: touch.clientY };
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsInteracting(true);
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // --- Animation Loop ---
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Gentle auto-rotation drift when not actively dragging
      if (!isDragging) {
        targetRotationY += 0.003;
        const parallaxX = mouseX * 0.35;
        const parallaxY = -mouseY * 0.35;

        logoGroup.rotation.y += (targetRotationY + parallaxX - logoGroup.rotation.y) * 0.05;
        logoGroup.rotation.x += (targetRotationX + parallaxY - logoGroup.rotation.x) * 0.05;
      } else {
        logoGroup.rotation.y += (targetRotationY - logoGroup.rotation.y) * 0.15;
        logoGroup.rotation.x += (targetRotationX - logoGroup.rotation.x) * 0.15;
      }

      // Smooth Expansion on hover
      hoverExpansion += (targetExpansion - hoverExpansion) * 0.06;

      // Group Floating Sine Wave
      logoGroup.position.y = Math.sin(elapsedTime * 1.6) * 0.12;

      // Individual Cube Micro-Oscillations
      const osc1 = Math.sin(elapsedTime * 2.2) * 0.07;
      cube1.position.x = basePos1.x * hoverExpansion;
      cube1.position.y = (basePos1.y + osc1) * hoverExpansion;
      cube1.rotation.z = Math.sin(elapsedTime * 1.5) * 0.04;
      cube1.rotation.y = Math.cos(elapsedTime * 1.2) * 0.05;

      const osc2 = Math.sin(elapsedTime * 2.2 + 1.5) * 0.07;
      cube2.position.x = basePos2.x * hoverExpansion;
      cube2.position.y = (basePos2.y + osc2) * hoverExpansion;
      cube2.rotation.z = -Math.sin(elapsedTime * 1.4) * 0.04;
      cube2.rotation.x = Math.cos(elapsedTime * 1.1) * 0.05;

      const osc3 = Math.sin(elapsedTime * 2.2 + 3.0) * 0.07;
      cube3.position.x = basePos3.x * hoverExpansion;
      cube3.position.y = (basePos3.y + osc3) * hoverExpansion;
      cube3.rotation.y = Math.sin(elapsedTime * 1.3) * 0.04;

      // Pulsing internal microchip cores
      const pulse1 = 1.0 + Math.sin(elapsedTime * 3.5) * 0.3;
      coreMat1.emissiveIntensity = pulse1;

      const pulse2 = 0.8 + Math.cos(elapsedTime * 3.0) * 0.25;
      coreMat2.emissiveIntensity = pulse2;

      // Orbiting lights for dynamic specular shine
      greenPointLight.position.x = Math.sin(elapsedTime * 1.2) * 3.5;
      greenPointLight.position.z = Math.cos(elapsedTime * 1.2) * 3.5 + 1;
      greenPointLight.position.y = Math.cos(elapsedTime * 0.8) * 2;

      mintPointLight.position.x = -Math.sin(elapsedTime * 1.2) * 3.5;
      mintPointLight.position.z = -Math.cos(elapsedTime * 1.2) * 3.5 + 1;
      mintPointLight.position.y = -Math.sin(elapsedTime * 0.8) * 2;

      // Particles slow drift
      particles.rotation.y = elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();

      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);

      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);

      // Dispose Three.js objects
      boxGeo.dispose();
      innerGeo.dispose();
      edgesGeo.dispose();
      emeraldMat.dispose();
      mintMat.dispose();
      chromeMat.dispose();
      edgesMat1.dispose();
      edgesMat2.dispose();
      edgesMat3.dispose();
      coreMat1.dispose();
      coreMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={styles.logoContainer} ref={containerRef}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
