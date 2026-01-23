// ============================================
// CFAD RESEARCH - MAIN SCRIPT
// ============================================

// GLOBALNE FUNKCIJE
function shareOnTwitter() {
    console.log('Sharing on Twitter...');
    const url = window.location.href;
    const text = "A New Paradigm in Newtonian Mechanics: Carrier Feedback Acceleration Drive (CFAD)";
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
}

function shareOnLinkedIn() {
    console.log('Sharing on LinkedIn...');
    const url = window.location.href;
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedinUrl, '_blank', 'width=600,height=500');
}

function shareOnFacebook() {
    console.log('Sharing on Facebook...');
    const url = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=500');
}

function shareOnReddit() {
    console.log('Sharing on Reddit...');
    const url = window.location.href;
    const title = "A New Paradigm in Newtonian Mechanics: Carrier Feedback Acceleration Drive (CFAD)";
    const redditUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
    window.open(redditUrl, '_blank', 'width=600,height=600');
}

// Kada se stranica učita
document.addEventListener('DOMContentLoaded', function() {
    console.log('CFAD Page: Script loaded successfully.');

    // 1. COPY LINK FUNCTIONALITY
    const copyLinkBtn = document.getElementById('copy-link-btn');
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const currentUrl = window.location.href;
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(currentUrl)
                    .then(() => {
                        // Show success message
                        const originalText = copyLinkBtn.innerHTML;
                        copyLinkBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                        copyLinkBtn.style.backgroundColor = '#28a745';
                        
                        // Revert after 3 seconds
                        setTimeout(() => {
                            copyLinkBtn.innerHTML = originalText;
                            copyLinkBtn.style.backgroundColor = '';
                        }, 3000);
                    })
                    .catch(err => {
                        console.error('Copy failed:', err);
                        alert('Please copy this link manually:\n' + currentUrl);
                    });
            } else {
                // Fallback for older browsers
                alert('Please copy this link manually:\n' + currentUrl);
            }
        });
    }

    // 2. ZENODO PLACEHOLDER MESSAGE
    const zenodoLink = document.getElementById('zenodo-placeholder');
    if (zenodoLink) {
        zenodoLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('The Zenodo link will be activated once the preprint is published. This is a placeholder for testing.');
        });
    }

    // 3. NATIVE SHARE FOR MOBILE (BONUS)
    if (navigator.share) {
        const shareBtn = document.createElement('button');
        shareBtn.className = 'social-btn native-share';
        shareBtn.innerHTML = '<i class="fas fa-share-alt"></i>';
        shareBtn.title = 'Share via device';
        shareBtn.onclick = function(e) {
            e.preventDefault();
            navigator.share({
                title: 'CFAD Research',
                text: 'Check out this breakthrough in Newtonian mechanics',
                url: window.location.href,
            });
        };
        
        const socialContainer = document.querySelector('.social-share-buttons');
        if (socialContainer) {
            socialContainer.appendChild(shareBtn);
        }
    }

    // 4. UPDATE YEAR IN FOOTER
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 5. DEBUG: Log all social buttons
    const socialButtons = document.querySelectorAll('.social-btn');
    console.log('Found social buttons:', socialButtons.length);
});

// Generate social image on the fly
function generateSocialImage() {
    const socialDiv = document.getElementById('social-image');
    if (!socialDiv) return;
    
    // Convert div to image (simplified version)
    console.log('Social image element ready for sharing');
    
    // This would normally use html2canvas library, but for now we use CSS
    return 'https://rart-ghub.github.io/CFAD-research/#social-image';
}
