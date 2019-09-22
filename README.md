# FriendFinder
---
 I've built a compatibility-based "FriendFinder" application -- basically a dating app. This ``full-stack`` site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

To use this ``full-stack`` web service, simply go to our homepage and take the state-of-the-art survey. Immediately after submitting the survey, your perfect best friend will pop up. You will also have an API you can access to the network's users and their personalized information. For research purposes.

# Technologies Used
---
* JavaScript
* jQuery
* node.js
* Express.js
* HTML
* Bootstrap

# Code Explanation
---
* The ``server.js`` file sets up the Express server, specifying our port number, the npm packages that need to be loaded, and also the routes, which we have externalized
* There are 2 separate HTML files (``home.html`` and ``survey.html``) that serve as the front-end portion of our code; they determine what the user sees (the homepage and the survey, which will also show the resulting best match)
* There are 2 routing files (``htmlRoutes.js`` and ``apiRoutes.js``) determine the back-end logic (based on the request being made, the response that gets sent to the browser); the HTML routes display the survey and the homepage based on the URL that is accessed, and the API routes send back existing content in the server-side data or add new friends
* Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object
* A modal is then toggled, displaying the the best match to the person who just took the survey

This ```full-stack``` application is hosted on heroku here: 
