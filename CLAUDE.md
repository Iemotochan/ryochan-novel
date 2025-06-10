# CLAUDE.md
必ず日本語で回答してください
This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Japanese visual novel engine called "RYOCHANの冒険" (RYOCHAN's Adventure) - an interactive story about a character who gains the ability to see "氣" (ki/spiritual energy) and partners with a high school student named Sakura to combat blockchain-based fraud using their combined mystical and technical abilities.

## Key Architecture Components

### Core Files Structure
- `claudeep2/index.html` - Main entry point with loading screen and novel container
- `claudeep2/novel-engine.js` - Core engine with audio, text display, scene management
- `claudeep2/storyContent.js` - Story data with scenes, dialogue, and scene mapping
- `claudeep2/style.css` - Comprehensive styling with vertical text layout and responsive design

### Engine Architecture

**Audio System ("Radio Cassette" Design)**
- Single global audio instance (`radioCassette`) prevents audio conflicts
- Safe preloading system with skip-button debouncing (800ms delay)
- Audio switching prompts for seamless scene transitions during auto-play
- Loading screen audio permission system for enhanced UX
- Persistent mute state with localStorage
- Complete cleanup on page unload to prevent double-playback issues

**Text Display System**
- Vertical Japanese text layout (writing-mode: vertical-rl)
- Dynamic font size controls (7 sizes: 0.6x to 1.8x scale)
- Intelligent text management with automatic paragraph cleanup
- Typewriter effect with variable speed control

**Scene Navigation**
- Scene-based story mapping with `buildSceneMap()` function
- Forward/backward scene jumping with debouncing
- Auto-mode with intelligent audio switch detection

**Device Optimization**
- Desktop portal system for optimal window sizing
- iPad Safari video playback fixes
- Touch controls with gesture validation
- Responsive breakpoints (768px, 600px, 480px)
- Dynamic viewport height adjustment for mobile browsers (CSS Custom Properties)
- Optimized text positioning for narrow-height browsers

## Development Commands

Since this is a static HTML project, testing is done via web browser:

**Local Development:**
```bash
# Serve locally (any method):
python -m http.server 8000
# OR
npx serve .
# OR
open claudeep2/index.html directly in browser
```

**Git Deployment Workflow:**
```bash
# After making changes in Claude Code:
git add .
git commit -m "Description of changes"
git push origin main
# Changes automatically deploy to: https://iemotochan.github.io/ryochan-novel/
```

**File Modification Workflow:**
1. Audio files: Place in `claudeep2/audio/` (M4A format)
2. Video backgrounds: Place in `claudeep2/image/` (MP4 format) 
3. Story content: Edit `storyContent.js` array
4. Engine logic: Modify `novel-engine.js`
5. Styling: Update `style.css`
6. Deploy: Request Git upload to publish changes

## Story Content Format

Stories are defined in `storyContent` array with this structure:
```javascript
{
    text: "Dialogue or narrative text",
    speaker: "CHARACTER_NAME", // Optional
    bg: "bg1", // Background video ID  
    audio: "filename.m4a", // Background music
    speed: 0.3, // Typing speed multiplier
    lines: 2, // Text layout hint (2 or 4)
    scene: "scene1", // Scene identifier
    sceneTitle: "Scene Name", // For navigation
    clear: true // Clear text before showing
}
```

## Key Implementation Patterns

**Audio Management:**
- Always use `stopRadioCassette()` before starting new audio
- Audio switching prompts appear automatically during auto-play
- Use `loadingAudioEnabled` for enhanced permission flow
- Preloading system: `preloadNextAudio()` automatically called after audio starts
- Skip button debouncing (800ms) prevents preload conflicts
- Complete cleanup with `cleanupPreloadedAudio()` on scene jumps

**Text Layout:**
- Use `applyLinesBasedSpacing()` for proper vertical spacing
- Font size controlled via `currentFontSize` and `fontSizeScale` arrays
- Text clearing managed by `shouldClearText()` logic

**Scene Navigation:**
- Scenes mapped via `sceneMap` and `sceneList` in story initialization
- Scene jumping uses `executeSceneJump()` with proper cleanup
- Current scene determined by `getCurrentScene()` based on text index

**Device Compatibility:**
- Desktop users see portal system for optimal mobile-like experience
- iPad Safari requires special video playback handling
- Touch areas validated via `isValidTapArea()` function

## Important Notes

- This is a complete, self-contained visual novel engine
- All text is in Japanese with traditional vertical layout
- Audio files are M4A format for cross-platform compatibility
- Video backgrounds are MP4 format with autoplay/loop
- The engine handles complex audio switching during auto-play mode
- Built-in font size accessibility controls
- Ending system with external link capability