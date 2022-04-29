import './App.css';
import { useEffect, useState } from "react";
import Users from './componets/Users';
function App() {
  const [users, SetUsers] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        SetUsers(data.slice(0,8))
      })
  }, [])
  return (
    <div className="container">
      <div className="row el-element-overlay">
        {users && users.map(user=><Users usr={user}/>)}
      </div>
    </div>
  );
}

export default App;
