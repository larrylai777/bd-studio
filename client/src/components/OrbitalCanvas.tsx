/**
 * BÐ-Studio visual reminder: quiet literary sci-fi; thin orbital lines and rare light points must support, never compete with, reading.
 */
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function OrbitalCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    const orbitGroup = new THREE.Group();
    orbitGroup.position.set(1.7, -0.65, 0);
    orbitGroup.rotation.x = -0.22;
    orbitGroup.rotation.y = 0.22;
    scene.add(orbitGroup);

    const orbitMaterial = new THREE.LineBasicMaterial({
      color: 0x8f82bc,
      transparent: true,
      opacity: 0.28,
    });

    const addOrbit = (radiusX: number, radiusY: number, rotation: number, offsetX: number, offsetY: number) => {
      const curve = new THREE.EllipseCurve(0, 0, radiusX, radiusY, 0.18, Math.PI * 1.9, false, 0);
      const points = curve.getPoints(160).map((point) => new THREE.Vector3(point.x + offsetX, point.y + offsetY, 0));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, orbitMaterial);
      line.rotation.z = rotation;
      orbitGroup.add(line);
    };

    addOrbit(3.65, 2.3, 0.16, 0, 0);
    addOrbit(2.75, 1.22, -0.72, -0.12, 0.13);
    addOrbit(4.6, 3.08, 0.87, 0.12, -0.18);

    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(90);
    for (let i = 0; i < starPositions.length; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 9.6;
      starPositions[i + 1] = (Math.random() - 0.5) * 5.9;
      starPositions[i + 2] = (Math.random() - 0.5) * 1.6;
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({ color: 0xc3b8e9, size: 0.035, transparent: true, opacity: 0.72, sizeAttenuation: true }),
    );
    orbitGroup.add(stars);

    const beacon = new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xc9ad66, transparent: true, opacity: 0.9 }),
    );
    beacon.position.set(2.38, 1.16, 0.14);
    orbitGroup.add(beacon);

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const animate = () => {
      if (!reduceMotion) {
        orbitGroup.rotation.z += 0.00055;
        stars.rotation.z -= 0.00018;
        beacon.scale.setScalar(0.94 + Math.sin(performance.now() * 0.0013) * 0.08);
        frame = requestAnimationFrame(animate);
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      starGeometry.dispose();
      orbitMaterial.dispose();
      beacon.geometry.dispose();
      (beacon.material as THREE.Material).dispose();
      orbitGroup.traverse((object) => {
        if (object instanceof THREE.Line) object.geometry.dispose();
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="orbital-canvas" aria-hidden="true" />;
}
