import { useEffect, useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";

const someSeed = "123456789";

// Interface of expected minimal person object
// eslint-disable-next-line no-unused-vars
const IPerson = {
  name: {
    first: "String",
    last: "String",
  },
  id: 0,
  hired: {
    isHired: false,
    wage: 0,
  },
};

export default function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50&seed=" + someSeed)
      .then((result) => {
        if (!result.ok) throw Error("Failed to fetch people!");
        return result.json();
      })
      .then((data) => {
        let id = 1;
        for (const personIndex in data.results) {
          data.results[personIndex].id = id;
          data.results[personIndex].hired = {
            isHired: false,
            wage: 0,
          };
          // person.id = id;
          id += 1;
        }
        setPeople(data.results);
      });
  }, []);

  const hirePerson = (person, wage) => {
    setPeople((prevPeople) =>
      prevPeople.map((p) =>
        p.id === person.id ? { ...p, hired: { isHired: true, wage: wage } } : p
      )
    );
  };

  const firePerson = (person) => {
    setPeople((prevPeople) =>
      prevPeople.map((p) =>
        p.id === person.id ? { ...p, hired: { isHired: false, wage: 0 } } : p
      )
    );
  };

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard people={people} />} />
        <Route
          path="/view/:id"
          element={
            <PersonProfile
              people={people}
              hirePerson={hirePerson}
              firePerson={firePerson}
            />
          }
        />
      </Routes>
    </>
  );
}
