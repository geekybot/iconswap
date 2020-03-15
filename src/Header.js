import React from 'react'
import { Link } from 'react-router-dom'
import logo from './static/img/logo.png'
import { WALLET_LOCAL_STORAGE_KEY } from './constants'
import './Header.css'
import { api } from './API'
import { useHistory } from 'react-router-dom';
import { ReactComponent as SwapListing } from './static/svg/listing.svg'
import { ReactComponent as PowerOffSvg } from './static/svg/PowerOff.svg'
import { ReactComponent as AccountSvg } from './static/svg/Account.svg'
import { ReactComponent as SwapSvg } from './static/svg/Swap.svg'

const Header = ({ wallet, setWallet }) => {

    const history = useHistory();

    const disconnectClick = () => {
        localStorage.removeItem(WALLET_LOCAL_STORAGE_KEY)
        setWallet(null)
    }

    const AccountClick = () => {
        history.push("/account/orders");
    }

    const createSwapClick = () => {
        history.push("/");
    }

    const listSwapsClick = () => {
        history.push("/list");
    }

    /*
    const listSwaps2Click = () => {
        history.push("/list2");
    }
    */

    return (
        <div id="header">
            <div id="header-content-left">
                <Link to="/"><img src={logo} height="60" alt="logo" /></Link>
                <Link to="/" id="logo-text-href"><div id="logotext">ICONSwap</div></Link>
                <div className="header-bubble">Status: Beta</div>
                <div className="header-bubble">Network: {api.getNetworkName()}</div>
            </div>

            {wallet && <>
                <div id="header-content-right">

                    <button className="big-button button-svg-container header-buttons" onClick={() => { disconnectClick() }}>
                        <div className="svg-icon-button"><PowerOffSvg /></div>
                        <div className="svg-text-button">Disconnect</div>
                    </button>

                    <button className="big-button button-svg-container header-buttons" onClick={() => { AccountClick() }}>
                        <div className="svg-icon-button"><AccountSvg /></div>
                        <div className="svg-text-button">Account</div>
                    </button>

                    <button className="big-button button-svg-container header-buttons" onClick={() => { createSwapClick() }}>
                        <div className="svg-icon-button"><SwapSvg /></div>
                        <div className="svg-text-button">Create Swap</div>
                    </button>

                    <button className="big-button button-svg-container header-buttons" onClick={() => { listSwapsClick() }}>
                        <div className="svg-icon-button"><SwapListing /></div>
                        <div className="svg-text-button">List Swaps</div>
                    </button>

                    {/*
                    <button className="big-button button-svg-container header-buttons" onClick={() => { listSwaps2Click() }}>
                        <div className="svg-icon-button"><SwapListing /></div>
                        <div className="svg-text-button">List Swaps2</div>
                    </button>
                    */}
                </div>
            </>}
        </div>
    )
}

export default Header