document.addEventListener('DOMContentLoaded', function() {
    // Get all boxes
    const boxes = document.querySelectorAll('.box');
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    
    // Function to handle box selection
    function selectBox(box) {
        // Unselect all other radio buttons
        radioButtons.forEach(rb => {
            rb.checked = false;
        });
        
        // Check the radio button in this box
        const radio = box.querySelector('input[type="radio"]');
        radio.checked = true;
        
        // Remove active class from all boxes
        boxes.forEach(b => {
            b.classList.remove('active');
            b.style.borderColor = '#e0e0e0';
        });
        
        // Add active class to current box
        box.classList.add('active');
        box.style.borderColor = '#ff6b8b';
        
        // Update the total price based on selected option
        updateTotalPrice();
    }
    
    // Add click event listener to each box
    boxes.forEach(box => {
        const boxHeader = box.querySelector('.box-header');
        
        // Add click event to the box header
        boxHeader.addEventListener('click', function() {
            selectBox(box);
        });
        
        // Add click event to the radio button
        const radio = box.querySelector('input[type="radio"]');
        radio.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent the boxHeader click event from triggering
            selectBox(box);
        });
    });
    
    // Function to update the total price
    function updateTotalPrice() {
        const selectedBox = document.querySelector('input[type="radio"]:checked').closest('.box');
        const price = selectedBox.querySelector('.current-price').textContent;
        document.querySelector('.total').textContent = `Total : ${price}`;
    }
    
    // Initialize with default selection
    const defaultSelectedBox = document.querySelector('input[type="radio"]:checked').closest('.box');
    selectBox(defaultSelectedBox);
    
    // Add hover effects
    boxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            if (!box.classList.contains('active')) {
                box.style.borderColor = '#ff6b8b90';
            }
        });
        
        box.addEventListener('mouseleave', function() {
            if (!box.classList.contains('active')) {
                box.style.borderColor = '#e0e0e0';
            }
        });
    });
    
    // Add to cart button animation
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    
    addToCartBtn.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.98)';
    });
    
    addToCartBtn.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1)';
    });
    
    addToCartBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}); 