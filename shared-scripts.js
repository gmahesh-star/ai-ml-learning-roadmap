// Shared JavaScript for AI Roadmap Website

// Progress Bar
window.addEventListener('scroll', function() {
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    }
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    themeToggle.addEventListener('click', function() {
        const theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Menu Toggle for Mobile
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });
}

// Sidebar Active Link
const sidebarLinks = document.querySelectorAll('#sidebar a');
const sections = document.querySelectorAll('section[id]');

if (sidebarLinks.length > 0 && sections.length > 0) {
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Search Functionality
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

if (searchInput && searchResults) {
    const searchableContent = [
        { text: 'Python Programming', section: 'index.html#phase1' },
        { text: 'Linear Algebra Matrix Vectors', section: 'index.html#phase2' },
        { text: 'Calculus Gradient Descent', section: 'index.html#phase2' },
        { text: 'Pandas NumPy Data Handling', section: 'index.html#phase3' },
        { text: 'Machine Learning ML Algorithms', section: 'index.html#phase4' },
        { text: 'Linear Regression Logistic', section: 'index.html#phase4' },
        { text: 'Random Forest XGBoost', section: 'index.html#phase4' },
        { text: 'Deep Learning Neural Networks', section: 'index.html#phase5' },
        { text: 'CNN Convolutional Image', section: 'index.html#phase5' },
        { text: 'RNN LSTM Sequence', section: 'index.html#phase5' },
        { text: 'PyTorch TensorFlow', section: 'index.html#phase5' },
        { text: 'NLP Natural Language Processing', section: 'index.html#phase6' },
        { text: 'Transformer BERT GPT', section: 'index.html#phase6' },
        { text: 'LLM Large Language Model', section: 'index.html#phase6' },
        { text: 'RAG Retrieval Augmented', section: 'index.html#phase6' },
        { text: 'MLOps Deployment Docker', section: 'index.html#phase7' },
        { text: 'FastAPI Flask API', section: 'index.html#phase7' },
        { text: 'AWS Cloud Deployment', section: 'index.html#phase7' },
        { text: 'Reinforcement Learning RL', section: 'index.html#phase8' },
        { text: 'Diffusion Models Stable Diffusion', section: 'index.html#phase8' },
        { text: 'GAN Generative Adversarial', section: 'index.html#phase8' },
        { text: 'Multimodal AI CLIP', section: 'index.html#phase8' },
        { text: 'Portfolio Projects GitHub', section: 'index.html#phase9' },
        { text: 'Interview Preparation Resume', section: 'index.html#phase9' }
    ];
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }
        
        const results = searchableContent.filter(item => 
            item.text.toLowerCase().includes(query)
        );
        
        if (results.length > 0) {
            searchResults.innerHTML = results.map(item => 
                `<div class="search-result-item" onclick="navigateTo('${item.section}')">${item.text}</div>`
            ).join('');
            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
            searchResults.style.display = 'block';
        }
    });
    
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}

function navigateTo(section) {
    window.location.href = section;
    const searchResults = document.getElementById('search-results');
    const searchInput = document.getElementById('search-input');
    if (searchResults) searchResults.style.display = 'none';
    if (searchInput) searchInput.value = '';
}
