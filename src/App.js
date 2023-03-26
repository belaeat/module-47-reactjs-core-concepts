import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [
  {name: 'Dr. Mahfuz', job: 'singer'},
  {name: 'Eva Rahman', job: 'singer2'},
  {name: 'Agun', job: 'Shopno'},
  {name: 'Shuvro', job: 'Pathor'}
]
const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  const nayoks = ['Rubel', 'BappaDa', 'Kuber', 'Jashim', 'Salman Shah', 'Riyaz', 'Anwar'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}

      {
        singers.map(singer => <Person name ={singer.name}></Person>)
      }

{/* 
      <Person name={nayoks[0]} nayika='Moushumi'></Person>
      <Person name={nayoks[1]} nayika='Cheka'></Person>
      <Person name={nayoks[2]} nayika='Kopila'></Person> */}
      <h5>New Component. YAY!</h5>
      <p id='totocompany'>Rock mama React mama.</p>
      <Friends movie='Singham' phone='01777'></Friends>
      <Friends phone='01999'></Friends>
    </div>
  );
}

function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  );
}


function Friends(props) {
  console.log(props);
  return (
    <div className='container'>
      <h3>Movie: {props.movie}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
