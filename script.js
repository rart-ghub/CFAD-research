// Simple JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {
    console.log('CFAD Page: Script loaded successfully.');

    // 1. COPY LINK FUNCTIONALITY
    const copyLinkBtn = document.getElementById('copy-link-btn');
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const currentUrl = window.location.href;
            if (navigator.clipboard) {
                navigator.clipboard.writeText(currentUrl).then(() => {
                    // Show success
                    const originalText = copyLinkBtn.innerHTML;
                    copyLinkBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    copyLinkBtn.style.backgroundColor = '#28a745';
                    setTimeout(() => {
                        copyLinkBtn.innerHTML = originalText;
                        copyLinkBtn.style.backgroundColor = '';
                    }, 3000);
                }).catch(err => {
                    console.error('Copy failed:', err);
                    alert('Please copy this link manually:\n' + currentUrl);
                });
            } else {
                alert('Please copy this link manually:\n' + currentUrl);
            }
        });
    }

    // 2. ZENODO PLACEHOLDER
    const zenodoLink = document.getElementById('zenodo-placeholder');
    if (zenodoLink) {
        zenodoLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('The Zenodo link will be activated once the preprint is published. This is a placeholder for testing.');
        });
    }

    // 3. SOCIAL SHARING FUNCTIONS (DEFINED GLOBALLY FOR BUTTON ONCLICK)
    window.shareOnTwitter = function() {
        console.log('Sharing on Twitter...');
        const text = "A New Paradigm in Newtonian Mechanics: Carrier Feedback Acceleration Drive (CFAD)";
        const url = window.location.href;
        const hashtags = "physics,innovation,CFAD";
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=${hashtags}`;
        window.open(shareUrl, '_blank', 'width=600,height=400');
    };

    window.shareOnLinkedIn = function() {
        console.log('Sharing on LinkedIn...');
        const url = window.location.href;
        const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank', 'width=600,height=500');
    };

    window.shareOnFacebook = function() {
        console.log('Sharing on Facebook...');
        const url = window.location.href;
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        window.open(shareUrl, '_blank', 'width=600,height=500');
    };

    window.shareOnReddit = function() {
        console.log('Sharing on Reddit...');
        const url = window.location.href;
        const title = "A New Paradigm in Newtonian Mechanics: Carrier Feedback Acceleration Drive (CFAD)";
        const shareUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        window.open(shareUrl, '_blank', 'width=600,height=600');
    };

    // 4. NATIVE SHARE FOR MOBILE (BONUS)
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

    // 5. AUTO-UPDATE YEAR IN FOOTER
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
