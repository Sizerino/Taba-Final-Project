<?php
	$m1 = $_POST['m1'];
	$m2 = $_POST['m2'];
	$m3 = $_POST['m3'];
	$m4 = $_POST['m4'];
	$m5 = $_POST['m5'];
	$m6 = $_POST['m6'];

	$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into votes(m1, m2, m3, m4, m5, m6) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("iiiiii", $m1, $m2, $m3, $m4, $m5, $m6);
		$execval = $stmt->execute();
		echo $execval;
		echo "Voted successfully...";
		$stmt->close();
		$conn->close();
	}
?>