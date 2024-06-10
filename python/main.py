from flask import *
import mysql.connector


app = Flask(__name__, template_folder="templates")
app.secret_key="lakshman"

user_data = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Lakshman@2028",
    database="shop1"
)

mycursor = user_data.cursor()


@app.route("/")
@app.route('/login_form')
def login_form():
    return render_template('login.html')

@app.route("/main")
def main():
    return render_template("main.html")
@app.route("/cart")
def cart():
    return render_template("cart.html")

# Route to render the login form

@app.route('/register')
def register():
    return render_template("register.html")
@app.route("/success")
def success():
     return render_template("success.html")


@app.route('/registered', methods=['GET', 'POST'])
def registered():
    error=None
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        mobile   = request.form['mobile']

        mycursor.execute("select * from users where name=%s",(username,))
        res=mycursor.fetchall()
        if username=="" and password=="" and mobile=="":
                error="Please Fill the Details above!"
             
        elif res:
                error="Username already exists. Please try again with alternate name"
        else:
             
                sql = "INSERT INTO users (name, password,mobile) VALUES (%s, %s,%s)"
                val = (username, password,mobile)

                mycursor.execute(sql, val)
                user_data.commit()
             
                return redirect(url_for('success'))
               
           

    return render_template("register.html",error=error)

@app.route('/login', methods = ['GET', 'POST'])
def login():
   error = None
   
   if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        cursor = user_data.cursor()
        cursor.execute("SELECT * FROM users where name= %s and password=%s",(username,password))
        rows = cursor.fetchall()
        if username=="" and password=="":
            error = "Please fill the details above and Try Again!"
        elif rows:
            return render_template("main.html",username=username,password=password)
        else:
            
            error="User name and password are not match .Please Try again!"
   return render_template('login.html', error = error)


@app.route("/forgotted")
def forgotted():
     return render_template("forgot.html")

@app.route("/forgot", methods=['POST', 'GET'])
def forgot():
    error=None
    if request.method == "POST":
        username = request.form["username"]
        cursor = user_data.cursor()
        cursor.execute("SELECT * FROM users WHERE name=%s", (username,))
        data = cursor.fetchone()  

        if data:            
            password = data[1]  
            return render_template("forgot.html", username=username, password=password)
        else:
            error="User Not Found!"
            return render_template("forgot.html",error=error)

    return redirect(url_for('forgotted'))
# @app.route("/whatsapp")


    


if __name__ == '__main__':
    app.run(host="localhost",port=5000,debug=True)
