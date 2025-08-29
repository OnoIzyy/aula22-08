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
};

// simulação dos quartos
const totalRooms= 20;
const occupiedRooms=7;
const freeRooms= totalRooms- occupiedRooms;

document.getElementById('showRooms').onclick= function(){
    let html = `<strong>Total de Quartos:</strong> ${totalRooms}<br>` ;
    html +=`<strong>Ocupados:</strong> ${occupiedRooms} &nbsp; <strong>Livres:</strong> ${freeRooms}<br>` ;
    html += `<div class="rooms-status">`;
    for(let i=0;i<totalRooms;i++) {
        if(i<occupiedRooms){
            html +=`<span class="room-square room-occupied" title="Ocupado"></span>`;
        } 
        else{
        html+=`<span class="room-square room-free" title="Livre"></span>`;
        }
    }
    html +=`</div>`
    document.getElementById('roomsInfo').innerHTML = html;
    document.getElementById('roomsModal').style.display ='flex';
};

document.getElementById('closeRoomsModal').onclick = function() {
    document.getElementById('roomsModal').style.display= 'none';

};

window.onclick = function(event) { 
    if(event.tagert == document.getElementById('registerModal')){
        document.getElementById('registerModal').style.display = 'none';
    }
    if(event.tagert == document.getElementById('roomsModal'))
    {
        document.getElementById('roomsModal').style.display='none';
    }
};

