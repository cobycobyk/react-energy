import './BrandList.css';

export default function BrandListItems({brands}) {
  const bds = brands.map(bd => 
    <option
      key={bd}
    >
      {bd}
    </option>
  );  return (
    <>
      {bds}
  </>
  );
}