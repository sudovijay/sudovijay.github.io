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
            '51.15.69.162' => '94c8c7f9-8524-43ca-be4c-132205ca4244',
            '51.15.76.154' => '11226761-5750-49c1-b5a1-c4b12ed9f3eb',
            '51.15.88.218' => '5219f3d3-7642-47f8-b839-c857319aadbf',
            '51.15.87.185' => '9af273fe-ba05-447c-966e-92f3482549af',
            '51.15.92.121' => 'a090d939-e729-4948-bf2c-61369d03afb2',
            '51.15.93.123' => '2ffa9f8d-7f43-4312-a5fb-d58b422a47cc',
            '51.15.93.46' => '3d78db75-ddea-490c-9465-d3331f1d7489',
            '51.15.85.133' => '0c400f0d-19f5-4989-84ab-602005ab0f35',
            '51.15.37.250' => '41619400-b6d8-4410-af7c-1bae910816fc',
            '51.15.94.253' => '7d14c2ef-d496-4b86-ace9-4083424516bd'
        ];
    }
}
