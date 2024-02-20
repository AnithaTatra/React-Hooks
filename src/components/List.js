import React, { useReducer, useCallback } from "react";

function List({userData}) {

  userData = [
    {
      name: "Sheldon",
      email: "sheldoncooper@gmail.com",
      age: 24,
    },
    {
      name: "Federer",
      email: "rodgerfederer@gmail.com",
      age: 35,
    },
    {
      name: "Ronald",
      email: "ronaldo@gmail.com",
      age: 28,
    },
    {
      name: "Wayne",
      email: "williamwayne@gmail.com",
      age: 30,
    },
  ];

  const MemoizedListItem = React.memo(List);

  function ItemList() {
    const handleClick = useCallback(
      itemId => {
        console.log(`Item ${itemId} clicked`);
      },
      []
    );

  const reducerMethod = (persons, action) => {
    switch (action.type) {
      case "delete":
        return persons.filter((_, index) => index !== action.index);

      default:
        return persons;
    }
  };
  const [persons, dispatch] = useReducer(reducerMethod, userData);

  return (
    <div className="container">
      <h3 className="p-3 text-center">React- Display List of Users</h3>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, index) => {
            return (
              <MemoizedListItem>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.age}</td>
                <td>
                  <button className="bg-info " onClick={() => dispatch({ type: "delete", index })}>
                    DELETE
                  </button>
                </td>
                <li>
      <button onClick={() => handleClick(index)}>Click me</button>
    </li>
              </tr>
              </MemoizedListItem>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
}
export { List };
