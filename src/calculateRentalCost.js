/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = days * 40;

  if (days < 3) {
    return basePrice;
  } else if (days >= 3 && days <= 6) {
    return basePrice - 20;
  } else {
    return basePrice - 50;
  }
}

module.exports = calculateRentalCost;
