import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <NavLink exact activeStyle={{ backgroundColor: "lightgreen" }} to="/drinks">Drink History</NavLink>
      &nbsp; | &nbsp;
      <NavLink exact activeStyle={{ backgroundColor: "lightgreen" }} to="/drinks/new">New Drink</NavLink>
    </nav>
  )
}