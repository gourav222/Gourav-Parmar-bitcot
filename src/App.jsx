import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import AddContact from "./components/AddAndEditContact/AddAndEditContact";
import SearchContact from "./components/SearchContact";
import ViewContact from "./components/ViewContact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="addContact" element={<AddContact />} />
        <Route path="searchContact" element={<SearchContact />} />
        <Route path="viewContact" element={<ViewContact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
