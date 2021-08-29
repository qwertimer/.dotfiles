
# ~/.bashrc: executed by bash(1) for non-login shells.
# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
# for examples

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

# --------------------------- Start tmux on startup --------------------------

# if tmux is executable and not inside a tmux session, then try to attach.
# if attachment fails, start a new session
#[ -x "$(command -v tmux)" ] \
#  && [ -z "${TMUX}" ] \
#  && { tmux attach || tmux; } >/dev/null 2>&1

# --------------------------- environment variables --------------------------
#                           (also see envx)


# Folders
export USER="tim"
export GITUSER="qwertimer"
export DESKTOP="$HOME/Desktop"
export DOCUMENTS="$HOME/Documents"
export DOWNLOADS="$HOME/Downloads"
export PICTURES="$HOME/Pictures"
export MUSIC="$HOME/Music"
export VIDEOS="$HOME/Videos"
export GHREPOS="$HOME/repos/github.com/$GITUSER"
export DOTFILES="$GHREPOS/.dotfiles"
#export ZETDIR="$GHREPOS/zet"
export SNIPPETS="$DOTFILES/snippets"
export TASKS="$DOTFILES/tasks"
export SCRIPTS="$HOME/.local/bin/scripts"
export PDFS="$DOCUMENTS/PDFS"
export WORKSPACES="$HOME/Workspaces" # container home dirs for mounting
## rwxrob clip program..... 
export CLIP_DIR="$VIDEOS/Clips"
export CLIP_DATA="$GHREPOS/cmd-clip/data"
export CLIP_VOLUME=0

# terminal stuff
export TERM=xterm-256color
export HRULEWIDTH=80

# Editors
export EDITOR=vim
export VISUAL=vim
export EDITOR_PREFIX=vim

#browser defaults
export HELP_BROWSER=lynx



# ------------------------ programmming env variables ------------------------
export PYTHONDONTWRITEBYTECODE=1

test -d ~/.vim/spell && export VIMSPELL=(~/.vim/spell/*.add)

export GOPRIVATE="github.com/$GITUSER/*,gitlab.com/$GITUSER/*"
export GOPATH=~/.local/share/go
export GOBIN=~/.local/bin
export GOPROXY=direct
export CGO_ENABLED=0

#rpi pico
export PICO_SDK_PATH=/home/tim/Documents/pico/pico/pico-sdk
export PICO_EXAMPLES_PATH=/home/tim/Documents/pico/pico/pico-examples
export PICO_EXTRAS_PATH=/home/tim/Documents/pico/pico/pico-extras
export PICO_PLAYGROUND_PATH=/home/tim/Documents/pico/pico/pico-playground
# Install Ruby Gems to ~/gems
export GEM_HOME="$HOME/gems"


source /etc/profile.d/bash_completion.sh
alias vi=vim
# ---------------------------------- history ---------------------------------
# don't put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth
HISTSIZE=1000
HISTFILESIZE=2000
set -o vi


# ---------------------------- bash shell options ----------------------------

shopt -s checkwinsize
#shopt -s expand_aliases
shopt -s globstar
shopt -s dotglob
shopt -s extglob
#shopt -s nullglob # bug kills completion for some
#set -o noclobber
shopt -s histappend


# ----------------------------------- pager ----------------------------------

if test -x /usr/bin/lesspipe; then
      export LESSOPEN="| /usr/bin/lesspipe %s";
        export LESSCLOSE="/usr/bin/lesspipe %s %s";
fi

#export LESS_TERMCAP_mb="[35m" # magenta
#export LESS_TERMCAP_md="[33m" # yellow
#export LESS_TERMCAP_me="" # "0m"
#export LESS_TERMCAP_se="" # "0m"
#export LESS_TERMCAP_so="[34m" # blue
#export LESS_TERMCAP_ue="" # "0m"
#export LESS_TERMCAP_us="[4m"  # underline

export LESS_TERMCAP_mb=$(tput bold; tput setaf 2) # green
export LESS_TERMCAP_md=$(tput bold; tput setaf 6) # cyan
export LESS_TERMCAP_me=$(tput sgr0)
export LESS_TERMCAP_so=$(tput bold; tput setaf 3; tput setab 4) # yellow on blue
export LESS_TERMCAP_se=$(tput rmso; tput sgr0)
export LESS_TERMCAP_us=$(tput smul; tput bold; tput setaf 7) # white
export LESS_TERMCAP_ue=$(tput rmul; tput sgr0)
export LESS_TERMCAP_mr=$(tput rev)
export LESS_TERMCAP_mh=$(tput dim)
export LESS_TERMCAP_ZN=$(tput ssubm)
export LESS_TERMCAP_ZV=$(tput rsubm)
export LESS_TERMCAP_ZO=$(tput ssupm)
export LESS_TERMCAP_ZW=$(tput rsupm)
export GROFF_NO_SGR=1         # For Konsole and Gnome-terminal

# --------------------------------- dircolors --------------------------------

if (command -v dircolors) &>/dev/null; then
  if test -r ~/.dircolors; then
      eval "$(dircolors -b ~/.dircolors)"
  else
      eval "$(dircolors -b)"
  fi
fi  
  


# ------------------------------- smart prompt -------------------------------

PROMPT_LONG=50
PROMPT_MAX=95

__ps1() {
  local P='$'

  if test -n "${ZSH_VERSION}"; then
    local r='%F{red}'
    local g='%F{black}'
    local h='%F{blue}'
    local u='%F{yellow}'
    local p='%F{yellow}'
    local w='%F{magenta}'
    local b='%F{cyan}'
    local x='%f'
  else
    local r='\[\e[31m\]'
    local g='\[\e[30m\]'
    local h='\[\e[34m\]'
    local u='\[\e[33m\]'
    local p='\[\e[33m\]'
    local w='\[\e[35m\]'
    local b='\[\e[36m\]'
    local x='\[\e[0m\]'
  fi

  if test "${EUID}" == 0; then
    P='#'
    if test -n "${ZSH_VERSION}"; then
      u='$F{red}'
    else
      u=$r
    fi
    p=$u
  fi

  local dir;
  if test "$PWD" = "$HOME"; then
    dir='~'
  else
    dir="${PWD##*/}"
    if test "${dir}" = _; then
      dir=${PWD#*${PWD%/*/_}}
      dir=${dir#/}
    elif test "${dir}" = work; then
      dir=${PWD#*${PWD%/*/work}}
      dir=${dir#/}
    fi
  fi

  local B=$(git branch --show-current 2>/dev/null)
  test "$dir" = "$B" && B='.'
  local countme="$USER@$(hostname):$dir($B)\$ "

  test "$B" = master -o "$B" = main && b=$r
  test -n "$B" && B="$g($b$B$g)"

  if test -n "${ZSH_VERSION}"; then
    local short="$u%n$g@$h%m$g:$w$dir$B$p$P$x "
    local long="$g╔ $u%n$g@%m\h$g:$w$dir$B\n$g╚ $p$P$x "
    local double="$g╔ $u%n$g@%m\h$g:$w$dir\n$g║ $B\n$g╚ $p$P$x "
  else
    local short="$u\u$g@$h\h$g:$w$dir$B$p$P$x "
    local long="$g╔ $u\u$g@$h\h$g:$w$dir$B\n$g╚ $p$P$x "
    local double="$g╔ $u\u$g@$h\h$g:$w$dir\n$g║ $B\n$g╚ $p$P$x "
  fi

  if test ${#countme} -gt "${PROMPT_MAX}"; then
    PS1="$double"
  elif test ${#countme} -gt "${PROMPT_LONG}"; then
    PS1="$long"
  else
    PS1="$short"
  fi
}

PROMPT_COMMAND="__ps1"


# ------------------------- Path add/remove functions ------------------------

pathappend() {
  for ARG in "$@"; do
    test -d "${ARG}" || continue
    PATH=${PATH//:${ARG}:/:}
    PATH=${PATH/#${ARG}:/}
    PATH=${PATH/%:${ARG}/}
    export PATH="${PATH:+"${PATH}:"}${ARG}"
  done
}

pathprepend() {
  for ARG in "$@"; do
    test -d "${ARG}" || continue
    PATH=${PATH//:${ARG}:/:}
    PATH=${PATH/#${ARG}:/}
    PATH=${PATH/%:${ARG}/}
    export PATH="${ARG}${PATH:+":${PATH}"}"
  done
}



pathremove() {
    declare arg
    for arg in "$@"; do
        test -d "${arg}" || continue
        PATH=${PATH//:${arg}:/:}
        PATH=${PATH/#${arg}:/}
        PATH=${PATH/%:${arg}/}
        export PATH="${PATH}"
    done
}
export SCRIPTS=~/.local/bin/scripts
mkdir -p "$SCRIPTS" &>/dev/null

export PATH=$GOPATH/bin:$GOROOT/bin:$PATH 


pathprepend \
  ~/.local/bin \
  "$SCRIPTS" \
  ~/.poetry/bin

pathappend \
      /usr/local/opt/coreutils/libexec/gnubin \
      /mingw64/bin \
      /usr/local/bin \
      /usr/local/sbin \
      /usr/games \
      /usr/sbin \
      /usr/bin \
      /snap/bin \
      /sbin \
      /bin

# ---------------------------------- CDPATH ---------------------------------

export CDPATH=.:\
~/repos/github.com:\
~/repos/github.com/$GITUSER:\
~/repos/github.com/$GITUSER/dot:\
~/repos:\
/media/$USER:\
/mnt/SSD:\
~/.local/bin:\
~


# --------------------------------- keyboard ---------------------------------
#makes the caps key escape.
test -n "$DISPLAY" && setxkbmap -option caps:escape &>/dev/null

# -------------------------------- other stuff -------------------------------
# make less more friendly for non-text input files, see lesspipe(1)
[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
    alias ls='ls --color=auto'
    #alias dir='dir --color=auto'
    #alias vdir='vdir --color=auto'

    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'
fi

# ------------------------------- source files -------------------------------

[ -f ~/.fzf.bash ] && source ~/.fzf.bash
#if [ -f ~/.bashrc-personal ]; then
#. ~/.bashrc-personal
#fi
#source "$HOME/.cargo/env"
export PATH="$HOME/gems/bin:$PATH"

# -------------------------------- completion --------------------------------

# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi

# ---------------------------------- theming ---------------------------------

#theme script from https://github.com/lemnos/theme.sh stored in scripts folder
if command -v theme > /dev/null; then
	export THEME_HISTFILE=~/.theme_history
	[ -e "$THEME_HISTFILE" ] && theme "$(theme -l|tail -n1)"

	# Optional

	bind -x '"\x0f":"theme $(theme -l|tail -n2|head -n1)"' #Binds C-o to the previously active theme.
	alias th='theme -i'
	alias thl='theme --light -i'
	alias thd='theme --dark -i'
fi

# --------------------------------- aliases  ---------------------------------

#Make ip have colours
alias ip='ip -br -c'

alias python="/usr/bin/python3.8"
alias scripts='cd $SCRIPTS'
alias dot='cd $DOTFILES' 
alias tasks='cd $TASKS'
alias zets='cd ~/.local/share/zet/'
alias whale='cd /mnt/SSD/Masters/Datasets/null'

alias ?='duck'
alias ??='google'
alias ???='bing'

alias snippets='cd "$SNIPPETS"'

alias pip="python3 -m pip"


alias st="taskman listtasks"
alias nt="taskman newtask"
alias ct="taskman closetask"
alias vt="taskman viewtask"
alias ifu="ifuse Documents/iphone"

#command line keybindings
# bind \e is alt \w is ctrl
bind -x '"\ed":"nautilus &>/dev/null"'
bind -x '"\ef":"firefox &>/dev/null"'
bind -x '"\en":" vpn &>/dev/null"'
bind -x '"\eb":". ~/.bashrc"'
#pywal mod

wal='/dev/null << wal -i ~/wallpapers/wallpapers/'
# ------------------------- personalised completions -------------------------

owncomp=(
  pdf md yt gl kn auth pomo config taskman 
  sshkey ws ./build build b ./setup zet ix2me
)

for i in ${owncomp[@]}; do complete -C $i $i; done


# ----------------------------------- other ----------------------------------
source "$DOTFILES/snippets/sh/colours"
source "/home/tim/.gh_comp"


# -------------------------------- fzf configs -------------------------------
export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'
--color=dark
--color=fg:-1,bg:-1,hl:#5fff87,fg+:-1,bg+:-1,hl+:#ffaf5f
--color=info:#af87ff,prompt:#5fff87,pointer:#ff87d7,marker:#ff87d7,spinner:#ff87d7
'

export FZF_DEFAULT_COMMAND="fd . $HOME"
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
export FZF_ALT_C_COMMAND="fd -t d . $HOME"


# --------------- personal, work and environment configurations --------------

if [ -f ~/.bashrc_envs ]; then
    . ~/.bashrc_envs
fi
