import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewDrinkPage from '../NewDrinkPage/NewDrinkPage';
import DrinkHistoryPage from '../DrinkHistoryPage/DrinkHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(null)
  return (
    <main className="App">
      {user ?
          <>
            <NavBar />
            <Switch>
              <Route path="/drinks/new">
                <NewDrinkPage />
              </Route>
              <Route path="/drinks">
                <DrinkHistoryPage />
              </Route>
              <Redirect to="/drinks"/>
            </Switch>
          </>
        :
          <AuthPage />
      }
    </main>
  );
}

