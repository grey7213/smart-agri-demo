document.addEventListener('DOMContentLoaded', function() {
    // Define the crop data (simulated)
    const cropData = {
        '红香椿': {
            demand: '上升',
            demandArrow: '↑',
            demandColor: '#4caf50',
            wholesalePrice: '6-8',
            ecomPrice: '15 - 25',
            suggestedPrice: '18 - 22'
        },
        '苹果': {
            demand: '平稳',
            demandArrow: '→',
            demandColor: '#ff9800',
            wholesalePrice: '3-4',
            ecomPrice: '6 - 9',
            suggestedPrice: '7 - 8.5'
        },
        '小米': {
            demand: '下降',
            demandArrow: '↓',
            demandColor: '#f44336',
            wholesalePrice: '4-5',
            ecomPrice: '8 - 12',
            suggestedPrice: '9 - 11'
        }
    };

    // Get DOM elements
    const cropSelect = document.getElementById('crop-select');
    const infoContent = document.getElementById('info-content');
    const placeholderMessage = document.querySelector('.placeholder-message');
    const demandTrend = document.getElementById('demand-trend');
    const wholesalePrice = document.getElementById('wholesale-price');
    const ecomPrice = document.getElementById('ecom-price');
    const suggestedPrice = document.getElementById('suggested-price');

    // Add event listener to the dropdown
    cropSelect.addEventListener('change', function() {
        const selectedCrop = this.value;
        
        if (selectedCrop) {
            // Hide placeholder and show content
            placeholderMessage.style.display = 'none';
            infoContent.style.display = 'block';
            
            // Get data for the selected crop
            const data = cropData[selectedCrop];
            
            // Update the information display with trend arrows
            demandTrend.innerHTML = `未来3个月市场需求预测：<span style="color: ${data.demandColor}; font-weight: bold;">${data.demand} ${data.demandArrow}</span>`;
            wholesalePrice.textContent = `主要批发市场均价：¥${data.wholesalePrice}/斤`;
            ecomPrice.textContent = `主流电商平台售价：¥${data.ecomPrice}/斤`;
            suggestedPrice.textContent = `建议零售价区间：¥${data.suggestedPrice}/斤`;
        } else {
            // If no crop is selected, show placeholder
            placeholderMessage.style.display = 'block';
            infoContent.style.display = 'none';
        }
    });

    // Add visual effects to the dashboard sections
    document.querySelectorAll('.dashboard-section').forEach(section => {
        // Add hover effect
        section.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            this.style.transform = 'translateY(0)';
        });
    });
}); 