// creates an object from an array
// possible to pass in variable to limit queries
let hashCreator = async (ref, limit) => {
  limit = limit || 100;
  let PRODUCTS = {};
  let products = await ref.limitToFirst(limit).once('value', snap => {
    if (snap.val()) {
      let allProducts = snap.val();
      for (let i = 0; i < allProducts.length; i++) {
        let product = allProducts[i];
        PRODUCTS[product.id] ? null : PRODUCTS[product.id] = product
      }
    }
  });
  // console.log('hihi', PRODUCTS, 'hihi')
  return PRODUCTS;
}

export default hashCreator
