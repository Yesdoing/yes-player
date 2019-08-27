export function timeFormat(str) {
  const arr = str
    .slice(2)
    .replace("S", "")
    .split("M");
  return arr
    .map(item => {
      if (item.length === 1) return "0" + item;
      else if (item.length === 0) return "00";
      else return item;
    })
    .join(":");
}