# Blue Ladder Business Enclave - Premium Commercial Website

A modern, responsive website for Blue Ladder Business Enclave - Dombivali's first Emirates-influenced commercial integrated business park.

## 🌟 Features

### ✅ **Complete Form System**
- **Auto-popup form** - appears after 5 seconds, reappears after 30 seconds if not submitted
- **Success popup** - shows "Thank You! Our Experts will get back to you!" after form submission
- **Form validation** - proper 10-digit Indian mobile number validation (6-9 starting digits)
- **Both forms identical** - popup form and bottom contact form have same fields and functionality
- **Form clearing** - forms clear after successful submission
- **Contact prefix** - automatic "+91" prefix for Indian numbers

### 📋 **Form Fields (Both Forms)**
- **Name** (required)
- **Contact** (required, 10-digit validation with +91 prefix)
- **Purpose** (required dropdown: Office, Retail, Investment, Other)
- **Budget** (required dropdown: 50 Lakh+, 1 Cr+, 2 Cr+, Other)
- **Message** (optional)

### 🎨 **Design Features**
- **Responsive design** - works perfectly on all devices
- **Modern UI/UX** - clean, professional design
- **Hero carousel** - 4 high-quality property images
- **Gallery section** - 6 professional property images
- **Premium amenities** - detailed amenities showcase
- **Contact information** - phone, WhatsApp, location

### 🚀 **Technical Features**
- **HTML5/CSS3/JavaScript** - modern web technologies
- **Bootstrap responsive** - mobile-first design
- **Font Awesome icons** - professional iconography
- **Google Apps Script integration** - form data capture
- **Form validation** - real-time input validation
- **Success feedback** - user confirmation after submission

## 📁 **File Structure**

```
blue-ladder-business-enclave/
├── index.html                 # Main website file
├── styles.css                 # Custom CSS styles
├── google-apps-script.js      # Google Apps Script for form handling
├── README.md                  # This file
└── images/                    # Image assets
    ├── logo.png              # Blue Ladder logo
    ├── hero-0.jpg to hero-3.jpg    # Hero carousel images
    ├── gallery-1.jpg to gallery-6.jpg  # Gallery images
    ├── building-main.jpg      # Main building image
    └── about-image.png        # About section image
```

## 🔧 **Setup Instructions**

### 1. **Clone the Repository**
```bash
git clone https://github.com/your-username/blue-ladder-business-enclave.git
cd blue-ladder-business-enclave
```

### 2. **Deploy Google Apps Script**
1. Go to **script.google.com**
2. Create a **new project**
3. Copy the code from `google-apps-script.js`
4. **Deploy as Web App** with permissions set to "Anyone"
5. **Copy the Web App URL**

### 3. **Update Form Handler URL**
1. Open `index.html`
2. Find line 1129: `const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec';`
3. Replace `YOUR_SCRIPT_ID_HERE` with your actual Google Apps Script ID

### 4. **Setup Google Sheet**
1. Create a new Google Sheet
2. Update the `SPREADSHEET_ID` in your Google Apps Script
3. The sheet will automatically create headers: Name | Contact | Purpose | Budget | Message | Timestamp

## 🌐 **Live Demo**

Visit the live website: [Blue Ladder Business Enclave](https://blue-ladder-download-2.lindy.site)

## 📊 **Google Sheet Integration**

The website captures form data in the following format:

| Name | Contact | Purpose | Budget | Message | Timestamp |
|------|---------|---------|---------|---------|-----------|
| Test User | +919876543210 | Office | 1 Cr+ | I am interested in premium office space | 2025-09-17 14:40:25 |

## 🎯 **Key Highlights**

- ✅ **Form Structure**: Completely rebuilt and tested
- ✅ **Success Popup**: Working perfectly with proper messaging
- ✅ **Form Validation**: Real-time validation implemented
- ✅ **Identical Forms**: Both popup and bottom forms are exactly the same
- ✅ **Image Assets**: All high-quality images integrated
- ✅ **Auto-popup**: Working correctly (5-second initial, 30-second repeat)
- ✅ **Mobile Responsive**: Perfect on all devices
- ✅ **Professional Design**: Modern, clean, and user-friendly

## 📱 **Browser Compatibility**

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🛠️ **Technologies Used**

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox/Grid
- **JavaScript** - Form handling and interactions
- **Bootstrap** - Responsive framework
- **Font Awesome** - Icons
- **Google Apps Script** - Backend form processing
- **Google Sheets** - Data storage

## 📞 **Contact Information**

- **Phone**: +91 82915 05555
- **Location**: Dombivali, Maharashtra
- **WhatsApp**: Available on website

## 📄 **License**

This project is created for Blue Ladder Business Enclave. All rights reserved.

---

**Built with ❤️ for Blue Ladder Business Enclave - Dombivali's Premier Commercial Destination**
