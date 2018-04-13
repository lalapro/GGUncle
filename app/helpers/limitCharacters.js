let limitCharacters = (string) => {
  string = string || '';
  if (string.length > 200) {
    let shortened = string.split('').slice(0, 200).concat(['.','.','.']).join('');
    return shortened;
  }
  return string;
}

export default limitCharacters;
