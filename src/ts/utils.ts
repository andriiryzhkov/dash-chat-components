// Format using reusable function
function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

// format as "YYYY-MM-DD hh:mm:ss"
// You can tweak formatting easily

export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp);

  const dateString =
    date.getDate() === new Date().getDate()
      ? [
          padTo2Digits(date.getDate()),
          padTo2Digits(date.getMonth() + 1),
          date.getFullYear(),
        ].join(".")
      : "";

  const timeString = [
    padTo2Digits(date.getHours()),
    padTo2Digits(date.getMinutes()),
  ].join(":");

  return dateString + " " + timeString;
}
