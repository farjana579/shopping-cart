// function productCount(isIncrease){
//     const phoneInput = document.getElementById('phone-count').value;
//       const phoneCount = parseInt(phoneInput);
//           let phoneNewInput = phoneCount;
//             if(isIncrease == false && phoneNewInput > 0){
//                 phoneNewInput = phoneCount - 1;
//             }
//             else {
//                 phoneNewInput = phoneCount + 1;
//             }
//                 document.getElementById('phone-count').value = phoneNewInput;
//                  const phonePrice = phoneNewInput * 1219
//                      document.getElementById('phone-price').innerText = phonePrice;
// }
// document.getElementById('phone-increase').addEventListener('click',function(){
//     productCount(true,'phone-count');
//                            })
// document.getElementById('phone-decrease').addEventListener('click',function(){
//      productCount(false,'phone-count');
// })                      
// document.getElementById('case-increase').addEventListener('click',function(){
//     // const caseInput = document.getElementById('case-count').value;
//     // const caseCount = parseInt(caseInput);
//     // const caseNewInput = caseCount + 1;
//     // document.getElementById('case-count').value = caseNewInput;
//     // const casePrice = caseNewInput * 59;
//     // document.getElementById('case-price').innerText = casePrice;
//     productCount(true,'case-count');
// })
// document.getElementById('case-decrease').addEventListener('click',function(){
    // const caseInput = document.getElementById('case-count').value;
    // const caseCount = parseInt(caseInput);
    // const caseNewInput = caseCount - 1;
    // document.getElementById('case-count').value = caseNewInput;
    // const casePrice = caseNewInput * 59;
//     // document.getElementById('case-price').innerText = casePrice;
//     productCount(false,'case-count');
// })
function productCount(isIncrease,id){
      const productCount = getInputValue(id);
          let productNewInput = productCount;
            if(isIncrease == false && productNewInput > 0){
                productNewInput = productCount - 1;
            }
            else {
                productNewInput = productCount + 1;
            }
                document.getElementById(id).value = productNewInput;
                if(id == 'phone-count'){
                 const productPrice = productNewInput * 1219
                     document.getElementById('phone-price').innerText = productPrice;
        }
        else{
            const productPrice = productNewInput * 59;
              document.getElementById('case-price').innerText = productPrice;
        }
        calculateTotal();
    }
    function calculateTotal(){
        const phoneCount =  getInputValue('phone-count')
        const caseCount =  getInputValue('case-count');
        const subTotal = phoneCount *1219 + caseCount * 59;
        document.getElementById('sub-total').innerText = '$' + subTotal;
        const tax = Math.round(subTotal * 0.1);
        document.getElementById('tax-amount').innerText = '$' + tax;
        const totalPrice = subTotal + tax;
        document.getElementById('total-price').innerText = totalPrice;
    
    }
    function getInputValue(id){
        const productInput = document.getElementById(id).value;
        const productCount = parseInt(productInput);
        return productCount;
    }

