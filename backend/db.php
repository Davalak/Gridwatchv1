<?php
$config = require 'config.php';
$dsn = "{mysql:host={config['host']}; dbname={config['db']}";
if(!empty($config['socket'])) $dsn .= "; unix_socket={config['socket']}";

try {
    $pdo = new PDO($dsn, $config['user'], $config['pass']);
    $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} 
    catch (PDOException $e) {
        die("Database connection failed: " . $e->getMessage());
}

