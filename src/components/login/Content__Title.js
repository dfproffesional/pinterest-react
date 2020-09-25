import React, { Component } from 'react';
import './Content__TitleStyle.css';

export class Content__Title extends Component {
    render() {
        return (
            <>
                <div className="title__first">
                    Get your next
                </div>
                <div className="title__second">
                    <p>weeknight dinner idea </p>
                    {/*<p>home decor idea </p>
                    <p>new look outfit </p>
                    <p>green thumb idea </p>*/}
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
}

export default Content__Title;
