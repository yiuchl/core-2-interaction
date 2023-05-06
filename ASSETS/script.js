// // Split
// const draggable = document.querySelector('.draggable');
// const leftPanel = document.querySelector('.left-panel');
// const rightPanel = document.querySelector('.right-panel');

// let isSliding = false;
// let initialWidth;

// draggable.addEventListener('mousedown', (event) => {
//   isDragging = true;
//   initialWidth = leftPanel.offsetWidth;
// });

// document.addEventListener('mousemove', (event) => {
//   if (isSliding) {
//     const currentWidth = initialWidth + event.clientX - draggable.offsetLeft;
//     const containerWidth = leftPanel.offsetWidth + rightPanel.offsetWidth;
//     const leftPanelWidth = (currentWidth / containerWidth) * 100;
//     const rightPanelWidth = 100 - leftPanelWidth;

//     leftPanel.style.width = `${leftPanelWidth}%`;
//     rightPanel.style.width = `${rightPanelWidth}%`;
//   }
// });

// document.addEventListener('mouseup', (event) => {
//   isSliding = false;
// });


// draggableImage.js
const moveableImage = document.querySelector('.moveable-image');
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

if (moveableImage) {
    moveableImage.addEventListener('mousedown', dragStart);

    function dragStart(e) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;

        if (e.target === moveableImage) {
            isDragging = true;
        }
    }

    document.addEventListener('mousemove', drag);

    function drag(e) {
        if (isDragging) {
            e.preventDefault();

            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, moveableImage);
        }
    }

    document.addEventListener('mouseup', dragEnd);

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;

        isDragging = false;
    }
} else {
    console.error('Moveable image element not found');
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

// Circle sticker
// Star sticker
var e;
var elmnt;
var eventHold;
var holdTargetId;
var holdTarget;

const els = document.querySelectorAll(".circle");
els.forEach((name) => {
    console.log("els.forEach = " + name);
    dragElement(name);
});

const burs = document.querySelectorAll("#burst-12");
burs.forEach((name) => {
    console.log("burs.forEach = " + name);
    dragElement(name);
});

function dragElement(elmnt) {
    console.log("function dragElement() = " + elmnt);
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        console.log("function closeDragElement()")
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// COLOR RANDOMIZER BUTTON
let myColors = ['red', 'deeppink', 'orangered', 'orange', 'green', 'olivedrab', 'blue', 'darkviolet', 'mediumslateblue', 'rgb(33, 33, 33)'];

$('button').click(function () {
    let randomColor = myColors[Math.trunc(Math.random() * myColors.length)];
    $('p').css('color', randomColor);
});