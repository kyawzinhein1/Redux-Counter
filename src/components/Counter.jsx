import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const isShow = useSelector((state) => state.isShow);

  const increaseHandler = () => {
    dispatch({ type: "increase" });
  };
  const decreaseHandler = () => {
    dispatch({ type: "decrease" });
  };
  const increaseBy5 = () => {
    dispatch({ type: "increaseBy5", amount: 5 });
  };
  const toggleHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <section>
      <h1>Redux Counter</h1>
      <div className="numberBox">
        <div className="number">{isShow && <span>{counter}</span>}</div>
        <button onClick={toggleHandler}>$</button>
      </div>
      <hr />
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={increaseBy5}>IncreaseBy 5</button>
      <button onClick={decreaseHandler}>Decrease</button>
    </section>
  );
};

export default Counter;
