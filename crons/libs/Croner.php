<?php
class Croner
{
    private $jobs_queue = [];
    private $timeArray = [];

    function __construct()
    {
        $timeObj = new DateTime("now", new DateTimeZone('Asia/Kolkata'));

        $current_time = [];
        $current_time['hours'] = $timeObj->format('H');
        $current_time['minutes'] = $timeObj->format('i');
        $current_time['seconds'] = $timeObj->format('s');
        $this->timeArray = $current_time;
    }

    /**
     * Only add in jobs_queue
     * if time matches with current time
     * else skip
     */
    function register($worker, $time)
    {
        if (!$this->validateTime($time)) {
            $this->jobs_queue[] = $worker;
        }
    }

    /**
     * Just a method to compare time
     * and validate
     */
    function validateTime($time)
    {
        $time_exp = explode(':', $time);

        // matching hours
        if ($time_exp[0] === 0 || $time_exp[0] === $this->timeArray['hours']) {
            // matching minutes
            if ($time_exp[0] === 0) {
                // run every n interval in hour
                if ($this->timeArray['minutes'] % $time_exp[1] === 0) {
                    return true;
                }
            } elseif ($time_exp[1] === $this->timeArray['minutes']) {
                return true;
            }
        }

        return false;
    }

    public function run()
    {
        if (!count($this->jobs_queue)) {
            return;
        }

        foreach ($this->jobs_queue as $job) {
            // lets include dynamic object
            include 'jobs/' . $job . '.php';

            // simply initiate dynamic class
            // rest will be done by that class
            new $job();
        }
    }
}
