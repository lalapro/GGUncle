let convertPrice = (price) => {
  price = price.toString().split('');
  price.splice(price.length - 2, 0, '.');
  price.unshift('$');
  return price.join('');
}

export default convertPrice;
