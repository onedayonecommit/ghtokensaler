import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMemaLogin } from '../../hooks/WalletConnect'
import { mainlogo, profile, shopping_bag, wallet } from '../../image'
import "./MainHeader.css"
const MainHeader = () => {
    const [modal_option, setModal_option] = useState(false);
    const showModal = () => {
        setModal_option(!modal_option)
    }

    return (
        <div className='main_header_container'>
            <div className='main_header_div'>
                <div className='main_logo_div'>
                    <img className='main_logo_image' src={mainlogo}></img>
                </div>
                <div className='main_searchbox_div'>
                    <input className='main_searchbox_input' />
                </div>
                <div className='main_menu_div'>
                    <Link><div className='main_menu_child1 main_menu_child'>explore</div></Link>
                    <Link><div className='main_menu_child2 main_menu_child'>explore</div></Link>
                    <Link><div className='main_menu_child3 main_menu_child'>explore</div></Link>
                    <Link><div className='main_menu_child4 main_menu_child'>explore</div></Link>
                </div>
                <div className='main_menu_mypage_div'>
                    <Link><img className='main_mypage_child1 main_mypage_child' src={profile} /></Link>
                    <button onClick={() => {
                        useMemaLogin();
                    }}><img className='main_mypage_child2 main_mypage_child' src={wallet} /></button>
                    <Link><img className='main_mypage_child3 main_mypage_child' src={shopping_bag} /></Link>
                </div>
            </div>
        </div>
    )
}

export default MainHeader