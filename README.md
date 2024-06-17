# NxtTrendz Application
## A Modern E-commerce Experience:

NxtTrendz is a React.js application inspired by leading platforms like Amazon and Flipkart. It offers a seamless e-commerce experience with tiered memberships for users to browse, search, and purchase products.

### Key Features:

*Secure Login:* Authenticate securely using valid credentials:

*Prime User:* Username: rahul, Password: rahul@2021

*Non-Prime User:* Username: raja, Password: raja@2021

### Tiered User Access:
Prime Users: Enjoy exclusive benefits like:

Access to a dedicated "Prime Deals" section featuring special offers and discounts.

Core functionalities of the platform, including:

* Browsing and searching for products.
* Viewing product details.
* Adding products to cart.

### Intuitive Home Page:
Provides a user-friendly starting point for product exploration.

### Advanced Product Search:
**Filter products by various criteria:**

* Category (Clothing, Electronics, etc.)
* Rating
* Specific keywords
* Live search updates as you type.
* Loading indicator while fetching data.
  
### Presents informative views based on results:

* List of relevant products for successful searches.
* Clear failure view with a retry button for troubleshooting data fetching issues.
* "No Products" view when no matches are found.
* Clicking a product listing navigates to the detailed Product Details page.
  
### Comprehensive Product Details:

* Provides a detailed overview of a specific product's information and offerings.
* Loading indicator while fetching data.
* Failure view with a retry button for data fetching errors.
* List of similar products for exploring related options.
* *Add to Cart Button:* Clicking this button adds the selected product to the user's cart. The total amount and number of items in the cart are updated in the cart view.
  
### Customizable Header:
* Clicking the website logo or "Home" link redirects to the Home page.
* Clicking the "Products" link directs users to the dedicated Products search page.
* Clicking the "Cart" link directs users to a dedicated page displaying the list of products they've added to their cart.
* Clicking the "Logout" button gracefully logs the user out and redirects them back to the Login page. (Implementation details omitted for security reasons).

## Technologies:

### Frontend:
* **React JS:** Manages the core user interface and application state.
* **JavaScript:** Provides interactivity and logic within the application.
* **CSS:** Styles the visual appearance of the app.
* **Routing:** React Router Handles navigation between different views based on user actions or URL changes.
* **REST API Calls:** Communicates with backend servers to fetch product data, manage cart items, handle user roles (Prime/Non-Prime), and handle requests using RESTful API principles.
* **JWT Token:** Ensures secure user authentication by storing credentials in a token for authorized API access.
* **Authorization:** Defines access control mechanisms for different user roles (Prime/Non-Prime) within the application.
* **Authentication:** Handles user login/logout processes, manages user session information, and retrieves user tier (Prime/Non-Prime) upon successful login.
