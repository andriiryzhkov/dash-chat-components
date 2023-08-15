import React from "react";
import { DashComponentProps } from "../props";

type Props = {
  /**
   * Content of the chat
   */
  children?: React.ReactNode;
  /**
   * Height of the chat container
   */
  height?: number;
  /**
   * Width of the chat container
   */
  width?: number;
} & DashComponentProps;

/**
 * Main chat container
 */
const Chat = (props: Props) => {
  const { setProps, id, children, height, width, ...other } = props;

  return (
    <div id={id} style={{ height: height }} {...other}>
      {children}
    </div>
  );
};

Chat.defaultProps = {};

export default Chat;
