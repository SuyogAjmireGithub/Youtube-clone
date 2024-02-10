function myFunction() {
    var end = document.getElementById("end");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (end.style.display === "none") {
        end.style.display = "inline";
        btnText.innerHTML = "...more";
        moreText.style.display = "none";
    } else {
        end.style.display = "none";
        btnText.innerHTML = "Show less";
        moreText.style.display = "inline";
    }
    }
    

var originalImage = "images/like.png";
    var newImage = "images/like1.png";
    var currentImage = originalImage;
function changeImage(){
    var image = document.getElementById("img");
    if (currentImage === originalImage) {
        image.src = newImage;
        currentImage = newImage;
        } else {
        image.src = originalImage;
        currentImage = originalImage;
        }
}

var originalImage1 = "images/dislike.png";
    var newImage1 = "images/dislike1.png";
    var currentImage1 = originalImage1;
function changeImage1(){
    var image = document.getElementById("img1");
    if (currentImage1 === originalImage1) {
        image.src = newImage1;
        currentImage1 = newImage1;
        } else {
        image.src = originalImage1;
        currentImage1 = originalImage1;
        }
}


function showButtons() {
    var buttonsContainer = document.getElementById("commentButtons");
    buttonsContainer.style.display = "block";
}

function cancelComment() {
    var inputBox = document.getElementById("commentInput");
    inputBox.value = "";
    hideButtons();
}

function postComment() {
    var inputBox = document.getElementById("commentInput");
    var comment = inputBox.value;
    var resultContainer = document.getElementById("commentResult");

    var commentParagraph = document.createElement("p");
    commentParagraph.textContent = "@ashishlohakare: "  + comment;

    resultContainer.appendChild(commentParagraph);

    inputBox.value = "";
    hideButtons();
}

function hideButtons() {
    var buttonsContainer = document.getElementById("commentButtons");
    buttonsContainer.style.display = "none";
}

// --------------------

function toggleSubscribe() {
    var subscribeButton = document.getElementById('subscribeButton');

    if (subscribeButton.innerText === 'Subscribe') {
        subscribeButton.innerText = 'Unsubscribe';
        subscribeButton.style.backgroundColor = 'black';
    } else {
        subscribeButton.innerText = 'Subscribe';
        subscribeButton.style.backgroundColor = '';
    }
    }


// -------------------
function toggleImage() {
    var likeImage = document.getElementById('likeImage');

    if (likeImage.src.includes('images/like.png')) {
        likeImage.src = 'images/like1.png';
    } else {
        likeImage.src = 'images/like.png';
    }
    }

function toggleImage1() {
    var likeImage = document.getElementById('dislikeImage');

    if (likeImage.src.includes('images/dislike.png')) {
        likeImage.src = 'images/dislike1.png';
    } else {
        likeImage.src = 'images/dislike.png';
    }
    }
function toggleImage2() {
    var likeImage = document.getElementById('likeImage1');

    if (likeImage.src.includes('images/like.png')) {
        likeImage.src = 'images/like1.png';
    } else {
        likeImage.src = 'images/like.png';
    }
    }

function toggleImage3() {
    var likeImage = document.getElementById('dislikeImage1');

    if (likeImage.src.includes('images/dislike.png')) {
        likeImage.src = 'images/dislike1.png';
    } else {
        likeImage.src = 'images/dislike.png';
    }
    }

function toggleImage4() {
    var likeImage = document.getElementById('likeImage2');

    if (likeImage.src.includes('images/like.png')) {
        likeImage.src = 'images/like1.png';
    } else {
        likeImage.src = 'images/like.png';
    }
    }

function toggleImage5() {
    var likeImage = document.getElementById('dislikeImage2');

    if (likeImage.src.includes('images/dislike.png')) {
        likeImage.src = 'images/dislike1.png';
    } else {
        likeImage.src = 'images/dislike.png';
    }
    }


function toggleImage6() {
    var likeImage = document.getElementById('likeImage3');

    if (likeImage.src.includes('images/like.png')) {
        likeImage.src = 'images/like1.png';
    } else {
        likeImage.src = 'images/like.png';
    }
    }

function toggleImage7() {
    var likeImage = document.getElementById('dislikeImage3');

    if (likeImage.src.includes('images/dislike.png')) {
        likeImage.src = 'images/dislike1.png';
    } else {
        likeImage.src = 'images/dislike.png';
    }
    }