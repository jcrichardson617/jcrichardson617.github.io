function showTab(tabId) {
  // Hide all tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active-tab'));

  // Show selected tab
  document.getElementById(tabId).classList.add('active-tab');

  // Update active nav
  const links = document.querySelectorAll('.navbar a');
  links.forEach(link => link.classList.remove('active'));

  event.target.classList.add('active');
}

showTab('about');
