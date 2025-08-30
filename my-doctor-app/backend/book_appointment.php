<?php
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");

require 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$email = $data['email'];
$phone = $data['phone'];
$date = $data['date'];
$service = $data['service'];

$sql = "INSERT INTO appointments (name, email, phone, date, service) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $name, $email, $phone, $date, $service);

if ($stmt->execute()) {
    echo json_encode(["message" => "Appointment booked successfully!"]);
} else {
    echo json_encode(["message" => "Failed to book appointment."]);
}

$stmt->close();
$conn->close();
?>