
import './styling/app.css';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import { useSelector } from "react-redux";
import Blogs from './Components/Blogs';
import { selectSignedIn } from "./features/userSlice";
function App () {
  const isSignedIn = useSelector(selectSignedIn)

  return (
    <div className="App">
   
     <Navbar />
     <Homepage /> 
     {isSignedIn && <Blogs />}
        
    </div>
  );
  
}

export default App;

// npm install @reduxjs/toolkit
// npm install react-redux
// npm install react-google-login