import { useEffect, useState } from "react";
import CardList from "./components/card-list/Card-list.component";
import SearchBox from "./components/search-box/Search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState(""); //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log("render");

  useEffect(() => {
    const filteredArray = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(filteredArray);
    console.log("effect");
  }, [monsters, searchField]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
