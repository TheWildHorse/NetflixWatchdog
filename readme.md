# Netflix Watchdog
**In soviet russia Netflix watches YOU!**

## What does this weird thing do?
Netflix Watchdog watches you watch netflix, and once you move your head away from your screen or fall asleep it will pause your show/movie. Once your face is once again looking at the screen - the show/movie is resumed.

## How to use it?
**Please don't, this is just a concept implementation created in the laziest way possible. Has many drawbacks which I haven't bothered to fix.**

If you have to try it, here are the steps to do so:
1. Clone the repo  
2. Build the Docker image within `openface`  
3. Start the Docker container  
4. Install the unpacked chrome extension from `chrome-extension`
5. Navigate to `https://localhost:8000` and open Netflix in a seperate window  
6. Run a Netflix video and start watching (keep the abovementioned site opened in a window side-by-side)  
7. Open the Chrome extension by clicking the extension button  
8. All set! The video should pause as your face comes in and out of the camera frame  
