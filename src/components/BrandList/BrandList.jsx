import './BrandList.css';

export default function BrandList({brands, activeBd, setActiveBd}) {
  const bds = brands.map(bd => 
    <li
      key={bd}
      className={bd === activeBd ? 'active' : ''}
      onClick={() => setActiveBd(bd)}
    >
      {bd}
    </li>
  );
  return (
<ul className="BrandList">
  {bds}
</ul>
  );
}