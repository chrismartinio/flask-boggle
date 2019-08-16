from boggle import Boggle
from flask import Flask, render_template, request, session

app = Flask(__name__)
app.config['SECRET_KEY'] = 'password'

boggle_game = Boggle()

@app.route("/")
def display_board():
    current_board = boggle_game.make_board()
    session['board'] = current_board

    return render_template("boggle.html", board=current_board)


@app.route('/submit', methods=['POST'])
def check_guess():
    
    word = request.json['guess']



    result = boggle_game.check_valid_word(session['board'], word)
    # import pdb; pdb.set_trace()

 
