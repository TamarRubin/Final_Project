
import React, {useState} from 'react';
import axios from 'axios';
const url='http://localhost:5000/recommendedProducts';
function App() {
const [userName, setUserName] = useState('Tamar Rubin');
const [phone, setPhone] = useState('1234567');
const changeName = () => {
  axios.get(`${url}/getAll`).then((res)=>{
    setUserName(res.data.Name);
    setPhone(res.data.Phone);
  });
  setUserName('AAAA');
  setPhone('1111');
}
  return (
    <div>
     <h1>Name: {userName}, Phone: {phone}</h1>
    <input type="button" value="change user" onClick={changeName}/>
    </div>
  );
}

export default App;