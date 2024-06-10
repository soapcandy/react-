function FomattedDate() {
  const digits = (num) => {
    return num.toString().padStart(2, "0"); // 자릿 수 2자리 입력
  };

  const date = new Date(); // 현재 시간 입력
  const kstOffset = 9 * 60; // KST는 UTC+9
  const utc = date.getTime() + date.getTimezoneOffset() * 60000; // UTC 시간 계산
  const kstDate = new Date(utc + kstOffset * 60000); // KST 시간 계산
  const formattedDate = `${kstDate.getFullYear()}-${digits(
    kstDate.getMonth() + 1
  )}-${digits(kstDate.getDate())}
      ${digits(kstDate.getHours())}:${digits(kstDate.getMinutes())}:${digits(
    kstDate.getSeconds()
  )}`;

  return formattedDate;
}
export default FomattedDate;
