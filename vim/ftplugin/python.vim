"au BufNewFile,BufRead *.py
set encoding=utf-8
set tabstop=4
set softtabstop=4
set shiftwidth=4
set textwidth=79
set expandtab
set autoindent
set fileformat=unix

let python_highlight_all=1
syntax on


let g:ycm_autoclose_preview_window_after_completion=1
map <leader>g  :YcmCompleter GoToDefinitionElseDeclaration<CR>



"jedi configs -----------------------------{{{
"autocmd InsertLeave,CompleteDone * if pumvisible() == 0 | pclose | endif
"inoremap <expr><tab> pumvisible() ? "\<c-n>" : "\<tab>"


" disable autocompletion, cause we use deoplete for completion
"let g:jedi#completions_enabled = 1

" open the go-to function in split, not another buffer
"let g:jedi#use_splits_not_buffers = "right"
"}}}



autocmd Filetype ipynb nmap <silent><Leader>b :VimpyterInsertPythonBlock<CR>
autocmd Filetype ipynb nmap <silent><Leader>j :VimpyterStartJupyter<CR>
autocmd Filetype ipynb nmap <silent><Leader>i :VimpyterStartNteract<CR>


" comments code using pythons #
:autocmd FileType python     nnoremap <buffer> <localleader>c I#<esc>

