# ansible_configurator
This repository is designed using an ansible-pull based system
configuration utility. The simplest setup for automating adhoc and
disparate systems of mine. The whole configuration works off of a single
command and is forever integrated into my system design. The
configuration revolves around the command `ansible-pull -U
https://github.com/qwertimer/ansible_configurator`. For simplicity this
repository contains a single install script to make sure pip is
installed and runs a pip install ansible followed by the above
ansible-pull command. Feel free to fork this repository and make it your
own.

TO_DO:

Continue fleshing out the software that i use.

- Update the setup.yml with conditionals
- Add dotfile config correctly
- Configure pass
- check out using with_items:
- Update configuration to include when:
- Setup zet
- Add configurator for vim
- add ssh


