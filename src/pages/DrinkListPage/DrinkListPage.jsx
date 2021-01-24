import { useState, useEffect, useRef } from 'react';
import * as drinkAPI from '../../utilities/drink-api';
import './DrinkListPage.css';
import { Link } from 'react-router-dom';
import BrandList from '../../components/BrandList/BrandList';
import DrinkList from '../../components/DrinkList/DrinkList';
import DrinkDetail from '../../components/DrinkDetail/DrinkDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';


export default function ({ user, setUser }) {

  const [drinkItems, setDrinkItems] = useState([]);
  const [activeBd, setActiveBd] = useState(''); 
  const [drink, setDrink] = useState(null);
  const brandsRef = useRef([]);

  useEffect(function() {
    async function getItems() {
      const items = await drinkAPI.getAll();
      brandsRef.current = items.reduce((bds, item) => {
        const bd = item.brand.name;
        return bds.includes(bd) ? bds : [...bds, bd]
      }, []);
      setDrinkItems(items);
      setActiveBd(items[0].brand.name);
    }
    getItems();
  }, []);

  async function handleDetail(itemId) {
    const drink = await drinkAPI.getById(itemId);
    console.log('drink')
    setDrink(drink);
  }

  return (
    <main className="DrinkListPage">
      <aside>
        <BrandList
        brands={brandsRef.current}
        activeBd={activeBd}
        setActiveBd={setActiveBd}
        />
      <Link to="/drinks/new" className="button btn-sm">New Drink</Link>
      <UserLogOut user={user} setUser={setUser} />
      </aside>
      <DrinkList
      drinkItems={drinkItems.filter(item => item.brand.name === activeBd)}
      handleDetail={handleDetail}
      />
      <DrinkDetail drink={drink}/>
    </main>
  );
}