 
    var links = document.querySelectorAll('a');

    for (var i = 0; i < links.length; i++) {
        if(links[i].getAttribute('id')!='nav'){
            links[i].setAttribute('target', '_blank');
        }
        
    }


    document.addEventListener("DOMContentLoaded", function() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelectorAll('.sidebar a').forEach(link => {
                        link.classList.remove('active'); // Remove the class from all links
                        if (link.dataset.link === entry.target.id) {
                            link.classList.add('active'); // Add class to the current viewed section link
                        }
                    });
                }
            });
        }, {rootMargin: "0px", threshold: 0.15});
    
        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    });
    
    
        document.addEventListener('DOMContentLoaded', function() {
            body = document.body;
            document.querySelectorAll('.sidebar a').forEach(link => {
            
            link.addEventListener('click', function(event) {
                navPanel.style.display = 'none';
                body.style.paddingLeft = '20px';
    });
});
            })
    
    
        document.addEventListener('DOMContentLoaded', () => {
            const navToggle = document.getElementById('navToggle');
            const navPanel = document.getElementById('navPanel');
            body = document.body;
           
            // Show the navigation panel when mouse enters the button area
            navToggle.addEventListener('mouseenter', () => {
                navPanel.style.display = 'block';
                body.style.paddingLeft = '200px';
    
            });
        
            
            body.addEventListener('click', () => {
                navPanel.style.display = 'none';
                body.style.paddingLeft = '20px';
    
            });
        });
        
        document.addEventListener('DOMContentLoaded', () => {
            const citatElements = document.querySelectorAll('.citat');
        
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'slideIn 0.7s forwards';
                    } else {
                        // Optional: Slide out when the element goes out of view
                        entry.target.style.animation = 'slideOut 0.7s forwards';
                    }
                });
            }, {
                threshold: 0.1 // Trigger when half of the element is in view
            });
        
            // Observe each citat element
            citatElements.forEach(el => observer.observe(el));
        });
        
        
