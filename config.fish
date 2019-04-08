if not set -q abbrs_initialized
  set -U abbrs_initialized
  echo -n Setting abbreviations... 

  abbr g 'git'
  abbr ga 'git add'
  abbr gb 'git branch'
  abbr gbl 'git blame'
  abbr gc 'git commit -m'
  abbr gca 'git commit --amend -m'
  abbr gco 'git checkout'
  abbr gcp 'git cherry-pick'
  abbr gd 'git diff'
  abbr gf 'git fetch'
  abbr gl 'git log'
  abbr gm 'git merge'
  abbr gp 'git push'
  abbr gpl 'git pull'
  abbr gr 'git remote'
  abbr grb 'git rebase'
  abbr grs 'git reset'
  abbr gs 'git status'
  abbr gst 'git stash'

  abbr fn 'find . -iname'

  abbr hiss 'history --search'

  echo 'Done'
end

