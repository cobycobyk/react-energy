import { useState, useEffect, useRef } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as drinkAPI from '../../utilities/drink-api';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import AddDrinkPage from '../AddDrinkPage/AddDrinkPage';
import DrinkListPage from '../DrinkListPage/DrinkListPage';
import DrinkDetailPage from '../DrinkDetailPage/DrinkDetailPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [drinkItems, setDrinkItems] = useState([]);
  const [activeBd, setActiveBd] = useState('');
  const brandsRef = useRef([]);
  const history = useHistory()

  useEffect(function() {
    async function getItems() {
      const drinks = await drinkAPI.getAll();
      brandsRef.current = drinks.reduce((brands, drink) => {
        const brand = drink.brand;
        return brands.some((b) => b._id === brand._id) ? brands : [...brands, brand]
      }, []);
      setDrinkItems(drinks);
      setActiveBd(drinks[0].brand.name);
    }
    getItems();
  }, []);

  async function handleAddDrink(newDrinkData){
    const newDrink = await drinkAPI.create(newDrinkData);
    setDrinkItems([...drinkItems, newDrink])
    history.push('/')
  }

  return (
    <main className="App">
      { user ?
          <>
            <Switch>
              <Route path="/drinks/new">
                <AddDrinkPage brands={brandsRef.current} handleAddDrink={handleAddDrink} user={user} setUser={setUser}/>
              </Route>
              <Route path="/drinks">
                <DrinkListPage brands={brandsRef.current} setActiveBd={setActiveBd} activeBd={activeBd} setDrinkItems={setDrinkItems} drinkItems={drinkItems} user={user} setUser={setUser}/>
              </Route>
              <Route path="/details">
                <DrinkDetailPage />
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