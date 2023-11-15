import { useState } from 'react';
import './App.css';
import VendingMachine from './components/VendingMachine/VendingMachine';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <VendingMachine></VendingMachine>
        </>
    )
}

export default App