
# ~/.bashrc: executed by bash(1) for non-login shells.
# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
# for examples

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac
# ----------------------------- utility functions ----------------------------
_have()      { type "$1" &>/dev/null; }
_source_if() { [[ -r "$1" ]] && source "$1"; }

# --------------------------- environment variables --------------------------
#                           (also see envx)


# Folders
export USER=$(whoami)
export GITUSER="qwertimer"
export DESKTOP="$HOME/Desktop"
export DOCUMENTS="$HOME/Documents"
export DOWNLOADS="$HOME/Downloads"
export PICTURES="$HOME/Pictures"
export MUSIC="$HOME/Music"
export VIDEOS="$HOME/Videos"
export REPOS="$HOME/repos"
export GHREPOS="$REPOS/github.com/$GITUSER"
export DOTFILES="$GHREPOS/.dotfiles"
export ZETDIR="$GHREPOS/zet"
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

#grep
#export GREP_OPTIONS=' — color=auto'

# ------------------------ programmming env variables ------------------------

export PYTHONDONTWRITEBYTECODE=1 # stops auto running .pyc

test -d ~/.vim/spell && export VIMSPELL="~/.vim/spell/*.add"

export GOPRIVATE="github.com/$GITUSER/*,gitlab.com/$GITUSER/*"
export GOPATH=~/.local/share/go
export GOBIN=~/.local/bin
export GOPROXY=direct
export CGO_ENABLED=0

#rpi pico
export PICO_SDK_PATH=$HOME/Documents/pico/pico/pico-sdk
export PICO_EXAMPLES_PATH=$HOME/Documents/pico/pico/pico-examples
export PICO_EXTRAS_PATH=$HOME/Documents/pico/pico/pico-extras
export PICO_PLAYGROUND_PATH=$HOME/Documents/pico/pico/pico-playground
# Install Ruby Gems to ~/gems
export GEM_HOME="$HOME/gems"


alias vi=vim
# ---------------------------------- history ---------------------------------
# don't put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth
HISTSIZE=10000
HISTFILESIZE=20000
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


# --------------------------- smart prompt ---------------------------
#. ~/.ps1_christmas
. ~/.bash_prompt
#. ~/.ps1_jfrazelle
#PROMPT_COMMAND="__ps1"
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
  ~/.poetry/bin \
  /usr/local/go/bin

pathappend \
      /usr/local/opt/coreutils/libexec/gnubin \
      /usr/local/bin \
      /usr/local/sbin \
      /usr/games \
      /usr/sbin \
      /usr/bin \
      /snap/bin \
      /sbin \
      ~/.emacs.d/bin \
      /bin

# ---------------------------------- CDPATH ---------------------------------

export CDPATH=.:\
~/repos/github.com:\
~/repos/github.com/$GITUSER:\
~/repos/github.com/polydatum:\
/media/$USER:\
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
    alias grep='grep --color=auto'
fi

_have ncdu && alias ncdu="ncdu --color=dark"
# ------------------------------- source files -------------------------------

#fzf stuff
[ -f ~/.fzf.bash ] && source ~/.fzf.bash
[ -d /usr/share/fzf  ] && source /usr/share/fzf/key-bindings.bash && source /usr/share/fzf/completion.bash

export FZF_DEFAULT_COMMAND='fd . -path './.git' -prune -o -print $HOME'
export FZF_ALT_C_COMMAND="fd -t d . $HOME"

_fzf_comprun() {
  local command=$1
  shift

  case "$command" in
    cd)           fzf "$@" --preview 'tree -C {} | head -200' ;;
    export|unset) fzf "$@" --preview "eval 'echo \$'{}" ;;
    ssh)          fzf "$@" --preview 'dig {}' ;;
    *)            fzf "$@" ;;
  esac
}
export PATH="$HOME/gems/bin:$PATH"


## Source all required files in completions folder.
if [ -d ~/.bash_completion.d ]; then
    for file in ~/.bash_completion.d/*; do
        . $file
    done
fi

[ -f ~/.fztricks.bash ] && source ~/.fztricks.bash && alias fz="fz -a"

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



# --------------------------------- aliases  ---------------------------------

alias ldir="ls -d */"

#Make ip have colours
alias ip='ip -br -c'

#locations
alias scripts='cd $SCRIPTS'
alias dot='cd $DOTFILES' 
alias tasks='cd $TASKS'
alias zets='cd ~/.local/share/zet/'
alias snippets='cd "$SNIPPETS"'

#lynx search
alias ?='duck'
alias ??='google'
alias ???='bing'

#better pip
alias pip="python3 -m pip"

#personal program shortcuts
alias st="taskman listtasks"
alias nt="taskman newtask"
alias ct="taskman closetask"
alias vt="taskman viewtask"
alias ifu="ifuse ~/iphone"

alias view="vi -R"
alias sshh='sshpass -f $HOME/.sshpass ssh '
alias temp='cd $(mktemp -d)'

alias poly="cd ~/repos/github.com/polydatum"

export FZF_DEFAULT_COMMAND="find ."
alias p='vim `fzf --preview="bat --color always {}"`'
#source bash
alias sb=". ~/.bashrc"
alias v=vim
alias ssha="eval $(ssh-agent)"

alias multi="$HOME/.screenlayout/multidisp.sh"
alias single="$HOME/.screenlayout/single.sh"
alias home="$HOME/.screenlayout/homedisp.sh"
alias sm="single && multi"

#git aliases
alias gc="git commit"
alias ga="git add -p"
alias gco="git checkout"
alias gp="git push"
alias python="python3"

grm() {
  gum confirm && rm $1 || echo 'File not removed'
}
# ------------------------- personalised completions -------------------------

owncomp=(
  pdf md yt gl kn auth pomo config taskman 
  sshkey ws ./build build b ./setup zet ix2me
  venvwrap n .dockerfunc gister build.sh
)

for i in ${owncomp[@]}; do complete -C $i $i; done


# ----------------------------------- other ----------------------------------
source "$DOTFILES/snippets/sh/colours"


# -------------------------------- fzf configs -------------------------------
export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'
--color=dark
--color=fg:-1,bg:-1,hl:#5fff87,fg+:-1,bg+:-1,hl+:#ffaf5f
--color=info:#af87ff,prompt:#5fff87,pointer:#ff87d7,marker:#ff87d7,spinner:#ff87d7
'

export FZF_DEFAULT_COMMAND="fd . $HOME"
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
export FZF_ALT_C_COMMAND="fd -t d . $HOME"
export FZF_CTRL_R_OPTS='--sort --exact'

# --------------- personal, work and environment configurations --------------

for file in ~/.{bash_prompt,bash_aliases,aliases,functions,path,extra,exports,dockerfunc}; do
	[[ -r "$file" ]] && [[ -f "$file" ]] && source "$file"
done
unset file

# ---------------------------- Program completions ---------------------------

_source_if "/etc/profile.d/bash_completion.sh"
_source_if "~/.git-completion.bash"
_have gh && . <(gh completion -s bash)
_have pandoc && . <(pandoc --bash-completion)
_have yq && . <(yq shell-completion bash)
_have docker && _source_if "$HOME/.local/share/docker/completion" # d
_have ansible && _source_if "$HOME/.local/share/ansible/ansible-completion/ansible-completion.bash" 
_have ansible && _source_if "$HOME/.local/share/ansible/ansible-completion/ansible-playbook-completion.bash"
#source /home/tim/.bash_completions/pls.sh
# Add tab completion for SSH hostnames based on ~/.ssh/config
# ignoring wildcards
[[ -e "$HOME/.ssh/config" ]] && complete -o "default" \
	-o "nospace" \
	-W "$(grep "^Host" ~/.ssh/config | \
	grep -v "[?*]" | cut -d " " -f2 | \
	tr ' ' '\n')" scp sftp ssh
POWERLINE=false
if $POWERLINE == true; then
  . /home/tim/.local/bin/powerline/bindings/bash/powerline.sh
fi
#Fun note on each open
complete -C /usr/local/bin/bit bit

clone() {
  local repo="$1" user
  local repo="${repo#https://github.com/}"
  local repo="${repo#git@github.com:}"
  if [[ $repo =~ / ]]; then
    user="${repo%%/*}"
  else
    user="$GITUSER"
    [[ -z "$user" ]] && user="$USER"
  fi
  local name="${repo##*/}"
  local userd="$REPOS/github.com/$user"
  local path="$userd/$name"
  [[ -d "$path" ]] && cd "$path" && return
  mkdir -p "$userd"
  cd "$userd"
  echo gh repo clone "$user/$name" -- --recurse-submodule
  gh repo clone "$user/$name" -- --recurse-submodule
  cd "$name"
} && export -f clone

export STARSHIP_CONFIG=~/.config/starship/catppuccin.toml

eval "$(starship init bash)"
#eval "$(aactivator init)"
#pls

alias bd=". bd -si"

. /usr/share/autojump/autojump.bash

export PATH=$PATH:/home/tim/.spicetify
