#!/bin/zsh

confirm() {
	answer=$(printf "Yes\nNo" | fuzzel --dmenu --width=5 --lines=2)
	echo $answer
}

if (ps -a | grep fuzzel >/dev/null); then
	killall -q fuzzel
else
	chosen=$(printf "直 Wi-Fi\n󰐥 Power Off\n󰑐 Restart\n󰌾 Lock\n󰗽 Logout" | fuzzel --dmenu --width=7 --lines=4)

	case "$chosen" in
	"直 Wi-Fi")
		~/Documents/hyprland-dotfiles/fuzzel/fuzzel-wifi-menu.sh
		;;
	"󰐥 Power Off")
		answer=$(confirm &)
		if [[ $answer == "Yes" ]]; then
			systemctl poweroff
		elif [[ $answer == "No" ]]; then
			exit 0
		else
			echo "Aborted systemctl poweroff"
		fi
		;;
	"󰑐 Restart")
		answer=$(confirm &)
		if [[ $answer == "Yes" ]]; then
			systemctl reboot
		elif [[ $answer == "No" ]]; then
			exit 0
		else
			echo "Aborted systemctl reboot"
		fi
		;;
	"󰌾 Lock")
		answer=$(confirm &)
		if [[ $answer == "Yes" ]]; then
			swaylock
		elif [[ $answer == "No" ]]; then
			exit 0
		else
			echo "Aborted swaylock"
		fi
		;;
	"󰗽 Logout")
		answer=$(confirm &)
		if [[ $answer == "Yes" ]]; then
			echo "Logout"
		elif [[ $answer == "No" ]]; then
			exit 0
		else
			echo "Aborted logout"
		fi
		;;
	*) exit 1 ;;
	esac
fi