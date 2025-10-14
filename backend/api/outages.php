<?php
header('Content-Type: application/json');

try {
    require __DIR__ . '/../db.php';

$sql = "
SELECT o.id, o.device_id, d.device_name, o.start_time, o.end_time, o.reason
FROM outages o
JOIN devices d ON o.device_id = d.id
WHERE o.end_time IS NULL OR o.end_time > NOW()
";

$stmt = $pdo->query($sql);
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($results ?: []);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>