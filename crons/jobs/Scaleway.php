<?php
/**
 * Scaleway classs just to check status
 * and then reboot the server via api
 */
class Scaleway
{
    private $reboot_queue = [];
    private $base_url = 'https://cp-1.scaleway.com';
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
        foreach ($this->server_array as $server => $key_arry) {
            $http_code = $this->getStatus($server);

            if ($http_code !== 403) {
                $this->reboot_queue[$server] = $key_arry;
            }
        }
    }

    function rebootServers()
    {
        foreach ($this->reboot_queue as $server => $key_arry) {
            $action_url = str_replace('cp-1', "cp-{$key_arry[1]}1", $this->base_url) . '/servers/' . $key_arry[0] . '/action';

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
        curl_setopt($curl, CURLOPT_TIMEOUT_MS, 25000);
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

            // ams
            '51.15.94.253' => ['dd1066f7-52a8-4f51-9971-a12dce2d3337', 'ams'],
            '51.15.37.250' => ['c7eb7e79-522f-417e-978b-73b9a6edc6f6', 'ams'],
            '51.15.93.123' => ['a54ffb92-9d2a-4765-be34-cbf912e085ab', 'ams'],
            '51.15.85.133' => ['54ebb5be-1d64-4805-8417-8a5fbf66b952', 'ams'],
            '51.15.93.46'  => ['098f580a-f4cd-423f-803d-478fb2f0e5f2', 'ams'],

            // paris
            '51.15.227.26' => ['9ba5126a-1b78-4bd9-996b-77708914a2a2', 'par'],
            '51.15.133.213' => ['21bd0241-ef6d-4d27-8cf1-6d00e19a86e6', 'par'],
            '51.15.252.14' => ['3b026ea3-a8a7-451f-a3a2-0b9dc1d2fe6e', 'par'],
            '163.172.144.108' => ['b8f07a98-4fa6-4ba8-b93c-da570c38062e', 'par'],
            '51.15.232.153'  => ['56c9bb87-6ab5-4739-94c8-ab29fc9729ff', 'par'],
            '51.15.239.95' => ['cd4bb730-d91b-4806-ac2b-d00a9a79d728', 'par'],
            '51.15.234.100'  => ['86321f63-4c63-4feb-990b-023e937c7e64', 'par'],

        ];
    }
}
