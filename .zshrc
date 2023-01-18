export GTK_IM_MODULE=ibus
export XMODIFIERS=@im=ibus
export QT_IM_MODULE=ibus

export PATH="/opt/rocm/bin:/opt/rocm-*/:$PATH"

source ~/znap/zsh-snap/znap.zsh
source /usr/share/zsh/scripts/zplug/init.zsh
source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh
zplug load zsh-users/zsh-syntax-highlighting

# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# Lines configured by zsh-newuser-install
HISTFILE=~/.histfile
HISTSIZE=1000
SAVEHIST=1000
setopt autocd extendedglob nomatch notify
unsetopt beep
bindkey -e
typeset -g -A key
bindkey "^[[1;5C" forward-word
bindkey "^[[1;5D" backward-word
bindkey "$terminfo[kdch1]" delete-char
bindkey "^[[1;$terminfo[kdch1]" kill-word
bindkey "^[[1;$terminfo[kbs]" backward-kill-word
# End of lines configured by zsh-newuser-install
# The following lines were added by compinstall
zstyle :compinstall filename '/home/zazag/.zshrc'

autoload -Uz compinit
compinit
# End of lines added by compinstall
source ~/powerlevel10k/powerlevel10k.zsh-theme

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

alias upd='yay -Syu'
alias add='yay -S'
alias remove='yay -R'
alias clean='sudo pacman -Rs $(pacman -Qdtq) || echo "No orphans to remove"'
alias cleanss='rm --interactive=never ~/Pictures/Screenshots/*.png && echo Clened screenshots'
alias cleanyay='rm -rf --interactive=never ~/.cache/yay/* && echo Cleaned yay cache'
alias cleanall='clean && cleanss && cleanyay && echo "Nice and tidy!"'

alias uefi='systemctl reboot --firmware-setup'
alias rs='trash'
alias clr='clear'
