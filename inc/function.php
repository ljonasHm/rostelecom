<?php

function insert_sub($link, $name, $tel, $street, $house, $housing, $entrance){
    
    $name = mysqli_real_escape_string($link, $name);
    $tel = mysqli_real_escape_string($link, $tel);
    $street = mysqli_real_escape_string($link, $street);
    $house = mysqli_real_escape_string($link, $house);
    $housing = mysqli_real_escape_string($link, $housing);
    $entrance = mysqli_real_escape_string($link, $entrance);
    
    $insert_query = "INSERT INTO users (name, number, street, house, housing, entrance) VALUES(N'$name', '$tel', N'$street', '$house', '$housing', '$entrance')";
    $result = mysqli_query($link, $insert_query);

    $to = "<dmitriyyy.aristov@gmail.com>";
    
    $subject = "Заявка на обратный звонок";
    
    $message = $name . "\r\n" . $tel . "\r\n" . $street . " дом " . $house . " корпус " . $housing . " подъезд " . $entrance;
    
    mail($to, $subject, $message);

    return $result;
}

function selected($option, $value) 
{
    if($option == $value){
        return "selected";
    }
}

?>