#!/bin/bash
TOKEN="xoxp-6209710763493-6236228023216-6982129047282-ac24279ab576a3c3ced318c2a61e7669"
PHOTO_FILE="captura.png"
CHANNEL_ID="C06S26FBWP2"  

curl -F "token=$TOKEN" -F "channels=$CHANNEL_ID" -F "file=@$PHOTO_FILE" https://slack.com/api/files.upload

