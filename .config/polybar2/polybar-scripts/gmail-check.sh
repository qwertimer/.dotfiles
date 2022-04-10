#!/usr/bin/bash

set -euf -o pipefail

DEBUG=${DEBUG:-''}
EMPTY_SNOOZE=${EMPTY_SNOOZE:-0}  # if mail is empty, sleep for some seconds.  no snooze if its full so it can check when its empty sooner.

# checks all gmail accounts using firefox cookies

function dump-cookies() {
  # copy pastad these.  do we need them?
  echo "# Netscape HTTP Cookie File"

  sqlite3 -separator $'\t' "$@" <<- EOF
.mode
.header off
    select
      host,
      case substr(host,1,1)='.' when 0 then 'FALSE' else 'TRUE' end,
      path,
      case isSecure when 0 then 'FALSE' else 'TRUE' end,
      expiry,
      name,
      value
    from moz_cookies
    where host like '%google.com'
    ;
EOF
}

# find all cookie jars
# delete adjacent dumps if old
# copy jar
# make dump
# delete spare

function firefox-cookie-jars() {
  FILENAME='cookies-gmail.txt'

  # delete after a week
  find /home/qwertimer/.mozilla/firefox -maxdepth 2 -mindepth 2 -name $FILENAME -mtime +1 -delete

  for orig_sql in "$(find /home/qwertimer/.mozilla/firefox -maxdepth 2 -mindepth 2 -name cookies.sqlite)" ; do
    profile_dir="${orig_sql%/*}"
    cookies_txt="$profile_dir/$FILENAME"
    tmp_sql="$profile_dir/cookies-tmp.sqlite"

    if [ ! -f "$cookies_txt" ] ; then
      cp $orig_sql $tmp_sql
      dump-cookies $tmp_sql > $cookies_txt
      rm "$tmp_sql"
    fi

    echo $cookies_txt
  done
}


function accounts() {
  for file in $(firefox-cookie-jars) ; do
    grep '/mail/u/[0-9]' $file | awk -e '{print $3}' | sort | uniq
  done
}

function debug() {
  [[ "$DEBUG" != '' ]] && echo "$@" 1>&2 || true
}

function icon() {
  ICON=""
  COLOR=''

  if [[ "$@" == *"Inbox for delltim@gmail.com"* ]] ; then
    COLOR="#5484ed"
  fi

  if [[ "$@" == *"Inbox for tim@fluxrobotics.ai"* ]] ; then
    COLOR="#00B373"
  fi

  debug $COLOR
  [[ "$COLOR" != "" ]] && echo "%{F$COLOR}$ICON%{F-}"
}

function curl-cookie-opt() {
  firefox-cookie-jars | while read file ; do
    echo -n "-b $file "
  done
}

function auth-check() {
  echo "$@" | grep Unauthorized && echo 'AUTH GMAIL' && exit 1
}

function get-atom() {
  URL="https://mail.google.com/$1/feed/atom"
  ATOM="$(curl --location -s $(curl-cookie-opt) $URL)"
  auth-check $ATOM
  echo $ATOM
}

function check-mail() {
  for segment in `accounts` ; do
    ATOM=$(get-atom $segment)

    if [[ "$?" != "1" ]] ; then
      icon `echo "$ATOM" | grep '<entry>'` || true
    else

      find /home/qwertimer/.mozilla/firefox -maxdepth 2 -mindepth 2 -name 'cookies-gmail.txt' -delete # they're expired
      # firefox http://gmail.com
      echo 'AUTH'
    fi
    debug $ATOM

    debug ----
  done | paste -s -d\  -
}

function new-mail-urls() {
  for segment in `accounts` ; do
    ATOM=$(get-atom $segment)
    debug atom

    if [[ "$ATOM" =~ '<entry>' ]] ; then
      echo "${URL%feed/atom}"
    fi

    debug ----
  done | paste -s -d\  -
}

# todo: firefox || icons
if [[ "${1-}" == 'url' ]] ; then
  new-mail-urls
else
  mail=$(check-mail)
  [ "$(echo $mail | grep [a-Z] | wc -c)" == "1" ] && sleep ${EMPTY_SNOOZE:-0}
  echo $mail
fi

