<?php

namespace Source\Controllers;

use Exception;
use Source\Models\Password;

class PasswordsController extends Controller {

    // POST /passwords
    public function createPassword(array $data) {
        $headers = $this->getRequestData($data)['headers'];
        $body = $this->getRequestData($data)['body'];

        if (!array_key_exists('value', $body) || $body["value"] === "") {
            $response = [
                'status' => 400,
                'success' => false,
                'message'=> 'value is required'
            ];

            return $this::send($response['status'], $response);
        }

        if (!array_key_exists('software_id', $body)) {
            $response = [
                'status' => 400,
                'success' => false,
                'message'=> 'software_id is required'
            ];

            return $this::send($response['status'], $response);
        }

        if (!array_key_exists('token', $headers) || $headers['token'] === "") {
            $response = [
                'status'=> 400,
                'success'=> false,
                'message'=> 'token not provided'
            ];

            return $this::send($response['status'], $response);
        }

        $token = $headers['token'];

        $value = $body['value'] ?? null;
        $software_id = $body['software_id'] ?? null;

        try {
            $created = Password::create($token, $value, $software_id);

            $response = [
                'status' => 201,
                'success' => true,
                'message' => 'password created successfully',
                'data' => $created
            ];

            return $this::send($response['status'], $response);
        } catch (Exception $e) {
            $response = [
                'status'=> 400,
                'success'=> false,
                'message'=> $e->getMessage()
            ];

            return $this::send($response['status'], $response);
        }
    }

    // GET /password
    public function getAllPasswords(array $data)
    {
        $token = $this->getRequestData($data)['headers']['token'];  

        $results = Password::getAllByUser($token);

        
        if (isset($results['success']) && $results['success'] === false) {
            // Token inválido ou erro
            return $this::send(401, $results);
        }
        
        var_dump($results); 

        if (is_array($results) && count($results) === 0) {
            return $this::send(404, [ 'success' => false, 'message' => 'password not found' ]);
        }

        return $this::send(200, [ 'success' => true, 'data' => $results ]);
    }



    // GET /passwords/{id}
    public function getPasswordById(array $data) {
        $headers = $this->getRequestData($data)['headers'];
        $params = $this->getRequestData($data)['params'];

        $token = $headers['token'] ?? null;
        $id = $params['id'] ?? null;

        $result = Password::getById($token, (int)$id);

        if (isset($result['success']) && $result['success'] === false) {
            return $this::send(404, $result);
        }

        return $this::send(200, $result);
    }

    // PUT /passwords/{id}
    public function updatePassword(array $data) {
        $headers = $this->getRequestData($data)['headers'];
        $body = $this->getRequestData($data)['body'];
        $params = $this->getRequestData($data)['params'];

        $token = $headers['token'] ?? null;
        $id = $params['id'] ?? null;

        $value = $body['value'] ?? null;
        $software_id = $body['software_id'] ?? null;

        $result = Password::update($token, (int)$id, $value, $software_id);

        if (isset($result['success']) && !$result['success']) {
            return $this::send(400, $result);
        }

        return $this::send(204, []);
    }

    // DELETE /passwords/{id}
    public function deletePassword(array $data) {
        $headers = $this->getRequestData($data)['headers'];
        $params = $this->getRequestData($data)['params'];

        $token = $headers['token'] ?? null;
        $id = $params['id'] ?? null;

        $result = Password::delete($token, (int)$id);

        if (isset($result['success']) && !$result['success']) {
            return $this::send(404, $result);
        }

        return $this::send(204, []);
    }
}
