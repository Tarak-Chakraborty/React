import AddTodo from "./components/AddTodo"

function App() {


  return (
    <div className="w-full flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 duration-200">
      <div className="bg-white rounded-lg w-1/3 h-3/4">
        <h1 className="text-3xl text-black text-center p-7 text font-bold">Todo App</h1>
        <div className="flex justify-evenly items-center">
        <input type="text" placeholder="write todo...." className="w-5/6  border border-black rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5 "/>
        <button className="w-9 h-9 rounded-md text-3xl bg-indigo-600 text-white">+</button>
        </div>
        <div>
          <AddTodo/> 
        </div>
      </div>
    </div>
    
  )
}

export default App
