from flask import Flask, render_template, redirect, url_for
from flask_pymongo import PyMongo
from boto.s3.connection import S3Connection
s3 = S3Connection(os.environ['jimmywhite87'], os.environ['Ruger2012!?'])

# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/charged_up")


# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # Find one record of data from the mongo database
    charged_up = mongo.db.collection.find_one()

    # Return template and data
    return render_template("index.html")


@app.route("/carinfo")
def carinfo():

    # Return template and data
    return render_template("carinfo.html")

@app.route("/charging")
def charging():

    # Return template and data
    return render_template("charging.html")

@app.route("/manufacturers")
def manufacturers():

    # Return template and data
    return render_template("manufacturers.html")

@app.route("/radial")
def radial():

    # Return template and data
    return render_template("radial.html")

@app.route("/new")
def new():

    # Return template and data
    return render_template("new.html")

if __name__ == "__main__":
    app.run(debug=True)
