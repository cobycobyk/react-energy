import {Link} from 'react-router-dom';
import './DrinkCard.css';

export default function DrinkCard({drink}) {
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{drink.name}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt></dt>
          <img className="detail-image" src={drink.image} alt=""/>
          <dt>Price</dt>
          <dd>{drink.price}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}