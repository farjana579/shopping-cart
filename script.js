function productCount(isIncrease){
    const phoneInput = document.getElementById('phone-count').value;
      const phoneCount = parseInt(phoneInput);
          let phoneNewInput = phoneCount;
            if(isIncrease == false && phoneNewInput > 0){
                phoneNewInput = phoneCount - 1;
            }
            else {
                phoneNewInput = phoneCount + 1;
            }
                document.getElementById('phone-count').value = phoneNewInput;
                 const phonePrice = phoneNewInput * 1219
                     document.getElementById('phone-price').innerText = phonePrice;
}
document.getElementById('phone-increase').addEventListener('click',function(){
    productCount(true);
                           })
document.getElementById('phone-decrease').addEventListener('click',function(){
     productCount(false);
})                       