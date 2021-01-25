import DrinkCard from '../../components/DrinkCard/DrinkCard';
import {useLocation} from 'react-router-dom';

export default function DrinkDetailPage() {

  const { state: {drink} } = useLocation()

  return (
    <>
    <h1>Drink Detail</h1>
      <DrinkCard 
        key={ drink._id}
        drink={drink}
      />
    </>
  );
}