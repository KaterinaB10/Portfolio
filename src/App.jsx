import "./App.css";
import { Layout } from "./pages/Layout";
import { Landing } from "./pages/Landing";
import { ProjectReview } from "./pages/project-review/ProjectReview";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/project/:?" element={<ProjectReview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
