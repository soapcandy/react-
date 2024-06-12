import { useEffect, useState } from "react";

function UseMemoPractice() {
  const [count, setCount] = useState(0);

  // useMemo를 사용하지 않고 factorial 계산
  const factorial = (() => {
    console.log("factorial 작동!");
    let fact = 1;
    for (let i = 1; i <= count; i++) {
      fact = fact * i;
    }
    return fact;
  })();

  useEffect(() => {
    console.log(`Factorial of ${count} is ${factorial}`);
    console.log("useEffect 작동!");
  }, [factorial]);

  console.log("렌더링 작동!");
  // ---------------------------------------------------------------
  const [count2, setCount2] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // useMemo를 사용하지 않고 expensiveValue 계산
  console.log("계산기 작동!!");
  const expensiveValue = count2 * 2;

  console.log("렌더링2 작동!!");

  return (
    <div>
      <p>Count: {count}</p>
      <p>Factorial: {factorial}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>-------------------------------------</div>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount2(count2 + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(otherState + 1)}>
        Change Other State
      </button>
    </div>
  );
}

export default UseMemoPractice;
