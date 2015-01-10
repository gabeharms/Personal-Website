// Gabe Harms
// Script that changes text displayed on the menubar
// 		Found this helpful after several changes in the items displayed in the menu bar


// Global variables to be filled with menu names and hrefs members
var topLevelObjects = [];		// Filled with first level menu content
var dropDownObjects = [];		// Filled with content for the drop down menu

// Prefer to have a "main" (stuck in my c ways)
main();

function main () 
{
	// Handles filling object array with names and links
	createObjects();
	
	// Change text and href's of the menu items 
	alterMenu();
}

function createObjects ()
{
	// Text and href's to be applied to the menu, in order from first to last
	var topLevelLabels = ["Home", "About", "Portfolio", "Contact", "Login"];
	var topLevelLinks  = ["Homepage.html", "About.html", "#", "Contact.html", "Login.html"];
	var dropDownLabels = ["Education", "Work Experience", "Projects" ];
	var dropDownLinks  = ["Education.html", "Work_Experience.html", "Projects.html"];

	// Initialize object array to have both name and link members
	for ( i = 0; i < topLevelLabels.length; i++ )
	{
		topLevelObjects.push( {name:topLevelLabels[i], link:topLevelLinks[i]} );
	}
	
	// Initialize object array to have both name and link members
	for ( i = 0; i < dropDownLabels.length; i++ )
	{
		dropDownObjects.push( {name:dropDownLabels[i], link: dropDownLinks[i]} );
	}
}	

function alterMenu ()
{
	// Get the menu "section" node
	var menu_object = document.getElementById("Iteractive_Menu");
	
	// Get all hyperlinks in the menu "section"
	var menu_links = menu_object.getElementsByTagName("a");

	// Create array to hold drop down menu objects
	var dropDownElements = [];

	// Change first level menu content
	var count = 0;
	for ( i = 0; i < menu_links.length; i++ )
	{	
		// If hyperlink belongs to the dropdown menu, add it to the
		// array and save for later
		if (menu_links[i].parentNode.parentNode.id == "dropdown")
		{
			dropDownElements.push(menu_links[i]);
		} 
		else // Change menu content
		{		
			menu_links[i].innerHTML = topLevelObjects[count].name;
			menu_links[i].href 		= topLevelObjects[count].link;
			count++;
		}
	}
	
	// Change dropdown menu content
	for ( i = 0; i < dropDownElements.length; i++ )
	{
		dropDownElements[i].text = dropDownObjects[i].name;
		dropDownElements[i].href = dropDownObjects[i].link;
	}
}