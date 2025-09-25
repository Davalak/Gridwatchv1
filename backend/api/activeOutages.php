<?php
require 'db.php';

$sql = "
SELECT o.device_id, d.device_name, o.start_time, o.reason
FROM outages o
JOIN devices d ON o.device_id = d.id
WHERE o.end_time IS NULL OR o.end_time > NOW()
";

$stmt = $pdo->query($sql);
$results = $stmt->fetchALL(PDO::FETCH_ASSOC);
print_r($results);