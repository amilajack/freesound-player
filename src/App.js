import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import FreeSound from "freesound-client";
// import { throttle } from "lodash";
import Sound from "./Sound";
import Search from "./Search";

// Todolist
// * Authentication (OAuth) / Downloading sounds
// * UI design
// * Dark Mode (React Context)
// * Accessibility
// * Offline

const freeSound = new FreeSound();
const token = 'scxd6vqqUvfCieE3mGnrZbdBFRQc0DB4M7C5Jrbp';
freeSound.setToken(token);

const App = () => {
  const [searchValue, setSearchValue] = useState("note");
  return (
    <div className="App">
      <div className="Search">
        <input
          name="search"
          type="text"
          placeholder="Search sound..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <Router>
        <Switch>
          <Route
            path="/sound/:id"
            render={() => <Sound freeSound={freeSound} />}
          />
          <Route
            path={process.env.NODE_ENV === 'development' ?
            '/' : '/freesound-player'}
            render={() => (
              <Search freeSound={freeSound}
              searchValue={searchValue} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
