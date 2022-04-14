import React from "react";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";

import "./styles.css";

const App = () => {
  return (
    <div>
      <Navigation />
      <main className="container">
        <section className="hero">
          <p>
            Hi, my name is Tobi, when I’m not working, I enjoy watching
            football, reading design blogs & learning how to code. You can take
            a look here
          </p>
        </section>
        <section>
          <Projects />
        </section>
      </main>
    </div>
  );
};

export default App;
