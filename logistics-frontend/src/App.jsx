import Register from "./components/Register"
import {Routes, Route, } from "react-router-dom"
import Login from "./components/Login"
import Customers from "./components/Customers"
import CustomerDetail from "./components/CustomersShow"
import CustomerEdit from "./components/CustomersEdit"
import CustomersCreate from "./components/CustomersCreate"
import Trucks from "./components/Trucks"
import TruckCreate from "./components/TrucksCreate"
import TruckEdit from "./components/TrucksEdit"
import TruckDetail from "./components/TruckShow"


function App() {
  return (
    <div>


      <Routes>

      <Route path="/register" element={<Register />} />

      <Route path="/login" element={<Login />} />

      <Route path="/customers" element={<Customers />} />

      <Route path="/customers/new" element={<CustomersCreate />} />

      <Route path="/customers/:id" element={<CustomerDetail />} />

      <Route path="/customers/:id/edit" element={<CustomerEdit />} />

      <Route path="/trucks" element={<Trucks />} />

      <Route path="/trucks/new" element={<TruckCreate />} />

      <Route path="/trucks/:id" element={<TruckDetail />} />

      <Route path="/trucks/:id/edit" element={<TruckEdit />} />

      </Routes>


    </div>

  )
}


export default App;