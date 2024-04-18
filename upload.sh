#!/bin/bash
TOKEN="xoxp-6209710763493-6236228023216-6994906397793-7cefd4cddba6a8b7bc6a3ed03761f358
"
PHOTO_FILE="captura.png"
CHANNEL_ID="C06S26FBWP2"  

curl -F "token=$TOKEN" -F "channels=$CHANNEL_ID" -F "file=@$PHOTO_FILE" https://slack.com/api/files.upload

