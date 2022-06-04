<?php
    require_once "db.php";
    if(isset($_SESSION['user_id'])!="") {
        header("Location: dashboard.php");
    }
    if (isset($_POST['signup'])) {
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);
        $cpassword = mysqli_real_escape_string($conn, $_POST['cpassword']); 
        if(!filter_var($email,FILTER_VALIDATE_EMAIL)) {
        $email_error = "Please Enter Valid Email ID";
        }
        if(strlen($password) < 6) {
        $password_error = "Password must be minimum of 6 characters";
        }       
        if($password != $cpassword) {
        $cpassword_error = "Password and Confirm Password doesn't match";
        }
        if(mysqli_query($conn, "INSERT INTO users(email ,password) VALUES('".$email."', '".md5($password)."')")) {
        header("location: login.php");
        exit();
        } else {
        echo "Error: " . mysqli_error($conn);
        }
        mysqli_close($conn);
    }
?>