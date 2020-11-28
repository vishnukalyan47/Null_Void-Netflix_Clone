<?php

$name=$_POST['name'];
$date=$_POST['date'];
$lang=$_POST['lang'];
$cast=$_POST['cast'];

$host="localhost";
$dbUsername="root";
$dbPassword="";
$dbname="demov";


$conn=new mysqli($host, $dbUsername, $dbPassword, $dbname);
if ($conn->connect_error){
	echo "$conn->connect_error";
}
else{
	$stmnt=$conn->prepare("insert into moviedeman(name, date, lang, cast) values(?,?,?,?)");
	$stmnt->bind_param("siss", $name, $date, $lang, $cast);
	$execval = $stmnt->execute();
	echo $execval;

	echo "<h1>Hello ".$name." Your movie request has been submitted.</h1>";
	echo( "<button onclick= \"location.href='demand.html'\">Back to Home</button>");             

	$stmnt->close();
	$conn->close();
	}
?>