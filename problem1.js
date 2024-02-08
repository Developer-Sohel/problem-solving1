// problems1
// function calculateMoney(ticketSale){

//     if(ticketSale < 1) {
//         return 'Please your validition numbers'
//     }  
 
//   else{
//     const perPiceTicketSale = 120;
//     const darawanCost = 500;
//     const lunchFee = 50*8;

//     let totalRecievedAmount = perPiceTicketSale * parseInt(ticketSale);
//     const totalCost = darawanCost + lunchFee

//     const totalProfit = totalRecievedAmount - totalCost;
//     return totalProfit 
//   }
   
   
// }


// problems2
// function checkName(name){

//     if(typeof(name) !== 'string') return "Invalid"

//     const validCharList = ['A', 'Y', 'I' , 'E' , 'O' , 'U', 'W'] 
//     const lastCharOfName = name.charAt(name.length -1)

//     const charExist = validCharList.filter(item => item.toLowerCase() === lastCharOfName.toLowerCase())

//     if(charExist.length > 0) return 'Good Name'
//     return 'Bad Name'
 
// }


// problem3

// function deleteInvalids(Array) {
//     if (!Array.isArray(Array) || Array.length === 0) {
//         return "Error: Input should be a non-empty array.";
//     }
//     function checkArray(value) {
//         return typeof value === 'number' && !isNaN(value);
//     }

//     const result = [];
//     for (let i = 0; i < Array.length; i++) {
//         if (checkArray(Array[i])) {
//             result.push(Array[i]);
//         }
  
//     }
//     return result;
// }
// const userArray = [NaN, 1, 12, 0, -1, undefined];
// const arrayResult = deleteInvalids(userArray);
// console.log(arrayResult); 


// problems 4
function password(obj) {
    const password = obj.siteName + obj.name + obj.birthYear;
    return password;   
}

// const Info = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
// const makingPass = password(Info); 
// console.log(makingPass)




// function deleteInvalids(array) {
   
//     if (!Array.isArray(array) || array.length === 0) {
//         return "Invaladition";
//     }

//     const validNumbers = array.filter(item => typeof item === 'number' && !isNaN(item));

//     return validNumbers;
// }

// // উদাহরণ:
// console.log(deleteInvalids([NaN, 1, 12, 0, -1, undefined])); // [1, 12, 0, -1]
// console.log(deleteInvalids([])); // এরর মেসেজ: "Error: Input should be a non-empty array."





// function monthlySavings(payments, livingCost){
//     if (!Array.isArray(payments) || typeof livingCost !== 'number') {
//         return "Invalid input";
//     }
//     const totalIncome = 0;
//     for (let payment of payments) {
//        if(payment <=3000){
//         const tax = payment *20 /100;
//         const mainIncome = payment - tax;
//         return payment+totalIncome;

//        }
//     }
// }

// const result = monthlySavings([ 900 , 2700 , 3400] , 10000)
// console.log(result)



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

// উদাহরণ:
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));  









