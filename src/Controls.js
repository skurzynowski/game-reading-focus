import { observer } from "mobx-react-lite";
import { store } from "./GameStore";

export const Controls = observer(() => {
  return (
    <section>
      <h2>Przeczytaj uwaznie tekst</h2>
      <button onClick={store.start}>Start</button>
      <button disabled={store.isFinished} onClick={store.stop}>
        Stop
      </button>
    </section>
  );
});
