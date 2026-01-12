"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Stranger Things dark scene
    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x0a0a0a, 1, 20)
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x0a0a0a, 0.82) // dark, slightly translucent for visibility

    // Ensure the canvas covers the screen and doesn't capture pointer events
    const canvas = renderer.domElement
    canvas.style.position = "fixed"
    canvas.style.top = "0"
    canvas.style.left = "0"
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.zIndex = "-1"
    canvas.style.pointerEvents = "none"

    containerRef.current.appendChild(canvas)

    camera.position.z = 6

    // Central pulsing sphere (Stranger Things portal/gate aesthetic)
    const geometry = new THREE.IcosahedronGeometry(2, 4)
    const material = new THREE.MeshStandardMaterial({
      color: 0x8b0000,
      emissive: 0xff0000,
      emissiveIntensity: 0.3,
      roughness: 0.6,
      metalness: 0.2,
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Eerie red wireframe
    const wireframe = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.1, 4)), 
      new THREE.LineBasicMaterial({ color: 0xff0000, opacity: 0.4, transparent: true })
    )
    scene.add(wireframe)

    // Home-only pulsing ring to emphasize portal on landing page
    let homeRing: THREE.Mesh | null = null
    const isHome = typeof window !== "undefined" && window.location && window.location.pathname === "/"
    if (isHome) {
      const ringGeom = new THREE.TorusGeometry(3.2, 0.12, 16, 120)
      const ringMat = new THREE.MeshStandardMaterial({
        color: 0xff6b6b,
        emissive: 0xff4d4f,
        emissiveIntensity: 0.6,
        roughness: 0.7,
        metalness: 0.1,
        transparent: true,
        opacity: 0.95,
      })
      homeRing = new THREE.Mesh(ringGeom, ringMat)
      homeRing.rotation.x = Math.PI / 2
      homeRing.position.z = 0
      scene.add(homeRing)
    }

    // Eerie Stranger Things Particles - Floating spores/ash
    const particleCount = 600
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50
      
      // Red, dark red, and yellow particles (fire/danger aesthetic)
      const colorChoice = Math.random()
      if (colorChoice < 0.5) {
        // Bright red
        colors[i * 3] = 1.0     // R
        colors[i * 3 + 1] = 0.0 // G
        colors[i * 3 + 2] = 0.0 // B (bright red)
      } else if (colorChoice < 0.75) {
        // Dark blood red
        colors[i * 3] = 0.54                           // R
        colors[i * 3 + 1] = 0.0 // G
        colors[i * 3 + 2] = 0.0 // B (dark red)
      } else {
        // Eerie yellow/amber
        colors[i * 3] = 1.0    // R
        colors[i * 3 + 1] = 0.92 + Math.random() * 0.08 // G
        colors[i * 3 + 2] = 0.23 // B (yellow)
      }
      
      sizes[i] = Math.random() * 0.18 + 0.04
    }
    
    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    particlesGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1))
    
    const particlesMaterial = new THREE.PointsMaterial({ 
      size: 0.12, 
      sizeAttenuation: true, 
      transparent: true, 
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending
    })
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)
    
    // Add floating geometric shapes for depth
    const shapes: THREE.Mesh[] = []
    const shapeGeometries = [
      new THREE.OctahedronGeometry(0.3),
      new THREE.TetrahedronGeometry(0.25),
      new THREE.BoxGeometry(0.3, 0.3, 0.3)
    ]
    
    for (let i = 0; i < 15; i++) {
      const geom = shapeGeometries[Math.floor(Math.random() * shapeGeometries.length)]
      const mat = new THREE.MeshStandardMaterial({
        color: Math.random() > 0.5 ? 0x8b5cf6 : 0x06b6d4,
        transparent: true,
        opacity: 0.15,
        wireframe: true
      })
      const shape = new THREE.Mesh(geom, mat)
      shape.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20
      )
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )
      shapes.push(shape)
      scene.add(shape)
    }

    // Eerie red lighting (Stranger Things aesthetic)
    const light = new THREE.PointLight(0xff0000, 1.2)
    light.position.set(5, 5, 5)
    scene.add(light)
    
    const light2 = new THREE.PointLight(0x8b0000, 0.8)
    light2.position.set(-5, -3, 3)
    scene.add(light2)
    
    const ambient = new THREE.AmbientLight(0x220000, 0.3)
    scene.add(ambient)

    // Interaction state
    let mouseX = 0
    let mouseY = 0
    const target = { x: 0, y: 0 }

    const onPointerMove = (e: MouseEvent) => {
      // normalized -0.5 .. 0.5
      mouseX = (e.clientX / window.innerWidth) - 0.5
      mouseY = (e.clientY / window.innerHeight) - 0.5
    }

    // Touch support
    const onTouchMove = (e: TouchEvent) => {
      if (!e.touches || e.touches.length === 0) return
      const t = e.touches[0]
      mouseX = (t.clientX / window.innerWidth) - 0.5
      mouseY = (t.clientY / window.innerHeight) - 0.5
    }

    window.addEventListener("mousemove", onPointerMove)
    window.addEventListener("touchmove", onTouchMove, { passive: true })

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
    window.addEventListener("resize", handleResize)

    // Animation
    let frameId = 0
    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b

    const animate = () => {
      frameId = requestAnimationFrame(animate)

      // Smooth camera parallax
      target.x = lerp(target.x, mouseX * 2.0, 0.06)
      target.y = lerp(target.y, mouseY * 1.2, 0.06)

      camera.position.x = target.x
      camera.position.y = -target.y
      camera.lookAt(0, 0, 0)

      // gentle rotations
      mesh.rotation.x += 0.003
      mesh.rotation.y += 0.005
      wireframe.rotation.x += 0.002
      wireframe.rotation.y += 0.004

      // home ring pulse (if present)
      if (homeRing) {
        const t = performance.now() * 0.002
        homeRing.scale.setScalar(1 + Math.sin(t) * 0.06)
        // pulse emissive slightly
        // @ts-ignore
        if (homeRing.material && (homeRing.material as any).emissive) {
          // @ts-ignore
          ;(homeRing.material as any).emissiveIntensity = 0.55 + Math.abs(Math.sin(t)) * 0.25
        }
        homeRing.rotation.z += 0.0025
      }

      // Rotate floating shapes
      shapes.forEach((shape, i) => {
        shape.rotation.x += 0.001 * (i % 2 === 0 ? 1 : -1)
        shape.rotation.y += 0.002 * (i % 3 === 0 ? 1 : -1)
        shape.position.y += Math.sin(performance.now() * 0.0005 + i) * 0.003
      })

      // particles drift and react to pointer with wave motion
      const posAttr = particlesGeometry.getAttribute("position") as THREE.BufferAttribute
      const time = performance.now() * 0.0001
      
      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3
        const iy = i * 3 + 1
        const iz = i * 3 + 2

        // Wave motion
        const wave = Math.sin(time + i * 0.05) * 0.002
        posAttr.array[ix] += Math.sin((i + time * 2) * 0.01) * 0.002 + wave
        posAttr.array[iy] += Math.cos((i + time * 1.5) * 0.01) * 0.002 + wave
        posAttr.array[iz] += Math.sin((i + time * 1.8) * 0.015) * 0.001

        // Mouse attraction with distance-based falloff
        const dx = mouseX * 3 - posAttr.array[ix]
        const dy = -mouseY * 3 - posAttr.array[iy]
        const dist = Math.sqrt(dx * dx + dy * dy)
        const force = Math.max(0, 1 - dist / 10) * 0.003
        
        posAttr.array[ix] += dx * force
        posAttr.array[iy] += dy * force
      }
      posAttr.needsUpdate = true

      renderer.render(scene, camera)
    }
    animate()

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", onPointerMove)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("resize", handleResize)

      cancelAnimationFrame(frameId)

      // remove canvas
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }

      // Dispose geometries and materials
      try {
        scene.traverse((obj) => {
          // @ts-ignore
          if (obj.geometry) obj.geometry.dispose && obj.geometry.dispose()
          // @ts-ignore
          if (obj.material) {
            // @ts-ignore
            if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose && m.dispose())
            // @ts-ignore
            else obj.material.dispose && obj.material.dispose()
          }
        })
        particlesGeometry.dispose()
        particlesMaterial.dispose()
        if (homeRing) {
          // @ts-ignore
          homeRing.geometry && homeRing.geometry.dispose && homeRing.geometry.dispose()
          // @ts-ignore
          ;(homeRing.material as any) && (homeRing.material as any).dispose && (homeRing.material as any).dispose()
        }
        shapeGeometries.forEach(g => g.dispose())
      } catch (e) {
        // ignore disposal errors
      }
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" />
}

export default ThreeScene
