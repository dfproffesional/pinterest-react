import React, { Component, useState, useEffect } from 'react';
import './Content__TitleStyle.css';

// Functionality
const increseCount = (count, setCount) =>{
    if(count === 3) setCount(0)
    else setCount(count + 1);
}

const addingEffect = (count) => {
    let html = document.querySelectorAll('.title__second p')[count];
    html.classList.add("effect");
}

const removingEffect = (count) => {
    let html = document.querySelectorAll('.title__second p')[count];
    html.classList.remove("effect");
}

const animationInit = 
(addingEffect, removingEffect, count) => {
    removingEffect(count);
    
    if(count + 1 === 4) addingEffect(0);
    if(count + 1  <  4) addingEffect(count + 1);
}

function Title_First(){
    return (
        <div className="title__first">
            Get your next
        </div>
    )
}

function Title_Second(){
    return (
        <div className="title__second">
            <p>weeknight dinner idea </p>
            <p>home decor idea </p>
            <p>new look outfit </p>
            <p>green thumb idea </p>
        </div>
    )
}

function Title_Transition(){
    return (
        <div className="title__transitions">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>
    )
}

// Component
export function Content__Title() {
    
    // State Initial
    const [timeId, setTimeId] = useState(0);
    const [count, setCount] = useState(0);

    // Dimanic
    useEffect(()=> {
        //Inital Effect
        addingEffect(count);

        setTimeId(setTimeout(() => {

            // Animate
            animationInit(
                addingEffect, 
                removingEffect,
                count
            );

            // Increment Count
            increseCount(count, setCount);
            console.log(count);
        }, 5720));

    }, [count]);

    return (
        <>
            <Title_First />
            <Title_Second />
            <Title_Transition />
        </>
    )
}
