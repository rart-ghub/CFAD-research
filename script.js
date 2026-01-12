// Simple JavaScript for interactivity

document.addEventListener('DOMContentLoaded', function() {
    
    // Placeholder functionality for PDF links
    const pdfLinks = document.querySelectorAll('a[href*="Essay-CFAD"]');
    
    pdfLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // If it's a placeholder PDF, show alert
            if (href.includes('Essay-CFAD-ENG.pdf') || href.includes('Essay-CFAD-HRV.pdf')) {
                console.log('PDF link clicked:', href);
                // You can add custom behavior here
                // For now, just let it try to open (will show 404 until you upload real PDFs)
            }
        });
    });
    
    // Update year in footer automatically
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Zenodo placeholder message
    const zenodoLink = document.getElementById('zenodo-placeholder');
    if (zenodoLink) {
        zenodoLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('The Zenodo link will be activated once the preprint is published. This is a placeholder for testing.');
        });
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Copy Link to Clipboard Function
    const copyLinkBtn = document.getElementById('copy-link-btn');
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const currentUrl = window.location.href;
            
            // Copy to clipboard
            if (navigator.clipboard) {
                navigator.clipboard.writeText(currentUrl)
                    .then(() => {
                        // Show success message
                        const originalText = copyLinkBtn.innerHTML;
                        copyLinkBtn.innerHTML = '<i class="fas fa-check"></i> Link Copied!';
                        copyLinkBtn.style.backgroundColor = '#28a745';
                        
                        // Revert after 3 seconds
                        setTimeout(() => {
                            copyLinkBtn.innerHTML = originalText;
                            copyLinkBtn.style.backgroundColor = '';
                        }, 3000);
                    })
                    .catch(err => {
                        // Fallback for older browsers
                        showLinkAlert(currentUrl);
                    });
            } else {
                // Fallback if clipboard API not available
                showLinkAlert(currentUrl);
            }
        });
    }
    
    // Fallback function to show link in alert
    function showLinkAlert(url) {
        alert('Please copy this link manually:\n\n' + url + '\n\nYou can share it via email or messaging apps.');
    }
});
