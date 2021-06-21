

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


