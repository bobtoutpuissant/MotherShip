<?php
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

    $search = isset($_GET["search"]) ? $_GET["search"] : "rob";
    $servername = "localhost";
    $username   = "root";
    $password   = "";
    $dbname     = "adtemp";
    $table      = "userlist";
//    $pics       = "/var/www/html/pics/";
    
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $sql    = "SELECT sn, givenname, room, mail FROM $table WHERE sn LIKE '%$search%' OR givenname LIKE '%$search%' OR room LIKE '%$search%'";
    $result = $conn->query($sql);
    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $myArray[] = $row;
    }
    echo json_encode($myArray);
?>