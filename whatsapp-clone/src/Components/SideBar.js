import React from 'react'
import './SideBar.css';
import ChatIcon from '@material-ui/icons/Chat';
import { DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar 
                    src="https://avatars.githubusercontent.com/u/71736133?s=400&u=ce47ee438ce2b048c68ff4638ed9988e66969a5b&v=4"
                />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge/>
                    </IconButton>

                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default SideBar
