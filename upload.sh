#!/bin/bash
TOKEN="xoxp-6209710763493-6236228023216-6967690753831-9ebfa2583cbd1b23bac0d95cbf09a9f8"
PHOTO_FILE="captura.png"
CHANNEL_ID="C06S26FBWP2"  

curl -F "token=$TOKEN" -F "channels=$CHANNEL_ID" -F "file=@$PHOTO_FILE" https://slack.com/api/files.upload

