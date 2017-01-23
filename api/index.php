<?php

// CakeCore espera todas estas contantes
define('APP', dirname(__FILE__) . DIRECTORY_SEPARATOR);
define('APP_DIR', '');
define('DS', DIRECTORY_SEPARATOR);
define('ROOT', dirname(__FILE__));
define('WWW_ROOT', '');
define('CAKE_CORE_INCLUDE_PATH', ROOT . DS . 'CakeCore/lib');

if (!include CAKE_CORE_INCLUDE_PATH . DS . 'Cake' . DS . 'bootstrap.php') {
    trigger_error("CakeCore não foi encontrado.", E_USER_ERROR);
} else {
    App::uses('Dispatcher', 'Routing');

    $Dispatcher = new Dispatcher();
    $Dispatcher->dispatch(
		    new CakeRequest(),
		    new CakeResponse()
    );
}
