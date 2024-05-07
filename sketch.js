// Variables and arrays 
let images = []; // Images array
let currentIndex = 0 // Track current Index 
let ascending = true; // Track direction of move through array 

function preload(){
  for (let x = 1; x <= 120; x++){ // move through 120 indexes 
    images.push(loadImage('Images/C (' + x + ').jpg')); //load images 
  }
}

function setup() {
  createCanvas(850, 600);
  pixelDensity(1) // Easier to load in different devices
  frameRate(4) // Two images per second 
}

function counting(){ // Counting text function 
  let seconds = floor(millis() / 1000) // Current second
  textSize(34); // Counter size 
  fill(255) 
  textFont('Old English Text MT')
  text(seconds, 100, 100);
}

function poem(){ // Explaining poem function 
  textSize(18); // Size of poem 
  // Wraping poem
  text("As numbers rise, this clock's decree,\nThirty seconds forth, then back to see.\nIn its rhythmic dance, it does partake,\nThirty seconds each, a minute to make.", 560, 40)
}

function draw() {
  background(220);
  image(images[currentIndex], 0, 0) // Display current image 

  // Texts
  counting();
  poem();
 
  if (ascending) { // If ascending true 
    currentIndex++; // Ascending motion
  } else {
    currentIndex--; // Decending motion 
  }

  // Order of motion 
  // If the current image is larger or equal to 120
  if (currentIndex >= images.length){ 
    currentIndex = images.length - 1 // Set to previous image 
    ascending = false // Descending motion
  } else if (currentIndex < 0 ){ // If current index reaches 0 
    currentIndex = 0 // Reset to first image 
    ascending = true // Ascending motion 
  }
}
