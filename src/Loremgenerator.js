import React, { useState } from "react"
import text from "./data"

const Loremgenerator = () => {
  const [number, setNumber] = useState(1)
  const [paragraphs, setParagraphs] = useState(text.filter((elem, index) => index <= number - 1))
  const handleSubmit = (e) => {
    e.preventDefault()
    setParagraphs(text.filter((elem, index) => index <= number - 1))
  }
  const handleChange = (e) => {
    const val = e.target.value
    if (val >= 0) {
      setNumber(val)
    }
  }
  return (
    <article>
      <h2>Tired of boring Lorem Ipsum?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="paragraphNo">Paragraphs : </label>
        <input
          type="number"
          name="paragraphNo"
          id="paragraphNo"
          value={number}
          onChange={handleChange}
        />
        <input type="submit" value="Generate" />
      </form>
      {paragraphs.map((elem, index) => {
        return <p key={index}>{elem}</p>
      })}
    </article>
  )
}

export default Loremgenerator
