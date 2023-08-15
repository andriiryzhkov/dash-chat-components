# AUTO GENERATED FILE - DO NOT EDIT

#' @export
chatInput <- function(id=NULL, autofocus=NULL, className=NULL, debounce=NULL, disabled=NULL, maxlength=NULL, n_submit=NULL, n_submit_timestamp=NULL, persisted_props=NULL, persistence=NULL, persistence_type=NULL, placeholder=NULL, rows=NULL, style=NULL, value=NULL, value_on_submit=NULL) {
    
    props <- list(id=id, autofocus=autofocus, className=className, debounce=debounce, disabled=disabled, maxlength=maxlength, n_submit=n_submit, n_submit_timestamp=n_submit_timestamp, persisted_props=persisted_props, persistence=persistence, persistence_type=persistence_type, placeholder=placeholder, rows=rows, style=style, value=value, value_on_submit=value_on_submit)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ChatInput',
        namespace = 'dash_chat_components',
        propNames = c('id', 'autofocus', 'className', 'debounce', 'disabled', 'maxlength', 'n_submit', 'n_submit_timestamp', 'persisted_props', 'persistence', 'persistence_type', 'placeholder', 'rows', 'style', 'value', 'value_on_submit'),
        package = 'dashChatComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
