var cell=[];
var select;
var arr_alt=".";
var matrix=[];
var rows,columns;
var isOnDiv = false;
var cell = [];
var row_cells = [];

function createMap() {
    rows = document.getElementById("rows").value;
    columns = document.getElementById("columns").value;
    let size = document.getElementById("size").value;

    document.getElementById("tabel").innerHTML=" ";
    for (var i = 0; i < rows; i++) {
            row_cells[i] = document.createElement("div");
            row_cells[i].style.display = 'block';
            row_cells[i].id = "row_cells" + i;
            row_cells[i].style.whiteSpace='nowrap';
            document.getElementById("tabel").appendChild(row_cells[i]);
            cell[i] = [];  
            for (var j = 0; j < columns; j++)
            {
                cell[i][j] = document.createElement("div");
                cell[i][j].id="cell"+i+"_"+j;
                cell[i][j].style.width = size + "vh";
                cell[i][j].style.height = size + "vh";
                cell[i][j].style.display = 'inline-block';
                cell[i][j].style.backgroundColour = "white";
                cell[i][j].style.backgroundRepeat = "no-repeat";
                cell[i][j].style.backgroundPosition = "contain";
                cell[i][j].style.backgroundSize = "100% 100%";
                cell[i][j].style.boxShadow="0px 0px 5px black";
                cell[i][j].className = 'tile';
                if(i == 0 || j == 0 || i == rows-1 || j == columns - 1){
                    cell[i][j].setAttribute("alt", "w");
                    cell[i][j].style.backgroundImage = "url(img/w.png)";
                }
                else{
                    cell[i][j].setAttribute("alt", " ");
                }
                document.getElementById("row_cells" + i).appendChild(cell[i][j]);

            }
    }
    $(".tile").mousedown(function(){
        schimba(this);
    })
    $(".tile").mouseenter(function(){
        if(isOnDiv == true){
            schimba(this);
        }
    });
}

function schimba(a){
    a.style.backgroundImage=select;
    a.setAttribute("alt", arr_alt);
}

$(document).ready(function() {
    var inputIcons = document.getElementsByClassName("element");
    $(".element").click(function() {    
        select =  $(this).css('background-image');
        arr_alt = $(this).attr("alt");
    });
    $("#output").mousedown(function(){isOnDiv=true;});
    $("#output").mouseup(function(){isOnDiv=false;});

    for(var i = 0; i < $(".element").length; i++){
        document.getElementById("" + inputIcons[i].id).style.backgroundImage = "url(img/" + inputIcons[i].id + ".png)";
    }

});

function createMatrix(){
    for(var i=0;i<=rows-1;i++)
        {
            matrix[i]=[];
            for(var j=0;j<=columns-1;j++)
                {   
                    matrix[i][j]=$("#cell"+i+"_"+j).attr("alt");
                }
        }
    showMatrix();
}

function showMatrix(){
    var string;
    document.getElementById("output_text").innerHTML="";
    for(var i=0;i<=rows-1;i++)
        {   
            string="{";
            for(var j=0;j < columns;j++)
                {
                    if(j != columns-1){
                        string+="'" + matrix[i][j] + "',";   
                    }
                    else{
                        string+="'" + matrix[i][j] + "'";   
                    }
                }
            if(i == rows-1 && j == columns){
				string+="}";
            }
            else{
				string+="}, \n";
            }
            document.getElementById("output_text").innerHTML+=string;
        }
    

    window.alert(document.getElementById("output_text").innerHTML);

}

function clearTable(){
    document.getElementById("tabel").innerHTML = "";
}

function tileSizeChange(){
    let tiles = document.getElementsByClassName("tile");
    let size = document.getElementById("size").value;

    for (let i=0; i < tiles.length; i++) {
        tiles[i].style.width = size + "vh";
        tiles[i].style.height = size + "vh";
    }
}