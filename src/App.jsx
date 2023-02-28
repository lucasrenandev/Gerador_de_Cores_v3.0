import { useState } from 'react'
import './App.css'

function App() {
  const [box] = useState("box")
  const [text] = useState("text")

  function generateText() {
    const textElement = document.querySelectorAll(".box .text")

    textElement.forEach((span) => {
      span.textContent = generateHexaColor()
    })
  }

  function generateColors() {
    const boxElement = document.querySelectorAll(".box")

    boxElement.forEach((box) => {
      box.style.backgroundColor = generateHexaColor()
      generateText()
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
    <div className='container'>
      <div className={box}><span className={text}></span></div>
      <div className={box}><span className={text}></span></div>
      <div className={box}><span className={text}></span></div>
      <div className={box}><span className={text}></span></div>
      <div className={box}><span className={text}></span></div>
      <div className={box}><span className={text}></span></div>
      <button type='button' onClick={generateColors}>Gerar</button>
    </div>//End container
  )
}

export default App