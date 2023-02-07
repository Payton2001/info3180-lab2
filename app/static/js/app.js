/* Add your Application JavaScript */
window.onload = function(){
    const follower = document.getElementById('follower')
    const btn = document.getElementById('btn')
    btn.addEventListener('click', function(e) {
        e.preventDefault()
        total = parseInt(follower.innerHTML)
        total += 1
        follower.innerHTML = total.toString()

    })

}