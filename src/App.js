import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import React from "react";
import { SearchBox } from "./components/search-box/search-box.component";

export default class extends React.Component {
  constructor() {
    super();
    this.state = { monsters: [], searchField: "" };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(responce => responce.json())
      .then(users => this.setState({ monsters: users }));
  }
  onTextChange = value => {
    this.setState({ searchField: value });
  };
  render() {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.onTextChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
