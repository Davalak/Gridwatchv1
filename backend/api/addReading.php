<?php
require '.../db.php';
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
if (!$data || !isset($data['device_id'], $data['voltage'], $data['current'], $data['power'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

$sql = "INSERT INTO readings (device_id, voltage, current, power, timestamp) 
        VALUES (:device_id, :voltage, :current, :power, NOW())";
$stmt = $pdo->prepare($sql);
$stmt->execute([
    ':device_id' => $data['device_id'],
    ':voltage' => $data['voltage'],
    ':current' => $data['current'],
    ':power' => $data['power']
]);

echo json_encode(['success' => true, 'id' => $pdo->lastInsertId()]);