import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  const getUsers = async () => {
    const res = await axios.get(`http://localhost:8080/api/person`, {});
    setList(res.data);
    console.log(res.data[0]);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const ArrayDataItems = ({ items }) => {
    return items.map((user, index) => (
      <>
        <tr className="bg-white border-b text-center" key={index}>
          <td>
            {user.name}
          </td>
          <td className="px-6 py-4">
            {user.lastname}
          </td>
          <td>
            R${user.salary} 
          </td>
        </tr>
      </>
    ));
  };

  return <ArrayDataItems items={list}/>;
}

export default App;
