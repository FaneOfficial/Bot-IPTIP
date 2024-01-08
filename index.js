document.addEventListener('DOMContentLoaded', () => {
    const countSpan = document.getElementById('count');
    const incrementButton = document.getElementById('add');
    const decrementButton = document.getElementById('minus');
    let count = 0;

    updateButtonState();

    incrementButton.addEventListener('click', () => {
        count++;
        updateCountDisplay();
        updateButtonState();
    });

    decrementButton.addEventListener('click', () => {
        if (count > 0) {
            count--;
            updateCountDisplay();
            updateButtonState();
        }
    });

    function updateCountDisplay() {
        countSpan.textContent = count;
    }

    function updateButtonState() {
        decrementButton.disabled = count === 0;
    }
});
