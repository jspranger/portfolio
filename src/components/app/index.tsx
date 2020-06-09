// System imports
import React from "react";

// Presentation imports
import Info from "@components/info";
import Academic from "@components/academic";
import Experience from "@components/experience";
import Interest from "@components/interest";
import Contact from "@components/contact";

const App = () => {
  return (
    <div>
      <Info />
      <Academic />
      <Experience />
      <Interest />
      <Contact />
    </div>
  );
};

export default App;
