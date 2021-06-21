if has('python3')
endif
" Vim Plug install ------------------------{{{
"
" Install vim-plug if not already installed
if empty(glob('~/.vim/autoload/plug.vim'))
 silent !curl -fLo ~/.vim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
 autocmd VimEnter * PlugInstall
endif


com! -nargs=0 PlugSetup call InstallPlug()
" }}}

" Plug function to install vim-plugs{{{
call plug#begin('~/.vim/bundle')
   
   "Python
   Plug 'vim-scripts/indentpython.vim'
   "Plug 'Valloric/YouCompleteMe'
   Plug 'vim-syntastic/syntastic'
   Plug 'nvie/vim-flake8'
   Plug 'ambv/black'

   "Plug 'davidhalter/jedi-vim'
   "Plug 'Shougo/deoplete.nvim', { 'do': ':UpdateRemotePlugins' }
   "Plug 'zchee/deoplete-jedi'
  
   
   "Pandoc
   Plug 'vim-pandoc/vim-pandoc'
   Plug 'rwxrob/vim-pandoc-syntax-simple'
   "bottom line
   Plug 'vim-airline/vim-airline'
   Plug 'vim-airline/vim-airline-themes'
   Plug 'edkolev/tmuxline.vim'

   "git
   Plug 'tpope/vim-fugitive'
   Plug 'tpope/vim-obsession'

   "commenting helper
   Plug 'scrooloose/nerdcommenter'

   "File tree
   Plug 'scrooloose/nerdtree'

   "vim wikipedia and note taking app
   Plug 'vimwiki/vimwiki'
   
   "latex help
   Plug 'https://github.com/lervag/vimtex'
   "Code folding
   Plug 'tmhedberg/SimpylFold'
   "git diffs in gutter
   Plug 'airblade/vim-gitgutter'

   "colorscheme
   Plug 'morhetz/gruvbox'
   Plug 'mhartington/oceanic-next'

   "Text and thesis editing
   Plug 'junegunn/goyo.vim'
   Plug 'junegunn/limelight.vim'
   Plug 'reedes/vim-pencil'
   Plug 'reedes/vim-lexical'
   Plug 'reedes/vim-litecorrect'
   Plug 'reedes/vim-textobj-quote'
   Plug 'reedes/vim-textobj-sentence'
   "Cool Start screen
   Plug 'mhinz/vim-startify'
   " Fuzzy file finder
   Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }
   Plug 'junegunn/fzf.vim'
   Plug 'dyng/ctrlsf.vim'
   
   "Learning vim
   "Plug 'ThePrimeagen/vim-be-good'
   
   "Jupyter notebooks reader in vim
   Plug 'szymonmaszke/vimpyter' "vim-plug

call plug#end()
"}}}
