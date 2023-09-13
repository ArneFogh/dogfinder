import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import DogApp from './DogApp';
import AddBreed from './AddBreed';

function App() {
    return (
        <Router>
            <div>
                {/* Navigation */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/add-breed">Add Breed</Link>
                        </li>
                    </ul>
                </nav>

                {/* Page Content */}
                <Routes>
                    <Route path="/" element={<DogApp />} />
                    <Route path="/add-breed" element={<AddBreed />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
