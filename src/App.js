import './App.css';
import data from './alco.json'

function App() {
    return (
        <div className="App">
            {data.alcohol.map(item => {
                return(
                    <div key={item.id}>
                        <img src={item.img} alt=""/>
                        <p>{item.name}</p>
                    </div>

                )
            })}
            <div>{data.alcohol.length}</div>
        </div>
    );
}

export default App;
