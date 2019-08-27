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

export const getCurrentTime = (seconds) => {
  if(!seconds) return "00:00";

  const mind = seconds % (60 * 60);
  const minutes = Math.floor(mind / 60);

  const secd = mind % 60;
  const second = Math.ceil(secd);

  return `${minutes < 10 ? '0'+minutes : minutes}:${second < 10 ? '0' + second : second}`;
}