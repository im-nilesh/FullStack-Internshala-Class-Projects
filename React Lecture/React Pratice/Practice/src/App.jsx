import Cat from "./components/cat";
import Person from "./components/person";
import Car from "./components/car";
import { Carcolor, Carmodel } from "./components/car";

function App() {
  return (
    <div>
      <Cat />
      <Person />
      <Car />
      <Carcolor />
      <Carmodel />
    </div>
  );
}

export default App;
