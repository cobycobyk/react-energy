import { useState, useRef, useEffect } from 'react';
import BrandListItems from '../../components/BrandListItems/BrandListItems';




export default function AddDrinkPage(props){
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
  useEffect(function() {
    if (props.brands.length) setFormData({...formData, brand: props.brands[0]._id})
  }, [props.brands])

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddDrink(formData);
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
          <select 
            className="form-control"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
            >
           <BrandListItems brands={props.brands}/>

          </select>
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