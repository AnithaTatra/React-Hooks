import React, { useState, useEffect ,useContext} from "react";
import axios from "axios";
import { ContextState } from "../globals/Context";


function List() {
  const [persons, setPersons] = useState([]);
  const {state, dispatch} = useContext(ContextState);
 

  useEffect(() => {
    
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
      );
      setPersons(response.data);
      console.log("Data....", response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const deletePerson = (id) => {
    dispatch({
      type: "DELETE_PERSON",
      data: { id }
    });
  };

  return (
    <div className="container">
      <h3 className="p-3 text-center">React- Display List of Users</h3>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{person.name}</td>
                <td>{person.city}</td>
                <td>
                <button onClick={() => deletePerson(person.id)}>
                 
                  Delete
                </button>
              </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export { List };
