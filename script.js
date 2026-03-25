function showTab(tabId) {
  // Hide all tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active-tab');
  });

  // Show selected tab
  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.classList.add('active-tab');
  }

  // Update nav
  document.querySelectorAll('.navbar a').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.tab === tabId) {
      link.classList.add('active');
    }
  });
}

// Handle clicks
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const tab = this.dataset.tab;
    window.location.hash = tab;
  });
});

// Handle URL hash (important)
function loadFromHash() {
  const hash = window.location.hash.replace('#', '');
  showTab(hash || 'about');
}

// Initial load
window.addEventListener('load', loadFromHash);

// Back/forward browser buttons
window.addEventListener('hashchange', loadFromHash);
