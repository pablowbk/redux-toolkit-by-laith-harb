import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CustomerCard from "./components/customerCard/CustomerCard";
import ReservationCard from "./components/reservationCard/ReservationCard";
import { addReservation } from "./redux/slices/reservations";
import { RootState } from "./redux/store";

function App() {
  const dispatch = useDispatch();
  const reservations = useSelector((state: RootState) => state.reservations.value);
  const customers = useSelector((state: RootState) => state.customers.value)
  const [reservationNameInput, setReservationNameInput] = useState('')

  const handleAddReservation = () => {
    reservationNameInput && dispatch(addReservation(reservationNameInput));
    setReservationNameInput('');
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {
                reservations.map((reservation, index) => (
                  <ReservationCard key={index} name={reservation} index={index} />
                ))
              }
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationNameInput} onChange={(e) => {
              setReservationNameInput(e.target.value);
            }} />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map(customer => (
            <CustomerCard 
              key={customer.id} 
              id={customer.id} 
              name={customer.name} 
              food={customer.food} 
            />)
          )}
        </div>
      </div>
    </div>
  );
}

export default App;