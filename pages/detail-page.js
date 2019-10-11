function submitComment() {
    //gather data
    const inputField = document.getElementById("name")
    let name = inputField.value
    const textarea = document.getElementById("msg")
    const msg = textarea.value

    //create the elements you need
    const comment = document.createElement("section")
    const h3 = document.createElement("h3")
    const p = document.createElement("p")

    // if (name[0] !== name[0].toUpperCase()) {
    //     name = name[0].toUpperCase() + name.slice(1)
    // }

    //adjust the elements we created
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg
    comment.classList.add("comment")
    comment.appendChild(h3)
    comment.appendChild(p)

    //reset form values
    inputField.value = null
    textarea.value = null

    // //no empty comments
    // if (!name || !msg) {
    //     alert('You forgot to fill in your name or message!')
    //     return null
    // } else {
    // //display the elements on the page
    // const commentSection = document.getElementById("comments")
    // commentSection.appendChild(comment)
    // }

    // //filter long comments
    // if (msg.length > 280) {
    //     alert('Your comment is too long!')
    //     return null
    // } else {
    // const commentSection = document.getElementById("comments")
    // commentSection.appendChild(comment)
    // }
    if (doesNotPassAllValidations(name, msg)) {
        return null
    } else {
    const commentSection = document.getElementById("comments")
    commentSection.appendChild(comment)
    }
}

// function doesNotPassAllValidations(name, msg) {
//     if (!name || !msg) {
//         alert('You forgot to fill in your name or message!')
//         return true
//     }

    // if (msg.length > 280) {
    //     alert('Your message is too long!')
    //     return true
//     }
    
//     return false
// }

function doesNotPassAllValidations(name, msg) {
    if (!name) {
        alert('You forgot to fill in your name!')
        return true
    }

    if (!msg) {
        alert('You forgot to fill in your comment!')
        return true
    }

    if (msg.length > 280) {
        alert('Your message is too long!')
        return true
    }

    if (name.includes('cunt', 'shit', 'fuck', 'damn', 'nigga')) {
        alert('Your name is inappropriate!')
        return true
    }

    if (msg.includes('cunt', 'shit', 'fuck', 'damn', 'nigga')) {
        alert('Your name is inappropriate!')
        return true
    }

    return false
}