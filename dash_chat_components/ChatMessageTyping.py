# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ChatMessageTyping(Component):
    """A ChatMessageTyping component.
Display user typing message

Keyword arguments:

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- avatar (string; default undefined):
    Avatar.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- direction (string; required):
    Direction of the mssage: received or outgoing.

- style (boolean | number | string | dict | list; optional):
    Defines CSS styles which will override styles previously set."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_chat_components'
    _type = 'ChatMessageTyping'
    @_explicitize_args
    def __init__(self, avatar=Component.UNDEFINED, direction=Component.REQUIRED, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'avatar', 'className', 'direction', 'style']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'avatar', 'className', 'direction', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['direction']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(ChatMessageTyping, self).__init__(**args)
