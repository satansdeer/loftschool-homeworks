import { useState } from 'react'

export const useCounter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount((x) => x + 1)
  const decrement = () => setCount((x) => x - 1)

  return { count, increment, decrement }
}