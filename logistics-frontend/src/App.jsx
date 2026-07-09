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
import TrailerCreate from "./components/TrailersCreate"
import Trailers from "./components/Trailers"
import TrailerDetail from "./components/TrailerShow"
import TrailerCreate from "./components/TrailersCreate"
import TrailerEdit from "./components/TrailersEdit"
import Route from "./components/Route"
import RouteCreate from "./components/RoutesCreate"
import RouteDetail from "./components/RoutesShow"
import RoutesEdit from "./components/RoutesEdit"
import PreTrips from "./components/Pretrip"
import PreTripCreate from "./components/PretripCreate"
import PreTripDetail from "./components/PretripShow"
import PreTripEdit from "./components/Pretripedit"
import MaintenanceRecordCreate from "./components/MaintenanceRecordCreate"
import MaintenanceRecordDetail from "./components/MaintenanceRecordShow"
import MaintenanceRecordEdit from "./components/MaintenanceRecordEdit"
import MaintenanceRecords from "./components/MaintenanceRecord"


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

      <Route path="/trailers" element={<Trailers />} />

      <Route path="/trailers/new" element={<TrailerCreate />} />

      <Route path="/trailers/:id" element={<TrailerDetail />} />

      <Route path="/trailers/:id/edit" element={<TrailerEdit />} />

      <Route path="/routes" element={<Route />} />

      <Route path="/routes/new" element={<RouteCreate />} />

      <Route path="/routes/:id" element={<RouteDetail />} />

      <Route path="/routes/:id/edit" element={<RoutesEdit />} />

      <Route path="/pretrips" element={<PreTrips />} />

      <Route path="/pretrips/new" element={<PreTripCreate />} />

      <Route path="/pretrips/:id" element={<PreTripDetail />} />

      <Route path="/pretrips/:id/edit" element={<PreTripEdit />} />

      <Route path="/maintenancerecords" element={<MaintenanceRecords />} />

      <Route path="/maintenancerecords/new" element={<MaintenanceRecordCreate />} />

      <Route path="/maintenancerecords/:id" element={<MaintenanceRecordDetail />} />

      <Route path="/maintenancerecords/:id/edit" element={<MaintenanceRecordEdit />} />


      </Routes>


    </div>

  )
}


export default App;