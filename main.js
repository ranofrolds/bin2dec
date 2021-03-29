function convert(){
    const bin=document.getElementById('input_a').value;
    var length= bin.length;
 
    var number=0;
    var space=[];
    
    for(var i=length-1;i>=0;i--){
        if(bin.charAt(i)!= 0 && bin.charAt(i)!=1 && bin.charAt(i)!=' '){
            window.alert('Alert! You probably typed a number different from 0 and 1!');
            return 0;
        }
        else if((bin.charAt(i)==' ' && bin.charAt(i+1) == ' ' )||( bin.charAt(i)==' ' && bin.charAt(i-1) == ' ')){
            window.alert('Alert! You probably typed 2 blank spaces in a row!');
            return 0;
        }
        else if(bin.charAt(i)==' '){
            space[number]=i;
            number++;
        }
    }

    if(number>0){
        var dec=[number];
        for(var i=0; i<=number; i++){
            dec[number-i]=0;
            for(var j=length-1; j>=space[i]; j--){
                dec[number-i]+=parseInt((bin.charAt(j))*Math.pow(2,(length-1)-j));
            }
            length = space[i];
            if(i==number-1){
                space[i+1]=0;
            }   
        }
        
        document.getElementById('input_b').value=dec;
        
    }
    else{
        var dec=0;
        for(var i=length-1;i>=0;i--){
            dec+=parseInt((bin.charAt(i))*Math.pow(2,(length-1)-i));
        }
        document.getElementById('input_b').value = dec;
    }


}