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
  abbr gpf 'git push --force-with-lease'
  abbr gpl 'git pull'
  abbr gr 'git remote'
  abbr grb 'git rebase'
  abbr grs 'git reset'
  abbr grv 'git revert'
  abbr gs 'git status'
  abbr gst 'git stash'
  abbr gdb 'git for-each-ref --format="%(authordate:short) %(refname:short) %(objectname:short) %(authorname)" --shell refs/remotes/ | sort | xargs printf \'%s  %-50s %s  %s\n\''
  abbr gdf 'git ls-files --deleted -z | xargs -0 git rm'

  abbr fn 'find . -iname'

  abbr hiss 'history --search'

  abbr dk 'docker'
  abbr dcb 'docker-compose build'
  abbr dcu 'docker-compose up'

  abbr cb 'cargo build'
  abbr cr 'cargo run'
  abbr ct 'cargo test'
  abbr ctn 'cargo test -- --nocapture'

  echo 'Done'
