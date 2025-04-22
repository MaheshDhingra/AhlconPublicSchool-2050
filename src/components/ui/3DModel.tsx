import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface ThreeDModelProps {
  modelPath?: string;
  className?: string;
  autoRotate?: boolean;
  rotationSpeed?: number;
  backgroundColor?: string;
  ambientLightColor?: string;
  directionalLightColor?: string;
  directionalLightIntensity?: number;
}

export const ThreeDModel: React.FC<ThreeDModelProps> = ({
  modelPath = '@/public/ahlcon.glb',
  className = '',
  autoRotate = true,
  rotationSpeed = 0.005,
  backgroundColor = '#0A0F25',
  ambientLightColor = '#ffffff',
  directionalLightColor = '#ffffff',
  directionalLightIntensity = 1
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const modelRef = useRef<THREE.Object3D | null>(null);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(backgroundColor);
    
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current = renderer;
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(ambientLightColor, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(
      directionalLightColor,
      directionalLightIntensity
    );
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    // Add basic controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    
    // Placeholder sphere in case model fails to load
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00f9ff,
      metalness: 0.7,
      roughness: 0.2,
      emissive: 0x2b64f6,
      emissiveIntensity: 0.2
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    scene.add(sphere);
    modelRef.current = sphere;
    
    // Attempt to load the actual model if available
    try {
      const loader = new GLTFLoader();
      loader.load(
        modelPath,
        (gltf) => {
          scene.remove(sphere); // Remove placeholder
          
          // Center and normalize model size
          const model = gltf.scene;
          model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
          
          // Center model
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          model.position.x = -center.x;
          model.position.y = -center.y;
          model.position.z = -center.z;
          
          // Scale model to reasonable size
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          if (maxDim > 2) {
            const scale = 2 / maxDim;
            model.scale.set(scale, scale, scale);
          }
          
          scene.add(model);
          modelRef.current = model;
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (error) => {
          console.error('An error happened loading the model:', error);
        }
      );
    } catch (error) {
      console.error('Error loading model:', error);
    }
    
    // Add particle effect
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 500;
    const posArray = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: 0x00f9ff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      
      if (modelRef.current && autoRotate) {
        modelRef.current.rotation.y += rotationSpeed;
      }
      
      particlesMesh.rotation.y += 0.001;
      
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (
        !containerRef.current ||
        !cameraRef.current ||
        !rendererRef.current
      ) {
        return;
      }
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
      }
      
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, [
    modelPath, 
    autoRotate, 
    rotationSpeed, 
    backgroundColor, 
    ambientLightColor, 
    directionalLightColor, 
    directionalLightIntensity
  ]);
  
  return (
    <div 
      ref={containerRef} 
      className={`w-full h-[400px] rounded-lg overflow-hidden ${className}`}
    />
  );
};
