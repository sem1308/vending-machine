import { Item } from "./Item";
import { ItemRank } from "./ItemRank";

const generateItemList = () => {
    let itemList = {
        [ItemRank.COMMON]: [],
        [ItemRank.UNCOMMON]: [],
        [ItemRank.RARE]: [],
        [ItemRank.UNIQUE]: [],
        [ItemRank.LEGEND]: []
    }

    getItemList(itemList, ItemRank.COMMON);
    getItemList(itemList, ItemRank.UNCOMMON);
    getItemList(itemList, ItemRank.RARE);
    getItemList(itemList, ItemRank.UNIQUE);
    getItemList(itemList, ItemRank.LEGEND);
    return itemList
}

const getItemList = (itemList, rank) => {
    switch (rank) {
        case ItemRank.COMMON:
            itemList[rank].push(new Item(rank, "한손검"))
            itemList[rank].push(new Item(rank, "기본활"))
            itemList[rank].push(new Item(rank, "그냥 양손검"))
            itemList[rank].push(new Item(rank, "지팡이"))
            itemList[rank].push(new Item(rank, "방패"))
            itemList[rank].push(new Item(rank, "목걸이"))
            break;
        case ItemRank.UNCOMMON:
            itemList[rank].push(new Item(rank, "빛나는 한손검"))
            itemList[rank].push(new Item(rank, "빛나는 활"))
            itemList[rank].push(new Item(rank, "빛나는 양손검"))
            itemList[rank].push(new Item(rank, "빛나는 지팡이"))
            itemList[rank].push(new Item(rank, "빛나는 방패"))
            itemList[rank].push(new Item(rank, "빛나는 목걸이"))
            break;
        case ItemRank.RARE:
            itemList[rank].push(new Item(rank, "화려한 한손검"))
            itemList[rank].push(new Item(rank, "화려한 활"))
            itemList[rank].push(new Item(rank, "화려한 양손검"))
            itemList[rank].push(new Item(rank, "화려한 지팡이"))
            itemList[rank].push(new Item(rank, "화려한 방패"))
            itemList[rank].push(new Item(rank, "화려한 목걸이"))
            break;
        case ItemRank.UNIQUE:
            itemList[rank].push(new Item(rank, "영롱한 한손검"))
            itemList[rank].push(new Item(rank, "영롱한 활"))
            itemList[rank].push(new Item(rank, "영롱한 양손검"))
            itemList[rank].push(new Item(rank, "영롱한 지팡이"))
            itemList[rank].push(new Item(rank, "영롱한 방패"))
            itemList[rank].push(new Item(rank, "영롱한 목걸이"))
            break;
        case ItemRank.LEGEND:
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

