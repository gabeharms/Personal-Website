// Gabe Harms
// Script to animate the home page

// Project Button Object
var ProjectButton = { name:"Projects",
					  position:0, 				// The current project button position in %
					  offset:40,				// Final left % of the project button
					  slowSpeed:20,				// Interval in milliseconds when we want to move the project button slow
					  fastSpeed:10,				// Interval in milliseconds when we want to move the project button fast
					  slowIncrement:.2,			// Percentage increase during a slow animate function
					  fastIncrement:.3,			// Percentage increase during a fast animate function
					  fastCuttOff:.80,			// Percentage of final position we want to fast animate to
					  fastInvertalHandle:0,		// Handle to the fast animate interval function
					  slowIntervalHandle:0		// Handle to the slow animate interval function
};

// Work Button Object
var WorkButton 	  = { name:"Work_Experience",
					  position:0, 
					  offset:81,
					  slowSpeed:15,
					  fastSpeed:10,
					  slowIncrement:.2,
					  fastIncrement:.3,
					  fastCuttOff:.85,
					  fastInvertalHandle:0,
					  slowIntervalHandle:0
};


window.onload = function() {
	
	// Align work and project buttons on top of the education button
	document.getElementById("Projects").style.left = 0 + "%";
	document.getElementById("Work_Experience").style.left = 0 + "%";
	
	// Begin Animation of the work and project button using our objects
	WorkButton.fastIntervalHandle = setInterval( function() {animate(WorkButton, "fast"); }, WorkButton.fastSpeed);
	ProjectButton.fastIntervalHandle = setInterval( function() {animate(ProjectButton, "fast"); }, ProjectButton.fastSpeed);


}

// Function handles all animations
function animate(Button, speedType)
{	
	// Determine what speed of the animation is. This will tell us what most of our variables are
	var offset = (speedType == "fast") ? Button.fastIncrement : Button.slowIncrement;
	var max = (speedType == "fast") ? Button.offset*Button.fastCuttOff : Button.offset;
	var intervalHandle = (speedType == "fast") ? Button.fastIntervalHandle : Button.slowIntervalHandle;

	// Increase the current position of the button
	Button.position+= offset;
	
	// Set the new position of the button
	document.getElementById(Button.name).style.left = Button.position + "%";

	// Check boundary condition
	if ( Button.position >= max )
	{
		clearInterval(intervalHandle);
		
		// If this was a fast animate, we need to slow animate to the final position
		if ( speedType == "fast")
		{
			Button.slowIntervalHandle = setInterval( function() {animate(Button, "slow"); }, Button.slowSpeed);
		}
	}
	
}







