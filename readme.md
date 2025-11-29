# TrustScan

TrustScan is an AI-powered browser extension and web tool that detects fake job postings and analyzes resume risks.  
It focuses on accurate scam detection for Indian job portals and private resume evaluation using local processing.

---

## Problem

- Job scams are increasing rapidly.
- More than 28% job seekers encounter fake job posts.
- Average loss per victim ranges from ₹5,000 to ₹50,000.
- Students and freshers are targeted the most.
- There is no reliable India-focused scam detection tool.

---

## Solution

TrustScan provides:
- Real-time detection of scam indicators on job portals.
- A credibility score (0–100) for each job listing.
- Keyword, pattern, salary, email, domain and red-flag analysis.
- PDF resume parsing and risk scoring.
- On-device processing with no tracking or external API.

---

## Features

### Job Posting Detection
- Runs only on job-related sites (LinkedIn, Naukri, Indeed, Internshala, etc.)
- Detects suspicious keywords, unrealistic salaries, WhatsApp HR, fees, vague roles.
- Checks company website/domain credibility.
- Generates a trust score with category breakdown.

### Resume Analyzer
- PDF parsing using PDF.js.
- Detects inconsistent timelines, copied templates, fake certifications, overused buzzwords.
- Outputs structured JSON and a risk score.

### Privacy
- No external API.
- No server storage.
- Everything runs locally.

### Web Dashboard
- Upload resume to get risk score.
- Paste job link for scanning.
- Clean minimal UI.
- Fully responsive.

---

## Tech Stack

### Extension
- JavaScript  
- Chrome APIs (tabs, runtime, storage)  
- PDF.js  
- Rule-based and lightweight scoring logic  

### Website
- HTML, CSS, JavaScript  
- Node.js (optional backend)  
- Modular scoring engine  

---

## How It Works

1. User opens a job post.
2. TrustScan scans page text, salary, contact, company info, and patterns.
3. Trust score is generated (Safe / Doubtful / Risky).
4. Resume analyzer parses PDF and produces a score and red-flag list.

---

## Target Users

- Students  
- Freshers  
- Job seekers  
- College placement cells  
- HR teams  
- Ed-tech platforms  

---

## Revenue Model (Future)

- Premium API for colleges and HR teams.
- Resume verification service.
- Ed-tech integrations.

---

## Installation

```
1. Download or clone the TrustScan repository.
2. Open chrome://extensions
3. Enable Developer Mode.
4. Click “Load Unpacked”.
5. Select the TrustScan extension folder.
```

---

## Future Enhancements

- ML-based classification.
- WhatsApp/Telegram link scanner.
- Cloud dashboard (optional).
- Recruiter credibility index.

---

## License

MIT License.

