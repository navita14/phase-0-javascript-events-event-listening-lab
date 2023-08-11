function addingEventListener() {
    const input = document.getElementById('button');
    function clickAlert(button) {
     ('I was clicked!');
    }
input.addEventListener('click', clickAlert);
}
