# Node.js Path Configuration

## Source of Truth for Node.js Installation

**Installation Method:** Scoop
**Node.js Version:** 26.5.0

## Paths

### Main Executable
```
C:\Users\henri\scoop\apps\nodejs\current\node.exe
```

### Binary Directory (npm, npx, etc.)
```
C:\Users\henri\scoop\apps\nodejs\current\
```

### Full Path for Commands
- node: `C:\Users\henri\scoop\apps\nodejs\current\node.exe`
- npm: `C:\Users\henri\scoop\apps\nodejs\current\npm.cmd`
- npx: `C:\Users\henri\scoop\apps\nodejs\current\npx.cmd`

## Usage in Scripts

When executing Node.js commands, use the full path:
```cmd
C:\Users\henri\scoop\apps\nodejs\current\node.exe --version
C:\Users\henri\scoop\apps\nodejs\current\npm.cmd install
C:\Users\henri\scoop\apps\nodejs\current\npx.cmd create-next-app@latest
```

## Notes
- This path was confirmed on 2026-07-28 after installing Node.js via Scoop
- The `current` symlink points to the active version (26.5.0)
- All Node.js projects should reference this path to ensure consistency

## Scoop Installation Command Used
```powershell
scoop install nodejs
```

## Verification
To verify the installation, check:
```cmd
dir "C:\Users\henri\scoop\apps\nodejs\current" /b
```
