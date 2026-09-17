<?php
$conn = new mysqli("localhost", "root", "", "futurelearn");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$first = $_POST['first_name'];
$last = $_POST['last_name'];
$user = $_POST['username'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$gender = $_POST['gender'];
$pass = $_POST['password'];
$confirm = $_POST['confirm_password'];

if ($pass !== $confirm) {
    echo "<script>alert('Passwords do not match'); window.location.href='register.html';</script>";
    exit();
}

$hashed_password = password_hash($pass, PASSWORD_DEFAULT);

$sql = "INSERT INTO users (first_name, last_name, username, email, phone, gender, password) 
VALUES ('$first', '$last', '$user', '$email', '$phone', '$gender', '$hashed_password')";

if ($conn->query($sql) === TRUE) {
    echo "<script>alert('Registration successful!'); window.location.href='login.html';</script>";
} else {
    echo "<script>alert('Error: $conn->error'); window.location.href='register.html';</script>";
}

$conn->close();
?>
