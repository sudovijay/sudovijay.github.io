<?php
/**
 * Script to remove nginx_cache
 * @ run every 24 hours
 * @ so probably at 12
 */
class Cleaner
{
    function __construct()
    {
        $this->removeCache();
    }

    function removeCache()
    {
        // execute command
        $command = 'rm -rf /data/nginx_cache/body/* > /dev/null &';

        // simple exec it
        exec($command);

        // clear grabber command too
        $command =
            'rm -rf /var/www/vhosts/sudovijay.com/mp3/storage/temp/* > /dev/null &';

        // simple exec it too
        exec($command);

        // clear media folder
        $command =
            'rm -rf /var/www/vhosts/sudovijay.com/mp3/storage/media/* > /dev/null &';

        // simple exec it too
        exec($command);
    }
}
