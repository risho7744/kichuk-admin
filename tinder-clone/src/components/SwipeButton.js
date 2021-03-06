import { IconButton } from '@material-ui/core';
import React from 'react';
import './SwipeButton.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

function SwipeButton() {
    return (
        <div className="swipeButton">
           <IconButton className="swipeButton__repeat"> 
                <ReplayIcon fontSize="large"/>
            </IconButton> 
           
            <IconButton className="swipeButton__left"> 
                <CloseIcon fontSize="large"/>
            </IconButton>

            <IconButton className="swipeButton__star">
                <StarRateIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButton__right">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
                
            <IconButton className="swipeButton__lighting">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default SwipeButton
