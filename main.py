from flask import Flask, render_template, request
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/offline')
def offline():
    return render_template("offline.html")


@app.route('/sw.js', methods=['GET'])
def sw():
    import os
    print (os.getcwd())
    return app.send_static_file('sw.js')

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)
