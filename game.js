let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset-btn");
let newGameBtn=document.querySelector(".newgame-btn");
let msgContaner=document.querySelector(".msg-contaner");
let msg=document.querySelector("#msg");
let msg1=document.querySelector("#msg1");
let turnO=true; 

let winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const reseter=()=>{
    turnO=true;
    enablebtn();
    msgContaner.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }
    box.disabled=true;
    checkWinner();
   });
   
});

const disablebtn=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const enablebtn=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
   msg.innerText=`Congratulation winner is ${winner}`;
   msgContaner.classList.remove("hide");
   disablebtn();
}
const ShowDraw=(draw)=>{
    msg.innerText=`Draw between both of them`;
    msgContaner.classList.remove("hide");

}
const checkWinner=()=>{
        for(let sample of winpattern){
            let pos1=boxes[sample[0]].innerText;
            let pos2=boxes[sample[1]].innerText;
            let pos3=boxes[sample[2]].innerText;

          if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1 === pos2 && pos2 === pos3 )
            {
                console.log("winner",pos1);
                showWinner(pos1);
            }
            else if(pos1 !== pos2 && pos2 !== pos3)
            {
                ShowDraw(pos1);
            }
          }
        }
}

newGameBtn.addEventListener("click",reseter);
reset.addEventListener("click",reseter);