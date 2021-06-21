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

" CtrlSF bindings -----------------------------{{{
nmap <leader>a :CtrlSF -R ""<Left>
"nmap <leader>A <Plug>CtrlSFCwordPath -W<CR>
nmap <leader>c :CtrlSFFocus<CR>
nmap <leader>C :CtrlSFToggle<CR>

" Use Ripgrep with CtrlSF for performance
let g:ctrlsf_ackprg = '/usr/bin/rg'
" }}}



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




"vimwiki generate Links
noremap <F9> :VimwikiDiaryGenerateLinks <CR>
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
"
"In insert mode jk will exit to normal mode
inoremap jk <esc>
inoremap <esc> <esc>`^
