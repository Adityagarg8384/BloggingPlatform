from flask import request, jsonify
from config import app
from blog_assistant import model

@app.route('/blog_assistant', methods=['POST'])
def blog_assistant():
    query = request.json.get('query')
    chat_session = model.start_chat(history=[])
    response = chat_session.send_message(query)
    return jsonify({
        'response' : response.text
    }), 200

if __name__ == "__main__":
    app.run(debug = True)