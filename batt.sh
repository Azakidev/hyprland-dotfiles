dbus-send --print-reply=literal --system --dest=org.bluez /org/bluez/hci0/dev_DE_C9_F6_4C_D2_9A org.freedesktop.DBus.Properties.Get string:"org.bluez.Battery1" string:"Percentage" | awk  '{print $3"%"}'