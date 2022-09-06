# My dotfiles

This is the repository that contains my dotfiles for all the programs i
use. Some have been ripped directly from use in archcraft others are
tailored to my needs. Feel free to use as you see fit. The best stuff is
my scripts folder. There is some really interesting programs in there.
Some require additional programs such as ripgrep and fzf whilst the
majority of them use the default programs on the system. 

Some of the scripts have been taken from rwxrob, some from terminallife
and some from distrotube. Others have been pilfered from here and there
and have been labelled as such. Many however have been written by me to
suit a particular task i was working on. Finally some commands seem a
little wasteful such as d which is to run docker however this is to
have programs that are useable in scripts without the bashrc file.

Soon i will have a searchable system outlining all of my scripts. This
program will list all commands and the default description of what they
do.

## Install

I have begun wrapping all of my most used programs in a simple
installation script. I have added some cool trickery that allows tab
completion to work on the installation file. To do this simply source
the script before running the commands and you will have tab completion
for the remainder of your time in the shell. 

## build

Build provides functionality to symlink common dotfiles and utilities to
their respective locations
