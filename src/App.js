import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FreeSound from "freesound-client";
import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import auth, { init } from "./Auth";
import Sound from "./Sound";
import SearchResults from "./SearchResults";
import Nav from "./Nav";
import ModalPrompt from "./components/ModalPrompt";

// Bind modal to our appElement for accessibility
Modal.setAppElement(document.getElementById("root"));

const freeSound = new FreeSound();

const App = () => {
  const [searchValue, setSearchValue] = useState("note");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  init(freeSound);
  auth(freeSound);

  useEffect(() => {
    auth(
      freeSound,
      () => {
        setLoggedIn(true);
      },
      () => {
        setLoggedIn(false);
      }
    );
  });

  function closeModal() {
    setModalIsOpen(false);
  }
  function openRedirectDialogModalWindow() {
    setModalIsOpen(true);
  }

  // Navigate the user to the freesound oauth login page
  const navigateToLogin = () => {
    window.location.replace(freeSound.getLoginURL());
  };

  return (
    <div className="xl:container xl:mx-auto px-4">
      <ModalPrompt
        title="Redirecting to Freesound"
        onConfirm={navigateToLogin}
        onClose={closeModal}
        isOpen={modalIsOpen}
      ></ModalPrompt>
      <Router>
        <Nav
          setSearchValue={setSearchValue}
          openRedirectDialogModalWindow={openRedirectDialogModalWindow}
          isLoggedIn={isLoggedIn}
        />
        <Switch>
          <Route
            path="/sound/:id"
            render={() => (
              <Sound isLoggedIn={isLoggedIn} freeSound={freeSound} />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <SearchResults
                showHeader
                fetchSearchResults={(...args) => freeSound.textSearch(...args)}
                searchValue={searchValue}
              />
            )}
          />
          <Route
            path={"/"}
            render={() => (
              <SearchResults
                fetchSearchResults={(...args) => freeSound.textSearch(...args)}
                searchValue={searchValue}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
