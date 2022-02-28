<?php
session_start();




//qui va il banner
require('banner.php');

echo get_banner($banners);
