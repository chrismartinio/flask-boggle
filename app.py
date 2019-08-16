from boggle import Boggle
from flask import Flask, render_template

app = Flask(__name__)

boggle_game = Boggle()

@app.route("/")
def display_board():
    board = boggle_game.make_board()

    print(boggle_game.words)

    return render_template("boggle.html", board=board)

