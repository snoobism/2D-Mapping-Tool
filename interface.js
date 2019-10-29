var casuta=[];
var select;
var arr_alt=".";
var matrice=[];
var rows,columns;
var isOnDiv = false;

function createMap() {
    var casuta = [];
    var rand = [];
    rows = document.getElementById("rows").value;
    columns = document.getElementById("columns").value;
    document.getElementById("tabel").innerHTML=" ";
    for (var i = 0; i <= rows - 1; i++) {
            rand[i] = document.createElement("div");
            rand[i].style.display = 'block';
            rand[i].id = "rand" + i;
            rand[i].style.whiteSpace='nowrap';
            document.getElementById("tabel").appendChild(rand[i]);
            casuta[i] = [];  
            for (var j = 0; j <= columns - 1; j++)
            {
                casuta[i][j] = document.createElement("div");
                casuta[i][j].id="casuta"+i+"_"+j;
                casuta[i][j].style.width = "8vh";
                casuta[i][j].style.height = "8vh";
                casuta[i][j].style.display = 'inline-block';
                casuta[i][j].style.backgroundColour = "white";
                casuta[i][j].style.backgroundRepeat = "no-repeat";
                casuta[i][j].style.backgroundPosition = "contain";
                casuta[i][j].style.backgroundSize = "100% 100%";
                casuta[i][j].style.boxShadow="0px 0px 5px black";
                casuta[i][j].className = 'tile';
                if(i == 0 || j == 0 || i == rows-1 || j == columns - 1){
                    casuta[i][j].setAttribute("alt", "w");
                    casuta[i][j].style.backgroundImage = "url(img/w.png)";
                }
                else{
                    casuta[i][j].setAttribute("alt", " ");
                }
                document.getElementById("rand" + i).appendChild(casuta[i][j]);

            }
    }
    $(".tile").mousedown(function(){
        schimba(this);
    })
    $(".tile").mouseenter(function(){
        if(isOnDiv == true){
            schimba(this);
            console.log("A");
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
            matrice[i]=[];
            for(var j=0;j<=columns-1;j++)
                {   
                    matrice[i][j]=$("#casuta"+i+"_"+j).attr("alt");
                }
        }
    afisare();
}
function afisare(){
    var string;
    document.getElementById("output_text").innerHTML="";
    for(var i=0;i<=rows-1;i++)
        {   
            string="[";
            for(var j=0;j<=columns-1;j++)
                {
                    if(j != columns-1){
                        string+="'" + matrice[i][j] + "',";   
                    }
                    else{
                        string+="'" + matrice[i][j] + "'";   
                    }
                }
            if(i == rows-1 && j == columns){
                string+="]";
            }
            else{
                string+="], \n";
            }
            document.getElementById("output_text").innerHTML+=string;
        }
    

    window.alert(document.getElementById("output_text").innerHTML);

}