# SQL-Editor
Atlan Front-End-Engineer-Task

# A basic overview of my project.

I have developed a web application where the users can run some predefined SQL Queries and they can see the outputs in the screen. 
The Users can also see the resultant data from the navigatiob menu provided in the API by just clicking on any of the Data the user wants to see.
the Users also have an advantage of searching for any particular data in the particular Database.
The Pagination feature is also implemented in the API.
The Users can also download any of the Databases just by clicking on any partiuclar format (CSV/JSON) depends on the user.
The Users can also see the runtime of the queries (in miliseconds).

# Some of the Pre-Definded SQL queries are:

## select * from customers
## select * from categories
## select * from employee_territories
## select * from order_details
## select * from orders
## select * from products
## select * from regions
## select * from shippers
## select * from suppliers
## select * from territories

# The JavaScript framework I chose, along with any major plugins or packages I have installed

The Javascript I have chosen is TailWindCSS,ReactJS and MUI-A React Component 
The major package i have installed to bring this task in working state is mainly material-ui/core packages.

# The page load time of your application, and how you measured this time.

First Contentful Paint marks the time at which the first text or image is painted
Time to interactive is the amount of time it takes for the page to become fully interactive.
Speed Index shows how quickly the contents of a page are visibly populated.
Total Blocking Time is the sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds.
Largest Contentful Paint marks the time at which the largest text or image is painted.
Cumulative Layout Shift measures the movement of visible elements within the viewport.

I calculated the performance and load time of this website using these two tools Lighthouse Chrome DevTools

Mobile Reload Time:

![Mobile Reload Time](https://user-images.githubusercontent.com/78148873/170808688-bdca8dec-fedb-42ae-a754-004d074d61a9.png)


Desktop Reload Time:

Page Load time of this website in desktop is in the range of 0.6 s to 0.7s.

![Desktop Reload Time](https://user-images.githubusercontent.com/78148873/170808736-bf151a06-9414-47a5-be88-dd5c3ed47f87.png)

# Any optimisations did by me to decrease the load time or increase performance.

Used code-splitting with React.Lazy() and Suspense to lazy load the components and split javaScript into multiple chunks using Dynamic runtime Imports for faster page load.
Used React.Memo() to optimize the render performance of functional components.
Used PurgeCSS to tree-shake unused styles and optimize my final build size.
Used Lighthouse DevTools Extension to find the performance issues and fix them using their actionable suggestion.
Used vercel to deploy this website to leverage its Vercel Edge Network compression that results in the better performance.

