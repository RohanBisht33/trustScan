(function () {
  'use strict';
  
  const body = document.body;
  const downloadUrl = '#'; // TODO: replace with published store URL
  const docsUrl = '#'; // TODO: link to documentation if available

  const downloadTargets = [
    document.getElementById('downloadNav'),
    document.getElementById('downloadHero'),
    document.getElementById('downloadCTA')
  ];

  downloadTargets.forEach(btn => {
    if (btn) btn.href = downloadUrl;
  });

  const docsLink = document.getElementById('docsLink');
  if (docsLink) docsLink.href = docsUrl;

  function applyTheme(theme) {
    const next = theme === 'light' ? 'light' : 'dark';
    body.setAttribute('data-theme', next);
    try {
      localStorage.setItem('trustScanTheme', next);
    } catch (e) {
      console.warn('Could not save theme to localStorage:', e);
    }
    
    // Update all theme toggle buttons
    const allToggleButtons = document.querySelectorAll('[data-theme-toggle]');
    allToggleButtons.forEach(btn => {
      if (btn) {
        const btnTheme = btn.getAttribute('data-theme-toggle');
        if (btnTheme === next) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      }
    });
  }

  // Setup theme toggle buttons - use event delegation for reliability
  function setupThemeToggle() {
    const themeSwitch = document.querySelector('.theme-switch');
    if (themeSwitch) {
      // Use event delegation on the container
      themeSwitch.addEventListener('click', function(e) {
        const button = e.target.closest('button[data-theme-toggle]');
        if (button) {
          e.preventDefault();
          e.stopPropagation();
          const theme = button.getAttribute('data-theme-toggle');
          console.log('Theme button clicked:', theme);
          if (theme === 'light' || theme === 'dark') {
            applyTheme(theme);
          }
        }
      });
    }
    
    // Also attach directly to buttons as backup
    const buttons = document.querySelectorAll('button[data-theme-toggle]');
    buttons.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const theme = this.getAttribute('data-theme-toggle');
        console.log('Direct button click:', theme);
        if (theme === 'light' || theme === 'dark') {
          applyTheme(theme);
        }
      });
    });
  }

  // Initialize theme
  function initTheme() {
    let initialTheme = 'dark';
    try {
      const stored = localStorage.getItem('trustScanTheme');
      if (stored === 'light' || stored === 'dark') {
        initialTheme = stored;
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        initialTheme = 'light';
      }
    } catch (e) {
      console.warn('Theme initialization error:', e);
    }
    
    applyTheme(initialTheme);
  }

  // Setup when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setupThemeToggle();
      initTheme();
    });
  } else {
    setupThemeToggle();
    initTheme();
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const el = document.querySelector(targetId);
      if (!el) return;
      event.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Newsletter form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const statusEl = document.querySelector('.newsletter-status');
    newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (emailInput) {
        emailInput.value = '';
      }
      if (statusEl) {
        statusEl.textContent = 'Thanks! We will send curated job-safety notes soon.';
      }
    });
  }
})();

