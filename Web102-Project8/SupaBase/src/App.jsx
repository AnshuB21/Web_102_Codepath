import { Route, Routes } from "react-router-dom";
import { CreatePost } from "./CreatePost";
import { Get } from "./Get";
import { Update } from "./Update";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index={true} element={<Home />} />

          <Route path="/create" element={<CreatePost />} />
          <Route path="/get" element={<Get />} />
          <Route path="/update/:id" element={<Update />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
