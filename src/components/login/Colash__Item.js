import React, { Component } from 'react';
import './Colash__ItemStyle.css';


export class Colash__Item extends Component {
    
    colashImages(link){
        return (
            <>
                <img src={link} alt="colash-image" />
                <img src={link} alt="colash-image" />
                <img src={link} alt="colash-image" />
                <img src={link} alt="colash-image" />
                <img src={link} alt="colash-image" />
                <img src={link} alt="colash-image" />
            </>
        );
    }
    
    render() {
        const link = 'https://i.pinimg.com/236x/d3/fb/69/d3fb6973cddc1d875dc7c2e04525d2e7.jpg';
        return (
            <>
                <div className="colash__item">
                    {this.colashImages(link)}
                </div>

                <div className="colash__item">
                    {this.colashImages(link)}
                </div>

                <div className="colash__item">
                    {this.colashImages(link)}
                </div>

                <div className="colash__item">
                    {this.colashImages(link)}
                </div>

                <div className="colash__item">
                    {this.colashImages(link)}
                </div>

                <div className="colash__item">
                    {this.colashImages(link)}
                </div>

                <div className="colash__item">
                    {this.colashImages(link)}
                </div>
            </>
        )
    }
}

export default Colash__Item;
