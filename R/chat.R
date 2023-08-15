# AUTO GENERATED FILE - DO NOT EDIT

#' @export
chat <- function(children=NULL, id=NULL, className=NULL, height=NULL, style=NULL, width=NULL) {
    
    props <- list(children=children, id=id, className=className, height=height, style=style, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Chat',
        namespace = 'dash_chat_components',
        propNames = c('children', 'id', 'className', 'height', 'style', 'width'),
        package = 'dashChatComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
