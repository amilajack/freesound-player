import React from "react";
import { Link } from "react-router-dom";
// import { searchSharp } from "ionicons/icons";
// import { IonIcon } from "@ionic/react";

export default function Nav({
  isLoggedIn,
  openRedirectDialogModalWindow,
  setSearchValue,
}) {
  return (
    <nav className="flex justify-between items-center py-4 px-2 md:justify-start md:space-x-10">
      <div className="md:flex items-center justify-start space-x-8 md:flex-1 lg:w-0">
        <ul className="flex">
          <li className="mr-6">
            <a className="text-blue-500 hover:text-blue-800" href="/">
              Explore
            </a>
          </li>
          <li className="mr-6">
            <a className="text-blue-500 hover:text-blue-800" href="/featured">
              Featured
            </a>
          </li>
        </ul>
      </div>
      <div className="md:flex space-x-2 justify-between items-center">
        <Link to="/" className="flex space-x-2 justify-between items-center">
          <img className="h-10 bg-default" src="/icons/icon.svg" />
          <h1 className="text-lg">Tide</h1>
        </Link>
      </div>

      <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
        {/* <IonIcon icon={searchSharp} /> */}
        <input
          name="search"
          type="text"
          className="appearance-none block placeholder-secondary bg-primary border rounded p-1 leading-tight focus:outline-none focus:bg-white"
          placeholder="Search sound..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {!isLoggedIn && (
          <button
            className="bg-secondary text-primary rounded px-4 py-1"
            onClick={openRedirectDialogModalWindow}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
