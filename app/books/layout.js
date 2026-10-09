"use client";

// CLIENT COMPONENT
// IF THER IS ANY HOOK LIKE useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback
// IF THERE IS INTERACTIVITY LIKE EVENT LISTENERS, DOM MANIPULATION, OR WINDOW OBJECT
// IF THERE IS PERSISTENT STATE OR DATA (LOCAL STORAGE, SESSION STORAGE, COOKIES, ETC.)
// HYDRATION - WHEN THE SERVER RENDERS THE HTML AND THEN THE CLIENT TAKES OVER TO MAKE IT INTERACTIVE

// CLIENT SIDE RENDERING
// BECAUSE THIS IS A LAYOUT COMPONENT
// IT HAS TASKS RELATED TO STATE MANAGEMENT
// AND INTERACTIVITY

import { useState } from "react";
export default function BooksLayout({ children }) {
  const [category, setCategory] = useState("All");
  return (
    <div className="books-layout">
      <aside>
        <h2>Books Sidebar</h2>
        <ul>
          <li>All Books</li>
          <li>Fiction</li>
          <li>Non-Fiction</li>
          <li>Science Fiction</li>
          <li>Fantasy</li>
        </ul>
      </aside>
      <main>{children}</main>
    </div>
  );
}
