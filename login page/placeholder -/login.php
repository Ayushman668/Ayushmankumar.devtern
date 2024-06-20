<?php

$username = $_POST['username'];
$password = $_POST['password'];

// **Simulate user data (Replace with database interaction)**
$users = [
  'user1' => 'password1',
  'user2' => 'password2',
];

if (isset($users[$username]) && password_verify($password, $users[$username])) {
  echo json_encode(['success' => true]);
} else {
  echo json_encode(['success' => false, 'message'
