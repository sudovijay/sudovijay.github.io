<?php
/**
 * Script to remove nginx_cache
 * @ run every 24 hours
 * @ so probably at 12
 */
class Cleaner
{
    public function __construct()
    {
        $this->removeCache();
    }

    public function removeCache()
    {
        // execute command
        // $command = 'rm -rf /data/nginx_cache/body/* > /dev/null &';

        // simple exec it
        //  exec($command);

        // clear httpd logs
        $command = 'rm -rf /var/log/httpd/* > /dev/null &';

        // simple exec it too
        exec($command);
    }
}
