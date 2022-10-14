function condition(){
    let val1 = prompt("Enter value 1", " ");
    let val2 = prompt("Enter value 2", " ");
    
        if(val1 == val2){
            alert("Both values are equal!");
        }else if(val1 > val2) {
            alert(`${val1} is higher than ${val2}`);
        }else  if(val1 < val2){
            alert(`${val2} is higher than ${val1}`);
        }
    }