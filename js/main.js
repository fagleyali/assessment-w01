/*----- constants -----*/ 

/*----- app's state (variables) -----*/ 
let idClicked = [];
let player1Result = [];
let player2Result = [];
let winningCombR = [["1","2","3"],["4","5","6"],["7","8","9"]];
let winningCombC = [["1","4","7"],["2","5","8"],["3","6","9"]];
let winningCombD = [["1","5","9"],["3","5","7"]];
/*----- cached element references -----*/ 
let playerTurn = 1;
let player1Color = document.getElementById("player1");
player1Color.style.backgroundColor = "green";
let player2Color = document.getElementById("player2");
let msgHolder = document.getElementById('message');



/*----- event listeners -----*/ 
/*----- functions -----*/

document.querySelector('table').addEventListener('click', set);
//document.getElementById("r2c1").addEventListener('click', document.getElementById("r2c2").textContent= "MX");

//document.getElementById("r2c2").style.color = red;

function set(evt){
//alert(evt.target.id);
let id = evt.target.id;
// console.log(id);
idClicked.push(id);
let sqClicked = document.getElementById(id);

if (sqClicked.textContent === ""){
    if (playerTurn === 1){
        player1Color.style.backgroundColor = "white";
        player2Color.style.backgroundColor = "green";
        sqClicked.textContent = "X";
        player1Result.push(id);
        if(player1Result.length>=3){
            getWinner(player1Result);
        };

        
        sqClicked.style.backgroundColor = "green";
        playerTurn = 2;
    }else if (playerTurn === 2){
        player2Color.style.backgroundColor = "white";
        player1Color.style.backgroundColor = "green";
        sqClicked.textContent = "O";
        player2Result.push(id);
        if(player2Result.length>=3){
            getWinner(player2Result);
        };
        sqClicked.style.backgroundColor = "green";
        playerTurn = 1;
    }else {
        return;
    }

}
}

function getWinner(arr){
arr = arr.sort();
let winningArr = [];

    
    for (let i= 0; i < arr.length; i++ ){
        let counter = 0;
        //let winningArr = [];
        
        
        for (let j=0; j < arr.length; j++){
            if (arr[j]===winningCombR[i][j] && winningArr.length <= 3 ){
                
                
                winningArr.push(arr);
                
             
            }
            
        }
        
    }
    if (winningArr.length === 0){
        for (let i= 0; i < arr.length; i++ ){
            let counter = 0;
            let winningArr = [];
            
            
            for (let j=0; j < arr.length; j++){
                if (arr[j]===winningCombC[i][j] && winningArr.length <= 3 ){
                    
                    
                    winningArr.push(arr);
                    
                 
                }
                
            }
            
        }
    } else  if (winningArr.length === 0){
        for (let i= 0; i < arr.length; i++ ){
            let counter = 0;
            let winningArr = [];
            
            
            for (let j=0; j < arr.length; j++){
                if (arr[j]===winningCombD[i][j] && winningArr.length <= 3 ){
                    
                    
                    winningArr.push(arr);
                    
                 
                }
                
            }
            
        }
    } 
    console.log(winningArr);
    if (winningArr.length >= 3){
        msgHolder.textContent = `Congratulations! Player ${playerTurn} has won the game!`
    }else {
        msgHolder.textContent = `The game is draw. Try again.`
    }

    }
    
    
    
   
    
    
    


















