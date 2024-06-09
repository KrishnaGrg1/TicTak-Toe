let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")

let turnO=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ];

    msgContainer.style.display = 'none';

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if (turnO){
            box.innerText="O";
            turnO=false;
            box.style.color="#28A745"
        }else{
            box.innerText="X";
            box.style.color="#FFA500"
            turnO=true;
        }
        box.disabled=true;
        checkWin();
    })
});

const checkWin=()=>{
    let winnerFound = false;
    for (let i=0;i<winPatterns.length;i++){
        let winPattern=winPatterns[i];
        let box1=boxes[winPattern[0]].innerText;
        let box2=boxes[winPattern[1]].innerText;
        let box3=boxes[winPattern[2]].innerText;
        if (box1==box2 && box2==box3 && box1!=""){
            // alert(`Player ${box1} wins!`);
            // resetGame();
            showWinner(box1);
            winnerFound = true;
            
            }
            }
          if (!winnerFound){
            checkDraw();
            }
           
            
    }
    const checkDraw = () => {
        let allBoxesFilled = true;
        boxes.forEach((box) => {
            if (box.innerText === "") {
                allBoxesFilled = false;
            }
        });
        if (allBoxesFilled) {
            showDraw();
        }
    };
const showDraw = () => {
    msg.innerText = "It's a draw!";
    msgContainer.style.display = 'block';
    disableAllBoxes();
    // boxes.disabled = true;
};

const disableAllBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};


const showWinner = (winner) => {
    msg.innerText = `Player ${winner} wins!`;
    msgContainer.style.display = 'block';
};

resetbtn.addEventListener('click',()=>{
    resetGame();
})

const resetGame=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
        });
        turnO=true;
       
        }



newGameBtn.addEventListener('click',()=>{
    resetGame();
    msgContainer.style.display = 'none';
})
