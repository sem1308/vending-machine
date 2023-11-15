import { useState } from "react";
import styles from "../../css/vendingMachine.module.css";
import VendingMachineCore from "./VendingMachineCore";
import VMS from "./VendingMachineState";

export default function VendingMachine() {
    // 기계 상태 저장
    // ONCE : 1번 뽑기한 상태
    // MULTY : n번 뽑기한 상태
    // MAIN : 뽑기 하기 전 상태
    const [state, setState] = useState(VMS.MAIN);

    const drawOnce = () => {
        setState(VMS.ONCE);
    }

    const drawMultipleTimes = () => {
        setState(VMS.MULTY);
    }

    const goMain = () => {
        setState(VMS.MAIN);
    }

    return (
        <div className={styles.main}>
            <VendingMachineCore state={state}></VendingMachineCore>
            <div className={styles["btn-wrapper"]}>
                <button className={styles.btn} onClick={() => drawOnce()}>1회</button>
                <button className={styles.btn} onClick={() => drawMultipleTimes(10)}>10회</button>
            </div>
        </div>
    );
}