#!/bin/bash
TOKEN="xoxp-6209710763493-6236228023216-6975593323366-2612d306722fe9a62bd83b2500f85912"
PHOTO_FILE="captura.png"
CHANNEL_ID="C06S26FBWP2"  

curl -F "token=$TOKEN" -F "channels=$CHANNEL_ID" -F "file=@$PHOTO_FILE" https://slack.com/api/files.upload

