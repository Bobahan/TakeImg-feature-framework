imgList.onclick = function(event) {
    let img = event.target.closest('a');
    if(!img) return;
    showImg(img.href, img.title)
    event.preventDefault();
}

function showImg(href, title) {
    largeImg.src = href; 
    largeImg.alt = title
}
