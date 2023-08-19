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
        "content": "That's great! I've heard about the Colosseum and the Vatican. Are there any other must-see attractions?",
        "timestamp": int(math.floor(time.time() * 1000)),
    },
    {
        "direction": "received",
        "avatar": "bot.png",
        "content": "Absolutely! In addition to the Colosseum and Vatican City, you should definitely explore the Roman Forum, which was the heart of ancient Rome's political and social life. The Pantheon is another architectural marvel you shouldn't miss. And don't forget to toss a coin into the Trevi Fountain for good luck! Piazza Navona, the Spanish Steps, and the Borghese Gallery are also worth visiting.",
        "timestamp": int(math.floor(time.time() * 1000)),
    },
]


app.layout = html.Div(
    [
        dch.ChatSimple(
            messages=messages,
            id="chat-simple",
            autofocus=True,
            className="h-100"
        ),
    ],
    style={"height": "calc(100vh - 40px)", "margin": "20px auto", "maxWidth": "900px"},
)


@app.callback(
    Output("chat-simple", "messages"),
    Input("chat-simple", "value_on_submit"),
    State("chat-simple", "messages"),
    prevent_initial_call=True,
)
def reply_message(value_on_submit, msg_list):
    time.sleep(2)
    msg_list.append(
        {
            "direction": "received",
            "avatar": "bot.png",
            "content": f"You just typed: {value_on_submit}",
            "timestamp": int(math.floor(time.time() * 1000)),
        }
    )

    return msg_list


if __name__ == "__main__":
    app.run_server(debug=True)
