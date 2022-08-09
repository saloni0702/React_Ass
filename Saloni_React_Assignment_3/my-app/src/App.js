import './App.css';
import Header from './Components/header';
import Customerinfo from './Components/customer-info';
import Orderinfo from './Components/order-info';
import Productlist from './Components/product-list';

const obj={
  Name: "Alan Ford",
  EmployeeID:"00005152",
  appointment:"9:00 (24-05-2016)",
  Email:"alan.form@email.nl",
  Phone:"+31123456789",
  Status:"In Progress",
  Door:"Mark",
  Time:"10:30 ",
  Date:"(25-05-2016)",
  Product:"Boltaart Bosbessen",
  Description:"This is a temporary description is given",
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'

}

function App() {
  return (
    <div className='container'>
      <Header obj={obj}></Header>
      <Customerinfo obj={obj}></Customerinfo>
      <Orderinfo obj={obj}></Orderinfo>
      <Productlist obj={obj}></Productlist>
      </div>
  );
}

export default App;
