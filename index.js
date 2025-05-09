# # index.js (main file)

const express = require('express');

const app = express();


app.use(express.static('public'))


app.listen(3000 , ()=>{
 console.log("Server is running");
});

# # Public Folder (index.html)

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">

    <style>

        body {
            display: flex;
            min-height: 100vh;
        }

        .sidebar {
            width: 220px;
            background: #074254;
            color: azure;
        }

        .sidebar a {
            color: #6eb7dc;
            display: block;
            text-decoration: none;
            padding: 10px;
        }

        .sidebar a :hover {
            background:#074254;
        }

        .content {
            flex: 1;
            padding: 20px;
        }

    </style>
</head>

<body>

    <div class="sidebar d-none d-md-block">
        <center><h4 clas="p-3">Dashboard</h4></center>
        <a href="#">Home</a>
        <a href="#">Students</a>
        <a href="#">Exams</a>
        <a href="#">Settings</a>
    </div>

    <div class="content">
        <center><h2 clas="mb-4">Admin Dashboard</h2></center>
        <div class="row g-3">
            <div class="col-md-4">
                <div class="card text-bg-primary">
                    <div class="card-body">
                        <h5 class="card-title">Users</h5>
                        <p class="card-text">1,025</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card text-bg-success">
                    <div class="card-body">
                        <h5 class="card-title">Exams</h5>
                        <p class="card-text">100 Active</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card text-bg-warning">
                    <div class="card-body">
                        <h5 class="card-title">Reports</h5>
                        <p class="card-text">150 New</p>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js" integrity="sha384-j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO" crossorigin="anonymous"></script>
</body>
</html>

# # Run commands :- 

    npm init -y 
    npm i express --save 
    node index.js
