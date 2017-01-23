<?php

class IterationsController extends AppController
{
    public function getAll()
    {
        $this->request->allowMethod('get');

        $res = array();

        for($i = 1; $i <= 100; $i++){
            $out = '';

            if($i % 3 == 0){
                $out = 'Fizz';
            }

            if($i % 5 == 0) {
                $out .= 'Buzz';
            }

            if($out == ''){
              $res[] = $i;
            } else {
              $res[] = $out;
            }
        }

        return json_encode($res);
    }
}
