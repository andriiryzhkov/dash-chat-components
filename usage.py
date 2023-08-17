import math
import time

import dash
from dash import Input, Output, State, html
from dash.exceptions import PreventUpdate

import dash_chat_components as dch

app = dash.Dash(__name__)

app = dash.Dash(
    external_stylesheets=[
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
    ]
)

messages = [
    {
      "direction": "outgoing",
      "avatar": "user.png",
      "content": "Hi there! I've been thinking about visiting Rome. Have you ever been there?",
      "timestamp": int(math.floor(time.time() * 1000)),
    },
    {
      "direction": "received",
      "avatar": "bot.png",
      "content": "Hello!",
      "timestamp": int(math.floor(time.time() * 1000)),
    },
    {
      "direction": "received",
      "avatar": "bot.png",
      "content": "While I haven't been to Rome myself, I have a lot of information about the city.",
      "timestamp": int(math.floor(time.time())),
    },
    {
      "direction": "received",
      "avatar": "bot.png",
      "content": "Is there anything specific you'd like to know about Rome?",
      "timestamp": int(math.floor(time.time() * 1000)),
    },
    {
      "direction": "outgoing",
      "avatar": "user.png",
      "content":
        "That's great! I've heard about the Colosseum and the Vatican. Are there any other must-see attractions?",
      "timestamp": int(math.floor(time.time() * 1000)),
    },
    {
      "direction": "outgoing",
      "avatar": "user.png",
      "content": "Bootstraps color palette has continued to expand",
      "timestamp": int(math.floor(time.time() * 1000)),
    },
    {
      "direction": "received",
      "avatar": "bot.png",
      "content":
        "Absolutely! In addition to the Colosseum and Vatican City, you should definitely explore the Roman Forum, which was the heart of ancient Rome's political and social life. The Pantheon is another architectural marvel you shouldn't miss. And don't forget to toss a coin into the Trevi Fountain for good luck! Piazza Navona, the Spanish Steps, and the Borghese Gallery are also worth visiting.",
      "timestamp": int(math.floor(time.time() * 1000)),
    },
    {
      "direction": "outgoing",
      "avatar": "user.png",
      "content": "Fourth message. Some random words.",
      "timestamp": int(math.floor(time.time() * 1000)),
    },
]


app.layout = html.Div([
    dch.Chat(
        [
            dch.ChatMessageList(
                [
                    dch.ChatMessage(
                        m["content"],
                        avatar=m["avatar"],
                        direction=m["direction"],
                        timestamp=m["timestamp"]
                    ) for m in messages
                ],
                id="chat-msg-list",
                className="px-2",
                style={"height": "calc(100% - 65px)"}
            ),
            dch.ChatInput(
                id='chat-input',
                className="mt-2 mx-2",
                autofocus=True,
                style={"height": "65px"}
            ),
        ],
        className="h-100"
    ),
], style={
    'height': 'calc(100vh - 40px)',
    'margin': '20px auto',
    'max-width': '900px'
})


@app.callback(
    Output("chat-msg-list", "children", allow_duplicate=True),
    Output("chat-input", "disabled", allow_duplicate=True),
    Output("chat-input", "autofocus"),
    Input("chat-input", "n_submit"),
    State("chat-input", "n_submit_timestamp"),
    State("chat-input", "value_on_submit"),
    State("chat-msg-list", "children"), prevent_initial_call=True)
def send_message(n_submit, n_submit_timestamp, value_on_submit, msg_list):
    if n_submit is None:
        raise PreventUpdate
    else:
        msg_list.append(
            dch.ChatMessage(
                value_on_submit,
                avatar="user.png",
                direction="outgoing",
                timestamp=n_submit_timestamp
            )
        )
        msg_list.append(
            dch.ChatMessageTyping(
                avatar="bot.png",
                direction="received",
            )
        )
    
        return msg_list, True, True


@app.callback(
    Output("chat-msg-list", "children"),
    Output("chat-input", "disabled"),
    Input("chat-msg-list", "children"),
    State("chat-input", "value_on_submit"),
    State("chat-msg-list", "children"), prevent_initial_call=True)
def reply_message(children, value_on_submit, msg_list):
    last_message = children[-1]["props"]
    if last_message["direction"] != "outgoing":
        raise PreventUpdate
    else:
        time.sleep(2)
        msg_list.append(
            dch.ChatMessage(
                f"You just typed: {value_on_submit}",
                avatar="bot.png",
                direction="received",
                timestamp=int(math.floor(time.time() * 1000))
            )
        )
    
        return msg_list, False


if __name__ == '__main__':
    app.run_server(debug=True)
