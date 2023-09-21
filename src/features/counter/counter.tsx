import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>
        Count = <span>{count}</span>
      </h2>
      <div>
        <button
          aria-label='Increment Value'
          onClick={() => dispatch(increment())}
        >
          Increment Value
        </button>{" "}
        <button
          aria-label='Decrement Value'
          onClick={() => dispatch(decrement())}
        >
          Decrement Value
        </button>
      </div>
    </div>
  );
};

export default Counter;
