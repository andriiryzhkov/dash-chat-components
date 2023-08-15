# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ChatMessageList(Component):
    """A ChatMessageList component.
Display list of chat messages

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    ChatMessageList content.

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- avatarOutgoing (boolean; default False):
    Indicates whether the outgoing message avatar should be displayed.

- avatarReceived (boolean; default True):
    Indicates whether the recieved message avatar should be displayed.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- style (boolean | number | string | dict | list; optional):
    Defines CSS styles which will override styles previously set.

- timestamp (boolean; default True):
    Indicates whether the message timestamp should be displayed."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_chat_components'
    _type = 'ChatMessageList'
    @_explicitize_args
    def __init__(self, children=None, avatarReceived=Component.UNDEFINED, avatarOutgoing=Component.UNDEFINED, timestamp=Component.UNDEFINED, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'avatarOutgoing', 'avatarReceived', 'className', 'style', 'timestamp']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'avatarOutgoing', 'avatarReceived', 'className', 'style', 'timestamp']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(ChatMessageList, self).__init__(children=children, **args)
