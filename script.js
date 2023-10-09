//your code here
const itemNameInput = document.getElementById('item-name-input');
const itemPriceInput = document.getElementById('item-price-input');
const addBtn = document.getElementById('add');
const itemList = document.getElementById('item-list');
const totalDisplay = document.getElementById('total');

addBtn.addEventListener('click', () => {
    const itemName = itemNameInput.value.trim();
    const itemPrice = parseFloat(itemPriceInput.value);

    if (itemName === '' || isNaN(itemPrice) || itemPrice <= 0) {
        alert('Invalid input. Please enter a valid item name and price.');
        return;
    }

    const newRow = document.createElement('tr');
    const itemNameCell = document.createElement('td');
    const itemPriceCell = document.createElement('td');

    itemNameCell.textContent = itemName;
    itemPriceCell.textContent = `$${itemPrice.toFixed(2)}`;

    newRow.appendChild(itemNameCell);
    newRow.appendChild(itemPriceCell);

    itemList.appendChild(newRow);

    // Clear input fields
    itemNameInput.value = '';
    itemPriceInput.value = '';

    // Update the grand total
    updateGrandTotal();
});

function updateGrandTotal() {
    const itemPrices = Array.from(itemList.querySelectorAll('td:last-child')).map(cell => {
        return parseFloat(cell.textContent.replace('$', ''));
    });

    const grandTotal = itemPrices.reduce((total, price) => total + price, 0);

    totalDisplay.textContent = `Grand Total: $${grandTotal.toFixed(2)}`;
}
