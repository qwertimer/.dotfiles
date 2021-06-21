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


"NerdTree Configs ---------------------------------{{{


let NERDTreeShowHidden=1

function! ToggleNERDTree()
  NERDTreeToggle
  " Set NERDTree instances to be mirrored
  silent NERDTreeMirror
endfunctio

" Bind "<leader>n" to toggle NERDTree
noremap <leader>n :call ToggleNERDTree()<CR>

" }}}


