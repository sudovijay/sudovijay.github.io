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

    public function __construct()
    {
        $this->server_array = $this->getServerList();

        $this->validateStatus();

        if ($this->reboot_queue) {
            $this->rebootServers();
        }
    }

    public function validateStatus()
    {
        foreach ($this->server_array as $server => $key_arry) {
            $http_code = $this->getStatus($server);

            if ($http_code !== 403) {
                $this->reboot_queue[$server] = $key_arry;
            }
        }
    }

    public function rebootServers()
    {
        foreach ($this->reboot_queue as $server => $key_arry) {
            $action_url = str_replace('cp-1', "cp-{$key_arry[1]}1", $this->base_url) . '/servers/' . $key_arry[0] . '/action';

            $this->rebootRequest($action_url);
        }
    }

    public function rebootRequest($action_url)
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $action_url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $headers = array(
            'Content-type: application/json',
            'X-Auth-Token: ' . $this->token,
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

    public function getStatus($server)
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

    public function getServerList()
    {
        return [

            // ams
            // '51.15.94.253' => ['dd1066f7-52a8-4f51-9971-a12dce2d3337', 'ams'],

            // paris
            '51.15.237.109' => ['fbe29663-26ad-4e17-a425-a65b7046a040', 'par'],
            '51.15.211.182' => ['c9c4ad86-6e5a-49dc-8a42-ab269eeba8dc', 'par'],
            '51.158.115.136' => ['38f4852b-69f6-482d-a04a-10e70fe56d4f', 'par'],
            '51.15.143.134' => ['e6397ad3-c996-45f9-96ae-d2cd45aac797', 'par'],
            '51.15.236.154' => ['6aa5dae4-892a-4540-96b2-0a38a9f7b619', 'par'],
            '51.15.136.68' => ['baca4359-d58f-474d-9ad2-0dcc5bbb0bc8', 'par'],
            '51.15.211.106' => ['f2eb7e65-98e5-4bc9-bdab-95093fa9f0f8', 'par'],
            '51.158.126.133' => ['53b06149-3077-42d4-8485-5f04c6c9a036', 'par'],

        ];
    }
}
