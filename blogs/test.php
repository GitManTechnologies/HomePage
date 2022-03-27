<?php
$htmls = glob('./*.html');
echo $htmls;
$php_json = json_encode($htmls);
echo "<h3>test</h3>";
?>