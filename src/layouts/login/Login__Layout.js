import React, { Component } from 'react';
import './Login__LayoutStyle.css';



export class Login__Layout extends Component {
    constructor(props){
        super();
    }

    
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
                {/*Header*/}
                <header className="login-header">
                    <div className="header__left">
                        {this.props.children[0]}
                    </div>
                    <div className="header__right">
                        {this.props.children[1]}
                    </div>
                </header> 
                
                {/*Content*/}
                <main className="login-content">
                    {/*Content*/}
                    <div className="content__title">
                    {this.props.children[2]}
                    </div>

                    {/*Colash*/}
                    <div className="login-colash">
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
                        
                    </div>

                    {/*Footer*/}
                    <footer className="login-footer">
                    1
                    </footer>
                </main>
                
            </>
        )
    }
}

export default Login__Layout;
