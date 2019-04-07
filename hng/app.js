
const toolbar = document.querySelector('.toolbar')
const editor = document.querySelector('.editor')
editor.addEventListener('click', (e)=> {
    setTimeout(()=> {
        toolbar.style.opacity = 1
    }, 500)
})

const editorDefaultText = editor.textContent.trim();
// Focus listener on editor
// If its content is the default content, it clears the content.
editor.addEventListener('focus', () => {
    if (editor.textContent.trim() === editorDefaultText) {
        editor.textContent = "";
    }
});

// Focus on editor on tool click
const toolbarTools = Array.prototype.slice.call(document.querySelectorAll('.toolbar .tool'));
toolbarTools.forEach(el => el.addEventListener('click', () => editor.focus()));

window.addEventListener('click', (e) => {
    let target = e.target;
    if (target !== editor && !toolbarTools.includes(target) && target !== toolbar) {
        toolbar.style.opacity = 0;

        if (!editor.textContent.trim()) {
            editor.textContent = editorDefaultText;
        }
    }
});