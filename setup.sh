#!/usr/bin/env bash

# make sure we have pulled in and updated any submodules
git submodule init
git submodule update

# what directories should be installable by all users including the root user
base=(
    bash
    zshrc
    bin
)

# folders that should, or only need to be installed for a local user
useronly=(
    git
)

conf=(
	tmux
	nvim
)

scripts=(
    __setup
)

#folders that will need to be stored in the .config location

# run the stow command for the passed in directory ($2) in location $1
stowit() {
    usr=$1
    app=$2
    # -v verbose
    # -R recursive
    # -t target
    stow -v -R -t ${usr} ${app}
}


stow_conf() {
	usr=$1
	app=$2
	stow -v -R -t ${usr}/.config/ ${app}
}


echo ""
echo "Stowing apps for user: ${whoami}"

# install apps available to local users and root
for app in ${base[@]}; do
    stowit "${HOME}" $app
done

# install only user space folders
for app in ${useronly[@]}; do
    stowit "${HOME}" $app
    
done

echo "Stowing config files"
for app in ${conf[@]}; do
	stow_conf "${HOME}" $app
done

echo "adding scripts to path"

echo "PATH='$PATH:./$scripts'" >> ~/.bashrc-personal





echo ""
echo "##### ALL DONE"

