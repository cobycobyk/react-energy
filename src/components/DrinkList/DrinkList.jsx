import './DrinkList.css';
import DrinkListItem from '../DrinkListItem/DrinkListItem';

export default function DrinkList({drinkItems, handleDetail}) {
  const items = drinkItems.map(item =>
    <DrinkListItem
      key={item._id}
      drinkItem={item}
      handleDetail={handleDetail}
    />
  );
  return (
    <main className="DrinkList">
      {items}
    </main>
  );
}