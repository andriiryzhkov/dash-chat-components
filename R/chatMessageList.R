# AUTO GENERATED FILE - DO NOT EDIT

#' @export
chatMessageList <- function(children=NULL, id=NULL, avatarOutgoing=NULL, avatarReceived=NULL, className=NULL, style=NULL, timestamp=NULL) {
    
    props <- list(children=children, id=id, avatarOutgoing=avatarOutgoing, avatarReceived=avatarReceived, className=className, style=style, timestamp=timestamp)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ChatMessageList',
        namespace = 'dash_chat_components',
        propNames = c('children', 'id', 'avatarOutgoing', 'avatarReceived', 'className', 'style', 'timestamp'),
        package = 'dashChatComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
