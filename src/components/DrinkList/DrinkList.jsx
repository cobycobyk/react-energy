import './DrinkList.css';
import DrinkListItem from '../DrinkListItem/DrinkListItem';

export default function DrinkList({drinkItems}) {
  const items = drinkItems.map(item =>
    <DrinkListItem
      key={item._id}
      drinkItem={item}
    />
  );
  return (
    <main className="DrinkList">
      DrinkListItems go here
      {items}
    </main>
  );
}