import './BrandList.css';

export default function BrandListItems({ brands }) {
  const bds = brands.map(bd =>
    <option
      key={bd._id}
      value={bd._id}
    >
      {bd.name}
    </option>
  );
  return (
    <>
      {bds}
    </>
  );
}