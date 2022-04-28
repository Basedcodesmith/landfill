function getTrolled() {
    let template = '<img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png">'
    document.getElementById('trollface').innerHTML += template

}

function getVBucks() {
    document.getElementById('v-bucks').classList.add('hidden')
    document.getElementById('troll-btn').classList.remove('hidden')
}



