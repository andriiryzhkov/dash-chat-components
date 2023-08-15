# AUTO GENERATED FILE - DO NOT EDIT

export chatmessagelist

"""
    chatmessagelist(;kwargs...)
    chatmessagelist(children::Any;kwargs...)
    chatmessagelist(children_maker::Function;kwargs...)


A ChatMessageList component.
Display list of chat messages
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): ChatMessageList content
- `id` (String; optional): Unique ID to identify this component in Dash callbacks.
- `avatarOutgoing` (Bool; optional): Indicates whether the outgoing message avatar should be displayed.
- `avatarReceived` (Bool; optional): Indicates whether the recieved message avatar should be displayed.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `style` (Bool | Real | String | Dict | Array; optional): Defines CSS styles which will override styles previously set.
- `timestamp` (Bool; optional): Indicates whether the message timestamp should be displayed.
"""
function chatmessagelist(; kwargs...)
        available_props = Symbol[:children, :id, :avatarOutgoing, :avatarReceived, :className, :style, :timestamp]
        wild_props = Symbol[]
        return Component("chatmessagelist", "ChatMessageList", "dash_chat_components", available_props, wild_props; kwargs...)
end

chatmessagelist(children::Any; kwargs...) = chatmessagelist(;kwargs..., children = children)
chatmessagelist(children_maker::Function; kwargs...) = chatmessagelist(children_maker(); kwargs...)

