import * as usersService from '../../utilities/users-service';

export default function DrinkHistoryPage() {
  async function handleCheckToken() {
    const expData = await usersService.checkToken();
    console.log(expData);
  }

  return (
    <>
    <h1>DrinkHistoryPage</h1>
    <button onClick={handleCheckToken}>No Past Drinks - But you can check when your login expires for some reason!</button>
    </>
  )
}