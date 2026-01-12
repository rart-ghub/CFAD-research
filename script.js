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
    // Social Sharing Functions
function shareOnTwitter() {
    const text = "A New Paradigm in Newtonian Mechanics: Carrier Feedback Acceleration Drive (CFAD) - Continuous acceleration through geometric constraints";
    const url = window.location.href;
    const hashtags = "physics,innovation,mechanical,CFAD";
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=${hashtags}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
}

function shareOnLinkedIn() {
    const url = window.location.href;
    const title = "A New Paradigm in Newtonian Mechanics - CFAD Research";
    const summary = "Carrier Feedback Acceleration Drive demonstrates continuous acceleration through geometric constraints.";
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`;
    window.open(linkedinUrl, '_blank', 'width=600,height=500');
}

function shareOnFacebook() {
    const url = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=500');
}

function shareOnReddit() {
    const url = window.location.href;
    const title = "A New Paradigm in Newtonian Mechanics: Carrier Feedback Acceleration Drive (CFAD)";
    const redditUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
    window.open(redditUrl, '_blank', 'width=600,height=600');
}

// Optional: Add quick share for mobile
function initQuickShare() {
    if (navigator.share) {
        // Add native share button for mobile
        const shareBtn = document.createElement('button');
        shareBtn.className = 'social-btn native-share';
        shareBtn.innerHTML = '<i class="fas fa-mobile-alt"></i>';
        shareBtn.title = 'Share via device';
        shareBtn.onclick = function() {
            navigator.share({
                title: 'CFAD Research',
                text: 'Check out this breakthrough in Newtonian mechanics',
                url: window.location.href
            });
        };
        document.querySelector('.social-share-buttons').appendChild(shareBtn);
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initQuickShare();
});
});

