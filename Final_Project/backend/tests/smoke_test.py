import requests

BASE_URL = "http://localhost:5000"

def test_health_check():
    response = requests.get(f"{BASE_URL}/health")
    assert response.status_code == 200, "Health check failed"
    assert response.json().get("status") == "App is running", "Unexpected health status"
    print("Health check passed")

def test_create_account():
    payload = {"username": "testuser", "password": "testpass"}
    response = requests.post(f"{BASE_URL}/create-account", json=payload)
    assert response.status_code == 201, "Failed to create account"
    assert response.json().get("message") == "Account created successfully", "Unexpected response message"
    print("Create account passed")

def test_login():
    payload = {"username": "testuser", "password": "testpass"}
    response = requests.post(f"{BASE_URL}/login", json=payload)
    assert response.status_code == 200, "Login failed"
    assert response.json().get("message") == "Login successful", "Unexpected login response message"
    print("Login passed")

def test_get_user_data():
    response = requests.get(f"{BASE_URL}/user/testuser")
    assert response.status_code == 200, "Failed to fetch user data"
    data = response.json()
    assert data.get("username") == "testuser", "Unexpected username"
    assert data.get("amount") == 0.0, "Unexpected default amount"
    assert data.get("currency") == "USD", "Unexpected default currency"
    print("Get user data passed")

def test_update_amount():
    payload = {"amount": 100.0}
    response = requests.put(f"{BASE_URL}/user/testuser/update-amount", json=payload)
    assert response.status_code == 200, "Failed to update amount"
    assert response.json().get("message") == "Amount updated successfully", "Unexpected response message"
    print("Update amount passed")

def test_update_currency():
    payload = {"currency": "EUR"}
    response = requests.put(f"{BASE_URL}/user/testuser/update-currency", json=payload)
    assert response.status_code == 200, "Failed to update currency"
    data = response.json()
    assert data.get("message") == "Currency updated successfully", "Unexpected response message"
    assert data.get("currency") == "EUR", "Unexpected currency"
    print("Update currency passed")

def test_debug_users():
    response = requests.get(f"{BASE_URL}/debug/users")
    assert response.status_code == 200, "Failed to fetch debug users"
    users = response.json()
    assert any(user["username"] == "testuser" for user in users), "User not found in debug users"
    print("Debug users passed")

if __name__ == "__main__":
    try:
        print("Starting smoke tests...")
        test_health_check()
        test_create_account()
        test_login()
        test_get_user_data()
        test_update_amount()
        test_update_currency()
        test_debug_users()
        print("All smoke tests passed successfully!")
    except AssertionError as e:
        print(f"Smoke test failed: {e}")
    except Exception as e:
        print(f"Unexpected error during smoke tests: {e}")
