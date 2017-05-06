<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="cache-control" content="no-cache" />
<title>Multi Selectbox example</title>
<link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="stylesheet" type="text/css" href="css/selectbox.css">
<script src="js/jquery-1.10.0.min.js"></script>
<script src="js/cities.js"></script>
<script type="text/javascript">
	
</script>
</head>

<body>
	<div id="wrapper">
    	<div id="header">
        	<a href="#" class="logo"></a>
            <span class="webname">ZendVN Group</span>
        </div>
        <div id="content">
        	<h1>Multi Selectbox example</h1>
            <div id="left">
             <h2>Left content</h2>
             
             <form name="appForm" id="appForm" method="POST" action="test.php">
             	<div>
                	<label>City: </label>
                    <select name="city" id="city" class="input w200">
                    	<option value="0">-- Select a city -- </option>
                    </select>
                </div>
                <div>
                	<label>District: </label>
                    <select name="district" id="district" class="input w200">
                    	<option value="0">-- Select a District -- </option>
                    </select>
                </div>
                <div>
                	<label>Ward: </label>
                    <select name="ward" id="ward" class="input w200">
                    	<option value="0">-- Select a Ward -- </option>
                    </select>
                </div>
             </form>
             
            </div>
            <div id="right">
             <h2>Right content</h2>
            <p>
            	Lorem ipsum dolor sit amet <a href="#">consectetur adipisicing</a> elit sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                text-based tooltip laboris nisi ut aliquip consequat. 
             </p>
             <p>
            	Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu <a href="#">fugiat nulla</a> pariatur. Excepteur sint occaecat cupidatat non 
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
             </p>
            </div>
            <div class="clr"></div>
        </div>
        <div id="footer"></div>
    </div>
</body>
</html>
