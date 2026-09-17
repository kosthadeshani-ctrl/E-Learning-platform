<?php
$conn = new mysqli("localhost", "root", "", "futurelearn");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user = $_POST['username'];
$pass = $_POST['password'];

$sql = "SELECT * FROM users WHERE username = '$user'";
$result = $conn->query($sql);

if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();
    if (password_verify($pass, $row['password'])) {
        echo "<script>alert('Login successful!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Invalid password'); window.location.href='login.html';</script>";
    }
} else {
    echo "<script>alert('User not found'); window.location.href='login.html';</script>";
}

$conn->close();
?>
