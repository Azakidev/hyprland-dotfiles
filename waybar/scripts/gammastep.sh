#!/usr/bin/env zsh
if pgrep -x "gammastep" > /dev/null; then
	echo "😎"
	echo "Nightlight is on"
else
	echo "😃"
	echo "Nightlight is off"
fi