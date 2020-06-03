from os import listdir
files = [f.rsplit('.', 1)[0] for f in listdir("img/")]

file = open(f"interface.html", "w")
file.write(f"""
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Mapping</title>
    <link type="text/css" rel="stylesheet" href="interface.css">
</head>
</html>
<body>
    <script src="jquery-3.1.1.min.js"></script>
    <script src="interface.js"></script>
    <div id="cont_interface">
    <div id="output">
        <div id="tabel">
            
        </div>
    </div>
    <div id="input">
        <div id="grid_cont">
            <input type="number" id="rows" placeholder="Num. of rows">
            <span>X</span>
            <input type="number" id="columns" placeholder="Num. of columns">
            <input type="number" id="size" placeholder="Size of tile" onchange="tileSizeChange()">
        </div>
        <div id="search" onclick="createMap()">CREATE</div>
        <div id="elements"> """)

for file_name in files:
	if file_name == "delete":
		file.write(f"		<div class='element' id='{file_name}' alt=' '></div>")
	else:
		file.write(f"		<div class='element' id='{file_name}' alt='{file_name}'></div>")

file.write(f"""
        </div>
        <div id="buttons"> 
            <div id="create" onclick="createMatrix()">
                SHOW
            </div>
            <div id="output_text">.</div>
            <div id="clear_table"  onclick="clearTable()">CLEAR</div>

        </div>

    </div>
    </div>
</body>""")

