import React, { Component } from "react";

class ArrayData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  fetchData = async () => {
    try {
      fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
        .then((response) => {
          return response.json();
        })
        .then((obj) => {
          this.setState({ list: obj });
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  componentDidMount() {
    console.log("List Api Starts.....");
    this.fetchData();
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
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {this.state.list &&
                this.state.list.map((items, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{items.name}</td>
                      <td>{items.city}</td>
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
