 

const cells = document.querySelectorAll(".cell")
const buttons = document.getElementById("buttons")  
const statuss = document.querySelector("h2")
const wrap = document.querySelectorAll(".wrap")
const tot = document.querySelectorAll(".gamecontainer")
buttons.addEventListener("click",reset)
  
 

const win = [
[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]
]

const options = [" "," "," "," "," "," "," "," "," "]
var flag = 1
var currentplayer = "x"
initialize()

function initialize()
{
    cells.forEach(cell => cell.addEventListener("click", cellnumber));
    statuss.textContent = `${currentplayer}'s turn`  

}

function cellnumber()
{
     
    const number = this.getAttribute("cellindex")
    optionsfill(this,number)

}

function optionsfill(cellss,index)
{
    
    if (options[index] == " ")
    {
        options[index] = currentplayer
        cellss.textContent = currentplayer
        
        
       
        
        checkwin()
        
        
        
        

    }
     

}

 
var w = 0

function checkwin()
{
    
    for (let i=0; i < win.length ; i++ )
    {
        let content = win[i];
        let A = options[content[0]]
        let B = options[content[1]]
        let C = options[content[2]]
         

        if (A == " " || B == " " || C == " ")
        {
            continue
        }
        else if (A == B && B == C )
        {
            w = true
            console.log(1)
            break
        }
       
        

    }
    
    if (w==true)
    {
        console.log(w,currentplayer)
        statuss.textContent = `${currentplayer} won`
         wrap.forEach(x => {  
            x.style.display= " flex";  
            x.style.opacity = "0.9";  
            x.innerHTML = `${currentplayer} won`
            buttons.style.display = "flex";
            buttons.style.opacity = "0.9";
         });  
        w = 0 
        return
    }
    else if (!options.includes(" "))
    {

        wrap.forEach(x => {  
            x.style.display= " flex";  
            x.style.opacity = "0.9";  
            x.innerHTML="Draw"
            buttons.style.display = "flex";
            buttons.style.opacity = "0.9";
            statuss.textContent = 'Draw'
         });  
    
    return
    }
   
     currentplayer = (currentplayer=='x')? 'o':'x'
    statuss.textContent = `${currentplayer}'s turn`  
     
}


function reset()
{
    for (let i=0 ; i < options.length;i++)
    {
        options[i] = " "
        

    }
     currentplayer = (currentplayer=='x')? 'o':'x'
    statuss.textContent = `${currentplayer}'s turn`  
    cells.forEach(x => x.textContent=" ")
    console.log(options)


    wrap.forEach(x => {  
        x.style.display= " none";  
        x.style.opacity = "0";  
        
        buttons.style.display = "none";
        buttons.style.opacity = "0";
     });  
     
}