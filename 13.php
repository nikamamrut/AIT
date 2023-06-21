<?php
function generateRandomPassword($string, $length = 10) {
    $characters = str_split($string);
    $password = '';

    for ($i = 0; $i < $length; $i++) {
        $randomIndex = array_rand($characters);
        $password .= $characters[$randomIndex];
    }

    return $password;
}

// Given string containing characters from A-Z, a-z, and 0-9
$allowedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// Generate a random password
$randomPassword = generateRandomPassword($allowedCharacters);

// Output the generated password
echo $randomPassword;
?>




