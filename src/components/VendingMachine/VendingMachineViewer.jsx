import VMS from "./VendingMachineState";
import styles from "../../css/vendingMachine.module.css";
import { ItemCard, ItemCardWrapper } from "../Item/Item";

export default function VendingMachineViewer({ state, item, items }) {
    const showMain = () => {
        <div>main</div>
    }

    const show = (state) => {
        let screen = <div>default</div>

        switch (state) {
            case VMS.ONCE:
                screen = <ItemCard item={item} />;
                break;
            case VMS.MULTY:
                screen = <ItemCardWrapper items={items} />
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
            {show(state)}
        </div>
    );
}