let player1="X";
let  player2="O";
let turn= true ; 

let counter = 0;


   function play(event){
    counter++;
       if(turn === true){
           console.log(turn)
           turn = false
        $(event.target).text(player1);
        
       }else{
        console.log(turn)
        turn = true;
       
        $(event.target).text(player2);
       }
       $(event.target).off("click"); 
       checkWinner();      
   } 

   $(".game1").on("click",play);


   function checkWinner(){
    
    if( $("#0").text() === $("#1").text() && $("#1").text() === $("#2").text() && $("#0").text()!==""){
        console.log("win player " + $("#0").text()); 
        swal("Player " + $("#2").text()+  " "+"Win!");
        $('.game1').off("click"); 
    }

 

    else if( $("#3").text() === $("#4").text() && $("#4").text() === $("#5").text()&& $("#4").text()!==""){
        console.log("win player " + $("#3").text()); 
        swal("Player " + $("#5").text()+  " "+"Win!");
        $('.game1').off("click"); 
    }
    else if( $("#6").text() === $("#7").text() && $("#7").text() === $("#8").text()&& $("#7").text()!==""){
        console.log("win player " + $("#6").text()&& $("#7").text()); 
        swal("Player " + $("#6").text()+  " "+"Win!");
        $('.game1').off("click"); 
       
    }
    else if( $("#0").text() === $("#3").text() && $("#3").text() === $("#6").text()&& $("#3").text()!==""){
        console.log("win player " + $("#0").text()&& $("#6").text()); 
        swal("Player " + $("#0").text()+  " "+"Win!");
        $('.game1').off("click"); 
        
    }
   else if( $("#1").text() === $("#4").text() && $("#4").text() === $("#7").text()&& $("#1").text()!==""){
        console.log("win player " + $("#1").text()&& $("#4").text()); 
        swal("Player " + $("#1").text()+  " "+"Win!");
        $('.game1').off("click"); 
    }
    else if( $("#2").text() === $("#5").text() && $("#5").text() === $("#8").text()&& $("#5").text()!==""){
         console.log("win player " + $("#1").text()&& $("#5").text());
         swal("Player " + $("#2").text()+  " "+"Win!");
         $('.game1').off("click"); 
    }
    else if( $("#0").text() === $("#4").text() && $("#4").text() === $("#8").text()&& $("#4").text()!==""){
        console.log("win player " + $("#0").text()&& $("#0").text()); 
        swal("Player " + $("#0").text()+  " "+"Win!");
        $('.game1').off("click"); 
    }
   else if( $("#2").text() === $("#4").text() && $("#4").text() === $("#6").text()&& $("#2").text()!==""){
        console.log("win player " + $("#0").text()&& $("#2").text()); 
        swal("Player " + $("#2").text()+  " "+"Win!");
        $('.game1').off("click"); 
    }
    
    if (counter===9){
        console.log( "tie" )
        swal("Tie", "","");
        $('.game1').off("click"); 
    }
   }






   $("button").on("click",function(){
        counter =0; 
       turn = true; 
       $(".game1").html("");
       $('.game1').off("click"); 
       $(".game1").on("click",play); 
     
   })








 


// function refresh(){
//     window.location.reload();
// } 
    
    // var turn = true;   
    
    // var games =[];
  
    // function checkWinner() {
    //     for ( var i=1; i<=9;i++)
    //     games[i]=document.getElementById("A"+i).innerHTML;
    // }

    // function insert(id)
    // let M =getElementById(id)
    // if (turn && innerHTML=="" ){
    //   M.innerHTML();
    //   turn =!turn;
    // }else{
    //     M.innerHTML();
    //     turn =!turn;
    // }




    //     if (games[1]==games[2] && games[2]==games[3] && games[1]!==''){
    //        alert ("player" + games[1] +  "wins the game")}
          
    //    if (games[4]==games[5] && games[5]==games[6] && games[4]!==''){
    //             alert ("player" + games[4] +  "wins the game")}
    //    if (games[7]==games[8] && games[8]==games[9] && games[7]!==''){
    //                 alert ("player" + games[7] +  "wins the game")}
    //  if (games[1]==games[4] && games[4]==games[7] && games[1]!==''){
    //                     alert ("player" + games[1] +  "wins the game")}
    // if (games[2]==games[5] && games[5]==games[8] && games[2]==''){
    //    alert ("player" + games[2] +  "wins the game")}
                            
    //  if (games[3]==games[6] && games[6]==games[9] && games[3]==''){
    //    alert ("player" + games[3] +  "wins the game")}
    //      if (games[1]==games[5] && games[5]==games[9] && games[1]==''){
    //       alert ("player" + games[1] +  "wins the game")}
    //     if (games[3]==games[5] && games[5]==games[7] && games[3]==''){
    //          alert ("player" + games[3] +  "wins the game")}
                           
     //   // if (counter>=9) {
      //  alert ("game tie");   









    // i can use let 
   


