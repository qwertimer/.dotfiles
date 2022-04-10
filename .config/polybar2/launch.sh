#!/usr/bin/env bash

# Terminate already running bar instances
killall -q polybar

# Wait until the processes have been shut down
while pgrep -u $UID -x polybar >/dev/null; do sleep 1; done

(sleep 2; polybar bar) &

ext_monitor=$(xrandr --query | grep 'DP-1')
if [[ $ext_monitor = *connected* ]]; then

    (sleep 2; polybar bar2) &
fi
