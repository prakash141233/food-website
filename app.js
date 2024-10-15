<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Food Delivery</title>
</head>
<body>
    <header>
        <h1>quickbite</h1>
        <div id="auth">
            <span id="user-info"></span>
            <button id="login-btn">Login</button>
            <button id="logout-btn" style="display:none;">Logout</button>
        </div>
    </header>
    <main>  
        <div id="restaurants">
            <h2>Restaurants</h2>
            <div class="restaurant">
                <h3>Arabi Restaurant</h3>
                <div class="food-item" data-price="150">
                    <img src="briyani.jpg" alt="biriyani">
                    <p>Biriyani</p>
                    <input type="number" class="quantity" value="1" min="1">
                    <button class="order-btn">Order - 150</button>
                </div>
                <div class="food-item" data-price="120">
                    <img src="burger.jpg" alt="burger">
                    <p>Burger</p>
                    <input type="number" class="quantity" value="1" min="1">
                    <button class="order-btn">Order - 120</button>
                </div>
            </div>
            <div class="restaurant">
                <h3>Jeevan Restaurant</h3>
                <div class="food-item" data-price="30">
                    <img src="chappathi.jpg" alt="chappathi">
                    <p>Chappathi</p>
                    <input type="number" class="quantity" value="1" min="1">
                    <button class="order-btn">Order - 30</button>
                </div>
                <div class="food-item" data-price="15">
                    <img src="dosa.jpg" alt="dosa">
                    <p>Dosa</p>
                    <input type="number" class="quantity" value="1" min="1">
                    <button class="order-btn">Order - 15</button>
                </div>
            </div>
        </div>
        <div id="restaurants">
            
            <div class="restaurant">
                <h3>kfc Restaurant</h3>
                <div class="food-item" data-price="150">
                    <img src="chick.jpeg" alt="fried chicken">
                    <p>fried chicken</p>
                    <input type="number" class="quantity" value="1" min="1">
                    <button class="order-btn">Order - 300</button>
                </div>
                <div class="food-item" data-price="120">
                    <img src="_frenchfrieslar.png" alt="burger">
                    <p>french fries</p>
                    <input type="number" class="quantity" value="1" min="1">
                    <button class="order-btn">Order - 250</button>
                </div>
            </div>

        <div id="order-summary" style="display:none;">
            <h2>Your Order</h2>
            <div id="order-items"></div>
            <h3>Total: $<span id="total-amount">0</span></h3>
        </div>

        <div id="customer-details" style="display:none;">
            <h2>Enter Delivery Details</h2>
            <form id="delivery-form">
                <label for="address">Address:</label>
                <input type="text" id="address" required><br>
                <label for="contact">Contact Number:</label>
                <input type="tel" id="contact" required><br>
                <button id="submit-details" type="submit">Submit Details</button>
            </form>
        </div>

        <div id="payment" style="display:none;">
            <h2>Payment Method</h2>
            <select id="payment-method">
                <option value="cod">Cash on Delivery</option>
                <option value="online">Online Payment</option>
            </select>
            <div id="upi-options" style="display:none;">
                <h3>UPI Options</h3>
                <button>GPay</button>
                <button>PhonePe</button>
                <button>Paytm</button>
            </div>
            <button id="confirm-order">Confirm Order</button>
        </div>
    </main>
    <script src="app.js"></script>
</body>
</html>
