<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="cache-control" content="no-cache" />
<title>Ajax paging</title>
<link rel="stylesheet" type="text/css" href="../css/style.css">
<script src="../js/scripts.js" type="text/javascript"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/paging.css">
<script src="js/paging.js"></script>
</head>

<body>
	<div class="wrapper">
        <div id="content">
        	<div class="title">Ajax Paging</div>
            <div class="view_box full_width">             
             <div id="paging">
                 <ul id="rows"></ul>
                 <ul id="pages">
                 	 <li class="pageInfo">Page 1 of 6</li>
                     <li class="goPrevious">&lsaquo;&lsaquo; Previous</li>
                     <li>
                     	<input type="text" class="currentPage" id="currentPage" value=""/>
                     </li>
                     <li class="goNext">Next &rsaquo;&rsaquo;</li>
                     
                 </ul>
                 <div class="clr"></div>
             </div>
             
            </div>
        </div>
    </div>
</body>
</html>
