
import './App.css'
import Todos from './assets/pages/Todos'
import AddTodos from './assets/pages/AddTodos'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const todorouter = createBrowserRouter([
  {path:'/', element: < Todos />},
  {path: 'add', element: <AddTodos/> }
]);

function App() {
  return (
    <>
    <RouterProvider router={todorouter} />

    </>
  )
}

export default App
