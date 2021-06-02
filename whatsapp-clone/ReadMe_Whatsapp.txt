<IconButton>
     <ChatIcon/>
</IconButton>

IconButton from materal UI can change the icon into clickable button.

******************************************************************************************************************************************************************************

** To run the command --nodemon server.js-- in the backend section execution policy should be changed to "Unrestricted"(should starts with capital letter).

command to change it to unrestricted 

	--- Set-ExecutionPolicy -> Press Enter -> ExecutionPolicy: Unrestricted ---

******************************************************************************************************************************************************************************

mongoDB user credentials
-----------------------

username - admin
password - Mq9P6GkscEY1xWPk

******************************************************************************************************************************************************************************

Pusher-js
----------

Pusher is an application helps to send and receive request between the front-end and back-end(MongoDB Atlas) on real time.

******************************************************************************************************************************************************************************

FireBase Deploying issue
------------------------

proceed - y
public folder - build
single page - yes
github - no
overwrite - no

**** after deploying, you see the documentation page clear the cache(ctrl+F5) ****


** if node application didn't work and shows an error "already running"

in your cmd - netstat -ano|findstr "PID :3000" (3000 - your app port number).

you will get the task and its ID.

write the below code - taskkill /pid 18264 /f (18264 - task ID / f-force)

https://levelup.gitconnected.com/how-to-kill-server-when-seeing-eaddrinuse-address-already-in-use-16c4c4d7fe5d

******************************************************************************************************************************************************************************

Heroku Dploying issues
----------------------

steps to deploy.
1.heroku login - https://www.freecodecamp.org/news/deploying-a-mern-application-using-mongodb-atlas-to-heroku/#calling-apis-on-the-frontend
2.heroku create - your heroku app will be created and the link will be given.
3. edit the package.json with - 
	"engines": {
        "node": "10.16.0"
    }

4.git init - see this commands in heroku website under your application page.
5.heroku git:remote -a "application name".
6.git add .
7.git commit -am "make it better"
8.git push heroku master/ main.
9.Existing Git repository
For existing repositories, simply add the heroku remote
	 heroku git:remote -a boiling-lake-78731