<?php
try {
  $db = new PDO('mysql:host=hostName;dbname=donutapp', 'userName', 'password');
	$query = "INSERT INTO `gamestatistics` (`rockPosition`, `time`, `jumpPosition`, `rockSize`, `isWin`) VALUES (:rockPosition, :time, :jumpPosition, :rockSize, :isWin)";
	$statement = $db->prepare($query)
		->execute([
			':rockPosition' => $_POST['rockPosition'],
			':time' => date("Y-m-d H:i:s"),
			':jumpPosition' => $_POST['jumpPosition'],
			':rockSize' => $_POST['rockSize'],
			':isWin' => $_POST['isWin'] === 'true' ? 1 : 0
		]);
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}