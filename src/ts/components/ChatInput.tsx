import React, { useEffect, useState, useRef } from "react";
import { DashComponentProps, PersistenceProps } from "../props";
import classNames from "classnames";

type Props = {
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
  disabled?: boolean;
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
  placeholder?: string;
  /**
   * Defines the number of rows in a text input area.
   */
  rows?: number;
  /**
   * Input value for controlled component after submit.
   */
  value_on_submit: string;
  /**
   * Input value for controlled component.
   */
  value?: string;
} & DashComponentProps &
  PersistenceProps;

/**
 * Capture chat input from user
 */
const ChatInput = (props: Props) => {
  const {
    setProps,
    id,
    className,
    autofocus,
    debounce,
    disabled,
    maxlength,
    n_submit_timestamp,
    n_submit,
    persisted_props,
    persistence_type,
    persistence,
    placeholder,
    rows,
    value_on_submit,
    value,
    ...other
  } = props;

  const inputRef = useRef(null);
  const [valueState, setValueState] = useState(value || undefined);

  const inputClass = classNames("position-relative", className);
  const textareaClass = classNames("form-control");
  const btnClass = classNames(
    "btn",
    "btn-outline-primary",
    "border-0",
    "position-absolute",
    "bottom-0",
    "end-0",
    "m-1",
    "rounded-4"
  );

  useEffect(() => {
    if (autofocus) {
      inputRef.current.focus();
    }
  }, [disabled]);

  useEffect(() => {
    if (value !== valueState) {
      setValueState(value || undefined);
    }
  }, [value]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValueState(newValue);
    if (!debounce && setProps) {
      setProps({ value: newValue });
    }
  };

  const onBlur = () => {
    if (debounce && setProps) {
      setProps({ value: inputRef.current.value });
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      setProps &&
      e.key === "Enter" &&
      e.altKey === false &&
      e.shiftKey === false
    ) {
      e.preventDefault();
      const payload: Record<string, any> = {
        n_submit: n_submit + 1,
        n_submit_timestamp: Date.now(),
        value_on_submit: inputRef.current.value,
        value: undefined,
      };
      setValueState(undefined);
      setProps(payload);
    }
  };

  const onClick = () => {
    if (setProps) {
      const payload: Record<string, any> = {
        n_submit: n_submit + 1,
        n_submit_timestamp: Date.now(),
        value_on_submit: inputRef.current.value,
        value: undefined,
      };
      setValueState(undefined);
      setProps(payload);
    }
  };

  return (
    <div id={id} className={inputClass} {...other}>
      <textarea
        autoFocus={autofocus}
        className={textareaClass}
        disabled={disabled}
        maxLength={maxlength}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        ref={inputRef}
        rows={rows}
        style={{ paddingRight: "50px" }}
        value={value}
      />
      <button
        type="button"
        className={btnClass}
        disabled={disabled}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
        </svg>
      </button>
    </div>
  );
};

ChatInput.defaultProps = {
  debounce: false,
  maxlength: 4000,
  n_submit_timestamp: -1,
  n_submit: 0,
  persisted_props: ["value"],
  persistence_type: "local",
  placeholder: "Type a message...",
  rows: 2,
  value_on_submit: undefined,
  value: undefined,
};

export default ChatInput;
