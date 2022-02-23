import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addFoodToId } from '../../redux/slices/customers';

interface CustomerCardProps {
  id: string;
  name: string;
  food: string[];
}

const CustomerCard: React.FC<CustomerCardProps> = ({id, name, food}): JSX.Element => {
  const [foodInput, setFoodInput] = useState('');
  const dispatch = useDispatch();

  const handleAddFood = () => {
    foodInput && dispatch(addFoodToId({id, food: foodInput}));
    setFoodInput('');
  }

  return (
    <div className="customer-food-card-container" key={id}>
        <p>{name}</p>
        <div className="customer-foods-container">
            <div className="customer-food">
              {food.map((item, index) => <p key={index}>{item} </p>)}
            </div>
            <div className="customer-food-input-container">
                <input value={foodInput} onChange={(e) => setFoodInput(e.target.value)}/>
                <button onClick={handleAddFood}>Add</button>
            </div>
        </div>
    </div>
  )
};

export default CustomerCard;