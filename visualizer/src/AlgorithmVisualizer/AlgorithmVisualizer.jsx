import React from 'react';
import './AlgorithmVisualizer.css';
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms.js';

export default class AlgorithmVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 70; i++) {
            array.push(randomIntFromInterval(5, 700));
        }
        this.setState({array});
    }

    mergeSort() {
        const javaScriptSortedArray = this.state.array
        .slice()
        .sort((a, b) => a - b);
        const sortedArray = sortingAlgorithms.mergeSort(this.state.array);
        console.log(sortedArray);

        console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
    }

    render() {
        const {array} = this.state;
        
        return (
            <>
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div 
                        className="array-bar" 
                        key={idx}
                        style={{height: `${value}px`}}></div>
                    ))}
                </div>
                <div className="button-container">
                    <button onClick={() => this.resetArray()}>Generate New Array</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                </div>
            </>
        );
    }
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) return false
    }
    return true;
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}