let bracketflag=0;
const addtodisplay= (myval)=>{
    let display=document.getElementById("display");
    if(myval == "AC"){
        display.value="";
        bracketflag=0;
    }
    else if(myval =="Back"){
        display.value=display.value.slice(0,-1);
    }
    else if(myval=="()"){
        if(bracketflag==0){
            display.value +="(";
            bracketflag=1;
        }
        else if(bracketflag==1){
            display.value +=")";
            bracketflag=0;
        }
    }
    else if(myval == "="){
        try{
            display.value =eval(display.value );
        }
        catch{
            display.value ="Invalid Format";
        }
    }
    
    else{
        display.value +=myval;
    }

}