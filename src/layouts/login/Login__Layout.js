import React, { Component } from 'react';
import './Login__LayoutStyle.css';



export class Login__Layout extends Component {
    constructor(props){
        super();
    }

    render() {
       
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
                        {this.props.children[3]}  
                    </div>
                </main>
                
                {/*Footer*/}
                <footer className="login-footer">
                    <nav className="footer__nav">
                        <a href="#">Terms of Service</a> 
                        <a href="#">Privacy Policy</a> 
                        <a href="#">Help</a>
                        <a href="#">iPhone App</a> 
                        <a href="#">Android App</a> 
                        <a href="#">Users</a> 
                        <a href="#">Collections</a> 
                        <a href="#">Explore</a>
                    </nav>
                </footer>
                
            </>
        )
    }
}

export default Login__Layout;
