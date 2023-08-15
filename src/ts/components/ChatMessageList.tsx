import React, { useEffect, useRef } from "react";
import { DashComponentProps } from "../props";
import classNames from "classnames";

type Props = {
  /**
   * ChatMessageList content
   */
  children?: React.ReactNode;
  /**
   * Indicates whether the recieved message avatar should be displayed.
   */
  avatarReceived: boolean;
  /**
   * Indicates whether the outgoing message avatar should be displayed.
   */
  avatarOutgoing: boolean;
  /**
   * Indicates whether the message timestamp should be displayed.
   */
  timestamp: boolean;
} & DashComponentProps;

/**
 * Display list of chat messages
 */
const ChatMessageList = (props: Props) => {
  const {
    setProps,
    children,
    id,
    className,
    avatarReceived,
    avatarOutgoing,
    timestamp,
    ...other
  } = props;
  const ref = useRef(null);

  const messageListClass = classNames(
    "vstack",
    "w-100",
    "position-relative",
    "overflow-auto",
    className, {
      "avatar-received-none": !avatarReceived,
      "avatar-outgoing-none": !avatarOutgoing,
      "timestamp-none": !timestamp,
    }
  );

  const scrollToLastMessage = () => {
    const lastChildElement = ref.current?.lastElementChild;
    lastChildElement?.scrollIntoView({ behavior: "instant" });
  };

  useEffect(() => {
    scrollToLastMessage();
  }, [children]);

  return (
    <div id={id} ref={ref} className={messageListClass} {...other}>
      {children}
    </div>
  );
};

ChatMessageList.defaultProps = {
  avatarReceived: true,
  avatarOutgoing: false,
  timestamp: true
};

export default ChatMessageList;
