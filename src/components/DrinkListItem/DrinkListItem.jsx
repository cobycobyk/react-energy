import './DrinkListItem.css'; 

export default function DrinkListItem({drinkItem, handleDetail}) {
  return (
    <div className="DrinkListItem">
      <div className="image" ><img src={drinkItem.image}/></div>
      <div className="name">{drinkItem.name}</div>
      <button onClick={() => handleDetail(drinkItem._id)}>Details</button>
    </div>
  );
}