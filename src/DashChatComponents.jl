
module DashChatComponents
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.3"

include("jl/chat.jl")
include("jl/chatinput.jl")
include("jl/chatmessage.jl")
include("jl/chatmessagelist.jl")
include("jl/chatmessagetyping.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_chat_components",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dash_chat_components.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_chat_components.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
