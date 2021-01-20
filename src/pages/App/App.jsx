import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewDrinkPage from '../NewDrinkPage/NewDrinkPage';
import DrinkHistoryPage from '../DrinkHistoryPage/DrinkHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Switch>
              <Route path="/drinks/new">
                <NewDrinkPage />
              </Route>
              <Route path="/drinks">
                <DrinkHistoryPage />
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