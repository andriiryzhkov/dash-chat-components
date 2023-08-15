# AUTO GENERATED FILE - DO NOT EDIT

export chat

"""
    chat(;kwargs...)
    chat(children::Any;kwargs...)
    chat(children_maker::Function;kwargs...)


A Chat component.
Main chat container
Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Content of the chat
- `id` (String; optional): Unique ID to identify this component in Dash callbacks.
- `className` (String; optional): Often used with CSS to style elements with common properties.
- `height` (Real; optional): Height of the chat container
- `style` (Bool | Real | String | Dict | Array; optional): Defines CSS styles which will override styles previously set.
- `width` (Real; optional): Width of the chat container
"""
function chat(; kwargs...)
        available_props = Symbol[:children, :id, :className, :height, :style, :width]
        wild_props = Symbol[]
        return Component("chat", "Chat", "dash_chat_components", available_props, wild_props; kwargs...)
end

chat(children::Any; kwargs...) = chat(;kwargs..., children = children)
chat(children_maker::Function; kwargs...) = chat(children_maker(); kwargs...)

