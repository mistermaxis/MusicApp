function secondsToMinutes(timeInSeconds) {
  const source = parseInt(timeInSeconds, 10);
  const minutes = Math.floor(source / 60);
  const seconds = source % 60;
  return `${minutes}' ${seconds}''`;
}

export default secondsToMinutes;
