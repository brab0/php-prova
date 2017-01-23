<?php

class TasksController extends AppController
{
    public function getAll()
    {
        $this->request->allowMethod('get');

        $res = $this->Task->find('all');

        return $this->setResponse($res, $this->Task->name);
    }

    public function getById($id)
    {
        $this->request->allowMethod('get');

        $query = array('conditions' => array('id' => $id));

        $res = $this->Task->find('first', $query);

        return $this->setResponse($res, $this->Task->name);
    }

    public function insert()
    {
        $this->request->allowMethod('post');

        $req = $this->request->data;
        
        $req['prioridade'] = $this->Task->find('count') + 1;

        if($res = $this->Task->save($req)) {
          $this->response->statusCode(201);

          return $this->setResponse($res, $this->Task->name);
        } else {
          $this->response->statusCode(400);

          return;
        }
    }

    public function update($id)
    {
        $this->request->allowMethod('put');

        $id = array('id' => $id);

        $query = array('conditions' => $id);

        if($this->Task->find('first', $query)) {

            $data = array_merge($id, $this->request->data);

            if($res = $this->Task->save($data)) {
                $this->response->statusCode(200);

                return $this->setResponse($res, $this->Task->name);
            } else {
                $this->response->statusCode(400);

                return;
            }
        } else {
          $this->response->statusCode(404);

          return;
        }
    }

    public function delete($id)
    {
        $this->request->allowMethod('delete');

        if($this->Task->delete(array('id' => $id))) {
          $this->response->statusCode(204);

          return;
        } else {
          $this->response->statusCode(404);

          return;
        }
    }
}
