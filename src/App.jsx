import Loader from "./components/loader";
import { useState } from "react";
import './app.css'
import Layout from "./components/layout";


const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative h-screen">
      <Layout />
      {loading && <Loader onFinish={() => setLoading(false)} />}
    </div>
  );
};
export default App
