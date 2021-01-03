<?php

$link = mysqli_connect('a338120.mysql.mchost.ru', 'a338120_1', '8Xc5tj5pzDgq', 'a338120_1');


if (mysqli_connect_errno())
{
    echo 'Ошибка в подключении к базе данных ('.mysqli_connect_errno().'): '.mysqli_connect_error();
    exit();
}

mysqli_set_charset($link, "utf8");
?>