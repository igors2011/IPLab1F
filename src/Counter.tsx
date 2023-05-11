import React from 'react'; // Подключение react.
import { useState } from 'react'; // Подключаем ссылку на useState.
import Button from './Button';

interface CounterProps {
    start: number;
    step: number;
}
var Counter = (props: CounterProps) => {
    var [ count, setCount ] = useState(props.start);
    var handleIncrease = () => {
        setCount(count + props.step);
    };
    var st = "Прибавить " + props.step
    return (
        <div>
            <div>Значение счётчика: {count}.</div>
            <Button text = {st} onClick={handleIncrease}></Button>
        </div>
    );
};
export default Counter;