import styles from "../../css/item.module.css";
import { ItemRank } from "./ItemRank";

export class Item {
    constructor(rank, name, content) {
        this.rank = rank;
        this.name = name;
        this.content = content;
    }
}

function ItemCard({ item }) {
    const rank = ItemRank[item.rank];
    return (
        <div className={styles.item}>
            <div>
                <span style={{color:rank.color}}>{rank.content}</span>
                <span> {item.name}</span>
            </div>
            <div className={styles["item-img"]}>
                아이템 사진
            </div>
            <div className={styles["item-content"]}>
                아이템 내용 : {item.content}
            </div>
        </div>
    );
}

function ItemCardWrapper({ items }) {
    return (
        <div className={styles["item-wrapper"]}>
            {items.map(item => <ItemCard item={item}></ItemCard>)}
        </div>
    );
}

export { ItemCard, ItemCardWrapper };