#!/usr/bin/env python3

from simple_term_menu import TerminalMenu
import os
from pygments import formatters, highlight, lexers
from pygments.util import ClassNotFound
import re

def get_files():

    directory = "/home/tim/hosted/media/movies"
    dir_items = os.listdir(directory)

    terminal_menu = TerminalMenu(dir_items, multi_select=True, )
    menu_entry_indices = terminal_menu.show()
    for vals in menu_entry_indices:
        file = dir_items[vals]
        renamer(directory, file)

def renamer(directory, file):
    abs_file = os.path.join(directory,file)
    re_split = re.split('[0-9]{4}', file, 2)[0]
    dot_split = re_split.split('.')
    str_list = list(filter(None, dot_split))
    print(str_list)
    string_join = " ".join(str_list)
    string_join = f"{string_join}.mp4"
    new_name = os.path.join(directory,string_join)

    os.rename(abs_file, new_name)

def main():
    get_files()
if __name__=="__main__":
    main()
