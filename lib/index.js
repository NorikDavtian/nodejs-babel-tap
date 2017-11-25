const awesomeness = (x) => {
  if (x > 100) {
    return 'big';
  } else if (x < 0) {
    return 'negative';
  } else if (x % 2 === 0) {
    return 'even';
  }
  return 'odd';
};

export default awesomeness;
