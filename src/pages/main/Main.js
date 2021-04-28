import React from 'react';
import './main.css';
import LogoNavBar from '../../components/logoNavBar/LogoNavBar';
import Footer from '../../components/footer/Footer';
import MainPageBody from '../../components/mainPageBody/MainPageBody';

class Main extends React.Component {
    render () {
        return (
            <div className="mainPage">
                <LogoNavBar />
                <MainPageBody />
                <Footer />     
            </div>
        )
    }
}

export default Main;