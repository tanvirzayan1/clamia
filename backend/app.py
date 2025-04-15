
from flask import Flask, request, jsonify
from flask_cors import CORS
from ai import process_user_input

app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message", "")
    result = process_user_input(user_message)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
