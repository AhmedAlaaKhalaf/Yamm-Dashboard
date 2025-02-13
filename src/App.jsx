import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import OrderPage from "./pages/OrderPage";
import Notfound from './components/Notfound';


let x = createBrowserRouter([
      {index:true ,element:<Dashboard/>},
      {path:'/order/:id' ,element:<OrderPage/>},
      {path:'*' ,element:<Notfound/>}   
])

export default function App() {

  return <>
           <RouterProvider router={x}></RouterProvider>
  </>
}



