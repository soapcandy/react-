function Increase(number, callback) {
  setTimeout(() => {
    const result = number + 10;
    if (callback) {
      callback(result);
    }
  }, 1000); // 콜백함수는 모든 코드가 호출 되고 나서 작동을 시작 함
}

console.log("작업 시작");
Increase(0, (result) => {
  console.log(result);
  Increase(result, (result) => {
    console.log(result);
    Increase(result, (result) => {
      console.log(result);
      Increase(result, (result) => {
        console.log(result);
        console.log("작업 완료");
      });
    });
  });
});

export default Increase;
