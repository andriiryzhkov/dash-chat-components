import React from "react";
import { DashComponentProps } from "../props";

type Props = {
  /**
   * Content of the chat
   */
  children?: React.ReactNode;
} & DashComponentProps;

/**
 * Main chat container
 */
const Chat = (props: Props) => {
  const { setProps, id, children, ...other } = props;

  return (
    <div id={id} {...other}>
      {children}
    </div>
  );
};

Chat.defaultProps = {};

export default Chat;
