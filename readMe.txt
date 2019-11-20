================================ iTunes Media Search App ======================

        Install the App

	When you have the file decompressed on your machine, open up your terminal and
	cd into the project folder and run the command "npm install", this will install
	all the required node modules which the backend needs to run. After this, run 
	"npm start" in your terminal to launch the backend. You should see 'Server is 
	listening on port 3001' in your terminal if the launch was successful.

	Now open a seperate terminal and cd into the client folder and run "npm install",
	and then "npm start", the DOM should then display the iTunes Media Search app.

	=====================================================================================

	Test the App

	To test the application, open up your terminal and cd into the project's client folder,
	run the command "npm start" and then "npm test".

	=======================================================================================

	Use the App

	This application allows you to type in a search term inside four different media search
	bars, namely, music, music videos, audiobooks and movies. Each of these can be navigated 
	to by the icons on the navbar as well as the drop-down which is only available on the 
	home-page.Either can be selected and the app will navigate to the selected media search.

	Once a media search has been selected, type in a search term and see the results displayed.
	To see a preview of the item, click on the label of the media, and the app will redirect
	you to the song/ product listing on Apple's website.

	Favorites can be added by clicking on the "Add a Favorite" button which is below each item
	of the search result.

	To view favorites, browse down to the bottom of the page.

	=======================================================================================
	
	Security

	Helmet was installed and used in the server.js file so that the express file could
	be secured.

	=====================================================================================

	API-Key Handling

	There were no API-Keys that needed to be handled. All API's were fetched using the
	light-weight module node-fetch directly from the iTunes API.

	==================================================================================

	Link

	https://shielded-woodland-75660.herokuapp.com/
	

	



	