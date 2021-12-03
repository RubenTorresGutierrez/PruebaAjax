<?php

    if (isset($_POST['param1']))
        if($_POST['param1'] == 42)
            echo $_POST['param2'].' conoce el sentido del Universo';
        else echo $_POST['param2'].' NO conoce el sentido del Universo';