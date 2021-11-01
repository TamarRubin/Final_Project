
import React, {useState} from 'react';
import axios from 'axios';
const url='http://localhost:5000/recommendedProducts';
function App() {
const [users, setUsers] = useState([]);
const changeName = () => {
  axios.get(`${url}/getAll`).then((res)=>{
    setUsers(res.data);
  });
}
  return (
    <div>
    <input type="button" value="change user" onClick={changeName}/>
    <table>{users.map(u=><tr>
      <td>idusers: {u.idusers}</td>

      <td>userPhone2:{u.userPhone2}</td>

      <td></td>

      <td></td>

      <td></td>

    </tr>)}</table>
    </div>
  );
}

export default App;