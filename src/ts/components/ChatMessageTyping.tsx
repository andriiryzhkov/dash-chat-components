import React, { useState } from "react";
import "./ChatMessage.css";
import "./ChatMessageTyping.css";
import ChatMessage from "./ChatMessage";
import { DashComponentProps } from "../props";

type Props = {
    /**
     * Avatar
     */
    avatar?: string;
    /**
     * Direction of the mssage: received or outgoing
     */
    direction: string;
} & DashComponentProps;

/**
 * Display user typing message
 */
const ChatMessageTyping = (props: Props) => {
    const {
        setProps,
        id,
        avatar,
        className,
        direction,
        ...other
    } = props;


    return (
        <ChatMessage setProps={setProps} avatar={avatar} direction={direction} className={className}>
            <div className="typing">
                <div className="typing__dot"></div>
                <div className="typing__dot"></div>
                <div className="typing__dot"></div>
            </div>
        </ChatMessage>
    );
};

ChatMessageTyping.defaultProps = {
    avatar: undefined,
    timestamp: -1,
};

export default ChatMessageTyping;
