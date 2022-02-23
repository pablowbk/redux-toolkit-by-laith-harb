import React from 'react'
import { useDispatch } from 'react-redux'
import { addCustomer } from '../../redux/slices/customers';
import { removeReservation } from '../../redux/slices/reservations';
import { v4 as uuid } from 'uuid'

interface ReservationCardProps {
    name: string;
    index: number;
}

const ReservationCard: React.FC<ReservationCardProps>  = ({name, index}): JSX.Element => {
    const dispatch = useDispatch();
    const handleRemoveReservation = () => {
        dispatch(removeReservation(index))
        dispatch(addCustomer({
            id: uuid(),
            name,
            food: []
        }))
    }

  return (
    <div className="reservation-card-container" onClick={handleRemoveReservation}>{name}</div>
  )
}

export default ReservationCard;