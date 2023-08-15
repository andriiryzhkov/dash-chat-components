# AUTO GENERATED FILE - DO NOT EDIT

export chatmessage

"""
    chatmessage(;kwargs...)
    chatmessage(children::Any;kwargs...)
    chatmessage(children_maker::Function;kwargs...)


A ChatMessage component.
Display single chat message
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Content of the message
- `id` (String; optional): Unique ID to identify this component in Dash callbacks.
- `avatar` (String; optional): Avatar
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `direction` (String; required): Direction of the mssage: received or outgoing
- `style` (Bool | Real | String | Dict | Array; optional): Defines CSS styles which will override styles previously set.
- `timestamp` (Real; optional): Time
"""
function chatmessage(; kwargs...)
        available_props = Symbol[:children, :id, :avatar, :className, :direction, :style, :timestamp]
        wild_props = Symbol[]
        return Component("chatmessage", "ChatMessage", "dash_chat_components", available_props, wild_props; kwargs...)
end

chatmessage(children::Any; kwargs...) = chatmessage(;kwargs..., children = children)
chatmessage(children_maker::Function; kwargs...) = chatmessage(children_maker(); kwargs...)

