import { searchSharp } from "ionicons/icons";
import React, { useEffect } from "react";
import { Link, withRouter, useLocation } from "react-router-dom";
import tinykeys from "tinykeys";
import Button from "./components/Button";
import Input from "./components/Input";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function Nav({
  isLoggedIn,
  openRedirectDialogModalWindow,
  setSearchValue,
  history,
}) {
  const pushHistory = (searchValue) => {
    history.push({
      pathname: "/search",
      search: `?q=${searchValue}`,
    });
  };
  const queryParams = useQuery();
  const searchQuery = queryParams.get("q");
  useEffect(() => {
    const focusSearchBar = (event) => {
      if (document.activeElement === document.body) {
        event.preventDefault(); // Search shortcuts
        document.getElementById("search-bar").focus();
      } // should only work when the document has focus.
    };
    const unsubscribe = tinykeys(window, {
      "$mod+KeyK": focusSearchBar,
      Slash: focusSearchBar,
    });
    return () => {
      unsubscribe();
    };
  });
  return (
    <nav className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
      <div className="md:flex items-center justify-start space-x-8 md:flex-1 lg:w-0">
        <ul className="flex">
          {/* <li className="mr-6"> // Removing on Tuesday, November 24, 2020, due to
            <a href="/">Explore</a> // lack of functionality - Hamir
          </li>
          <li className="mr-6">
            <a className="hover:opacity-100 opacity-50" href="/featured">
              Featured
            </a>
          </li> */}
        </ul>
      </div>
      <div className="md:flex space-x-2 justify-between items-center">
        <Link to="/" className="flex space-x-2 justify-between items-center">
          <picture>
            <source
              srcSet="/icons/light-icon.svg"
              media="(prefers-color-scheme: dark)"
            />
            <source
              srcSet="/icons/dark-icon.svg"
              media="(prefers-color-scheme: light)"
            />
            <img src="/icons/light-icon.svg" alt="Tide" className="h-10" />
          </picture>
          <h1 className="text-lg">Tide</h1>
        </Link>
      </div>

      <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
        <Input
          data-e2e-id="search-input"
          defaultValue={searchQuery}
          icon={searchSharp}
          id="search-bar"
          name="sound-search"
          onChange={(e) =>
            pushHistory(e.target.value) && setSearchValue(e.target.value)
          }
          placeholder="Search sound..."
          // type="search" // This seems appropriate, but adds an X that interferes with the search icon.
        />
        {!isLoggedIn && (
          <Button onClick={openRedirectDialogModalWindow}>Login</Button>
        )}
        {/* @TO-DO: else statement that says that if the user IS logged in, then their profile picture should show up
        in the top right hand corner with a dropdown menu. */}
      </div>
    </nav>
  );
}
export default withRouter(Nav);
