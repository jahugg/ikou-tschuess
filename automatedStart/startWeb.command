#!/bin/bash

# on terminal
# chmod +x startWeb.command
echo 'the application will start in two seconds, please wait'
sleep 2  # Waits 5 seconds.
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --kiosk "http:localhost:1234"

exit