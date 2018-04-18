// simple function to translate int to price string

let convertPrice = (price) => {
  price = price || 0
  if (price === 0) return '$0.00';
  price = price.toString().split('');
  price.splice(price.length - 2, 0, '.');
  price.unshift('$');
  return price.join('');
}

export default convertPrice;
