import React, { useState } from 'react';
import jsPDF from 'jspdf';
import logoImg from '../images/shop.png';
const OtpPage = () => {
  const [otp, setOTP] = useState('');
  const [generatedOTP, setGeneratedOTP] = useState('');

  const generateOTP = () => {
    // Generate a random 4-digit OTP
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    setGeneratedOTP(OTP);
  };

  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };

  const handleReceiptDownload = () => {
    // Generate the PDF receipt
    const doc = new jsPDF();
    doc.text('ShopSense',10,10);
    // Add logo image to the PDF
doc.addImage(logoImg, 'PNG', 10, 10, 50, 50);

// Set font and text color
doc.setFont('helvetica', 'bold');
doc.setTextColor('#000000');

// Add heading
doc.setFontSize(16);
doc.text('Invoice', 70, 25);

// Add customer details
doc.setFontSize(12);
doc.text('Customer Name: John Doe', 10, 70);
doc.text('Address: 123 Main St', 10, 80);

// Add item table with designs
doc.setFontSize(12);
doc.text('Item', 10, 100);
doc.text('Quantity', 70, 100);
doc.text('Price', 120, 100);
doc.line(10, 102, 180, 102);
doc.rect(10, 105, 170, 80);
doc.line(70, 105, 70, 185);
doc.line(120, 105, 120, 185);
doc.text('Product A', 15, 115);
doc.text('2', 75, 115);
doc.text('$50', 125, 115);
doc.text('Product B', 15, 135);
doc.text('1', 75, 135);
doc.text('$25', 125, 135);
doc.text('Product C', 15, 155);
doc.text('3', 75, 155);
doc.text('$75', 125, 155);

// Set background color and add footer
doc.setFillColor('#eeeeee');
doc.rect(10, 200, 170, 20, 'F');
doc.setFontSize(10);
doc.setTextColor('#000000');
doc.text('Thank you for your purchase!', 70, 210);

// Save the PDF
doc.save('invoice.pdf');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (otp === generatedOTP) {
      handleReceiptDownload();
      alert('OTP verified. PDF receipt generated!');
    } else {
      alert('Invalid OTP!');
    }
  };

  return (
    <div>
      <h2>Enter the OTP sent to your phone:</h2>
      <p>An OTP has been sent to your registered mobile number. Please enter it below to confirm your purchase.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={otp} onChange={handleOTPChange} placeholder="Enter OTP" />
        <button type="submit">Verify OTP</button>
      </form>
      <br />
      <button onClick={generateOTP}>Generate OTP</button>
      <p>The OTP is: {generatedOTP}</p>
    </div>
  );
};

export default OtpPage;
