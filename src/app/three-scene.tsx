"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0.1)
    containerRef.current.appendChild(renderer.domElement)

    camera.position.z = 5

    // Create rotating cube with gradient material
    const geometry = new THREE.IcosahedronGeometry(2, 4)
    const material = new THREE.MeshPhongMaterial({
      color: 0x8b5cf6,
      emissive: 0x6d28d9,
      shininess: 100,
      wireframe: false,
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Create wireframe version
    const wireframeGeometry = new THREE.IcosahedronGeometry(2.1, 4)
    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      opacity: 0.3,
      transparent: true,
    })
    const wireframe = new THREE.LineSegments(new THREE.EdgesGeometry(wireframeGeometry), wireframeMaterial)
    scene.add(wireframe)

    // Add floating particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particleCount = 100
    const positionArray = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positionArray[i] = (Math.random() - 0.5) * 20
      positionArray[i + 1] = (Math.random() - 0.5) * 20
      positionArray[i + 2] = (Math.random() - 0.5) * 20
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positionArray, 3))
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0x8b5cf6,
      sizeAttenuation: true,
    })
    const particles = new THREE.Points(particlesGeometry, particleMaterial)
    scene.add(particles)

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1)
    light.position.set(5, 5, 5)
    scene.add(light)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      mesh.rotation.x += 0.001
      mesh.rotation.y += 0.002
      mesh.rotation.z += 0.001

      wireframe.rotation.x += 0.001
      wireframe.rotation.y += 0.002
      wireframe.rotation.z += 0.001

      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" />
}
