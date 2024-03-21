
import React, { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
function Header() {
    //WEB3 bağlantısı Kontrol Kodu
    const { publicKey, connect, connected } = useWallet();
    const [walletAddress, setWalletAddress] = useState('');

    useEffect(() => {
        if (publicKey) {
            // Cüzdan adresini güncelleyin
            setWalletAddress(publicKey.toString());
        }
    }, [publicKey]);

   return (
       <header className="header-nav-center crypto_dark" id="myNavbar">
           <div className="container">

               <nav className="navbar navbar-expand-lg navbar-light">
                   <a className="navbar-brand c-white" href="../../index.html">
                       <img className="logo" src="../../assets/img/logo.svg" alt="logo"/>
                   </a>
                   <button className="navbar-toggler menu ripplemenu" type="button" data-toggle="collapse"
                           data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                           aria-expanded="false"
                           aria-label="Toggle navigation">
                       <svg viewBox="0 0 64 48">
                           <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
                           <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
                           <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
                       </svg>
                   </button>

                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul className="navbar-nav mr-auto nav-pills d-block d-sm-none">
                           <li className="nav-item">
                               <a className="nav-link" href="#Vision">Our Vision</a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" href="#Features">Features</a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" href="#Token">Token</a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" href="#Roadmap">Roadmap</a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" href="#FAQ">FAQ</a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" href="#Team">Team</a>
                           </li>
                           <li className="nav-item">
                               <a className="nav-link" href="#Contact">Contact</a>
                           </li>
                       </ul>
                       <div className="nav_account ml-auto">
                           <button type="button" className="btn drop_download">
                               <span>Download</span>
                               <div className="links-btn">
                                   <a href="#">Windows</a>
                                   <a href="#">Google Play</a>
                                   <a href="#">Apple</a>
                               </div>
                           </button>
                           <label className="c-white mr-5">Wallet Address: {connected ? walletAddress : 'Not Connected'}</label>
                           <WalletMultiButton/>
                       </div>
                   </div>
               </nav>

           </div>

       </header>
   )
}

export default Header