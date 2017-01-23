<?php

class ApiSchema extends CakeSchema {

    public $tasks = array(
        'id' => array('type' => 'integer', 'null' => false, 'default' => NULL, 'length' => 10, 'key' => 'primary'),
        'titulo' => array('type' => 'string', 'null' => false, 'default' => NULL, 'length' => 240),
        'descricao' => array('type' => 'string', 'null' => false, 'default' => NULL, 'length' => 240),
        'prioridade' => array('type' => 'integer', 'null' => false, 'default' => 0, 'length' => 3),
        'indexes' => array('PRIMARY' => array('column' => 'id', 'unique' => 1)),
        'tableParameters' => array('charset' => 'utf8', 'collate' => 'utf8_unicode_ci', 'engine' => 'innoDB')
    );
}
