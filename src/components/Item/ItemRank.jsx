// 아이템 희귀도
const COMMON = Symbol(0);
const UNCOMMON = Symbol(1);
const RARE = Symbol(2);
const UNIQUE = Symbol(3);
const LEGEND = Symbol(4);

const RANKS = {
    COMMON:COMMON, 
    UNCOMMON:UNCOMMON, 
    RARE:RARE, 
    UNIQUE:UNIQUE, 
    LEGEND:LEGEND
};

class Rank {
    constructor(content, probability, color) {
        this.content = content;
        this.probability = probability;
        this.color = color;
    }
}

const ItemRank = {
    [COMMON]: new Rank("보통", 4450, "#04B4AE"),
    [UNCOMMON]: new Rank("희귀", 7450, "#0431B4"),
    [RARE]: new Rank("레어", 9450, "#31B404"),
    [UNIQUE]: new Rank("유니크", 9950, "#5F04B4"),
    [LEGEND]: new Rank("레전드", 10000, "#D7DF01")
}

export { ItemRank, RANKS };
