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
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Zenodo placeholder message
    const zenodoLink = document.getElementById('zenodo-placeholder');
    if (zenodoLink) {
        zenodoLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('The Zenodo link will be activated once the preprint is published. This is a placeholder for testing.');
        });
    }
    
    // GitHub placeholder message
    const githubLink = document.getElementById('github-placeholder');
    if (githubLink) {
        githubLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('GitHub repository link will be added after initial setup.');
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

});
// Email Share Function
function shareByEmail() {
    const subject = 'Check out this CFAD research paper';
    const body = `I found this interesting research paper on Carrier Feedback Acceleration Drive:\n\n${window.location.href}\n\nCheck it out!`;
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Try to open email client
    window.location.href = mailtoLink;
    
    // Fallback message
    setTimeout(function() {
        alert('If email client didn\'t open, please copy this link manually:\n\n' + window.location.href);
    }, 500);
    
    return false;
}
