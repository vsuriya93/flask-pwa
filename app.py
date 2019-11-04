from flask import Flask, render_template, request
import pandas as pd
import requests
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/offline.html')
def offline():
    return render_template("offline.html")


if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)
