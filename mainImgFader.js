// Gabe Harms
// This script is used to fade pictures in and out of the "MainBgImg" section
// on the home page


// Array holding all images in the "MainBgImg" section
var images = document.getElementById("MainBgImg").getElementsByTagName("img");

// Initialize all image opacities to 0
for ( i = 0; i < images.length; i++ )
{
	images[i].style.opacity = 0;
}

var visableImgIndex = 0;
function changeImage ()
{
	// Iterate through all images
	for ( i = 0; i < images.length; i++ )
	{
		if (visableImgIndex != i )	// If not the image to be displayed make it transparent
		{
			images[i].style.opacity = 0;
		}
		else	// Otherwise this is the picture to be shown. Make it no longer transparent
		{
			images[i].style.opacity = 1;
		}
	}
	
	// Increase the index that determines which picture will be shown
	visableImgIndex++;
	
	// Bounds check
	if ( visableImgIndex == images.length)
	{
		visableImgIndex = 0;
	}
}

// Call changeImage right away in order to display an image
changeImage();

// Call changeImage every 5 seconds
setInterval(changeImage, 6000);

