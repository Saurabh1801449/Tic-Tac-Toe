// let boxes=document.querySelectorAll(".box");
// let btn=document.querySelector("#btn")

// let ne=document.querySelector("#new");
// let msg=document.querySelector("#msg");
// let msgcon=document.querySelector(".msgcon")


// const win=[ [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
// ];


// let turn="true";
// const resetgame=()=>{
//     turn="true";
//     en();
//     msgcon.classList.add("hide");

// }


// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//         console.log("box");

//         if(turn=="true")
//         {
//             box.innerText="0";
//             turn="false";

//         }
//         else{
//             box.innerText="X"
//             turn="true";
//         }
//         box.disabled="any value give"
//         checkwin()



//     });
// });


// //when win disable the button
// const dis=()=>{
//     for(let box of boxes)
// {
//     box.disabled="true";
   
// }}



// //to enables button click the button
// const en=()=>{
//     for(let box of boxes)
// {
//     box.disabled="false"
//     box.innerText="";
// }}


// // const resetgame=()=>{
// //     turn="true";
// //     en();
// //     msgcon.classList.add("hide");

// // }




   
// //toshow win msg
// const showwin=(w)=>{
//     msg.innerText=`Congruculation,winner is ${w}`;
//     msgcon.classList.remove("hide");
//     dis()
    
// }









// const checkwin=()=>{
//     for(let pattern of win)
//     {
//         // console.log(pattern)
//         // console.log(pattern[0],pattern[1],pattern[2])
//         // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)
       

//         let po1=boxes[pattern[0]].innerText;
//         let po2=boxes[pattern[1]].innerText;
//         let po3=boxes[pattern[2]].innerText;

//         if(po1!=""&& po2!=""&&po3!="")
//         {
//             if(po1===po2&&po2===po3)
//             {
//                 console.log("winner",po1)
                
//                 showwin(po1);
//             }
//         }

       
   
   
//     }
// }

// ne.addEventListener("click",resetgame);
// btn.addEventListener("click",resetgame);



let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#btn");
let ne = document.querySelector("#new");
let msg = document.querySelector("#msg");
let msgcon = document.querySelector(".msgcon");

const win = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
];

let turn = true;  // Corrected from "true" (string) to true (boolean)

// Reset the game
const resetgame = () => {
    // turn = true;
    enableBoxes();
    msgcon.classList.add("hide");
};

// Add event listener to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn) {
            box.innerText = "0";
            turn = false;
        } else {
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;  // Corrected disabling the box
        checkwin();
    });
});

//Disable all boxes when someone wins
const disableBoxes = () => {


    boxes.forEach((box) => box.disabled = true);
};

// Enable all boxes when resetting
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

// Show winner message
const showwin = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcon.classList.remove("hide");
    disableBoxes();
};

// Check for win conditions
const checkwin = () => {
    for (let pattern of win) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            showwin(pos1);
            return;
        }
    }
};

// Add event listeners to reset buttons
ne.addEventListener("click", resetgame);
btn.addEventListener("click", resetgame);
