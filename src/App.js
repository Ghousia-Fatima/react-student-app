import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import MyComponent from './components/MyComponent';

let students = ["Fatima", "Pratiksha", "Krishna", "Vinod", "Santosh", "Chandrashekhar"]

function App() {
  
  function reverseNames(){
    students.reverse()
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
  }

  function promoteName(name){

    students = [name, ...students.filter((stu)=> stu !==name)]
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
  }


  return (
    <div className="container">

      <table className="table table-hover table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Characters</th>
      <th scope="col" colSpan={2} className='text-center'>Actions</th>
    </tr>
  </thead>
  <tbody>
  {
    students.map((student, i)=>(
      <tr key={i}>
        <MyComponent name={student} index={i} 
        callbackReverse={reverseNames}
        callbackpromote={promoteName}
        />
      </tr>
    ))
  }
  </tbody>
  </table>
  {/* <button className="btn btn-primary" onClick={btnClick}>Click Me</button> */}
  </div>
  );
}

export default App;
