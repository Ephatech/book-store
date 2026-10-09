// STATIC RENDERING
// BECAUSE THIS IS A PAGE COMPONENT
// IT DOES NOT HAVE TASKS RELATED TO STATE MANAGEMENT
// AND INTERACTIVITY OR ANY CLIENT SIDE LOGIC

// SERVER COMPONENT
// NO DIRECTIVE "use client" AT THE TOP OF THE FILE
// SERVER COMPONENTS ARE RENDERED ON THE SERVER
// AND DO NOT HAVE ACCESS TO CLIENT-SIDE APIs
// PRODUCE HTML THAT IS SENT TO THE CLIENT
// DOESNT SEND THE JAVASCRIPT BUNDLE TO THE CLIENT
// CAN BE ASYNCHRONOUS OR ASYNCHRONOUS FUNCTION
// CAN'T USE HOOKS LIKE useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback
// CAN'T USE BROWSER INTERACTIVITY LIKE EVENT LISTENERS, DOM MANIPULATION, OR WINDOW OBJECT

import Image from "next/image";
export default async function Home() {
  return (
    <div>
      <Image
        src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
        alt="Book Store"
        width={600}
        height={350}
        priority
      />
      <h1>Welcome to the Book Store Home Page</h1>
      <p>Explore our collection of books and find your next great read!</p>
    </div>
  );
}
