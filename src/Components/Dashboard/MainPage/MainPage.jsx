// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
    FaMoneyCheckAlt,
    FaBitcoin,
    FaUserPlus,
    FaCreditCard,
} from 'react-icons/fa';
import {
    MdTransferWithinAStation,
    MdOutlineLocalAtm,
    MdOutlinePayment,
} from 'react-icons/md';
import Flag from '../../../assets/flag.jpg';
import './MainPage.css';
import Logo from '../../../assets/newLogo2.png';
import ProfilePic from '../../../assets/profile pic.jpeg';
import ResentTransaction from './ResentTransactions/ResentTransaction';

const MainPage = () => {
    return (
        <div>
            <div className="topBar">
                <div className="topHeader">
                    <div className="language">
                        <img src={Flag} className="BritishFlag" alt="Flag" />
                        <p>English</p>
                    </div>

                    <div className="logo">
                        <img src={Logo} className="Logo" alt="Logo" />
                    </div>

                    <div className="profilePic">
                        <img src={ProfilePic} className="profilePic" alt="Profile" />
                    </div>
                </div>

                <div className="accountInfo">
                    <p>SAVINGS</p>
                    <h1>$700,000</h1>
                    <p>ACCOUNT NUMBER</p>
                    <p>291****34**87</p>
                    <div className="creditDebitInfo">
                        <div>
                            <p>TOTAL CREDIT</p>
                            <p>JUL 2024</p>
                            <p>$0.00</p>
                        </div>
                        <div>
                            <p>TOTAL DEBIT</p>
                            <p>JUL 2024</p>
                            <p>$0.00</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="actions">
                <div>
                    <div className="actionItem">
                        <MdTransferWithinAStation className='icons' />

                    </div>
                    <div className="boxItems">
                        
                        <p>Wire</p>
                        <p>Transfer</p>
                    </div>
                    <hr className='myLine' />

                </div>
                <div>
                    <div className="actionItem">
                        <MdOutlineLocalAtm className='icons' />
                    </div>
                    <div className="boxItems">
                        <p>Local </p>
                        <p>Transfer</p>
                    </div>
                    <hr className='myLine' />

                </div>
                
                <div>
                    <div className="actionItem">
                        <MdOutlinePayment className='icons' />
                    </div>
                    <div className="boxItems">
                        <p>Internal </p>
                        <p>Transfer</p>
                    </div>
                <hr className='myLine'/>
                </div>
                
                <div>
                    <div className="actionItem">
                        <FaBitcoin className='icons' />
                    </div>
                    <div className="boxItems">
                        <p>Buy</p>
                        <p> Crypto</p>
                    </div>
                    <hr className='myLine' />

                </div>
                <div>
                    <div className="actionItem">
                        <FaMoneyCheckAlt className='icons' />
                    </div>
                    <div className="boxItems">
                        <p>Pay</p>
                        <p> Bills</p>
                    </div>
                    <hr className='myLine' />

                </div>
                
                <div>
                    <div className="actionItem">
                        <FaUserPlus className='icons' />
                    </div>
                    <div className="boxItems">
                        <p>Add</p>
                        <p>Beneficiary</p>
                    </div>

                    <hr className='myLine' />
                </div>
                <div>
                    <div className="actionItem">
                        <FaCreditCard className='icons' />
                    </div>
                    <div className="boxItems">
                        <p>Card</p>
                        <p> Deposit</p>
                    </div>

                    <hr className='myLine' />

                </div>

                <div>
                    <div className="actionItem">
                        <FaBitcoin className='icons' />
                    </div>
                    <div className="boxItems">
                        <p>Crypto</p>
                        <p>Deposit</p>
                    </div>
                    <hr className='myLine' />

                </div>
                <div>
                    <div className="actionItem">
                        <FaMoneyCheckAlt className='icons' />

                    </div>
                    <div className="boxItems">
                        <p>Check</p>
                        <p> Deposit</p>
                    </div>
                    <hr className='myLine' />

                </div>
            </div>

            <ResentTransaction/>

            {/* <div >
                <button>Settings</button>
                <button>Notifications</button>
                <button>Home</button>
                <button>Support</button>
                <button>Logout</button>
            </div> */}
        </div>
    );
};

export default MainPage;
