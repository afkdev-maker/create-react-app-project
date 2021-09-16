import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from './footer';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>Show me the money</h1>
      <h2>Deployed with 4everland!</h2>
      <br />
      <Footer/>
    </main>
  );
}

export default App;
