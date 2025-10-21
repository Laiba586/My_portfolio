import { useEffect, useState } from 'react'

export default function Typewriter({ text = '', speed = 60 }) {
  const [display, setDisplay] = useState('')

  useEffect(() => {
    setDisplay('')
    let i = 0
    const id = setInterval(() => {
      setDisplay((prev) => prev + text.charAt(i))
      i++
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])

  return <span>{display}</span>
}
