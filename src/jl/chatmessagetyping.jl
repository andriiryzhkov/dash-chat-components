# AUTO GENERATED FILE - DO NOT EDIT

export chatmessagetyping

"""
    chatmessagetyping(;kwargs...)

A ChatMessageTyping component.
Display user typing message
Keyword arguments:
- `id` (String; optional): Unique ID to identify this component in Dash callbacks.
- `avatar` (String; optional): Avatar
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `direction` (String; required): Direction of the mssage: received or outgoing
- `style` (Bool | Real | String | Dict | Array; optional): Defines CSS styles which will override styles previously set.
"""
function chatmessagetyping(; kwargs...)
        available_props = Symbol[:id, :avatar, :className, :direction, :style]
        wild_props = Symbol[]
        return Component("chatmessagetyping", "ChatMessageTyping", "dash_chat_components", available_props, wild_props; kwargs...)
end

