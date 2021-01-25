import './BrandList.css';

export default function BrandList({brands, activeBd, setActiveBd}) {
  const bds = brands.map(bd => 
    <li
      key={bd._id}
      className={bd === activeBd ? 'active' : ''}
      onClick={() => setActiveBd(bd.name)}
    >
      {bd.name}
    </li>
  );
  return (
<ul className="BrandList">
  {bds}
</ul>
  );
}