<?php
//echo "Muftau";
class Boo {
	public $content = "to be overriden";
	function printName() {
		$this->content = "Monsurat is my name";
		return explode(" ", $this->content);
	}
}
//$needed = 10;
function modify($value){
	$needed = $value;
	
	return $value;
}
$boo = new Boo();
$result = $boo->printName();
echo $boo->content . '<br>';
print_r (array_filter($result,'modify'));
echo $needed;
?>