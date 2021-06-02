import { Button } from '@material-ui/core';
import Send from '@material-ui/icons/Send';
import React from 'react'
import styled from 'styled-components';

function ChatInput({ channelName, roomId }) {

    const sendMessage = (e) => {
        e.preventDefault();
    };
    return (
        <ChatInputContainer>
            <form>
                <input placeholder={`Message #ROOM`}/>
                <Button hidden type="submit" onClick={sendMessage}>
                    <Send/>
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput;

const ChatInputContainer = styled.div ``;