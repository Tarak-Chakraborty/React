import { useState } from "react"

function App() {
  const [color, setColor] = useState("grey")

  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shodow-lg bg-white px-3 py-2 rounded-xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "red"}}>Red</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "Green"}}>Green</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "Black"}}>Black</button>
          <button onClick={() => setColor("white")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "White",color:"black",fontWeight:"600"}}>White</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "blue"}}>blue</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "purple"}}>purple</button>
          <button onClick={() => setColor("violet")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "violet"}}>violet</button>
          <button onClick={() => setColor("skyblue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{background: "skyblue",color:"black"}}>skyblue</button>
        </div>
      </div>
    </div>
  )
}

export default App
