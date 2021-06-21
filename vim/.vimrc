"from primeagen
let skip_defaults_vim=1
set noerrorbells
set tabstop=4 softtabstop=4 ts=4
set shiftwidth=4
set expandtab
set smartindent
set nu
set wrap
set smartcase
set noswapfile
set nobackup
set undodir=~/.vim/undodir
set undofile
set autoindent

let g:tex_flavor  = 'latex'
highlight ColorColumn ctermbg=0 guibg=lightgrey

syntax on
filetype plugin on

"leader map to spacebar
let mapleader = ' '

" Call ":Reload" to apply the latest .vimrc contents
command! Reload execute "source ~/.vimrc"

"Fast find and replace

" Set "<leader>s" to substitute the word under the cursor. Works great with
" CtrlSF!
nmap <leader>s :%s/\<<C-r><C-w>\>/<C-r><C-w>/gI<Left><Left><Left>


source ~/.vim/vim/plugins.vim
source ~/.vim/vim/functions.vim
source ~/.vim/vim/mappings.vim
source ~/.vim/vim/ftplugin/python.vim
source ~/.vim/vim/ftplugin/bash.vim
source ~/.vim/vim/ftplugin/latex.vim
source ~/.vim/vim/ftplugin/markdown.vim


" Vimscript file settings ---------------------- {{{
augroup filetype_vim
    autocmd!
        autocmd FileType vim setlocal foldmethod=marker
    augroup END

"}}}


"Set Colour Scheme following Plug Install
set background=dark
colorscheme gruvbox


"Airline configs -------------------------------{{{
let g:airline_theme='<theme>' " <theme> is a valid theme name


"vim airline and tmux modifications
let g:airline#extensions#tabline#enabled = 1
let g:airline_theme = 'soda'
"let g:airline#extensions#tmuxline#enabled = 0

" }}}




" invoke manually by command for other file types
com! -nargs=0 WR call Writer()
"}}}







