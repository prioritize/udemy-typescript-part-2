import Button from "./components/Button.tsx";
import Container from "./components/Container.tsx";
import Input from "./components/Input.tsx";
import {useRef} from "react";

function App() {
    const input = useRef<HTMLInputElement>(null);
  return (
    <main>
        <Input label={"Test"} id={"test"} ref={input}/>
    </main>
  );
}

export default App;
