function Increase(number) {
  const promise = new Promise((resolve, reject) => {
    // resolve는 성공 reject는 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        //50보다 높으면 에러 발생시키기
        const e = new Error("numberTooBig");
        return reject(e);
      }
      resolve(result); // number 값에 + 10 처리 후 성공 처리
    }, 1000);
  });
  return promise;
}

export async function runTasks() {
  try {
    //try/catch 구문을 사용하여 에러를 처리
    let result = await Increase(0);
    console.log(result);
    result = await Increase(result);
    console.log(result);
    result = await Increase(result);
    console.log(result);
    result = await Increase(result);
    console.log(result);
    result = await Increase(result);
    console.log(result);
    result = await Increase(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}
export default Increase;
