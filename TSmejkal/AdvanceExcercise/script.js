function timeConvert(minute) {
  let minutes = minute % 60;
  let hours = minute / 60;
  console.log(
    `${minute} minutes = ${Math.floor(hours)} hour(s) and ${minutes} minute(s).`
  );
}

timeConvert(150);
