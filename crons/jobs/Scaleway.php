<?php
/**
 * Scaleway classs just to check status
 * and then reboot the server via api
 */
class Scaleway
{
    private $reboot_queue = [];
    private $base_url = 'https://cp-ams1.scaleway.com';
    private $token = '991ad7a9-1d1f-42f5-8a5e-3858a7257039';
    private $user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36';

    function __construct()
    {
        $this->server_array = $this->getServerList();

        $this->validateStatus();

        if ($this->reboot_queue) {
            $this->rebootServers();
        }
    }

    function validateStatus()
    {
        foreach ($this->server_array as $server => $key_id) {
            $http_code = $this->getStatus($server);

            if ($http_code !== 403) {
                $this->reboot_queue[$server] = $key_id;
            }
        }
    }

    function rebootServers()
    {
        foreach ($this->reboot_queue as $server => $key_id) {
            $action_url = $this->base_url . '/servers/' . $key_id . '/action';

            $this->rebootRequest($action_url);
        }
    }

    function rebootRequest($action_url)
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $action_url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $headers = array(
            'Content-type: application/json',
            'X-Auth-Token: ' . $this->token
        );
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt(
            $curl,
            CURLOPT_POSTFIELDS,
            json_encode(['action' => 'reboot'])
        );
        curl_setopt($curl, CURLOPT_USERAGENT, $this->user_agent);
        $output = curl_exec($curl);
    }

    function getStatus($server)
    {
        $server = 'http://' . $server;

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $server);
        //curl_setopt($curl, CURLOPT_NOBODY, true);
        curl_setopt($curl, CURLOPT_HEADER, true);
        curl_setopt($curl, CURLOPT_TIMEOUT_MS, 15000);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_USERAGENT, $this->user_agent);
        $output = curl_exec($curl);
        $http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        curl_close($curl);

        if (!$output) {
            return 500;
        }

        return $http_code;
    }

    function getServerList()
    {
        return [
            '51.15.63.129' => '66e512fe-0c0d-43aa-b79c-5eae0a0d1933',
            '51.15.43.140' => '8e45f9e5-8ca6-4de8-8951-272dce031ba2',
            '51.15.82.163' => 'c9a152b3-1c2e-40a2-a15c-a21a29d590af',
            '51.15.73.158' => 'a3f5d82b-909c-4ca6-bf30-59e8921aab8f',
            '51.15.114.248' => '7a7e0c36-31c0-4c76-8a05-0c531bcab206',
            '51.15.93.123' => 'a54ffb92-9d2a-4765-be34-cbf912e085ab',
            '51.15.93.46' => '098f580a-f4cd-423f-803d-478fb2f0e5f2',
            '51.15.85.133' => '54ebb5be-1d64-4805-8417-8a5fbf66b952',
            '51.15.37.250' => 'c7eb7e79-522f-417e-978b-73b9a6edc6f6',
            '51.15.94.253' => 'dd1066f7-52a8-4f51-9971-a12dce2d3337'
        ];
    }
}
