export const firePottery = (potteryPiece, temperature) => {
    potteryPiece.fired = true;
    potteryPiece.cracked = temperature > 2200;
    return potteryPiece;
} 

 