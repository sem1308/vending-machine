import { useState } from "react";
import styles from "../../css/vendingMachine.module.css";
import VendingMachineViewer from "./VendingMachineViewer";
import VMS from "./VendingMachineState";
import generateItemList from "../Item/ItemList";
import generateItemPool from "../Item/ItemPool";

export default function VendingMachine() {
    const [item,setItem] = useState();
    const [items,setItems] = useState([]);

    // 기계 상태 저장
    // ONCE : 1번 뽑기한 상태
    // MULTY : n번 뽑기한 상태
    // MAIN : 뽑기 하기 전 상태
    const [state, setState] = useState(VMS.MAIN);
    
    const itemList = generateItemList();
    const itemPool = generateItemPool();

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const drawRandomItem = () =>{
        let randomNumber = getRandomNumber(0, 9999);
        const itemRank = itemPool[randomNumber];
        let itemNum = getRandomNumber(0, itemList[itemRank].length - 1);
        return itemList[itemRank][itemNum];
    }

    const drawOnce = () => {
        setItem(drawRandomItem());
        setState(VMS.ONCE);
    }

    const drawMultipleTimes = () => {
        let items = [];
        for (let i = 0; i < 10; i++) {
            items.push(drawRandomItem());
        }
        setItems(items);
        setState(VMS.MULTY);
    }

    return (
        <div className={styles.main}>
            <VendingMachineViewer state={state} item={item} items={items}></VendingMachineViewer>
            <div className={styles["btn-wrapper"]}>
                <button className={styles.btn} onClick={() => drawOnce()}>1회</button>
                <button className={styles.btn} onClick={() => drawMultipleTimes(10)}>10회</button>
            </div>
        </div>
    );
}