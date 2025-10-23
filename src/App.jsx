import { useState } from "react";

import "./App.css";

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className="card">
      <img
        src="https://imgs.search.brave.com/jlzE0FpISbjTFo1CDP3d_soiwgBZiuzi0cHOKfn3o2U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuZ2V0aW1nLmFp/L21lZGlhL2dldGlt/Z19haV9pbWctdExa/UUwzS1UyeE9nRDNO/c1hNZVp1LmpwZWc"
        alt=""
      />
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(true)}>
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};
const App = () => {
  return (
    // react fragment <>
    <div className="card-container">
      <Card title="The Lion King" />
      <Card title="Avatar" />
      <Card title="Star Wars" />
      <Card title="Titanic" />
      <Card title="3 Idiots" />
    </div>
  );
};

export default App;
