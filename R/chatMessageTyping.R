# AUTO GENERATED FILE - DO NOT EDIT

#' @export
chatMessageTyping <- function(id=NULL, avatar=NULL, className=NULL, direction=NULL, style=NULL) {
    
    props <- list(id=id, avatar=avatar, className=className, direction=direction, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ChatMessageTyping',
        namespace = 'dash_chat_components',
        propNames = c('id', 'avatar', 'className', 'direction', 'style'),
        package = 'dashChatComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
