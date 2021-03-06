<?php

    error_reporting(E_ERROR);
    //http://stackoverflow.com/questions/18382740/cors-not-working-php
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        exit(0);
    }
    //http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
    $postdata = file_get_contents("php://input");
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $race_name = $request->race_name;
        $category_filt = $request->category_filt;
        $service_distance = $request->service_distance;
        $start = $request->circle_circuit;
        if ($race_name != "") {
            //echo "Server returns: " . $username;

            $rawdata = array(); //creamos un array

            $row_array['race'] = $race_name;
            $row_array['category'] = $category_filt;
            $row_array['service_distance'] = $service_distance;
            $row_array['circle_circuit'] = $circle_circuit;
            
            $row_array['status'] = "1";
            
            array_push($rawdata,$row_array);

            echo json_encode($rawdata);
        }
        else {
            echo "Empty username parameter!";
        }
    }
    else {
        echo "Not called properly with username parameter!";
    }



?>