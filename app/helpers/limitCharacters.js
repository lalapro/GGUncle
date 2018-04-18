let limitCharacters = (string) => {
  string = string || '';
  if (string.length > 150) {
    let shortened = string.split('').slice(0, 150).concat(['.','.','.']).join('');
    return shortened;
  }
  return string;
}

export default limitCharacters;
