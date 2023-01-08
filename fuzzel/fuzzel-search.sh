#!/bin/bash

#   Thanks to @taylor85345@fosstodon.com for the help ^-^

search=$(fuzzel --dmenu --prompt="Search: " --width=30 --lines=0)
if [ -z "$search" ]; then exit; fi

result=$(ddgr --json $search | tee /tmp/search.tmp | jq -r -S '"\(.[].title) - \(.[].url) -", .[].abstract' | fuzzel --dmenu | awk '{1 ; sub(/ - http.*/, ""); print}')
if [ -z "$result" ]; then exit; fi

url=$(cat /tmp/search.tmp | jq -r ".[] | select(.title == \"$result\") | .url")

firefox "$url"

rm /tmp/search.tmp