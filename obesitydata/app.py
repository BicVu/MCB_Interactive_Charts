from flask import Flask
from flask import render_template

app = Flask(__name__)

#################################################
# Database Setup
#################################################
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/bellybutton.sqlite"
db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to each table
Samples_Metadata = Base.classes.sample_metadata
Samples = Base.classes.samples

@app.route("/home")
def main():
    return render_template('index.html')

@app.route("/nutrition")
def nutrition():
    return render_template('nutrition.html')

@app.route("/health")
def health():
    return render_template('health.html')    

if __name__ == "__main__":
    app.run(debug=True)