import "./App.scss";

import { useEffect, useState } from "react";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { TomestonePlanner } from "./components/TomestonePlanner";

function App() {
  const all_pages = ["Tomestone Planner"];
  const [page, setPage] = useState(
    localStorage.getItem("page") || "Tomestone Planner"
  );

  useEffect(() => {
    localStorage.setItem("page", page);
  }, [page]);

  const Page = (props) => {
    const { page, ...leftovers } = props;
    return <TomestonePlanner {...leftovers} />;
  };

  return (
    <div className="App">
      <Header />
      <Navigation setPage={setPage} getPage={page} allPages={all_pages} />

      <main className="main">
        <Page page={page} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
