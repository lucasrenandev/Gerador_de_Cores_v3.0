import { useState } from 'react'
import './App.css'

export default function App() {
  const [box] = useState("box")

  function generateColors() {
    const boxElement = document.querySelectorAll(".box")

    boxElement.forEach((box) => {
      box.style.backgroundColor = generateHexaColor()
      box.textContent = generateHexaColor()
    })
  }

  function generateHexaColor() {
    const characters = "123456789abcdef"
    const maxCharacters = 6
    let color = ""

    for(let i = 0; i < maxCharacters; i ++) {
      const randomColor = Math.floor(Math.random() * characters.length)
      color += characters.substring(randomColor, randomColor + 1)
    }
    return "#" + color
  }
  
  return (
    <>
      <div className={box}></div>
      <div className={box}></div>
      <div className={box}></div>
      <div className={box}></div>
      <div className={box}></div>
      <div className={box}></div>
      <button type='button' onClick={generateColors}>Gerar</button>
    </>
  )
}