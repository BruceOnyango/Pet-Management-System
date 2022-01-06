


const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
app.use(express.json());
//const {authAdmin, authStaff} = require('./middleware'); 

const jwt = require('jsonwebtoken');
/*
const pdf = require("pdf-creator-node");
const fs = require("fs");

//const template = fs.readFileSync("../components/./Pages/Admin", "utf-8");

const options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm"

}

/*const document = {

    html: template,
    data: {

        message: "dynamic message"

    },
    path: "./pdfs/mynewpdf.pdf",

}

pdf.create(document, options).then(res => {
    console.log(res);

}).catch((err) => {
    console.log(err);
});
*/

app.use( session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    
    
    },
})
);

const db = mysql.createConnection({
    user: 'Bruce',
    host: 'localhost',
    password: 'bruce2000',
    database: 'pms'
});
app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded( {extended: true}));

app.post("/register", (req,res) =>{
    const username = req.body.userName;
    const password = req.body.password;
    const firstname =req.body.firstName;
    const lastname = req.body.lastName;
    const  email = req.body.email;
    const role = req.body.role;
    //const password = req.body.password;
    console.log(req.body.userName);
    

bcrypt.hash(password,saltRounds, (err, hash) => {
    if (err) {
        console.log(err);
    }  
        db.query('INSERT INTO user ( userName, firstName, lastName, email, password) VALUES (?,?,?,?,?) ',[ username,firstname, lastname, email, hash,],
        (err,result) => {
            if(err){
            console.log(err);
            } else{
                 res.send(role);
            }
        } 
        );
    
});
});
app.post("/register/user", (req,res) =>{
    const username = req.body.userName;
    const password = req.body.password;
    const firstname =req.body.firstName;
    const lastname = req.body.lastName;
    const  email = req.body.email;
    //const role =;
    //const password = req.body.password;
    console.log(req.body.username);
    

bcrypt.hash(password,saltRounds, (err, hash) => {
    if (err) {
        console.log(err);
    }  
        db.query('INSERT INTO user ( userName, firstName, lastName, email, password) VALUES (?,?,?,?,?) ',[ username,firstname, lastname, email, hash],
        (err,result) => {
            if(err){
            console.log(err);
            } else{
                 res.send(role);
            }
        } 
        );
    
});
});

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];

    if(!token) {
        res.send("need token")
    } else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
            if (err) {
                res.json({auth: false, message: "failed to authenticate"})
            } else {
                req.userId = decoded.id
                next();
            }
        })
    }
}

app.get('/auth', verifyJWT, (req, res) => {
    res.json({auth: true, message: " authenticated"});
})

app.get("/login",(req, res) =>{
    if (req.session.user){
  
        res.send({ loggedIn: true, user: req.session.user })

    } else {
        res.send({ loggedIn: false })
    }
});




app.post("/login",(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
   
    db.query(
        "SELECT * FROM user WHERE userName = ?",
        username, 
        (err, result) => {
            if (err) {
                res.send({err: err});
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) =>{
                    if (response){
                        

                        const id = result[0].id
                        const token = jwt.sign({id}, "jwtSecret", {
                            expiresIn : 300,
                        });

                        req.session.user = result;
                        console.log(req.session.user);

                        res.json({auth: true, token: token, result: result});
                    } else {
                        res.json({auth: false, message: "wrong username password combination"})
                    }
                })

            } else {
                res.json({auth: false, message: "no user exists"});
            }
        }
    );
});

app.get('/logout' ,(req, res) => {
   // const username = req.body.username;
    req.session.destroy();
});


app.post('/create', (req, res) => {
    const name = req.body.name;
    const gender = req.body.gender;
    const color = req.body.color;
    const rescueDate = req.body.rescueDate;
    const checkupdate = req.body.checkupdate;
    const weight = req.body.weight;
    const numberOfCheckups = req.body.numberOfCheckups;
    const checkupName = req.body.checkupName;
    const medicineName = req.body.medicineName;
    const diagnosis = req.body.diagnosis;
    const pettype = req.body.pettype;
    /* name: name,
        gender: gender,
        col0r: color,
        rescueDate: rescueDate,
        weight: weight,
        numberOfCheckups: numberOfCheckups,
        checkupName: checkupName,
        medicineName: medicineName,
        diagnosis: diagnosis*/ 

    db.query('INSERT INTO pets (name, gender, color, weight, rescuedate,pettype) VALUES (?,?,?,?,?,?)',
    [name, gender, color, weight, rescueDate,pettype], (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }

    }),
    db.query('INSERT INTO healthcheckup (checkupname, numberofcheckups, medname, diagnosis,name,checkupdate) VALUES (?,?,?,?,?,?)',
    [checkupName, numberOfCheckups, medicineName, diagnosis,name,checkupdate]),
    db.query('INSERT INTO pethistory (name, gender, color, weight, rescuedate, pettype,checkupname,numberofcheckups, medname, diagnosis,checkupdate) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
    [name, gender, color, weight, rescueDate, pettype,checkupName, numberOfCheckups, medicineName, diagnosis,checkupdate])


})

app.post('/feedback', (req, res) => {
    const email = req.body.email;
    const message = req.body.message;
   

    db.query('INSERT INTO contact (email, message) VALUES (?,?)',
    [email, message], (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }

    })
   

})


app.get('/feedback', (req,res) => {
    db.query("SELECT * FROM contact;"
     , (err, result) => {
        if(err) {
            console.log(err)

        }else {
            res.send(result)
        }
    });

})
app.get('/petdetails', (req,res) => {
    db.query("SELECT pets.id,pets.name, pets.pettype, pets.gender, pets.color, pets.weight, pets.rescuedate, healthcheckup.checkupname, healthcheckup.numberofcheckups, healthcheckup.medname, healthcheckup.diagnosis, healthcheckup.checkupdate FROM pets INNER JOIN healthcheckup ON  pets.name = healthcheckup.name;"
     , (err, result) => {
        if(err) {
            console.log(err)

        }else {
            res.send(result)
        }
    });
   
     

})

app.get('/pethistory', (req,res) => {
    //db.query("SELECT pethistory.id, pethistory.date_of_change, pethistory.change_type, pethistory.name, pethistory.pettype, pethistory.gender, pethistory.color, pethistory.weight, pethistory.rescuedate, healthhistory.checkupname, pethistory.numberofcheckups, healthhistory.medname, healthhistory.diagnosis, healthhistory.checkupdate FROM pethistory INNER JOIN healthhistory ON  pethistory.medname = healthhistory.medname;"
     //,
     db.query("SELECT * FROM pms.pethistory;",
      (err, result) => {
        if(err) {
            console.log(err)

        }else {
            res.send(result)
        }
    });
   
     

})

app.get('/getusers', (req,res) => {
    db.query("SELECT * FROM pms.user;"
     , (err, result) => {
        if(err) {
            console.log(err)

        }else {
            res.send(result)
        }
    });
   
     

})


app.put('/update', (req,res) => {
    const id = req.body.id
    const name = req.body.name
    const weight = req.body.weight
   
    
    db.query("UPDATE pets SET weight = ? WHERE pets.id = ?", [weight,id],
    (err, result) =>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
    /*db.query('INSERT INTO pethistory (name) VALUES (?)',
    [name]);*/
})
app.put('/updatecheckupdate', (req,res) => {
    const id = req.body.id
    const name = req.body.name
    const weight = req.body.weight
    const checkupdate = req.body.checkupdate
  
    db.query("UPDATE healthcheckup SET checkupdate = ? WHERE healthcheckup.healthcheckupid = ?", [checkupdate,id],
    (err, result) =>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
})
app.put('/updatenumberOfCheckups', (req,res) => {
    const id = req.body.id
    const name = req.body.name
    const weight = req.body.weight
    const numberofcheckups = req.body.numberofcheckups
  
    db.query("UPDATE healthcheckup SET numberofcheckups = ? WHERE healthcheckupid = ?", [numberofcheckups,id],
    (err, result) =>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    })
})
app.put('/updatecheckupname', (req,res) => {
    const id = req.body.id
    const name = req.body.name
    const weight = req.body.weight
    const checkupname = req.body.checkupname
  
    db.query("UPDATE healthcheckup SET checkupname = ? WHERE healthcheckupid = ?", [checkupname,id],
    (err, result) =>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    })
})
app.put('/updatemedication', (req,res) => {
    const id = req.body.id
    const name = req.body.name
    const weight = req.body.weight
    const medname = req.body.medname
  
    db.query("UPDATE healthcheckup SET medname = ? WHERE healthcheckupid = ?", [medname,id],
    (err, result) =>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    })
})
app.put('/updatediagnosis', (req,res) => {
    const id = req.body.id
    const name = req.body.name
    const weight = req.body.weight
    const diagnosis = req.body.diagnosis
  
    db.query("UPDATE healthcheckup SET diagnosis = ? WHERE healthcheckupid = ?", [diagnosis,id],
    (err, result) =>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM pets WHERE id = ?", id, (err, result) =>{
        if(err) {
            console.log(err)
        } else {
            res.send(result);
        }
    })
})

app.delete('/deleteuser/:id', (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM user WHERE id = ?", id, (err, result) =>{
        if(err) {
            console.log(err)
        } else {
            res.send(result);
        }
    })
})

app.listen(3001, () =>{
    console.log("running")
})