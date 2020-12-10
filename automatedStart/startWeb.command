#!/bin/bash

# on terminal
# chmod +x startWeb.command
echo 'the application will start in five seconds, please wait'
sleep 5  # Waits 5 seconds.
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --kiosk "http:localhost:1234"

