document.getElementById('openRegister').onclick = function() {
    document.getElementById('registerModal').style.display='flex';
};
document.getElementById('closeModal').onclick= function() {
    document.getElementById('registerModal').style.display = 'none';

};
window.onclick=function(event){
    if(event.tagert== document.getElementById('registerModal')){
        document.getElementById('registerModal').style.display = 'none';
    }
};
document.getElementById('registerForm').onsubmit = function(e){
    e.preventDefault();
    alert('Hospede cadastrado com sucesso!');
    document.getElementById( 'registerModal').style.display ='none';
    this.reset();
}
