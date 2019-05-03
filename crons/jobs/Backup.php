<?php
/**
 * Script to backup database
 *  ignoring all non required tables
 */
class Backup
{
    private $db_array = [
        '9xbuddy'=> ['user_buddy', 'qM9h#u36', 'db_9xbuddy', 'files'], //  username - password - database - ignore,
        'offmp3' => ['user_offmp3', 'dKc70s^3', 'db_offmp3', 'files'],
        'offmp4' => ['offmp4_user', '3htN0r%2', 'admin_offmp4'],
    ];

    function __construct()
    {
        $this->initBackup();
    }

    function initBackup()
    {
        $db_array = $this->db_array;

        // sql directory
        $sql_dir = __DIR__.'/../sql/';

        foreach ($db_array as $key => $auth) {

            $sql_file = $sql_dir.$key.'.sql';

            $command = "mysqldump -u {$auth[0]} -p{$auth[1]} {$auth[2]}";

            // if ignore is there
            if(isset($auth[3])){
                $command .= " --ignore-table={$auth[2]}.{$auth[3]}";
            }

            $command .= " > {$sql_file}";

            // simply exec it
            exec($command);

        }

    }
}
