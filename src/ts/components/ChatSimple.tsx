import React, { useEffect } from "react";
import { DashComponentProps, PersistenceProps } from "../props";
import { ChatInput, ChatMessageList, ChatMessage, ChatMessageTyping } from "..";

type Props = {
  /**
   * Messages list
   */
  messages?: Array<{
    /**
     * Avatar
     */
    avatar: string;
    /**
     * Direction of the mssage: received or outgoing
     */
    direction: string;
    /**
     * Content of the message
     */
    content: string;
    /**
     * Time
     */
    timestamp: number;
  }>;
  /**
   * Indicates whether the recieved message avatar should be displayed.
   */
  avatarReceived?: string;
  /**
   * Indicates whether the outgoing message avatar should be displayed.
   */
  avatarOutgoing?: string;
  /**
   * Indicates whether the message timestamp should be displayed.
   */
  timestampDisplay: boolean;
  /**
   * The element should be automatically focused after the page loaded.
   */
  autofocus?: boolean;
  /**
   * If True, changes to input will be sent back to the Dash server only
   * on enter or when losing focus. If it's False, it will sent the value
   * back on every change.
   */
  debounce: boolean;
  /**
   * Indicates whether the user can interact with the element.
   */
  disabled: boolean;
  /**
   * Defines the maximum number of characters allowed in the input element.
   */
  maxlength?: number;
  /**
   * An integer that represents the number of times that the Enter key was
   * pressed while the input area had focus or submit button has been clicked on.
   */
  n_submit: number;
  /**
   * An integer that represents the time (in ms since 1970) at which n_submit
   * changed.
   */
  n_submit_timestamp: number;
  /**
   * Provides a hint to the user of what can be entered in the field.
   */
  placeholder: string;
  /**
   * Defines the number of rows in a text input area.
   */
  rows?: number;
  /**
   * Input value for controlled component.
   */
  value?: string;
  /**
   * Input value for controlled component after submit.
   */
  value_on_submit: string;
} & DashComponentProps &
  PersistenceProps;

/**
 * Simple chat component
 */
const ChatSimple = (props: Props) => {
  const {
    setProps,
    messages,
    id,
    className,
    avatarReceived,
    avatarOutgoing,
    timestampDisplay,
    value,
    autofocus,
    debounce,
    disabled,
    maxlength,
    n_submit,
    n_submit_timestamp,
    value_on_submit,
    placeholder,
    persistence,
    persisted_props,
    persistence_type,
    rows,
    ...other
  } = props;

  useEffect(() => {
    if (value_on_submit !== undefined) {
      messages.push({
        avatar: avatarOutgoing,
        direction: "outgoing",
        content: value_on_submit,
        timestamp: new Date().getTime(),
      });
      setProps({ messages: messages });
    }
  }, [value_on_submit]);

  useEffect(() => {
    if (messages[messages.length - 1].direction === "outgoing") {
      setProps({ disabled: true });
    } else {
      setProps({ disabled: false });
    }
  }, [messages, value_on_submit]);

  return (
    <div id={id} className={className} {...other}>
      <ChatMessageList
        setProps={setProps}
        avatarReceived={avatarReceived !== undefined}
        avatarOutgoing={avatarOutgoing !== undefined}
        timestamp={timestampDisplay}
        className="px-2"
        style={{ height: "calc(100% - 65px)" }}
      >
        {messages.map((m) => (
          <ChatMessage
            setProps={setProps}
            avatar={m.avatar}
            direction={m.direction}
            timestamp={m.timestamp}
          >
            {m.content}
          </ChatMessage>
        ))}
        {messages[messages.length - 1].direction === "outgoing" ? (
          <ChatMessageTyping
            setProps={setProps}
            avatar={avatarReceived}
            direction="received"
          />
        ) : (
          <></>
        )}
      </ChatMessageList>
      <ChatInput
        setProps={setProps}
        autofocus={autofocus}
        debounce={debounce}
        disabled={disabled}
        maxlength={maxlength}
        n_submit={n_submit}
        n_submit_timestamp={n_submit_timestamp}
        value={value}
        value_on_submit={value_on_submit}
        placeholder={placeholder}
        persistence={persistence}
        persisted_props={persisted_props}
        persistence_type={persistence_type}
        rows={rows}
        className="mt-2 mx-2"
        style={{ height: "65px" }}
      />
    </div>
  );
};

ChatSimple.defaultProps = {
  avatarReceived: "",
  timestampDisplay: true,
  value: undefined,
  placeholder: "Type a message...",
  debounce: false,
  disabled: true,
  maxlength: 4000,
  n_submit: 0,
  n_submit_timestamp: -1,
  value_on_submit: undefined,
  persisted_props: ["value"],
  persistence_type: "local",
  rows: 2,
};

export default ChatSimple;
