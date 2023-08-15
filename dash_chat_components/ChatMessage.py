# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ChatMessage(Component):
    """A ChatMessage component.
Display single chat message

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Content of the message.

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- avatar (string; default undefined):
    Avatar.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- direction (string; required):
    Direction of the mssage: received or outgoing.

- style (boolean | number | string | dict | list; optional):
    Defines CSS styles which will override styles previously set.

- timestamp (number; default -1):
    Time."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_chat_components'
    _type = 'ChatMessage'
    @_explicitize_args
    def __init__(self, children=None, avatar=Component.UNDEFINED, direction=Component.REQUIRED, timestamp=Component.UNDEFINED, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'avatar', 'className', 'direction', 'style', 'timestamp']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'avatar', 'className', 'direction', 'style', 'timestamp']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['direction']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(ChatMessage, self).__init__(children=children, **args)
