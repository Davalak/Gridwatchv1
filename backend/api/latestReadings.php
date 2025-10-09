<?php

try {

require __DIR__ . '/db.php';

$sql = "
SELECT r.device_id, d.device_name, r.timestamp, r.voltage, r.current, r.power
FROM readings r
JOIN devices d ON r.device_id = d.id
JOIN (
    SELECT device_id, MAX(timestamp) AS latest
    FROM readings
    GROUP BY device_id
) lr ON r.device_id = lr.device_id AND r.timestamp = lr.latest
";

$stmt = $pdo->query($sql);
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
print_r($results);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Internal Server Error']);
}
?>