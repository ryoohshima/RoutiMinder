const formatShortTime = (fullTime: string): string => {
  return fullTime.split(':').slice(0, 2).join(':');
}

export {
  formatShortTime
};