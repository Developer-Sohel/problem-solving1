

function calculateMoney(ticketSale){

    if(ticketSale < 1) {
        return 'Please your validition numbers'
    }  
 
  else{
    const perPiceTicketSale = 120;
    const darawanCost = 500;
    const lunchFee = 50*8;

    let totalRecievedAmount = perPiceTicketSale * parseInt(ticketSale);
    const totalCost = darawanCost + lunchFee

    const totalProfit = totalRecievedAmount - totalCost;
    return totalProfit 
  }
   
   
}





function checkName(name){

    if(typeof(name) !== 'string') return "Invalid"

    const validCharList = ['A', 'Y', 'I' , 'E' , 'O' , 'U', 'W'] 
    const lastCharOfName = name.charAt(name.length -1)

    const charExist = validCharList.filter(item => item.toLowerCase() === lastCharOfName.toLowerCase())

    if(charExist.length > 0) return 'Good Name'
    return 'Bad Name'
 
}





function deleteInvalids(array) {
   
    if (!Array.isArray(array) || array.length === 0) {
        return "Invalidition";
    }

    const numbers = array.filter(item => typeof item === 'number' && !isNaN(item));

    return numbers;
}




function password(obj) {
    const password = obj.siteName + obj.name + obj.birthYear;
    return password;   
}

// const Info = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
// const makingPass = password(Info ); 
// console.log(makingPass)





function monthlySavings(payments, livingCost) {
   
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "Invalid input";
    }

    let totalEarning = 0;
   
    for (let payment of payments) {
      
        if (payment >= 3000) {
            totalEarning += payment * 20 / 100; 
        } else {
            totalEarning += payment;
        }
    }

   
    let savingsAmount = totalEarning - livingCost;

    
    if (savingsAmount <= 0) {
        return "earn more";
    } else {
        return savingsAmount; 
    }
}


console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));  
  
