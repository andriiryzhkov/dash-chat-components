% Auto-generated: do not edit by hand
\name{chatInput}

\alias{chatInput}

\title{ChatInput component}

\description{
Capture chat input from user
}

\usage{
chatInput(id=NULL, autofocus=NULL, className=NULL, debounce=NULL,
disabled=NULL, maxlength=NULL, n_submit=NULL,
n_submit_timestamp=NULL, persisted_props=NULL,
persistence=NULL, persistence_type=NULL, placeholder=NULL,
rows=NULL, style=NULL, value=NULL, value_on_submit=NULL)
}

\arguments{
\item{id}{Character. Unique ID to identify this component in Dash callbacks.}

\item{autofocus}{Logical. The element should be automatically focused after the page loaded.}

\item{className}{Character. Often used with CSS to style elements with common properties.}

\item{debounce}{Logical. If True, changes to input will be sent back to the Dash server only
on enter or when losing focus. If it's False, it will sent the value
back on every change.}

\item{disabled}{Logical. Indicates whether the user can interact with the element.}

\item{maxlength}{Numeric. Defines the maximum number of characters allowed in the input element.}

\item{n_submit}{Numeric. An integer that represents the number of times that the Enter key was
pressed while the input area had focus or submit button has been clicked on.}

\item{n_submit_timestamp}{Numeric. An integer that represents the time (in ms since 1970) at which n_submit
changed.}

\item{persisted_props}{List of characters. Properties whose user interactions will persist after refreshing the
component or the page. Since only `value` is allowed this prop can
normally be ignored.}

\item{persistence}{Character | numeric. Used to allow user interactions in this component to be persisted when
the component - or the page - is refreshed. If `persisted` is truthy and
hasn't changed from its previous value, a `value` that the user has
changed while using the app will keep that change, as long as
the new `value` also matches what was given originally.
Used in conjunction with `persistence_type`.}

\item{persistence_type}{A value equal to: 'local', 'session', 'memory'. Where persisted user changes will be stored:
memory: only kept in memory, reset on page refresh.
local: window.localStorage, data is kept after the browser quit.
session: window.sessionStorage, data is cleared once the browser quit.}

\item{placeholder}{Character. Provides a hint to the user of what can be entered in the field.}

\item{rows}{Numeric. Defines the number of rows in a text input area.}

\item{style}{Logical | numeric | character | named list | unnamed list. Defines CSS styles which will override styles previously set.}

\item{value}{Character. Input value for controlled component.}

\item{value_on_submit}{Character. Input value for controlled component after submit.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

