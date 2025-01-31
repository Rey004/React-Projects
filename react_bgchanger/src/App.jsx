import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-screen h-screen duration-300 flex flex-row justify-center items-centre' style={{backgroundColor:color}}>
      <div className='absolute justify-self-center self-center' style={{color:'white',fontSize:'5vw',fontFamily:'"Press Start 2P", serif'}}>BG Changer</div>
      <div className='shadow-xl h-16 w-auto p-5 mb-8 flex justify-self-center self-end justify-center items-center rounded-2xl' style={{backgroundColor:'white'}}>
        <button onClick={()=>setColor("red")} className='h-12 w-auto p-5 m-2 flex justify-center items-center rounded-xl' style={{backgroundColor:'red'}}>Red</button>
        <button onClick={()=>setColor("lavender")} className='h-12 w-auto p-5 m-2 flex justify-center items-center rounded-xl' style={{backgroundColor:'lavender'}}>Lavender</button>
        <button onClick={()=>setColor("olive")} className='h-12 w-auto p-5 m-2 flex justify-center items-center rounded-xl' style={{backgroundColor:'olive'}}>Olive</button>
        <button onClick={()=>setColor("cyan")} className='h-12 w-auto p-5 m-2 flex justify-center items-center rounded-xl' style={{backgroundColor:'cyan'}}>Cyan</button>
        <button onClick={()=>setColor("maroon")} className='h-12 w-auto p-5 m-2 flex justify-center items-center rounded-xl' style={{backgroundColor:'maroon'}}>Maroon</button>
        <button onClick={()=>setColor("green")} className='h-12 w-auto p-5 m-2 flex justify-center items-center rounded-xl' style={{backgroundColor:'green'}}>Green</button>
        <button onClick={()=>setColor("Beige")} className='h-12 w-auto p-5 m-2 flex justify-center items-center rounded-xl' style={{backgroundColor:'Beige'}}>Beige</button>
        <button onClick={()=>setColor("pink")} className='h-12 w-auto p-5 m-2 flex justify-center items-center rounded-xl' style={{backgroundColor:'pink'}}>Pink</button>
        <button onClick={()=>setColor("brown")} className='h-12 w-auto p-5 m-2 flex justify-center items-center rounded-xl' style={{backgroundColor:'brown'}}>Brown</button>
        <button onClick={()=>setColor("silver")} className='h-12 w-auto p-5 m-2 flex justify-center items-center rounded-xl' style={{backgroundColor:'silver'}}>Silver</button>
        <button onClick={()=>setColor("gold")} className='h-12 w-auto p-5 m-2 flex justify-center items-center rounded-xl' style={{backgroundColor:'gold'}}>Gold</button>
      </div>
    </div>
  )
}

export default App
