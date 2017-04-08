<?
include('scssphp/scss.inc.php');
use Leafo\ScssPhp\Server;
use Leafo\ScssPhp\Compiler;

// Parse SASS path
$fphp = str_replace('\\','/',__FILE__);
$abspath = str_replace($_SERVER['PHP_SELF'],'',$fphp);
$uri = $_SERVER['REQUEST_URI'];
$url = preg_replace('/\?.*/','',$uri);
$url = str_replace(array('/css/','.css'),array('/sass/','.scss'),$url);
$params = explode('/',trim($url,'/'));
$sass_file = array_pop($params);
$sass_path = $abspath.'/'.join('/',$params);
//echo "File='$sass_file', Path='$sass_path'";

// Clear cache folder
$sass_cache =  'cache';
$ipadr = $_SERVER['REMOTE_ADDR'];
if($ipadr=='::1') $ipadr = '127.0.0.1';
if($ipadr=='127.0.0.1') {
	if($dir = opendir($sass_cache)){
	  while($entry = readdir($dir)){
		 if($entry=='.' || $entry=='..') continue;	 
		 $tmp = $sass_cache.'/'.$entry;
		 unlink($tmp);
	  }
	}
}

// Init SCSS PHP
$scss = new Compiler();
$scss->setImportPaths($sass_path);
$scss->setFormatter('Leafo\ScssPhp\Formatter\Expanded');
$scss->setLineNumberStyle(Compiler::LINE_COMMENTS);

$_GET['p'] = $sass_file;
$server = new Server($sass_path, $sass_cache, $scss);
$server->serve();
?>