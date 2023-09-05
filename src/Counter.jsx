import {
    ChevronUp,
    ChevronsUp,
    RotateCcw,
    Hash,
    ChevronsDown,
    ChevronDown,
} from "react-feather";

import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    // change document title as count changes
    useEffect(() => {
        document.title = `Current Count: ${count}`;
    }, [count]);

    const handleCountOperation = (type, value) => {
        // use switch statement to handle different types of operations
        switch (type) {
            case "increment":
                setCount(count + value);
                break;
            case "decrement":
                setCount(count - value);
                break;
            case "reset":
                setCount(0);
                break;
            case "random":
                setCount(Math.floor(Math.random() * 100) + 1);
                break;
            default:
                setCount(0);
        }
    };

    return (
        <section className='counter'>
            <h4>Current value:</h4>
            <p className='count'>{count}</p>
            <div className='controls'>
                <Button
                    type={"increment"}
                    value={1}
                    performOperation={handleCountOperation}
                >
                    <ChevronUp size={18} />
                </Button>
                <Button
                    type={"increment"}
                    value={10}
                    performOperation={handleCountOperation}
                >
                    <ChevronsUp size={18} />
                </Button>
                <Button type={"reset"} performOperation={handleCountOperation}>
                    <RotateCcw size={18} />
                </Button>
                <Button type={"random"} performOperation={handleCountOperation}>
                    <Hash size={18} />
                </Button>
                <Button
                    type={"decrement"}
                    value={10}
                    performOperation={handleCountOperation}
                >
                    <ChevronsDown size={18} />
                </Button>
                <Button
                    type={"decrement"}
                    value={1}
                    performOperation={handleCountOperation}
                >
                    <ChevronDown size={18} />
                </Button>
            </div>
        </section>
    );
};

// Button component with props
const Button = ({ children, type, value, performOperation }) => {
    return (
        <button value={value} onClick={() => performOperation(type, value)}>
            {children}
        </button>
    );
};

export default Counter;
