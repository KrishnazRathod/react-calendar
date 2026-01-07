# PWA Setup Guide

This app is configured as a Progressive Web App (PWA) and can be installed on devices.

## ✅ What's Already Configured

1. **Manifest File** (`public/manifest.json`) - Defines app metadata
2. **Service Worker** (`public/sw.js`) - Enables offline functionality
3. **Service Worker Registration** - Automatically registered on app load
4. **Install Button** - Appears when installation is available
5. **PWA Meta Tags** - Added to `index.html`

## 📱 How to Install the App

### Desktop (Chrome/Edge)
1. Look for the install icon in the address bar
2. Or click the "Install App" button (bottom-right corner)
3. Follow the installation prompt

### Mobile (Android/Chrome)
1. Open the app in Chrome
2. Tap the menu (3 dots) → "Install app" or "Add to Home screen"
3. Or use the "Install App" button

### iOS (Safari)
1. Open the app in Safari
2. Tap the Share button
3. Select "Add to Home Screen"

## 🎨 Generate Icons

You need to create two icon files:

1. **Open `public/icon-generator.html` in your browser**
   - Click "Generate 192x192" → Right-click canvas → Save as `icon-192.png`
   - Click "Generate 512x512" → Right-click canvas → Save as `icon-512.png`
   - Place both files in the `public` folder

2. **Or use online tools:**
   - [RealFaviconGenerator](https://realfavicongenerator.net/)
   - [PWA Builder Image Generator](https://www.pwabuilder.com/imageGenerator)

3. **Or create manually:**
   - Create 192x192 and 512x512 PNG images
   - Use your branding/logo
   - Save as `icon-192.png` and `icon-512.png` in `public` folder

## 🚀 Testing PWA Features

### Local Development
```bash
npm run build
npm run preview
```

### Check PWA Status
1. Open Chrome DevTools (F12)
2. Go to "Application" tab
3. Check "Manifest" section
4. Check "Service Workers" section
5. Use "Lighthouse" tab to audit PWA score

### Test Installation
1. Build the app: `npm run build`
2. Preview: `npm run preview`
3. Open in Chrome
4. Check for install prompt or use DevTools → Application → Manifest → "Add to homescreen"

## 📋 PWA Checklist

- ✅ Manifest.json configured
- ✅ Service Worker registered
- ✅ HTTPS enabled (required for production)
- ✅ Icons added (192x192 and 512x512)
- ✅ Theme color set
- ✅ Display mode set to "standalone"
- ✅ Start URL configured

## 🔧 Customization

### Update App Name
Edit `public/manifest.json`:
```json
{
  "name": "Your App Name",
  "short_name": "Short Name"
}
```

### Update Theme Color
Edit `public/manifest.json` and `index.html`:
- Change `"theme_color": "#14b8a6"` in manifest.json
- Change `<meta name="theme-color" content="#14b8a6" />` in index.html

### Customize Service Worker
Edit `public/sw.js` to add more caching strategies or offline functionality.

## 🌐 Production Deployment

For PWA to work fully, you need:
1. **HTTPS** - Required for service workers
2. **Valid manifest.json** - Must be accessible
3. **Service worker** - Must be registered
4. **Icons** - Must be present

### Recommended Hosting
- Vercel (automatic HTTPS)
- Netlify (automatic HTTPS)
- GitHub Pages (with custom domain for HTTPS)
- Firebase Hosting

## 🐛 Troubleshooting

### Install button not showing?
- Make sure you're using HTTPS (or localhost)
- Check browser console for errors
- Verify service worker is registered
- Clear browser cache and reload

### Icons not showing?
- Verify icon files exist in `public` folder
- Check manifest.json icon paths are correct
- Ensure icons are PNG format
- Check file sizes (should be reasonable, not too large)

### Service Worker not working?
- Check browser console for errors
- Verify `sw.js` is accessible at `/sw.js`
- Clear service worker cache in DevTools → Application → Service Workers

## 📚 Resources

- [MDN PWA Guide](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Web.dev PWA](https://web.dev/progressive-web-apps/)
- [PWA Builder](https://www.pwabuilder.com/)

