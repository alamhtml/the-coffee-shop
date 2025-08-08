

let cartTotal = 0;

document.addEventListener("DOMContentLoaded", () => {
  const cartDisplay = document.getElementById("cart-total");

  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const price = parseFloat(button.getAttribute("data-price"));
      cartTotal += price;
      cartDisplay.textContent = cartTotal.toFixed(2);
    });
  });
});
const onlinePayment = document.getElementById("online-payment");

paymentMethod.addEventListener("change", () => {
  onlinePayment.classList.toggle("hidden", paymentMethod.value !== "card");
});

document.getElementById("pay-online").addEventListener("click", async () => {
  const stripe = Stripe("pk_test_YOUR_PUBLIC_KEY"); // Replace with your Stripe public key

  const response = await fetch("/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: parseFloat(total) * 100 }) // amount in pence
  });

  const session = await response.json();
  await stripe.redirectToCheckout({ sessionId: session.id });
});



document.addEventListener("DOMContentLoaded", () => {
  const cartDisplay = document.getElementById("cart-total");
  let cartTotal = parseFloat(localStorage.getItem("cartTotal")) || 0;
  cartDisplay.textContent = cartTotal.toFixed(2);

  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
      const price = parseFloat(button.getAttribute("data-price"));
      cartTotal += price;
      localStorage.setItem("cartTotal", cartTotal.toFixed(2));
      cartDisplay.textContent = cartTotal.toFixed(2);
    });
  });
});
