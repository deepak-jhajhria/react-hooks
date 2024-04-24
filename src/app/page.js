import UseContext from "./components/UseContext";
import UseEffect from "./components/UseEffect";
import UseReducer from "./components/UseReducer";
import UseRef from "./components/UseRef";
import UseState from "./components/UseState";

export default function Home() {
  return (
    <div>
      <UseState />
      <UseRef />
      <UseEffect />
      <UseReducer />
      <UseContext />
    </div>
  );
}
