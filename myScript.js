document.getElementById('enter-btn').addEventListener('click', function(){
    document.getElementById("welcome-id").style.display = 'none';
    document.getElementById("transaction-id").style.display = 'block';
    
})
document.getElementById("depositBtn").addEventListener("click", function(){
    update('depositTextID','depositSpan', 1, 'totalID');
    document.getElementById('depositTextID').value = "";
})
document.getElementById("withdrawBtn").addEventListener("click", function(){
    update('withdrawTextID','withdrawSpan', -1, 'totalID');
    document.getElementById('withdrawTextID').value = "";
})
function update(inputID,spanID,sign,totalID) {
    value =parseFloat(document.getElementById(inputID).value);
    document.getElementById(spanID).innerText = parseFloat(document.getElementById(spanID).innerText) + value
    document.getElementById(totalID).innerText = parseFloat(document.getElementById(totalID).innerText) + sign*value 
}
