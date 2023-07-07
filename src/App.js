import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import "./App.css";
import Dogs from "./Dogs";
import Dog from "./Dog";
import tubbyImg from "./react-router-patterns/tubby.jpg";
import whiskeyImg from "./react-router-patterns/whiskey.jpg";
import dukeImg from "./react-router-patterns/duke.jpg";
import perryImg from "./react-router-patterns/perry.jpg";

// doggyLibrary
export const doggyLibrary = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskeyImg,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: dukeImg,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: perryImg,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubbyImg,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
};
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dogs" element={<Dogs dogs={doggyLibrary.dogs} />} />
          <Route path="/dogs/:name" element={<Dog />} />
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
