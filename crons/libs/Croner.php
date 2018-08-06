<?php
class Croner
{
    private $jobs_queue = [];
    private $time_array = [];

    function __construct()
    {
        $timeObj = new DateTime("now", new DateTimeZone('Asia/Kolkata'));

        $current_time = [];
        $current_time['hours'] = $timeObj->format('H');
        $current_time['minutes'] = $timeObj->format('i');
        $current_time['seconds'] = $timeObj->format('s');
        $this->time_array = $current_time;

        $this->root_dir = __DIR__ . '/../';
    }

    /**
     * Only add in jobs_queue
     * if time matches with current time
     * else skip
     */
    function register($worker, $time)
    {
        if ($this->validateTime($time)) {
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
        if (
            $time_exp[0] === '00' || $time_exp[0] === $this->time_array['hours']
        ) {
            // matching minutes
            if ($time_exp[0] === '00' && $time_exp[1] !== '00') {
                // run every n interval in hour
                if (($this->time_array['minutes'] % $time_exp[1]) === 0) {
                    return true;
                }
            } elseif ($time_exp[1] === $this->time_array['minutes']) {
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
            include $this->root_dir . 'jobs/' . $job . '.php';

            // simply initiate dynamic class
            // rest will be done by that class
            new $job();
        }
    }
}
