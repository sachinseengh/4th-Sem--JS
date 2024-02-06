<?php

$a = ["apple","orange"];

$querytext = $_GET['query'];

foreach($a as $ae){
    if($ae== $querytext){
        echo $ae;
    }
}






?>