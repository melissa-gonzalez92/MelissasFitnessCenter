'use strict';

function verifyMembership() {
    const validMembershipIds = ["BASIC123", "STANDARD456", "PREMIUM789"];
    const inputId = document.getElementById("membershipId").value.trim();
    const messageDiv = document.getElementById("message");

    if (validMembershipIds.includes(inputId)) {
        messageDiv.style.color = "green";
        messageDiv.textContent = "Membership verified successfully!";
    } else {
        messageDiv.style.color = "red";
        messageDiv.textContent = "Invalid membership ID. Please try again.";
    }
}

function makePayment() {
    const selectedPlan = document.getElementById("membershipPlan").value;
    const paymentMessageDiv = document.getElementById("paymentMessage");

    if (selectedPlan) {
        paymentMessageDiv.style.color = "green";
        paymentMessageDiv.textContent = `Payment successful for ${selectedPlan} plan!`;
    } else {
        paymentMessageDiv.style.color = "red";
        paymentMessageDiv.textContent = "Please select a membership plan to proceed with payment.";
    }
}