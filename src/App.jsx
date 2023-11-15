import { useState } from 'react';
import './App.css';
import VendingMachine from './components/VendingMachine/VendingMachine';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <h1>앙 뽑기띠</h1>
            </div>
            <VendingMachine></VendingMachine>
        </>
    )
}

export default App