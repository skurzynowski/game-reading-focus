import "./styles.css";

import { Form } from "./Form";
import { Items } from "./Items";
import { Header } from "./Header";
import { Ip } from "./Ip";
import { Text } from "./Text";
import { Question } from "./Question";
import { Controls } from "./Controls";

export default function App() {
  return (
    <div className="App">
      <h2>Czytaj lepiej - wprogramuj szybkie czytanie</h2>
      <Controls />
      <Text />
      <Question />
    </div>
  );
}
