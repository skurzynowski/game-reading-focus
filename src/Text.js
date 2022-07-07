import { observer } from "mobx-react-lite";
import { store } from "./GameStore";

export const Text = observer(() => {
  const content = store.calculatedTextDecorator;
  return (
    <section>
      <div>
        <span className="hiddenText">
          {content.substring(0, store.hideIndex)}
        </span>
        {content.substring(store.hideIndex, content.length)}
      </div>
    </section>
  );
});
