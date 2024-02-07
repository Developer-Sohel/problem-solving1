// problems1
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


// problems2
function checkName(name){

    if(typeof(name) !== 'string') return "Invalid"

    const validCharList = ['A', 'Y', 'I' , 'E' , 'O' , 'U', 'W'] 
    const lastCharOfName = name.charAt(name.length -1)

    const charExist = validCharList.filter(item => item.toLowerCase() === lastCharOfName.toLowerCase())

    if(charExist.length > 0) return 'Good Name'
    return 'Bad Name'
 
}


// problem3

function deleteInvalids(Array) {
    function checkArray(value) {
        return typeof value === 'number' && !isNaN(value);
    }

    const result = [];
    for (let i = 0; i < Array.length; i++) {
        if (checkArray(Array[i])) {
            result.push(Array[i]);
        }
    }
    return result;
}
const userArray = [NaN, 1, 12, 0, -1, undefined];
const arrayResult = deleteInvalids(userArray);
console.log(arrayResult); 


// problems 4
function password(object) {
    const password = object.siteName + object.name + object.birthYear;
    return password;     
}

const Info = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
const makingPass = password(Info); 
console.log(makingPass)




















