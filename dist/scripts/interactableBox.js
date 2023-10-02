function move_children(element) {
    const children = element.children;

    for(var i = 0; i < children.length; i++) {
        var child = children[i];
        child.classList.add("interactable-box-translater");
    }
}

function unmove_children(element) {
    const children = element.children;
    
    for(var i = 0; i < children.length; i++) {
        var child = children[i];
        child.classList.remove("interactable-box-translater");
    }
}