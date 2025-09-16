# Blue Ladder Business Enclave - Static Website

## 🏢 About
Premium commercial spaces website for Blue Ladder Business Enclave in Dombivali, Maharashtra.

## 📁 Files Structure
```
blue-ladder-static/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── images/             # All images
    ├── logo.png        # Blue Ladder logo
    ├── hero-0.jpg      # Hero carousel image 1 (night view with metro)
    ├── hero-1.jpg      # Hero carousel image 2
    ├── hero-2.jpg      # Hero carousel image 3
    ├── hero-3.jpg      # Hero carousel image 4
    ├── gallery-1.jpg   # Gallery image 1
    ├── gallery-2.jpg   # Gallery image 2
    ├── gallery-3.jpg   # Gallery image 3
    ├── gallery-4.jpg   # Gallery image 4
    ├── gallery-5.jpg   # Gallery image 5
    └── gallery-6.jpg   # Gallery image 6
```

## 🚀 How to Use

### Option 1: GitHub Pages (Recommended)
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" > "main" > "/ (root)"
5. Your website will be live at: `https://yourusername.github.io/repository-name`

### Option 2: Local Testing
1. Extract all files to a folder
2. Open `index.html` in any web browser
3. Or use a local server: `python -m http.server 8000`

## ✨ Features
- ✅ Responsive design (mobile-friendly)
- ✅ Hero carousel with 4 images (5-second auto-slide)
- ✅ Gallery section with 6 images
- ✅ Premium amenities showcase
- ✅ Contact form with Google Sheets integration
- ✅ Popup enquiry form
- ✅ Smooth scrolling navigation
- ✅ Professional styling with animations

## 📊 Google Sheets Integration
The forms are configured to submit data to Google Sheets using your deployed Google Apps Script:
- **Script URL**: Already configured in `script.js`
- **Form Fields**: Name, Contact, Purpose, Budget, Message, Timestamp
- **Both forms** (popup and contact) submit to the same Google Sheet

## 🎨 Customization
- **Colors**: Edit CSS variables in `styles.css`
- **Content**: Modify text in `index.html`
- **Images**: Replace images in `images/` folder (keep same names)
- **Google Sheets**: Update `GOOGLE_SCRIPT_URL` in `script.js`

## 📱 Mobile Responsive
The website is fully responsive and works perfectly on:
- Desktop computers
- Tablets
- Mobile phones

## 🔧 Technical Details
- **Pure HTML/CSS/JavaScript** - No frameworks needed
- **Font Awesome icons** - Loaded from CDN
- **Modern CSS** - Flexbox, Grid, animations
- **Cross-browser compatible**
- **SEO optimized**

## 📞 Contact Information
- **Phone**: +91 98765 43210
- **Email**: info@blueladder.com
- **Location**: Dombivali, Maharashtra

---
**Created with ❤️ for Blue Ladder Business Enclave**
