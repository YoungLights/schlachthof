<?php
// Adminlogin
$admin = "kjr";
$adminpw = '$2y$10$TKEMN9dx1vQRzRr8U6FVPuAfKfRbdE3TXz7gzwGM1x4P3JqERzecq';

// Page Roots
define("ROOT", "http://localhost/kjr/");
define("ADMINROOT", ROOT."admin/");
define("FILEROOT", ADMINROOT."downloads/files/");
$root = "http://localhost/kjr/";
//$root = "http://www.neu.kjr-stade.de/";
$imgRoot = $root . "admin/bilder/img/";
$kamRoot = $root . "admin/kampagnen/img/";
$areaRoot = $root . "admin/bereiche/img/";
$fileRoot = $root . "admin/downloads/files/";
$adminRoot = $root . "admin/";

// Timestamp
setlocale(LC_TIME, "de_DE");
$day = strftime("%A");
$timestamp = time();
$full_date = date("d.m.Y" ,$timestamp);
$currentYear = date("Y", $timestamp);
$yesterday = date("d.m.Y", strtotime('-1 days'));
$yesterdayFormat = new DateTime("$yesterday");

// Funktion - Umlaute
function change ($string){
    $upas = array("ä" => "&auml;", "ü" => "&uuml;", "ö" => "&ouml;", "Ä" => "&Auml;", "Ü" => "&Uuml;", "Ö" => "&Ouml;", "ß" => "&szlig;", "'" => "&apos;", "€" => "&euro;"); 
    return strtr($string, $upas);
}

function uml ($string){
    $upa = array("ä" => "ae", "ü" => "ue", "ö" => "oe"); 
    return strtr($string, $upa);
}

function dateformat ($date){
    $d = explode("-", $date);
    $newDate = $d[2].".".$d[1].".".$d[0];
    return $newDate;
}
  
// Allgemeine Konstanten
    // =========================================
    // Angaben zur Dateigröße
    define('BYTE', 1);
    define('KB', 1024*BYTE);
    define('MB', 1024*KB);

    // Konstanten und Variablen für die Fotos
    // =========================================
    // Dateigröße für Bilder
    define('FILE_SIZE', 4*MB);
	
    // Bildgröße bzw. Ausmaß in Pixeln
    define('PIC_WIDTH', 2500);
    define('PIC_HEIGHT',2500);
	
    // Dateigröße für Dateien
    define('FILE_SIZE_FILE', 4*MB);
	
    //File-Ordner
    define ('FILE_FOLDER', 'files/');
	
    // Thumbnailbreite in Pixeln
    define('TN_WIDTH', 300);
	
    // Photobreite in Pixeln
    define('PH_WIDTH', 1440);

    // Qualität
    define('PIC_QUALI', 80);
    define('TN_QUALI', 80);	

    // Photo-Ordner
    define('PIC_FOLDER', 'img/');
    define('DOZ_FOLDER', 'img/');
    define('ARE_FOLDER', 'img/');
	
    // erlaubte Dateiendungen für Files
    $_file_extensions_files = array('doc', 'pdf');	
	
    // erlaubte Dateiendungen für Bilder
    $_file_extensions = array('jpg', 'jpeg', 'jpe', 'gif', 'png');

    // erlaubte MIME-Typen für Bilder
    $_file_mime_types = array('image/pjpeg', 'image/jpeg', 'image/gif', 'image/png', 'image/x-png');
	
	  //erlaubte MINE-Typen für Files
    $_file_mime_types_files = array('application/pdf', 'application/msword');	
?>