export default function TimeConverter(timeStamp) {
  const now = new Date();
  const secondsPast = (now.getTime() - timeStamp) / 1000;

  if (secondsPast < 60) {
    return parseInt(secondsPast) + " seconds ago";
  }

  if (secondsPast < 3600) {
    const minutes = Math.floor(secondsPast / 60);
    return minutes + (minutes === 1 ? " minute ago" : " minutes ago");
  }

  if (secondsPast < 86400) {
    const hours = Math.floor(secondsPast / 3600);
    return hours + (hours === 1 ? " hour ago" : " hours ago");
  }

  const day = timeStamp.getDate();
  const month = timeStamp.toLocaleString('default', { month: 'long' });
  const year = timeStamp.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;
  return "on " + formattedDate;
}
