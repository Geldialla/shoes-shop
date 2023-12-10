function changeImage(element) {
    // Get the source attribute of the clicked smaller image
    var newSrc = element.src;

    // Set the source attribute of the bigger image
    document.getElementById('imagebox').src = newSrc;
}