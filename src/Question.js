import { observer } from "mobx-react-lite";
import { store } from "./GameStore";

export const Question = observer(() => {
  return (
    <>
      <p>Pytanie: Który wyraz pojawił się w tekście?</p>
      <ul>
        {store.question.map((el) => (
          <button
            onClick={() => store.giveAnswer(el)}
            className={el.className}
            key={el}
          >
            {el.value}
          </button>
        ))}
      </ul>
    </>
  );
});
