import './DrinkDetail.css';

export default function DrinkDetail({ drink }) {
  if (!drink) return null
  return (
    <div className="DrinkDetail">
      <div className="section-heading">
        {drink.name}
      </div>
      <div className="image"><img src={drink.image} alt="" /></div>
      &nbsp;
      <br/>
      &nbsp;
      <div className="price">Price: ${drink.price}</div>
    </div>
  )
}