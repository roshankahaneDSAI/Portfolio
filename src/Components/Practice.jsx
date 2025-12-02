import { useState } from "react";


// export function Practice(){

//     const fruits = ['Manago', 'Banana', 'PinApple', 'Grapes'];

//     const [filterFruits, setFilterFruits] = useState([]);

//     const handleChange = (e) => {

//         const searchVal = e.target.value;

//         setFilterFruits(fruits.filter(fruit => fruit.toLowerCase().includes(searchVal.toLowerCase())));
//     }

//     console.log(filterFruits);
    
//     return (
//         <>
//         <input 
//             type="text"
//             placeholder="Search for fruits"
//             onChange={handleChange}
//         />

//         <ul>
//             {filterFruits.map((fruit, index) => (
//                 <li key={index}>{fruit}</li>
                
//             ))}
//         </ul>

        
//         </>
//     )
       
        
// }

// filter user list based on name and email.

// export function Practice(){

// const users = [
//   { id: 1, name: "Sahil Sonawane", email: "sahil@test.com" },
//   { id: 2, name: "Rahul Patil", email: "rahul@test.com" },
//   { id: 3, name: "Sneha More", email: "sneha@test.com" },
//   { id: 4, name: "Amit Sharma", email: "amit@test.com" }
// ];

// const [filterUser, setFilterUser] = useState(users);

// const handleChange = (e) => {
//     const value = e.target.value;

//     const filtered = users.filter(user => 

//         user.name.toLowerCase().includes(value.toLowerCase()) || 
//         user.email.toLowerCase().includes(value.toLowerCase())
//     );

//     setFilterUser(filtered);
   
// }




// return (
//     <>
//         <h1>Display user list </h1>

//         <input 
//             type="text"
//             placeholder="Search by name or email"
//             onChange={handleChange}
        
//         />
//         <ul>
//             {
//             filterUser.map((user, index) => (
//                 <li key={index}>Name : {user.name} | Email : {user.email}</li>
//             ))
//         }
//         </ul>
        
//     </>
// )
// }


// filter search functionality as follows.
// export function Practice(){

//     const products = [
//   { id: 1, name: "iPhone 15", category: "Mobile", price: 70000 },
//   { id: 2, name: "Samsung Galaxy S23", category: "Mobile", price: 65000 },
//   { id: 3, name: "MacBook Air", category: "Laptop", price: 120000 },
//   { id: 4, name: "Dell XPS", category: "Laptop", price: 100000 },
//   { id: 5, name: "Sony Headphones", category: "Accessory", price: 15000 }
// ];

//     const [search, setSearch] = useState("");
//     const [category, setCategory] = useState('All');

//     const filterProducts = products.filter((product) => {

//         const matchName = product.name.toLowerCase().includes(search.toLowerCase());

//         const matchCategory = 
//             category === 'All'
//             ||
//             product.category === category;

//         return matchName && matchCategory;
//     });

//     return (
//         <>
//             <h1>Search functionality for products</h1>

//             <input 
//                 type="text"
//                 placeholder="Search by name "
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//             />

//             <select value={category} onChange={(e) => setCategory(e.target.value)}>
//                 <option>All</option>
//                 <option>Mobile</option>
//                 <option>Laptop</option>
//                 <option>Accessory</option>
//             </select>

//            {
//             filterProducts.length > 0 ? (
//                 filterProducts.map((product) => (
//                      <p key={product.id}>
//             Product: {product.name} | Category: {product.category} | Price:{" "}
//             {product.price}
//           </p>
//                 ))
//             ) : (
//              <p>No Products found</p>   
//             )
//            }
            
        
//         </>
//     )
// }



// // accordion / component functionality.....
// export function Practice(){

//     const faqs = [
//   { id: 1, question: "What is React?", answer: "React is a JavaScript library for building UIs." },
//   { id: 2, question: "What is useState?", answer: "useState is a React Hook that allows state management." },
//   { id: 3, question: "What is props?", answer: "Props are inputs to a React component." }
// ];


//     const [activeId, setActiveId] = useState(null);

//     const handeClick = (id) => {
//         setActiveId(activeId === id ? null : id);
//     }

//     return (

//        <>

//         <h1>Building the FAQ Section as follows.</h1>
//         <div>
//             {
//                 faqs.map((faq) => (
//                     <ul style={{margin:"10px"}}>
//                     <li key={faq.id}
//                             style={{padding:"5px", 
//                             border : "1px solid gray", 
//                             borderRadius : "2px", 
//                             cursor : "pointer"}}

//                             onClick={() => handeClick(faq.id)}
//                         >{faq.question}
//                     </li>
//                     {
//                         activeId === faq.id? (
//                             <span style={{padding:"10px"}}>{faq.answer}</span>
//                         ) : (
//                             <span></span>
//                         )
//                     }
                        
//                     </ul>
//                 ))
//             }
//         </div>
//        </>
//     )
// }


// Todo Application for Practice as follows.

// export function Practice(){


//     const [todos, setTodos] = useState([]);
//     const [input, setInput] = useState("");


//     useEffect(() => {
//         const savedTodos = JSON.parse(localStorage.getItem("Todo")) || [];
//         setTodos(savedTodos);
//     }, []);

//     const handleClick = () => {
//         const updatedTodos = [...todos, input];
//         setTodos(updatedTodos);
//         localStorage.setItem("Todo", JSON.stringify(updatedTodos));
//         setInput("");
//     }

  
//     const handleDelete = (indexTodel) => {
//         const updatedTodos = todos.filter((_, index) => index !== indexTodel);
//         setInput(updatedTodos);
//         localStorage.setItem("Todo", JSON.stringify(updatedTodos));
//     }

//     return (
//         <>

//             <h1>Creating the Todo Applications as follows</h1>
//             <input 
//                 type="text"
//                 placeholder="Add new todo"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//             />
//             <button
//                 onClick={handleClick}
//             >Add New Tasks</button>
            
//             {/* display the tasks dynamically as follow */}
//             <ul>
//                 {
//                     todos.map((todo, index) => (
//                         <li key={index}>{todo}{" "}
//                             <button onClick={() => handleDelete(index)}>Delete Todo</button>
//                         </li>
                        
//                     ))
                    
//                 }
//             </ul>

//         </>
//     )
// }


// Fetch data from an API using Fetch API.

// export function Practice(){


//     const [users, setUsers] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
        
//         const fetchData = async function(){
//             setIsLoading(true);
//             try{

//                 const res = await fetch("https://jsonplaceholder.typicode.com/users");
//                 const data = await res.json();
//                 setUsers(data);


//             }catch(error){
//                 console.log(error);
//             }finally{
//                 setIsLoading(false);
//             }

//         }

//         fetchData();

//     }, []);

//     return (
//         <>
//             <h1>Fetching data from an external source as follows</h1>
//             {

//                 isLoading ? (
//                     <span>Loading data......</span>
//                 ) : (
//                     users.map((user, index) => (
//                     <ul key={index}>
//                         <li key={user.id}>Name : {user.name} Email : {user.email}</li>
//                     </ul>
//                 ))
//                 )
                
//             }
//         </>
//     )
// }

// with the help of search functionality...
// export function Practice(){

//     const [users, setUsers] = useState([]);
//     const [search, setSearch] = useState('');
//     const [isLoading, setIsLoading] = useState(false);


//     // fetch the users from an api as follows.
//     useEffect(() => {
//         const fetchData = async function(){
//             setIsLoading(true);
//             try{
            
//                 const res = await fetch("https://jsonplaceholder.typicode.com/users");
//                 const data = await res.json();
//                 setUsers(data);

//             }catch(error){
//                 console.log(error);
//             }finally{
//                 setIsLoading(false);
//             }
//         }

//         fetchData();
//     }, []);


//     // now filtered the user based on name and passowrd....
//     const filterUser = users.filter((user) => 
//         user.name.toLowerCase().includes(search.toLowerCase()) || 
//         user.email.toLowerCase().includes(search.toLowerCase())
//     );

//     return (

//         <>

//             <h1>Filtering user by it's name and email</h1>
//             <input 
//                 type="text"
//                 placeholder="Search user by name or email"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//             />  
//             {
//                 isLoading ? (
//                     <p>Loading</p>
//                 ) : (
                    
//                         filterUser.length > 0 ? (
//                             <ul>
//                                 {filterUser.map((user) => (
//                                     <li key={user.id}>
//                                         Name : {user.name} | Username : {user.email}
//                                     </li>
//                                 ))}
//                             </ul>
//                         ) : (
//                             <p>No users</p>
//                         )
                    
//                 )
//             }
//         </>
//     )
// }




export function Practice(){

    const [count, setCount] = useState(0);
    const [minCount, setMinCount] = useState();


    const handleclick = (val) => {

        setCount(prev => prev + val);
        setMinCount(count / 4);
    }

    return (
        <>
            <h1>Rating System</h1>

            <button onClick = {() => handleclick(1)}>1</button>
            <button onClick = {() => handleclick(2)}>2</button>
            <button onClick = {() => handleclick(3)}>3</button>
            <button onClick = {() => handleclick(4)}>4</button>

            {/* displaying result */}

            <p>Rating : {minCount}</p>
        </>
    )
}





export default Practice;