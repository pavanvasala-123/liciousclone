import styled from "styled-components";

export const AddressCon = styled.div`
       .address-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.address-form {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: 600;
}

.form-group input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

/* Responsive Styles */

@media (max-width: 768px) {
  .address-form-container {
    padding: 10px;
  }

  .form-group input {
    font-size: 14px;
    padding: 8px;
  }

  .submit-button {
    font-size: 16px;
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .address-form {
    padding: 15px;
  }

  .submit-button {
    font-size: 14px;
    padding: 8px;
  }
}

`