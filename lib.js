'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listings =>
    name =>
      listings.reduce((previous, listing) =>
        name === listing.name ? previous + listing.price : previous + 0
, 0)
/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts =>
      carts.reduce(
        (acc, curr) => 
          acc.concat(
            {
              'customer': curr.customer,
              'total': curr.items.reduce((accum, current) => accum + listedPrice(listings)(current), 0)
            }
          )
        , [])


module.exports = {
  listing,
  cart,
  calculateTotals
}

