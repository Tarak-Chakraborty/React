import UsercontextProvider from './context/ContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 

  return (
    <UsercontextProvider>
      <h1>React With Chai and Share is Important</h1>
      <Login />
      <Profile />
    </UsercontextProvider>
  )
}

export default App
