import React, { useState } from "react";
import "./ChatMessage.css";
import { DashComponentProps } from "../props";
import classNames from "classnames";
import { formatTimestamp } from "../utils";

type Props = {
  /**
   * Avatar
   */
  avatar?: string;
  /**
   * Content of the message
   */
  children?: React.ReactNode;
  /**
   * Direction of the mssage: received or outgoing
   */
  direction: string;
  /**
   * Time
   */
  timestamp: number;
} & DashComponentProps;

const Avatar = ({ src, direction, className }) => {
  const [error, setError] = useState(false);

  const fallBackClass = classNames(
    "rounded-circle",
    "bg-light",
    "d-flex",
    "justify-content-center",
    "align-items-center",
    className
  );
  const imgClass = classNames("rounded-circle", className);

  const onError = () => {
    setError(true);
  };

  return error ? (
    <div style={{ width: 45, height: 45 }} className={fallBackClass}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        {direction === "received" ? (
          <>
            <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
            <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
          </>
        ) : (
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
        )}
      </svg>
    </div>
  ) : (
    <img
      src={src}
      width={45}
      height={45}
      className={imgClass}
      onError={onError}
    />
  );
};

/**
 * Display single chat message
 */
const ChatMessage = (props: Props) => {
  const {
    setProps,
    children,
    id,
    avatar,
    className,
    direction,
    timestamp,
    ...other
  } = props;

  const messageClass = classNames(
    "chat-message",
    `chat-message-${direction}`,
    "d-flex",
    "justify-content-end",
    className,
    {
      "flex-row-reverse": direction === "received",
      "flex-row": direction === "outgoing",
    }
  );
  const messageCardClass = classNames(
    "mb-1",
    "mw-75",
    "d-flex",
    "flex-column",
    {
      "align-items-start": direction === "received",
      "align-items-end": direction === "outgoing",
    }
  );
  const messageContentClass = classNames(
    "chat-message-content",
    "small",
    "rounded-3",
    "p-3",
    "mb-1",
    "text-break",
    className,
    {
      "bg-secondary-subtle": direction === "received",
      "bg-primary text-white": direction === "outgoing",
    }
  );
  const messageTimeClass = classNames(
    "chat-message-time",
    "small",
    "mb-2",
    "text-muted",
    className,
    {
      "text-start": direction === "received",
      "text-end": direction === "outgoing",
      "d-none": timestamp === -1,
    }
  );
  const messageAvatarContainerClass = classNames(
    {
      "chat-message-avatar-container-received": direction === "received",
      "chat-message-avatar-container-outgoing": direction === "outgoing",
    }
  );
  const messageAvatarClass = classNames(
    "chat-message-avatar",
    `chat-message-avatar-${direction}`,
    "mb-2",
    "text-muted",
    className,
    {
      "d-none": avatar === undefined,
      "float-start": direction === "received",
      "float-end": direction === "outgoing",
    }
  );

  return (
    <div id={id} className={messageClass} {...other}>
      <div className={messageCardClass} style={{ maxWidth: "75%" }}>
        <div className={messageContentClass}>{children}</div>
        <p className={messageTimeClass}>{formatTimestamp(timestamp)}</p>
      </div>
      <div
        className={messageAvatarContainerClass}
        style={avatar !== undefined ? { width: "53px" } : {}}
      >
        <Avatar
          src={avatar}
          direction={direction}
          className={messageAvatarClass}
        />
      </div>
    </div>
  );
};

ChatMessage.defaultProps = {
  avatar: undefined,
  timestamp: -1,
};

export default ChatMessage;
