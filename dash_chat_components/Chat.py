# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Chat(Component):
    """A Chat component.
Main chat container

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Content of the chat.

- id (string; optional):
    Unique ID to identify this component in Dash callbacks.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- height (number; optional):
    Height of the chat container.

- style (boolean | number | string | dict | list; optional):
    Defines CSS styles which will override styles previously set.

- width (number; optional):
    Width of the chat container."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_chat_components'
    _type = 'Chat'
    @_explicitize_args
    def __init__(self, children=None, height=Component.UNDEFINED, width=Component.UNDEFINED, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'height', 'style', 'width']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'height', 'style', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(Chat, self).__init__(children=children, **args)
