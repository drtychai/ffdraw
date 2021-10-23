# ffDraw
Hacky firefox extension to allow (scrollable) SVG drawing on current active tab. 
This is done by executing JS that inserst a tab-wide overlay. See `draw.js` for details.

## Installation
This extension is not intended to be loaded from remote source. Simply:

1. Clone this repo
1. Navigate to `about:debugging` in Firefox URI
1. Click on `This Firefox`
1. Click `Load Temporary Add-Ons...`
1. Navigate to repo clone and select `manifest.json`

## Keyboard Shortcuts
 - Ctrl-Z : Undo the last paint action.
 - Ctrl-Shift-Z : Redo the last undone actions.
 - Ctrl-X : Toggle between navigation and Draw mode.

