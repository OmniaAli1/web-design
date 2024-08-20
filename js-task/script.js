// degree=prompt("Enter your degree")

// if (degree >= 90) console.log("A")
//     else if (degree >= 80 && degree < 90) console.log("B")
//         else if (degree >= 70 && degree < 80) console.log("c")
//             else if (degree >= 60 && degree < 70) console.log("D")
//                 else console.log("f")
                

// function looping(startNum , endNum , breakNum , continueNum){
//     for(var i=startNum; i<=breakNum ;i++){
//         if(i==breakNum){
//             break;
//         }
//         else if(i==continueNum){
//             continue;
//         }
//         else 
//         console.log(i);
//     }

// }

// looping(0 , 10 , 8 , 4);
// // looping(0 );


var users= [];
function addUser(){

var user={
    name:prompt("name"),
    id:prompt('id'),
    balance:prompt('balance'),

};
users.push(user);

}

addUser()
addUser()
addUser()

console.log(users)

function EditUserBalanceById(){
    
    var id=prompt("Enter your id")
    var newBalance=prompt("Enter your newBalance")

    var userIndex= users.findIndex(item =>item.id ==id);
    users[userIndex].balance=newBalance;
    
}

EditUserBalanceById()

console.log(users)

function DeleteUserBalanceById(){
    var index=prompt("Enter your id")

    var index= users.console(item =>item.id ==id);
    users.splice(index , 1)


}
DeleteUserBalanceById()
console.log(users)







