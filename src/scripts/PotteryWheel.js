let primaryKey = 1;

export const makePottery = (potteryShape, potteryWeight, potteryHeight) => {
  const potteryPiece = {
    shape: potteryShape,
    weight: potteryWeight,
    height: potteryHeight,
    currentId: primaryKey,
  };

  primaryKey++;
  return potteryPiece;
};

 