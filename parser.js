const messages = document.querySelectorAll("discord-message");
Array.from(messages).forEach((messageEl) => {
    const messageMarkupEl = messageEl.querySelector(".discord-message-markup")
    const messageCompactEl = messageEl.querySelector(".discord-message-compact-indent")

    if (!messageMarkupEl.textContent && messageCompactEl.children.length == 0) {
        messageEl.remove(); 
    } 
})
