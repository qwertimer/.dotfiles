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

"leader map to spacebar
let mapleader = ' '

" Call ":Reload" to apply the latest .vimrc contents
command! Reload execute "source ~/.config/nvim/init.vim"

"Fast find and replace

" Set "<leader>s" to substitute the word under the cursor. Works great with
" CtrlSF!
nmap <leader>s :%s/\<<C-r><C-w>\>/<C-r><C-w>/gI<Left><Left><Left>

" Vimscript file settings ---------------------- {{{
augroup filetype_vim
    autocmd!
        autocmd FileType vim setlocal foldmethod=marker
    augroup END

"}}}

" Vim Plug install ------------------------{{{
"
function! InstallPlug()
" Install vim-plug if not already installed
  if empty(glob('~/.vim/autoload/plug.vim'))
    silent !curl -fLo ~/local/share/nvim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  autocmd VimEnter * PlugInstall
  endif
endfunction


com! -nargs=0 PlugSetup call InstallPlug()
" }}}

" Plug function to install vim-plugs{{{
call plug#begin('~/.local/share/nvim/plugged')

   "Plug 'davidhalter/jedi-vim'
   "Plug 'Shougo/deoplete.nvim', { 'do': ':UpdateRemotePlugins' }
   "Plug 'zchee/deoplete-jedi'
   "bottom line
   Plug 'vim-airline/vim-airline'
   Plug 'vim-airline/vim-airline-themes'
   Plug 'edkolev/tmuxline.vim'
   "git
   Plug 'tpope/vim-fugitive'
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
   Plug 'ThePrimeagen/vim-be-good'
   
   "Jupyter notebooks reader in vim
   Plug 'szymonmaszke/vimpyter' "vim-plug

call plug#end()
"}}}

"Set Colour Scheme following Plug Install
colorscheme gruvbox

"jedi configs -----------------------------{{{
"autocmd InsertLeave,CompleteDone * if pumvisible() == 0 | pclose | endif
"inoremap <expr><tab> pumvisible() ? "\<c-n>" : "\<tab>"


" disable autocompletion, cause we use deoplete for completion
"let g:jedi#completions_enabled = 1

" open the go-to function in split, not another buffer
"let g:jedi#use_splits_not_buffers = "right"
"}}}

"Airline configs -------------------------------{{{
let g:airline_theme='<theme>' " <theme> is a valid theme name


"vim airline and tmux modifications
let g:airline#extensions#tabline#enabled = 1
let g:airline_theme = 'soda'
"let g:airline#extensions#tmuxline#enabled = 0

" }}}


" FZF ------------------------------------ {{{
"""

" https://github.com/junegunn/fzf.vim

" Let The :Files command show all files in the repo (including dotfiles)
let $FZF_DEFAULT_COMMAND = 'rg --files --hidden --glob "!.git/*"'

" Bind "//" to a fzf-powered buffer search
nmap // :BLines!<CR>

" Bind "??" to a fzf-powered project search
nmap ?? :Rg!<CR>

" Bind "<leader>p" to a fzf-powered filename search
nmap <leader>p :Files!<CR>

" Bind "cc" to a fzf-powered command search
nmap cc :Commands!<CR>

" }}}
"NerdTree Configs ---------------------------------{{{


let NERDTreeShowHidden=1

function! ToggleNERDTree()
  NERDTreeToggle
  " Set NERDTree instances to be mirrored
  silent NERDTreeMirror
endfunction

" Bind "<leader>n" to toggle NERDTree
noremap <leader>n :call ToggleNERDTree()<CR>

" }}}

" CtrlSF bindings -----------------------------{{{
nmap <leader>a :CtrlSF -R ""<Left>
nmap <leader>A <Plug>CtrlSFCwordPath -W<CR>
nmap <leader>c :CtrlSFFocus<CR>
nmap <leader>C :CtrlSFToggle<CR>

" Use Ripgrep with CtrlSF for performance
let g:ctrlsf_ackprg = '/usr/bin/rg'
" }}}

"Notes and text writing stuff ---------------------------{{{
"limelight
"nmap <Leader>l <Plug>(Limelight)
"xmap <Leader>l <Plug>(Limelight)

autocmd! User GoyoEnter Limelight
autocmd! User GoyoLeave Limelight!

" Color name (:help cterm-colors) or ANSI code
let g:limelight_conceal_ctermfg = 'gray'
let g:limelight_conceal_ctermfg = 240

" Color name (:help gui-colors) or RGB color
let g:limelight_conceal_guifg = 'DarkGray'
let g:limelight_conceal_guifg = '#777777'

" Default: 0.5
let g:limelight_default_coefficient = 0.7

" Number of preceding/following paragraphs to include (default: 0)
let g:limelight_paragraph_span = 1

" Beginning/end of paragraph
"   When there's no empty line between the paragraphs
"   and each paragraph starts with indentation
let g:limelight_bop = '^\s'
let g:limelight_eop = '\ze\n^\s'

" Highlighting priority (default: 10)
"   Set it to -1 not to overrule hlsearch
let g:limelight_priority = -1

"}}}

" Pencil and tex writing config -----------------{{{
"augroup pencil
"  autocmd!
"  autocmd FileType markdown,mkd, tex, bib, wiki \
"                            \ | call pencil#init()
"                            \ | call lexical#init()
"                            \ | call litecorrect#init()
"                            \ | call textobj#quote#init()
"                            \ | call textobj#sentence#init()
"augroup END

function! Writer()
  
  setlocal spell spelllang=en_au
  setlocal formatoptions=t1
  setlocal textwidth=300
  setlocal noautoindent
  setlocal shiftwidth=5 tabstop=5

  call pencil#init()
  call lexical#init()
  call litecorrect#init()
  "call textobj#quote#init()
  "call textobj#sentence#init()

  " manual reformatting shortcuts
  nnoremap <buffer> <silent> Q gqap
  xnoremap <buffer> <silent> Q gq
  nnoremap <buffer> <silent> <leader>Q vapJgqap

  " force top correction on most recent misspelling
  nnoremap <buffer> <c-s> [s1z=<c-o>
  inoremap <buffer> <c-s> <c-g>u<Esc>[s1z=`]A<c-g>u

  " replace common punctuation
  iabbrev <buffer> -- –
  iabbrev <buffer> --- —
  iabbrev <buffer> << «
  iabbrev <buffer> >> »

  " open most folds
  setlocal foldlevel=6

  " replace typographical quotes (reedes/vim-textobj-quote)
  "map <silent> <buffer> <leader>qc <Plug>ReplaceWithCurly
  "map <silent> <buffer> <leader>qs <Plug>ReplaceWithStraight

  " highlight words (reedes/vim-wordy)
  "noremap <silent> <buffer> <F8> :<C-u>NextWordy<cr>
  "xnoremap <silent> <buffer> <F8> :<C-u>NextWordy<cr>
  "inoremap <silent> <buffer> <F8> <C-o>:NextWordy<cr>

endfunction

" automatically initialize buffer by file type
autocmd FileType mkd,text,tex,bib call Writer()

" invoke manually by command for other file types
com! -nargs=0 WR call Writer()
"}}}


" vimwiki for markdown --------------------------{{{
"let g:vimwiki_list = [{'path': '~/vimwiki/',
"                      \ 'syntax': 'markdown', 'ext': '.md'}]

"}}}
"
"Toggle Transparency -------------------{{{
let t:is_transparent = 1
function! Toggle_transparent_background()                                                       
  if t:is_transparent == 0                                                                     
    hi Normal guibg=#111111 ctermbg=black                                                       
    let t:is_transparent = 1                                                                    
  else                                                                                          
    hi Normal guibg=NONE ctermbg=NONE                                                           
    let t:is_transparent = 0                                                                
  endif                                                                                         
endfunction                                         "}}}
autocmd Filetype ipynb nmap <silent><Leader>b :VimpyterInsertPythonBlock<CR>
autocmd Filetype ipynb nmap <silent><Leader>j :VimpyterStartJupyter<CR>
autocmd Filetype ipynb nmap <silent><Leader>i :VimpyterStartNteract<CR>

"When a new file is opened automatically save it.
autocmd BufNewFile * :write

" comments code using pythons #
:autocmd FileType python     nnoremap <buffer> <localleader>c I#<esc>


"Leader Remappings
"
" disable arrow keys (vi muscle memory)
noremap <up> <NOP>
noremap <down> <NOP> 
noremap <left> <NOP>
noremap <right> <NOP>
inoremap <up> <NOP>
inoremap <down> <NOP>
inoremap <left> <NOP>
inoremap <right> <NOP>

let mapleader = ' '
"let maplocalleader = '\'
"Save buffer
noremap <leader>w :w<CR>

"Save and quit
noremap <leader><ESC> :wq!<CR>

"Git commit
noremap <leader>gr :"git add -A && git commit"<CR>

"Run python on current file
noremap <leader>pr :"python3 %"

"Comment and uncomment block
noremap <leader>co :s/^/#<CR>   
noremap <leader>uc :s/#/ <CR>

"Source vimrc
:nnoremap <leader>sv :source $MYVIMRC<cr>


"vimwiki generate Links
noremap <F9> :VimwikiDiaryGenerateLinks <CR>
"noremap <F8> :
"Toggle screen transparency
nnoremap <leader>t :call Toggle_transparent_background()<CR>  
"Start terminal
noremap <leader>cli :terminal<CR>

"Open vimrc for editing
nnoremap <F3> :vsp $MYVIMRC<CR>

"For moving around tiled vim
nnoremap <C-J> <C-W><C-J>
nnoremap <C-K> <C-W><C-K>
nnoremap <C-L> <C-W><C-L>
nnoremap <C-H> <C-W><C-H>
"----------------------------------------------"
"Tab moving
nnoremap <C-Left> :tabprevious<CR>
nnoremap <C-Right> :tabnext<CR>
nnoremap <silent> <A-Left> :execute 'silent! tabmove ' . (tabpagenr()-2)<CR>
nnoremap <silent> <A-Right> :execute 'silent! tabmove ' . (tabpagenr()+1)<CR>

"In insert mode jk will exit to normal mode
inoremap jk <esc>
inoremap <esc><esc>`^

