# Installation steps for a new machine

These are not necessarily related to Fish shell but are still useful to have been written down _somewhere_.

- Change password (and possibly set up touch ID)
- Set up spaces and their keyboard shortcuts (System Settings > Keyboard > Keyboard shortcuts... > Mission Control)
- Install:
  - Browser(s): Firefox, Brave, (Chrome)
  - [Homebrew](https://brew.sh/)
    - This also installs Command Line Tools (CLT) for Xcode (but if not, run `xcode-select --install` — this includes Git installation)
  - Ghostty: `brew install --cask ghostty`
  - Rectangle: `brew install --cask rectangle`, import the config in this repo — and if needed, run `bash ./rectangle-eighths.sh`
  - Fish shell: `brew install fish` (and [make it the default shell](https://fishshell.com/docs/current))
  - [Oh My Fish](https://github.com/oh-my-fish/oh-my-fish)
  - [bobthefish](https://github.com/oh-my-fish/theme-bobthefish) - Fish theme
  - **Fira Mono** font from [powerline fonts](https://github.com/powerline/fonts)
  - [Hasklig font](https://github.com/i-tu/Hasklig) for Intellij Idea
  - Useful command-line utilities using Homebrew:
    - ripgrep
    - tig
    - tldr
    - witr
    - (most likely) colima, docker, docker-compose
    - (possibly) k9s, kubectl, krelay
- Use `fish_config` to customise theme colors (e.g. command color to blue)
- Remove the "Search man Page Index in Terminal" keyboard shortcut in System Settings, under Services > Text (clashes with IntelliJ shortcut)
