import VMS from "./VendingMachineState";
import styles from "../../css/vendingMachine.module.css";
import generateItemPool from "../Item/ItemPool";
import generateItemList from "../Item/ItemList";
import { ItemCard, ItemCardWrapper } from "../Item/Item";

export default function VendingMachineCore({ state }) {
    const itemList = generateItemList();
    const itemPool = generateItemPool();

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const drawOnce = () => {
        let randomNumber = getRandomNumber(0, 9999);
        const itemRank = itemPool[randomNumber];
        let itemNum = getRandomNumber(0, itemList[itemRank].length - 1);

        return itemList[itemRank][itemNum];
    }

    const drawMultipleTimes = () => {
        let items = [];
        for (let i = 0; i < 10; i++) {
            items.push(drawOnce());
        }
        return items;
    }

    const showMain = () => {
        <div>main</div>
    }

    const drawAndShow = () => {
        let screen = <div>default</div>

        switch (state) {
            case VMS.ONCE:
                const item = drawOnce();
                screen = <ItemCard item={item} />;
                break;
            case VMS.MULTY:
                const items = drawMultipleTimes();
                screen = <ItemCardWrapper items={items} />
                // screen = <div>{items}</div>
                break;
            case VMS.MAIN:
                screen = showMain();
                break;
            default:
                break;
        }
        return screen;
    }

    return (
        <div className={styles.body}>
            {drawAndShow()}
        </div>
    );
}