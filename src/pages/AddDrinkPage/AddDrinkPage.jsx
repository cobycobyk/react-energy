import {Component, useState, useRef, useEffect } from 'react';
import * as drinkAPI from '../../utilities/drink-api';


export default function AddDrinkPage(){
  const [drinkItems, setDrinkItems] = useState([]);
  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    image: '',
    price: 0,
  })

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  });

  // async function handleAddDrink(newDrinkData){
  //   const newDrink = await drinkAPI.create(newDrinkData);
  //   setDrinkItems([...drinkItems, newDrink])
  // }
  async function handleSubmit(e) {
    e.preventDefault()
    const newDrink = await drinkAPI.create(e);
    // handleAddDrink(formData); 
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h1>Add A Drink</h1>
      <form  autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Drink Name (required)</label>
          <input
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Drink Brand (required)</label>
          <input
            className="form-control"
            name="brand"
            value={ formData.brand}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Drink Image URL</label>
          <input
            className="form-control"
            name="image"
            value={ formData.image}
            onChange={handleChange}
            placeholder="https://m.media-amazon.com/images/I/71cCAJ+VhwL._AC_UL640_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="form-group">
          <label>Drink Price</label>
          <input
            className="form-control"
            name="price"
            value={ formData.price}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn"
          disabled={invalidForm}
        >
          ADD Drink
        </button>
      </form>
    </>
  );
  
}