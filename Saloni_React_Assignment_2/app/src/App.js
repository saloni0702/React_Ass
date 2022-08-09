import './App.css';

const employee = {
name: 'Tom',
location: 'New York',
bloodGroup: 'B+',
age: 28,
profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}

function App() {
  return (
    <div className="App">
    <div className="Box">
      <div className="employee-details">
        <img src={employee.profileImg}/>

        <h1>{employee.name}</h1>

        <p>Location</p><br/>
        <h2>{employee.location}</h2>
       
        <p>Blood Group</p><br/>
        <h2>{employee.bloodGroup}</h2>
          
        <p>Age</p><br/>
        <h2>{employee.age}</h2>
      </div>
      </div>      
    </div>
  );
}

export default App;
