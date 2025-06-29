# Test Demo React App

This is a simple React application demonstrating basic component functionality and unit testing using Jest and React Testing Library.

## Features

- Simple counter component with increment and decrement buttons  
- Prevents counter from going below zero  
- NameForm component for entering and submitting a name  
- Displays a greeting and clears input after submission  
- Interactive UI updates on button clicks and form submission  
- Unit tests covering rendering, user interactions, and edge cases  


## Getting Started

### Prerequisites

- Node.js and npm installed on your system  

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/NazaninHashemian/test-demo.git
cd test-demo
npm install
```

### Running the App

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

### Running Tests

This project includes unit tests written with Jest and React Testing Library to ensure component reliability and expected behavior.

Run the test suite with:

```bash
npm test
```

The tests cover:

Rendering of components and initial state validation

Increment and decrement button functionality

Boundary condition ensuring counter does not go below zero

Controlled input for name form

Form submission and greeting display

Input clearing after submit


Explore the test files in the `src` folder (e.g., `Counter.test.jsx` , `NameForm.test.jsx`) to see detailed test cases.

## Technologies Used

- React  
- JavaScript (ES6+)  
- Jest  
- React Testing Library  

## License

MIT License
