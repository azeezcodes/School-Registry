
# School-Registry

This Next.js application allows the registration of students and teachers. The application uses mock data and Nextjs API routes to handle data operations.

## Features

- Register students with validation:
  - National ID (required)
  - Name (required)
  - Surname (required)
  - Date of Birth (required, age must be at most 22 handled at the input tag)
  - Student Number (required)

- Register teachers with validation:
  - National ID (required)
  - Title (required, can be either [Mr, Mrs, Miss, Dr, Prof])
  - Name (required)
  - Surname (required)
  - Date of Birth (required, age must be at least 21 handled at the input tag)
  - Teacher Number (required)
  - Salary (optional)

- View the list of registered students and teachers.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- MaterialUI Table
- React Hook Form
- Tanstack React Query: for state management and fetching
- Jest

## Getting Started

m (>=6.x) or yarn (>=1.22.x)

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:azeezcodes/School-Registry.git
   cd School-Registry
   yarn / npm install

### User Interface

1. A welocme page with two buttons, teacher and student list button at the right leading to the designated page list
2. On each page a table containing the list of students or teacher is displayed with a button at the top right to create the modal for filling the form

