<?php
/**
 * Cron Job Runner
 * @param $worker Give a worker file
 * @param $time ( 24 hours clock)
 */

// lets include croner
include 'libs/Croner.php';

// instantiate
$cronObj = new Croner();

/**
 * Lets register few crons
 */

// cleaner cron runs every morning 2:00
// make sure to give this in dual format
$cronObj->register('Cleaner', '02:00');

// // scaleway status checker runs every 15 minutes
// $cronObj->register('Scaleway', '00:15');

// backup managaer
$cronObj->register('Backup', '05:00');

/**
 * Now that all registered
 * lets run 'em
 */
$cronObj->run();
