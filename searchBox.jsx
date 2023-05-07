import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
const data = [
  { name: "John Doe", place: "New York", address: "123 Main St", age: 25 },
  { name: "Jane Smith", place: "London", address: "456 Park Ave", age: 30 },
  { name: "David Johnson", place: "Paris", address: "789 Broadway", age: 35 },
  { name: "messi", place: "Paris", address: "789 Broadway", age: 35 },
  { name: "jack ", place: "Paris", address: "789 Broadway", age: 35 },
  { name: "jack doer", place: "Paris", address: "789 Broadway", age: 35 },
  { name: "beckham ", place: "Paris", address: "789 Broadway", age: 35 },
  { name: "fabrizo romanio", place: "Paris", address: "789 Broadway", age: 35 },
  { name: "trent khanal", place: "Paris", address: "789 Broadway", age: 35 },
  // Add more data as needed
];

const Box = ({ name, place, address, age }) => (
  <div
    className="box"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "2rem",
      background: "pink",
      borderRadius: "10px",
      padding: "2rem 3rem",
      marginBottom: "3rem",
    }}
  >
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Place:</strong> {place}
    </p>
    <p>
      <strong>Address:</strong> {address}
    </p>
    <p>
      <strong>Age:</strong> {age}
    </p>
  </div>
);

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <input
        style={{
          outline: "none",
          padding: "0.4rem 1rem",
          borderRadius: "12px",
          border: "1px solid black",
          marginBottom: "2rem",
        }}
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleSearchChange}
      />
      <div
        style={{
          position: "absolute",
          right: "59%",
          top: "14%",
          fontSize: "19px",
        }}
      >
        <FaSearch />
      </div>

      <div id="divContainer">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Box
              key={index}
              name={item.name}
              place={item.place}
              address={item.address}
              age={item.age}
            />
          ))
        ) : (
          <img
            src="https://media.giphy.com/avatars/404academy/kGwR3uDrUKPI.gif"
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default SearchBox;
