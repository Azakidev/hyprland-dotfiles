search=$(fuzzel --dmenu --dmenu --prompt="Search: " --width=30 --lines=0)
if [ -z "$search" ]; then exit; fi

choice=$(ddgr -n 0 --np -x $search | fuzzel --dmenu --prompt="Choose the url | " --width=50 --lines=20)
if [ -z "$choice" ]; then exit; fi

firefox --new-window $choice