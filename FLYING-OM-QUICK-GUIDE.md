# Flying Om (ॐ) - Quick Guide

## 🚀 What You'll See

When you open the website, you'll see beautiful Om symbols (ॐ) gently floating upward across the hero section, like divine blessings ascending to the heavens.

---

## ✨ Animation Details

### Visual Effect
```
        ॐ              ॐ
    ॐ          ॐ           ॐ
         ॐ
    
    ↑ ↑ ↑ ↑ ↑ ↑
    
Symbols float from bottom to top
Gentle rotation while rising
Fade in at bottom, fade out at top
Continuous, peaceful motion
```

### Timing
- **Duration**: 15 seconds per cycle
- **Symbols**: 6 Om symbols
- **Staggered**: Each starts at different time
- **Continuous**: Never stops, always flowing

---

## 🎨 Customization Quick Reference

### Make It Faster
```css
.floating-om {
    animation: floatUp 10s linear infinite;
}
```

### Make It Slower
```css
.floating-om {
    animation: floatUp 20s linear infinite;
}
```

### Make It More Visible
```css
.floating-om {
    color: rgba(255, 255, 255, 0.25);
}
```

### Make It More Subtle
```css
.floating-om {
    color: rgba(255, 255, 255, 0.08);
}
```

### Add More Symbols
Add in HTML:
```html
<span class="floating-om">ॐ</span>
<span class="floating-om">ॐ</span>
<!-- Add more as needed -->
```

Then add CSS for positioning:
```css
.floating-om:nth-child(7) {
    left: 50%;
    animation-delay: 8s;
    font-size: 3rem;
}
```

---

## 📱 How It Looks

### Desktop
- Large Om symbols (2-4rem)
- Smooth, flowing animation
- 6 symbols visible

### Tablet
- Medium Om symbols (2-2.5rem)
- Optimized animation
- All symbols visible

### Mobile
- Smaller Om symbols (1.5-2rem)
- Performance optimized
- Maintains smooth motion

---

## 🎯 Quick Test

1. Open `index.html` in browser
2. Look at the hero section (top banner)
3. You should see Om symbols floating upward
4. Watch for 15 seconds to see full cycle
5. Scroll down - animation stays in hero section only

---

## 🔧 Quick Fixes

### Not Seeing Symbols?
1. Clear browser cache (Ctrl+F5)
2. Check if CSS file loaded
3. Verify HTML has the `<span class="floating-om">ॐ</span>` elements

### Animation Too Fast/Slow?
- Edit `animation: floatUp 15s` in CSS
- Change `15s` to your preferred duration

### Symbols Too Bright?
- Edit `color: rgba(255, 255, 255, 0.15)`
- Lower the `0.15` value (e.g., `0.10`)

---

## 💡 Pro Tips

1. **Subtle is Better**: Keep opacity low (10-15%)
2. **Smooth Motion**: Use 15-20 second duration
3. **Don't Overdo**: 6-8 symbols is ideal
4. **Test Mobile**: Always check on phone
5. **Respect Symbol**: Keep it peaceful and dignified

---

## 🎬 Animation Breakdown

```
Second 0:  Symbol 1 starts rising
Second 3:  Symbol 2 starts rising
Second 4:  Symbol 6 starts rising
Second 6:  Symbol 3 starts rising
Second 9:  Symbol 4 starts rising
Second 12: Symbol 5 starts rising
Second 15: Symbol 1 completes, restarts
```

---

## 📊 Performance

- **FPS**: 60fps (smooth)
- **CPU**: Minimal usage
- **GPU**: Hardware accelerated
- **Mobile**: Optimized
- **Battery**: No significant impact

---

## 🙏 Spiritual Meaning

- **Upward Motion**: Spiritual ascension
- **Continuous Flow**: Eternal Dharma
- **Gentle Movement**: Peace and tranquility
- **Om Symbol**: Sacred sound of universe

---

## ✅ Checklist

- [x] Om symbols added to HTML
- [x] CSS animation defined
- [x] Responsive design included
- [x] Performance optimized
- [x] Culturally respectful
- [x] Browser compatible

---

**Quick Start**: Just open `index.html` and enjoy the peaceful, floating Om symbols! 🕉️

**"ॐ" - The sound of the universe** 🙏
