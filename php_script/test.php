<?php
error_reporting(E_ERROR);
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
    $getdata = file_get_contents("php://input");
    if (isset($getdata)) {
        $request = json_decode($getdata);
        $cup_code = $request->cup_code;
        
        if ($cup_code != "") {
            //echo "Server returns: " . $username;

		    $rawdata = array(); //creamos un array

		    $row_array['cup'] = $cup_code;
					
			$row_array['status'] = "1";
					
			array_push($rawdata,$row_array);

		    echo json_encode($rawdata);
        }
        else {
            
            $rawdata = array(); //creamos un array

		    $row_array['cup'] = 'bkt';
					
			$row_array['status'] = "Empty cup parameter!, asign BKT";
					
			array_push($rawdata,$row_array);

		    echo json_encode($rawdata);
        }
    }
    else {
        echo "Not called properly with username parameter!";
    }
    



?>