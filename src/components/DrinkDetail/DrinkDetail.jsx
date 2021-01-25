import './DrinkDetail.css';
import {Link} from 'react-router-dom';

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
      <Link
      className='btn btn-xs btn-warning'
      to={{
        pathname: '/details',
        state: {drink},
      }}
      >All Details</Link>
    </div>
  )
}