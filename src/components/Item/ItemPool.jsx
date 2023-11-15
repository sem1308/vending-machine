import { ItemRank, ItemRankProbs } from "./ItemRank";

import _ from 'lodash';

// 아이템 확률을 통해 아이템 random pool 생성
const generateItemPool = () => {
    let itemPool = [];

    let stIdx = 0;
    for (const rank in ItemRank) {
        const rankVal = ItemRank[rank];
        const probValue = ItemRankProbs[rankVal];
        const fillCount = probValue - stIdx;
        itemPool = itemPool.concat(Array(fillCount).fill(rankVal));
        stIdx = probValue
    }

    itemPool = _.shuffle(itemPool);
    return itemPool;
}

export default generateItemPool;