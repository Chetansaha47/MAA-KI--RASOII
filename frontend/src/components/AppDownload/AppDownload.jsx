import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience  than ZOMATO AND SWIGGY Download <br />MAA KI RASOI App</p>
            <div className="app-download-platforms">
            <a href="https://play.google.com/store/games?device=windows&pli=1"target='_blank'>
                <img src={assets.play_store} alt="click" />
                </a>
                <a href="https://www.apple.com/in/store" target='_blank'>
                <img src={assets.app_store} alt="" />
                </a>
            </div>
        </div>
    )
}

export default AppDownload
