import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import GlobalStyle from "./assets/styles/GlobalStyle";
import { QuestionProvider } from "./context/question";

import { Home } from "./pages/Home/Home";
import { CreateRoom } from "./pages/CreateRoom/CreateRoom";
import { Blog } from "./pages/Blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <QuestionProvider>
        <Route path="/" exact component={Home} />
        <Route path="/create_room" component={CreateRoom} />
        <Route path="/Home" component={Blog} />
      </QuestionProvider>
    </BrowserRouter>
  );
}

export default App;
