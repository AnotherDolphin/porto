import { useState, useEffect } from 'react'
import './App.css'
import * as THREE from 'three'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000)
    camera.position.z = 96
    const canvas = document.getElementById('canvas')
    // renderer.setClearColor (0xff0000, 1)
    console.log(canvas);
    const renderer = new THREE.WebGL1Renderer({ canvas, antialias: true })

    const ambientLight = new THREE.AmbientLight(0xfff, 0.5)
    ambientLight.castShadow = true
    scene.add(ambientLight)

    const spotLight = new THREE.SpotLight(0xfff, 1)
    spotLight.castShadow = true
    spotLight.position.set(0, 64, 32)
    scene.add(spotLight)

    const geometry = new THREE.CylinderGeometry(5, 5, 20, 32)
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
    const cylinder = new THREE.Mesh(geometry, material)
    cylinder.position.set(0, 0, 0)
    scene.add(cylinder)
    // const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // scene.add(boxMesh)

    const animate = () => {
      cylinder.rotation.x += 0.02
      // boxMesh.rotation.x += 0.02
      renderer.render(scene, camera)
      window.requestAnimationFrame(animate)
    }
    animate()

    return () => {
      
    }
  }, [])

  return (
    <div className='App text-lg'>
      <canvas className='' id='canvas'></canvas>
    </div>
  )
}

export default App
