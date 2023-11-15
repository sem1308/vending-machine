import { RANKS, ItemRank } from "./ItemRank";

import _ from 'lodash';

// 아이템 확률을 통해 아이템 random pool 생성
const generateItemPool = () => {
    let itemPool = [];

    let stIdx = 0;
    for (const rankKey in RANKS) {
        const rank = RANKS[rankKey];
        const probValue = ItemRank[rank].probability;
        const fillCount = probValue - stIdx;
        itemPool = itemPool.concat(Array(fillCount).fill(rank));
        stIdx = probValue
    }

    itemPool = _.shuffle(itemPool);
    return itemPool;
}

export default generateItemPool;