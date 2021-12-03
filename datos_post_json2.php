<?php

    header('Content-Type: application/json');
    $objeto = new stdClass();
    $objeto->loquesea = 'Viva mi abuela';
    $json = json_encode($objeto);
    echo $json;