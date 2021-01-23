import './DrinkListItem.css'; 

export default function DrinkListItem({drinkItem}) {
  return (
    <div className="DrinkListItem">
      <div className="image" ><img src={drinkItem.image}/></div>
      <div className="name">{drinkItem.name}</div>
    </div>
  );
}