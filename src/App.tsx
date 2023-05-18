import React, {useState} from 'react';
import Circle from "./Circle/Circle";
import './App.css';

const App = () => {
    const [circles, SetCircle] = useState([0, 0, 0, 0, 0]);

    const changeNum = () => {
        let arr: number[] = [];

        while(arr.length <= 4){
            let randomNum = Math.floor(5 + Math.random() * ((36 - (5)) + 1));

            if(arr.indexOf(randomNum) === -1){
                arr.push(randomNum)
            }
        }

        arr.sort((a,b) => {
            return a - b;
        });

        SetCircle([arr[0], arr[1], arr[2], arr[3], arr[4]]);
    };
        return (
            <div className="App">
                <div className="circlesWrap">
                    <Circle num={circles[0]}/>
                    <Circle num={circles[1]}/>
                    <Circle num={circles[2]}/>
                    <Circle num={circles[3]}/>
                    <Circle num={circles[4]}/>
                </div>
                <div className="btnWrap">
                    <button onClick={changeNum} className="btn">New numbers</button>
                </div>
            </div>
        );
};

export default App;
