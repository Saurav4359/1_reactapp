import { useState } from "react";

import "./App.css";

const Card = ({ title ,imgg}) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className="card">
      <img
        src= {imgg} 
        alt=""
      />
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
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
      <Card title="Avatar" imgg="https://imgs.search.brave.com/-IQvvzpizYQw19c9uawjKVCIIbQ1H6aaSrkuKy7gUMk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sdW1p/ZXJlLWEuYWthbWFp/aGQubmV0L3YxL2lt/YWdlcy9wX2Rpc25l/eXBsdXNvcmlnaW5h/bHNfYXZhdGFyX3Ro/ZXdheW9md2F0ZXJf/cG9zdGVyX3JlYnJh/X2ZhMDg2MzZkLmpw/ZWc"/>
      <Card title="Star Wars" />
      <Card title="Titanic" />
      <Card title="3 Idiots" />
    </div>
  );
};

export default App;
