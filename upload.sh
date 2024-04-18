#!/bin/bash
TOKEN="xoxp-6209710763493-6236228023216-6984733372068-f32623244fee94177125f1e7263415c8"
PHOTO_FILE="captura.png"
CHANNEL_ID="C06S26FBWP2"  

curl -F "token=$TOKEN" -F "channels=$CHANNEL_ID" -F "file=@$PHOTO_FILE" https://slack.com/api/files.upload

