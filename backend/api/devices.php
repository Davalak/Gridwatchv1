<?php
header('Content-Type: application/json');

try {
    require __DIR__ . '/../db.php';

$sql = "SELECT id, device_name, location FROM devices";

$stmt = $pdo->query($sql);
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($results ?: []);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMEssage()]);
}
?>