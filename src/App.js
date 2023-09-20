import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import DogApp from './DogApp';
import styles from './App.css';
import Favorites from './favorites';

function App() {
    return (
        <Router>
            <div className={styles.appContainer}>
                <header>
                    <nav className={styles.navContainer}>
                        <ul>
                            <li>
                            <Link to="/" activeClassName={styles.activeLink}>Home</Link>
                            </li>
                            <li>
                                <Link to="/favorites" activeClassName={styles.activeLink}>Favorites</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main>
                    <Routes>
                        <Route path="/" element={<DogApp />} />
                        <Route path="/favorites" element={<Favorites />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
