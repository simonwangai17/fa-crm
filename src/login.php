<?php
$servername = "localhost";
$username = "your-username";
$password = "your-password";
$dbname = "your-database";

$conn = new mysqli($servername, $username, $password, $dbname);
//check connection
if ($conn->connect_error) {
    die("Connection failed:" . $conn->connect-error);
}

//retrieve username and password from the form
$username = $_POST['usernam'];
$password = $_POST['password'];

//sql check availabilty
$sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    //open the dashboard
    header("Location: dashboard.html");
}
else {
    //error message
    header("Location: login.html?error=1");
}

$conn->close();
?>