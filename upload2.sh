#!/bin/bash
TOKEN="xoxp-6209710763493-6236228023216-6979539811362-e7d64f3e049afb34ab7dc719d4bfd020"
ZIP_FILE="/captura.zip"
CHANNEL_ID="C06S26FBWP2"

curl -F "token=$TOKEN" -F "channels=$CHANNEL_ID" -F "file=@$ZIP_FILE" https://slack.com/api/files.upload
