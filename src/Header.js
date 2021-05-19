import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOptions from './HeaderOptions'
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
import ChatIcon from "@material-ui/icons/Chat"
import NotificationsIcon from "@material-ui/icons/Notifications"

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <img 
                src="https://img-premium.flaticon.com/png/512/174/174857.png?token=exp=1621418985~hmac=e6b807fbdaedda8d96cff6758f18cf3c" 
                alt="" />

                <div className="header__search">
                    <SearchIcon /> 
                    <input
                        placeholder="search" 
                        type="text" 
                    />
                </div>

            </div>

            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title="Home" />
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOptions Icon={ChatIcon} title="Messaging" />
                <HeaderOptions Icon={NotificationsIcon} title="Notification" />
                <HeaderOptions 
                avatar="https://yt3.ggpht.com/yti/ANoDKi6oca8YgtoYm29uhWV3Qv9N3tuTstgPfITX56kav2Q=s88-c-k-c0x00ffffff-no-rj-mo" 
                title='me' />
            </div>
        </div>
    )
}

export default Header
