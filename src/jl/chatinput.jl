# AUTO GENERATED FILE - DO NOT EDIT

export chatinput

"""
    chatinput(;kwargs...)

A ChatInput component.
Capture chat input from user
Keyword arguments:
- `id` (String; optional): Unique ID to identify this component in Dash callbacks.
- `autofocus` (Bool; optional): The element should be automatically focused after the page loaded.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `debounce` (Bool; optional): If True, changes to input will be sent back to the Dash server only
on enter or when losing focus. If it's False, it will sent the value
back on every change.
- `disabled` (Bool; optional): Indicates whether the user can interact with the element.
- `maxlength` (Real; optional): Defines the maximum number of characters allowed in the input element.
- `n_submit` (Real; optional): An integer that represents the number of times that the Enter key was
pressed while the input area had focus or submit button has been clicked on.
- `n_submit_timestamp` (Real; optional): An integer that represents the time (in ms since 1970) at which n_submit
changed.
- `persisted_props` (Array of Strings; optional): Properties whose user interactions will persist after refreshing the
component or the page. Since only `value` is allowed this prop can
normally be ignored.
- `persistence` (String | Real; optional): Used to allow user interactions in this component to be persisted when
the component - or the page - is refreshed. If `persisted` is truthy and
hasn't changed from its previous value, a `value` that the user has
changed while using the app will keep that change, as long as
the new `value` also matches what was given originally.
Used in conjunction with `persistence_type`.
- `persistence_type` (a value equal to: 'local', 'session', 'memory'; optional): Where persisted user changes will be stored:
memory: only kept in memory, reset on page refresh.
local: window.localStorage, data is kept after the browser quit.
session: window.sessionStorage, data is cleared once the browser quit.
- `placeholder` (String; optional): Provides a hint to the user of what can be entered in the field.
- `rows` (Real; optional): Defines the number of rows in a text input area.
- `style` (Bool | Real | String | Dict | Array; optional): Defines CSS styles which will override styles previously set.
- `value` (String; optional): Input value for controlled component.
- `value_on_submit` (String; optional): Input value for controlled component after submit.
"""
function chatinput(; kwargs...)
        available_props = Symbol[:id, :autofocus, :className, :debounce, :disabled, :maxlength, :n_submit, :n_submit_timestamp, :persisted_props, :persistence, :persistence_type, :placeholder, :rows, :style, :value, :value_on_submit]
        wild_props = Symbol[]
        return Component("chatinput", "ChatInput", "dash_chat_components", available_props, wild_props; kwargs...)
end

