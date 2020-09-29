import React, { Component, useState, useEffect } from 'react';
import './Content__TitleStyle.css';


function animationTitle(){
    let i = 0;
    let data = document.querySelectorAll('.title__second p');
    
    setTimeout(()=> {
        data[i].classList.add("effect");

        setInterval(()=>{
            console.log("Interval");
            
            if( i > 3 ) {
                i = 0;
                data[i].classList.add("effect");
            }

            data[i].classList.remove("effect");
            console.log('remove:');
    

            setTimeout(() => {
                let j = (i <= 3) ? i : 0;
                data[j].classList.add("effect");

                console.log(i);
                console.log('add');
    
            }, 800);

            
            i++;
        }, 5000)

        console.log("TimeOut First");
    }, 160);
    
}

export function Content__Title() {
    const [pagraph, setPagraph] = useState({
        html: null
    });

    const [timeId, setTimeId] = useState(0)

    
    useEffect(()=> {
        animationTitle(pagraph);
    }, []);

    return (
        <>
            <div className="title__first">
                Get your next {pagraph.html}
            </div>
            <div className="title__second">
                <p>weeknight dinner idea </p>
                <p>home decor idea </p>
                <p>new look outfit </p>
                <p>green thumb idea </p>
            </div>
            <div className="title__transitions">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </>
    )
}

//export default Content__Title;
