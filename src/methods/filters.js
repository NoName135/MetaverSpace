// 千分號
export function currency(number) {
  const num = parseInt(number, 10);
  return `${num
    .toFixed(0)
    .replace(/./g, (c, i, a) =>
      i && c !== "." && (a.length - i) % 3 === 0
        ? `, ${c}`.replace(/\s/g, "")
        : c
    )}`;
}
// 日期 YYYY/MM/DD
export function date(time) {
  const timeStamp = new Date(time * 1000);
  return `${timeStamp.getFullYear()}/${("0" + (timeStamp.getMonth() + 1)).slice(
    -2
  )}/${("0" + timeStamp.getDate()).slice(-2)}`;
}
