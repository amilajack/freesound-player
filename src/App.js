import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FreeSound from "freesound-client";
import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import auth, { init } from "./Auth";
import Sound from "./Sound";
import SearchResults from "./SearchResults";
import Nav from "./Nav";
import ModalPrompt from "./components/ModalPrompt.tsx";
import TagsPage from "./TagsPage";

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
  function openModal() {
    setModalIsOpen(true);
  }

  // Navigate the user to the freesound oauth login page
  const navigateToLogin = () => {
    window.location.replace(freeSound.getLoginURL());
  };

  return (
    <div className="lg:container lg:mx-auto px-4">
      <ModalPrompt
        title="Redirecting to Freesound"
        denyMessage="Maybe Later"
        confirmMessage="Send me there!"
        longMessage="After logging in with Freesound, you'll be sent back here"
        onConfirm={navigateToLogin}
        onClose={closeModal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
      <Router>
        <Nav
          setSearchValue={setSearchValue}
          openModal={openModal}
          isLoggedIn={isLoggedIn}
        />
        <Switch>
          <Route
            path="/sound/:id"
            render={() => (
              <Sound
                setModalIsOpen={setModalIsOpen}
                isLoggedIn={isLoggedIn}
                freeSound={freeSound}
              />
            )}
          />
          <Route
            path="/tag/:tag"
            render={() => <TagsPage freeSound={freeSound} />}
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
              <>
                <Helmet>
                  <title>Tide - Explore a world of sounds</title>
                  <meta name="description" content="Homepage of Tide" />
                </Helmet>
                <header className="bg-secondary md:text-center mt-2 p-8 rounded text-primary">
                  <h1 className="font-bold text-2xl">
                    Explore A World of Sounds
                  </h1>
                  <p className="text-l pt-2 opacity-50">Explore and Download</p>
                </header>
                <SearchResults
                  fetchSearchResults={(...args) =>
                    freeSound.textSearch(...args)
                  }
                  searchValue={searchValue}
                />
              </>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
