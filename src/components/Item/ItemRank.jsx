// 아이템 희귀도
const ItemRank = {
    COMMON: "보통",
    UNCOMMON: "희귀",
    RARE: "레어",
    UNIQUE: "유니크",
    LEGEND: "레전드"
}

// 아이템 확률
// 1~10000을 가짐 (각 변수 값에서 100을 나눈 것이 확률)
// COMMON부터 LEGEND까지 숫자가 올라가는 형태
// 예를들면)
//  COMMON : 100,
//  UNCOMMON : 500
//  위 상황에서 random 값이 1~100이면 COMMON, 100~500이면 UNCOMMON 뽑음
// COMMON : 44.5% -> 4450
// UNCOMMON : 30% -> 4450 + 3000 = 7450
// RARE : 20% -> 7450 + 2000 = 9450
// UNIQUE: 5% -> 9450 + 500 = 9950
// LEGEND : 0.5% -> 10000
const ItemRankProbs = {
    [ItemRank.COMMON]: 4450,
    [ItemRank.UNCOMMON]: 7450,
    [ItemRank.RARE]: 9450,
    [ItemRank.UNIQUE]: 9950,
    [ItemRank.LEGEND]: 10000
}

export { ItemRank, ItemRankProbs };
