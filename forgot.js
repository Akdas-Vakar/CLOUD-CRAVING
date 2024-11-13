document.addEventListener('DOMContentLoaded', () => {
  const forgotPasswordForm = document.getElementById('forgotPasswordForm');
  const otpSection = document.getElementById('otpSection');
  const otpForm = document.getElementById('otpForm');
  const newPasswordSection = document.getElementById('newPasswordSection');
  const newPasswordForm = document.getElementById('newPasswordForm');

  forgotPasswordForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const phone = document.getElementById('phone').value;
      // Simulate sending OTP to the phone number
      console.log(`Sending OTP to ${phone}`);
      forgotPasswordForm.style.display = 'none';
      otpSection.classList.remove('hidden');
  });

  otpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const otp = document.getElementById('otp').value;
      // Simulate OTP verification
      if (otp === '1234') { // In a real scenario, this would be validated server-side
          otpSection.classList.add('hidden');
          newPasswordSection.classList.remove('hidden');
      } else {
          alert('Invalid OTP. Please try again.');
      }
  });

  newPasswordForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newPassword = document.getElementById('newPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      if (newPassword !== confirmPassword) {
          alert('Passwords do not match. Please try again.');
          return;
      }

      // Simulate password reset
      console.log('Password reset successfully');
      alert('Password has been reset successfully!');
      // In a real scenario, you would send this to your server to update the password
  });
});