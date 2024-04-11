// React-routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import { ProjectReview } from "./pages/project-review/ProjectReview";
import { Landing } from "./pages/Landing";
import { Layout } from "./pages/Layout";
// Styles
import "@radix-ui/themes/styles.css";
import "./App.css";

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
