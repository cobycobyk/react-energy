import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import AddDrinkPage from '../AddDrinkPage/AddDrinkPage';
import DrinkListPage from '../DrinkListPage/DrinkListPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <Switch>
              <Route path="/drinks/new">
                <AddDrinkPage user={user} setUser={setUser}/>
              </Route>
              <Route path="/drinks">
                <DrinkListPage user={user} setUser={setUser}/>
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