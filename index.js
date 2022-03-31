
function reversingNum(){
    var num = document.getElementById('texter').value;
    if(num!=0){
    var ans = num%10;
    num = Math.floor(num/10)
    finalReversing(num,ans);}
    else{
        alert('Enter a value first')
    }
    }


    function finalReversing(num,ans){

        var temp = num/10;
        temp=Math.floor(temp)
        if(temp==0){
            ans=(ans*10)+num;
            alert("Reversed number is "+ans)
            document.getElementById('texter').value = "";
            document.getElementById('naming').value = "";
            return;
        }
                    
            var a = num%10;
            ans = (ans*10)+a;
            num = Math.floor(num/10);   

            
            finalReversing(num,ans);
            return;
    }