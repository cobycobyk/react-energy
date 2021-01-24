import { useState, useEffect, useRef } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as drinkAPI from '../../utilities/drink-api';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import AddDrinkPage from '../AddDrinkPage/AddDrinkPage';
import DrinkListPage from '../DrinkListPage/DrinkListPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [drinkItems, setDrinkItems] = useState([]);
  const [activeBd, setActiveBd] = useState('');
  const brandsRef = useRef([]);
  const brandNameRef = useRef([])

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
    async function getBrands() {
      const items = await drinkAPI.getAll();
      brandNameRef.current = items.reduce((bds, item) => {
        const bd = item.brand.name;
        return bds.includes(bd) ? bds : [...bds, bd]
      }, []);
    }
      getBrands();
  }, []);

  async function handleAddDrink(newDrinkData){
    const newDrink = await drinkAPI.create(newDrinkData);
    setDrinkItems([...drinkItems, newDrink])
  }

  return (
    <main className="App">
      { user ?
          <>
            <Switch>
              <Route path="/drinks/new">
                <AddDrinkPage brands={brandNameRef} handleAddDrink={handleAddDrink} user={user} setUser={setUser}/>
              </Route>
              <Route path="/drinks">
                <DrinkListPage brandsRef={brandsRef} setActiveBd={setActiveBd} activeBd={activeBd} setDrinkItems={setDrinkItems} drinkItems={drinkItems} user={user} setUser={setUser}/>
              </Route>
              <Redirect to="/drinks" />
            </Switch>
          </>
        :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}