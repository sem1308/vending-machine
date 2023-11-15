import styles from "../../css/item.module.css";

export class Item {
    constructor(rank, name, content) {
        this.rank = rank;
        this.name = name;
        this.content = content;
    }
}

function ItemCard({ item }) {
    return (
        <div className={styles.item}>
            <div>
                <span>{item.rank}</span>
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