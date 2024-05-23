# Installation steps for a new machine

These are not necessarily related to Fish shell but are still useful to have been written down _somewhere_.

- Change password (and possibly set up touch ID)
- Set up spaces and their keyboard shortcuts (System Settings > Keyboard > Keyboard shortcuts... > Mission Control)
- Install:
  - [Google Chrome](https://www.google.com/chrome/)
  - [iTerm2](https://iterm2.com/)
  - Command Line Tools (CLT) for Xcode: `xcode-select --install` (this includes Git installation)
  - [Homebrew](https://brew.sh/)
  - Rectangle: `brew install --cask rectangle`, import the config in this repo — and if needed, run `bash ./rectangle-eighths.sh`
  - Fish shell: `brew install fish` (and [make it the default shell](https://fishshell.com/docs/current))
  - [Oh My Fish](https://github.com/oh-my-fish/oh-my-fish)
  - [bobthefish](https://github.com/oh-my-fish/theme-bobthefish) - Fish theme
  - **Fira Mono** font from [powerline fonts](https://github.com/powerline/fonts)
  - [Hasklig font](https://github.com/i-tu/Hasklig) for Intellij Idea
- Customise the folder color in iTerm (blue color to lighter one)
- Remove the "Search man Page Index in Terminal" keyboard shortcut in System Settings, under Services > Text (clashes with IntelliJ shortcut)
