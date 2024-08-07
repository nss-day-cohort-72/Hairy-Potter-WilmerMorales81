export const PotteryList = (potteryItems) => {
  let potteryHTML = "";
  for (const potteryListItem of potteryItems) {
    potteryHTML += `<section class="pottery" id="pottery--${potteryListItem.currentId}">
    <h2 class="pottery__shape">${potteryListItem.shape}</h2>
    <div class="pottery__properties">
      Item weighs ${potteryListItem.weight} grams and is ${potteryListItem.height} cm in height
    </div>
    <div class="pottery__price">Price is $${potteryListItem.price}</div>
  </section> `;
  }
  return potteryHTML;
};
