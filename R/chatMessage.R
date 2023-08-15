# AUTO GENERATED FILE - DO NOT EDIT

#' @export
chatMessage <- function(children=NULL, id=NULL, avatar=NULL, className=NULL, direction=NULL, style=NULL, timestamp=NULL) {
    
    props <- list(children=children, id=id, avatar=avatar, className=className, direction=direction, style=style, timestamp=timestamp)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ChatMessage',
        namespace = 'dash_chat_components',
        propNames = c('children', 'id', 'avatar', 'className', 'direction', 'style', 'timestamp'),
        package = 'dashChatComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
