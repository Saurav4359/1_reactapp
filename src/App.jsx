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
    // react fragment <> </>
    <div className="card-container">
      <Card title="The Lion King" imgg="https://imgs.search.brave.com/uiQS0F_eQiJE9inZmimGBRpcncvDNTwhMQzXM1k5NQg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJhLzQw/L2UyLzJhNDBlMjcy/ODcxYzFiZmI2MmM4/MmQ4ZjAzNWIyMTk3/LmpwZw"/>
      <Card title="Avatar" imgg="https://imgs.search.brave.com/-IQvvzpizYQw19c9uawjKVCIIbQ1H6aaSrkuKy7gUMk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sdW1p/ZXJlLWEuYWthbWFp/aGQubmV0L3YxL2lt/YWdlcy9wX2Rpc25l/eXBsdXNvcmlnaW5h/bHNfYXZhdGFyX3Ro/ZXdheW9md2F0ZXJf/cG9zdGVyX3JlYnJh/X2ZhMDg2MzZkLmpw/ZWc"/>
      <Card title="Star Wars" imgg="https://imgs.search.brave.com/Nn6aVxla9nnMbaAw1enz-w1azNcdhaekLBSIOmgrm4s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcnRv/ZnRoZW1vdmllcy5j/by51ay9jZG4vc2hv/cC9wcm9kdWN0cy9J/TUdfODI3Nl83MDA4/MzRlMy0yMGZlLTQz/NzEtYWI1ZS0xZTI2/YTExYWNlZmVfMzQ1/eDM0NUAyeC5qcGc_/dj0xNjUxMDg0ODQ3"/>
      <Card title="Titanic" imgg="https://imgs.search.brave.com/0MyttxdNC0YwgN2tGO6rYFQvuaYdKqYKdgBrm4PMZRc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jYWNoZS5jaW5l/bWF0ZXJpYWwuY29t/L3AvNTAweC9wd3p4/emluZS90aXRhbmlj/LW1vdmllLWNvdmVy/LmpwZz92PTE0NTY2/Mjc2NTY"/>
      <Card title="3 Idiots" imgg="https://imgs.search.brave.com/wVUmnvPTxHnvgLZh5qgj-Lz68ALVaQYCIC-J2GeeoPw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jYWNoZS5jaW5l/bWF0ZXJpYWwuY29t/L3AvNTAweC91bjRz/b2N1ZS90aHJlZS1p/ZGlvdHMtaW5kaWFu/LW1vdmllLWNvdmVy/LmpwZz92PTE0NTY3/OTgwMDY"/>
      
    </div>
  );
};

export default App;
