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

    const compactPointer = window.matchMedia("(pointer: coarse)").matches;
    const orbitGroup = new THREE.Group();
    orbitGroup.position.set(1.7, -0.65, 0);
    orbitGroup.rotation.set(-0.22, 0.22, 0);
    scene.add(orbitGroup);

    const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x8f82bc, transparent: true, opacity: 0.29 });
    const addOrbit = (radiusX: number, radiusY: number, rotation: number, offsetX: number, offsetY: number) => {
      const curve = new THREE.EllipseCurve(0, 0, radiusX, radiusY, 0.18, Math.PI * 1.9, false, 0);
      const points = curve.getPoints(160).map((point) => new THREE.Vector3(point.x + offsetX, point.y + offsetY, 0));
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), orbitMaterial);
      line.rotation.z = rotation;
      orbitGroup.add(line);
    };

    addOrbit(3.65, 2.3, 0.16, 0, 0);
    addOrbit(2.75, 1.22, -0.72, -0.12, 0.13);
    addOrbit(4.6, 3.08, 0.87, 0.12, -0.18);

    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(compactPointer ? 84 : 150);
    for (let i = 0; i < starPositions.length; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 9.6;
      starPositions[i + 1] = (Math.random() - 0.5) * 5.9;
      starPositions[i + 2] = (Math.random() - 0.5) * 1.6;
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xc3b8e9, size: 0.035, transparent: true, opacity: 0.72, sizeAttenuation: true });
    const stars = new THREE.Points(starGeometry, starMaterial);
    orbitGroup.add(stars);

    const beacon = new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xc9ad66, transparent: true, opacity: 0.9 }),
    );
    beacon.position.set(2.38, 1.16, 0.14);
    orbitGroup.add(beacon);

    const markerRing = new THREE.Mesh(
      new THREE.RingGeometry(0.105, 0.125, 40),
      new THREE.MeshBasicMaterial({ color: 0x9a8fc7, transparent: true, opacity: 0.55, side: THREE.DoubleSide }),
    );
    markerRing.position.set(2.38, 1.16, 0.02);
    orbitGroup.add(markerRing);

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
    const target = { hoverX: 0, hoverY: 0, yaw: 0.22, pitch: -0.22, dragging: false };
    const dragOrigin = { x: 0, y: 0, yaw: 0.22, pitch: -0.22 };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = renderer.domElement.getBoundingClientRect();
      const normalizedX = ((event.clientX - bounds.left) / Math.max(bounds.width, 1) - 0.5) * 2;
      const normalizedY = ((event.clientY - bounds.top) / Math.max(bounds.height, 1) - 0.5) * 2;
      if (target.dragging) {
        target.yaw = dragOrigin.yaw + (event.clientX - dragOrigin.x) * 0.007;
        target.pitch = THREE.MathUtils.clamp(dragOrigin.pitch + (event.clientY - dragOrigin.y) * 0.005, -0.85, 0.45);
      } else {
        target.hoverX = normalizedX;
        target.hoverY = normalizedY;
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      target.dragging = true;
      dragOrigin.x = event.clientX;
      dragOrigin.y = event.clientY;
      dragOrigin.yaw = target.yaw;
      dragOrigin.pitch = target.pitch;
      renderer.domElement.setPointerCapture(event.pointerId);
      renderer.domElement.style.cursor = "grabbing";
    };

    const onPointerUp = (event: PointerEvent) => {
      target.dragging = false;
      if (renderer.domElement.hasPointerCapture(event.pointerId)) renderer.domElement.releasePointerCapture(event.pointerId);
      renderer.domElement.style.cursor = "grab";
    };

    const onPointerLeave = () => {
      if (!target.dragging) {
        target.hoverX = 0;
        target.hoverY = 0;
      }
    };

    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    renderer.domElement.addEventListener("pointerup", onPointerUp);
    renderer.domElement.addEventListener("pointercancel", onPointerUp);
    renderer.domElement.addEventListener("pointerleave", onPointerLeave);
    renderer.domElement.style.cursor = "grab";
    renderer.domElement.style.touchAction = "none";

    let frame = 0;
    const animate = () => {
      if (!reduceMotion) {
        if (!target.dragging) target.yaw += 0.00055;
        stars.rotation.z -= 0.00018;
        markerRing.rotation.z -= 0.001;
        beacon.scale.setScalar(0.94 + Math.sin(performance.now() * 0.0013) * 0.08);
      }
      orbitGroup.rotation.y = THREE.MathUtils.lerp(orbitGroup.rotation.y, target.yaw + target.hoverX * 0.22, 0.055);
      orbitGroup.rotation.x = THREE.MathUtils.lerp(orbitGroup.rotation.x, target.pitch - target.hoverY * 0.13, 0.055);
      orbitGroup.rotation.z = THREE.MathUtils.lerp(orbitGroup.rotation.z, target.hoverX * 0.035, 0.045);
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      renderer.domElement.removeEventListener("pointerup", onPointerUp);
      renderer.domElement.removeEventListener("pointercancel", onPointerUp);
      renderer.domElement.removeEventListener("pointerleave", onPointerLeave);
      starGeometry.dispose();
      starMaterial.dispose();
      orbitMaterial.dispose();
      beacon.geometry.dispose();
      (beacon.material as THREE.Material).dispose();
      markerRing.geometry.dispose();
      (markerRing.material as THREE.Material).dispose();
      orbitGroup.traverse((object) => {
        if (object instanceof THREE.Line) object.geometry.dispose();
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className="orbital-canvas" role="presentation" aria-label="可拖曳旋轉的三維軌道星圖" />;
}
