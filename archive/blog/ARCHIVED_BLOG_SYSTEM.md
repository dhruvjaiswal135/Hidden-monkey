# Archived Blog System

**Date Archived**: January 8, 2026  
**Reason**: Complete rebuild to production-grade architecture

## What Was Archived

This folder contains the LEGACY blog system that was removed from the active project.

### Legacy Files Structure

```
LEGACY SYSTEM (REMOVED):
- components/sections/Blog.js           # Homepage blog preview
- components/features/blog/              # Blog components
  - BlogCard.js
  - BlogGrid.js
  - BlogContent.js
  - BlogHeader.js
  - blog.data.js
  - index.js
- content/blog/                         # Blog data
  - posts.js                            # Hardcoded post array
  - index.js                            # Helper functions
- content/images/blog.js                # Blog image config
- app/(marketing)/blog/page.js          # Blog listing
- app/(marketing)/blog/[slug]/page.js   # Blog detail
```

## What Changed

The legacy system had:
- ❌ Posts stored in a single large `posts.js` file
- ❌ HTML content embedded directly in JS objects
- ❌ Image paths hardcoded or in separate config
- ❌ No separation between post structure and rendering

## New System

The new production system:
- ✅ Individual post files in `content/blog/posts/`
- ✅ Structured content objects with proper schema
- ✅ Images organized by post slug in `content/images/blog/`
- ✅ Clean component architecture
- ✅ Automatic routing based on slug
- ✅ Easy to add new posts with no UI changes

## If You Need to Restore

If you need to reference the old implementation:
1. Look in this archive folder
2. Check the git history before January 8, 2026
3. Contact the development team

**DO NOT** merge code from this archive back into the active project.
The new system is intentionally incompatible and superior.
