import { Item } from "./Item";
import { RANKS } from "./ItemRank";

const generateItemList = () => {
    let itemList = {
        [RANKS.COMMON]: [],
        [RANKS.UNCOMMON]: [],
        [RANKS.RARE]: [],
        [RANKS.UNIQUE]: [],
        [RANKS.LEGEND]: []
    }

    getItemList(itemList, RANKS.COMMON);
    getItemList(itemList, RANKS.UNCOMMON);
    getItemList(itemList, RANKS.RARE);
    getItemList(itemList, RANKS.UNIQUE);
    getItemList(itemList, RANKS.LEGEND);
    return itemList
}

const getItemList = (itemList, rank) => {
    switch (rank) {
        case RANKS.COMMON:
            itemList[rank].push(new Item(rank, "한손검"))
            itemList[rank].push(new Item(rank, "기본활"))
            itemList[rank].push(new Item(rank, "그냥 양손검"))
            itemList[rank].push(new Item(rank, "지팡이"))
            itemList[rank].push(new Item(rank, "방패"))
            itemList[rank].push(new Item(rank, "목걸이"))
            break;
        case RANKS.UNCOMMON:
            itemList[rank].push(new Item(rank, "빛나는 한손검"))
            itemList[rank].push(new Item(rank, "빛나는 활"))
            itemList[rank].push(new Item(rank, "빛나는 양손검"))
            itemList[rank].push(new Item(rank, "빛나는 지팡이"))
            itemList[rank].push(new Item(rank, "빛나는 방패"))
            itemList[rank].push(new Item(rank, "빛나는 목걸이"))
            break;
        case RANKS.RARE:
            itemList[rank].push(new Item(rank, "화려한 한손검"))
            itemList[rank].push(new Item(rank, "화려한 활"))
            itemList[rank].push(new Item(rank, "화려한 양손검"))
            itemList[rank].push(new Item(rank, "화려한 지팡이"))
            itemList[rank].push(new Item(rank, "화려한 방패"))
            itemList[rank].push(new Item(rank, "화려한 목걸이"))
            break;
        case RANKS.UNIQUE:
            itemList[rank].push(new Item(rank, "영롱한 한손검"))
            itemList[rank].push(new Item(rank, "영롱한 활"))
            itemList[rank].push(new Item(rank, "영롱한 양손검"))
            itemList[rank].push(new Item(rank, "영롱한 지팡이"))
            itemList[rank].push(new Item(rank, "영롱한 방패"))
            itemList[rank].push(new Item(rank, "영롱한 목걸이"))
            break;
        case RANKS.LEGEND:
            itemList[rank].push(new Item(rank, "불멸의 한손검"))
            itemList[rank].push(new Item(rank, "불멸의 활"))
            itemList[rank].push(new Item(rank, "불멸의 양손검"))
            itemList[rank].push(new Item(rank, "불멸의 지팡이"))
            itemList[rank].push(new Item(rank, "불멸의 방패"))
            itemList[rank].push(new Item(rank, "불멸의 목걸이"))
            break;
    }
}

export default generateItemList;

