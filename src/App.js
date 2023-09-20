import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import DogApp from './DogApp';
import AddBreed from './favorites';
import styles from './App.css';

function App() {
    return (
        <Router>
            <div className={styles.appContainer}>
                <header>
                    <nav className={styles.navContainer}>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/favorites">Favorites</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main>
                    <Routes>
                        <Route path="/" element={<DogApp />} />
                        <Route path="/add-breed" element={<AddBreed />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
