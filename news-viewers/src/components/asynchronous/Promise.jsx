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
Increase(0)
  .then((number) => {
    // Promise에서 resolve 된 값은 .then을 통해 받아 올 수 있음
    console.log(number);
    return Increase(number);
  })
  .then((number) => {
    console.log(number);
    return Increase(number);
  })
  .then((number) => {
    console.log(number);
    return Increase(number);
  })
  .then((number) => {
    console.log(number);
    return Increase(number);
  })
  .then((number) => {
    console.log(number);
    return Increase(number);
  })
  .catch((e) => {
    // 도중에 에러가 발생하면 .catch를 통해 알 수 있음
    console.log(e);
  });

export default Increase;
