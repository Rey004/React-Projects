import { useState } from 'react'
import './App.css'
import Card from '../components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-cyan-600 p-6 rounded-xl'>Tailwind and Props</h1>
      <Card/>
      <Card name='Bitcoin' price='7 Cr' gif='https://media2.giphy.com/media/3ohs7HdhQA4ffttvrO/giphy.webp?cid=790b7611u77hkuduo48ry9kv7f0jxvjbiy0cqd4oia3k1rnm&ep=v1_gifs_search&rid=giphy.webp&ct=g'/>
    </>
  )
}

export default App
