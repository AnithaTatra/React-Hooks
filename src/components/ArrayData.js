import React, { Component } from "react";

class ArrayData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
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
      ],
      
    };
    console.log("List...",this.state.list);
  }
 
  render() {

    
    return (
      <div className="container">
        <div className="py-4">
        <h3>USERS LIST</h3>
        <table className="table table-striped shadow">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
            </thead>
            <tbody>
              {this.state.list.map((items, index) => {
                return(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>{items.age}</td>
                </tr>
                );
              })}
            </tbody>
          
        </table>
        </div>
      </div>
    );
  }
}

export default ArrayData;
