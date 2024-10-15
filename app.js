const users = {
    user1: 'pass1',
    user2: 'pass2',
    user3: 'pass3',
    user4: 'pass4',
    user5: 'pass5'
};

let loggedInUser = null;
let orderItems = [];
let totalAmount = 0;
let customerDetails = {};

document.getElementById('login-btn').addEventListener('click', () => {
    const username = prompt('Enter username:');
    const password = prompt('Enter password:');

    if (users[username] && users[username] === password) {
        loggedInUser = username;
        document.getElementById('user-info').textContent = `Logged in as ${username}`;
        document.getElementById('login-btn').style.display = 'none';
        document.getElementById('logout-btn').style.display = 'inline';
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
});

document.getElementById('logout-btn').addEventListener('click', () => {
    loggedInUser = null;
    document.getElementById('user-info').textContent = '';
    document.getElementById('login-btn').style.display = 'inline';
    document.getElementById('logout-btn').style.display = 'none';
    alert('Logged out successfully.');
});

document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        if (!loggedInUser) {
            alert('Please log in to order.');
            return;
        }

        const foodItem = e.target.parentElement;
        const itemName = foodItem.querySelector('p').textContent;
        const price = parseInt(foodItem.getAttribute('data-price'));
        const quantity = parseInt(foodItem.querySelector('.quantity').value);
        const totalItemPrice = price * quantity;

        orderItems.push({ name: itemName, quantity, price: totalItemPrice });
        totalAmount += totalItemPrice;

        updateOrderSummary();
        document.getElementById('order-summary').style.display = 'block';
        document.getElementById('customer-details').style.display = 'block';
    });
});

function updateOrderSummary() {
    const orderList = document.getElementById('order-items');
    orderList.innerHTML = '';
    orderItems.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');
        orderItem.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>$${item.price}</span>
        `;
        orderList.appendChild(orderItem);
    });
    document.getElementById('total-amount').textContent = totalAmount;
}

document.getElementById('delivery-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;

    if (address && contact) {
        customerDetails = { address, contact };
        document.getElementById('payment').style.display = 'block';
        alert('Delivery details submitted.');
    } else {
        alert('Please fill in your address and contact details.');
    }
});

document.getElementById('payment-method').addEventListener('change', (e) => {
    const upiOptions = document.getElementById('upi-options');
    upiOptions.style.display = e.target.value === 'online' ? 'block' : 'none';
});

document.getElementById('confirm-order').addEventListener('click', () => {
    if (!customerDetails.address || !customerDetails.contact) {
        alert('Please submit your delivery details before confirming the order.');
        return;
    }

    alert(`Order confirmed!\nTotal: $${totalAmount}\nDelivery to: ${customerDetails.address}\nContact: ${customerDetails.contact}`);
    // Reset after confirmation
    orderItems = [];
    totalAmount = 0;
    customerDetails = {};
    updateOrderSummary();
    document.getElementById('order-summary').style.display = 'none';
    document.getElementById('payment').style.display = 'none';
    document.getElementById('customer-details').style.display = 'none';
});
