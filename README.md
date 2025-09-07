# Add-Cart-Item
#Add to Cart - Vanilla JS & Bootstrap Project
This is a simple "Add to Cart" web app built using vanilla JavaScript, Bootstrap 5, and custom CSS. Users can input product names and dynamically add them to a list styled as a cart.
#Features
Responsive layout using Bootstrap 5

Custom styling via external CSS

Add items to cart dynamically

Realtime UI updates with no page refresh

Styled list items using list-group-item

##  Technologies Used

| Technology            | Purpose |
|------------------------|---------|
| **HTML5**              | Page structure |
| **CSS3**               | Custom styling for layout and components |
| **Vanilla JavaScript** | Dynamic DOM creation and user interaction |
| **Bootstrap 5.3.7**    | Responsive design and components (buttons, lists, flexbox) |

##How It Works

The layout is created dynamically using JavaScript – nothing is hardcoded in HTML.

A container div (divcon) holds the entire content with a heading, input field, button, and list section.

When the user types a product name and clicks "Add":

The input value is captured.

A new <li> element is created with Bootstrap and custom styling.

The item is added to the DOM (inside the main container).

Each list item uses the classes:

list-group-item: Gives it Bootstrap's default list styling.

list: Custom class that sets font, size, and color.





