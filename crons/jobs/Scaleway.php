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
           // '51.15.94.253' => ['dd1066f7-52a8-4f51-9971-a12dce2d3337', 'ams'],

            // paris
            '51.158.126.133' => ['43d67f33-a1ff-4579-ab7c-809ddfd99840', 'par'],
            '51.15.227.26' => ['eadb3a5d-78fe-455c-b99f-5f1a6f2e4952', 'par'],
            '163.172.176.237' => ['53387bde-7bce-492a-ad18-3fb7b445a7d4', 'par'],

        ];
    }
}
