import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

  // Variable 
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // Password Generator Logic 
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (charAllowed) {
      str += "~`!@#$%^&*()_+-=/\|.,"
    }
    if (numberAllowed) {
      str += "0123456789"
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  // Reference Hook
  const passwordRef = useRef(null)
  
  // Copy Button Function 
  const copyPasswordToClipboard = useCallback(
    () => {
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
      alert("Password Copied")
    },
    [password],
  )
  

  // Callout or Renderer
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full  min-h-screen shadow rounded-lg flex justify-center items-center m-0 p-0'>
        <div className='w-full h-auto flex flex-col justify-center items-center max-w-md shadow-md rounded-xl p-4 my-10 text-orange-500 size-6 bg-slate-700'>

          {/* Heading */}
          <h1 className='w-auto mb-5 font-bold size-8 text-nowrap text-2xl pb-2'>Password Generator</h1>

          {/* Display Field and Copy Button */}
          <div className='flex shadow rounded-lg overflow-hidden w-full h-auto mb-4'>
            <input
              type="text"
              value={password}
              className='w-full py-1 px-3 outline-none'
              placeholder='Password'
              readOnly
              ref={passwordRef}
            />
            <button 
            onClick={copyPasswordToClipboard}
            className='outline-none active:bg-orange-500 bg-blue-600 text-white px-3 py-0.5 shrink-0 font-bold'
            >COPY</button>
          </div>

          {/* Filters  */}
          <div className='flex text-sm gap-x-5'>
            <div className='flex items-center gap-x-3'>
              <input
                type="range"
                min={6}
                max={50}
                value={length}
                className='cursor-pointer'
                onChange={(e) => { setLength(e.target.value) }}
              />
              <label className='font-bold'>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numInput"
                onClick={() => {
                  setNumberAllowed((prev) => !(prev));
                }}
              />
              <label htmlFor="numInput" className='font-bold'>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onClick={() => {
                  setCharAllowed((prev) => !(prev));
                }}
              />
              <label htmlFor="charInput" className='font-bold'>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
