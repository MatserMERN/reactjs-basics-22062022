import DefaultFatArrow from "./1.components/1.function/DeafultFatArrow";
import Scott from "./1.components/1.function/Greet";
import { GreetNamed as Named } from "./1.components/1.function/GreetNamed";
import { NamedFatArrow } from "./1.components/1.function/NamedFatArrow";
import {GreetOne, GreetTwo} from "./1.components/1.function/MultiGreet"

function App() {
  return (
    <div className="container">
      <Scott />
      <Named />
      <DefaultFatArrow />
      <NamedFatArrow />
      <GreetOne />
      <GreetTwo />
    </div>
  );
}

export default App;
