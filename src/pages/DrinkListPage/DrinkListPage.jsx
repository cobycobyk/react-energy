import { useState, useEffect, useRef } from 'react';
import * as drinkAPI from '../../utilities/drink-api';
import './DrinkListPage.css';
import { Link } from 'react-router-dom';
import BrandList from '../../components/BrandList/BrandList';
import DrinkList from '../../components/DrinkList/DrinkList';
import DrinkDetail from '../../components/DrinkDetail/DrinkDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';


export default function ({ user, setUser, drinkItems, setDrinkItems, activeBd, setActiveBd, brands }) {



  const [drink, setDrink] = useState(null);


  async function handleDetail(itemId) {
    const drink = await drinkAPI.getById(itemId);
    setDrink(drink);
  }

  return (
    <main className="DrinkListPage">
      <aside>
        <BrandList
          brands={brands}
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
      <DrinkDetail drink={drink} />
    </main>
  );
}