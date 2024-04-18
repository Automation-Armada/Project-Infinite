#!/bin/bash
TOKEN="xoxp-6209710763493-6236228023216-6979287391157-061fd6c43a37400f0e7a704f811b51c1"
PHOTO_FILE="captura.png"
CHANNEL_ID="C06S26FBWP2"  

curl -F "token=$TOKEN" -F "channels=$CHANNEL_ID" -F "file=@$PHOTO_FILE" https://slack.com/api/files.upload

