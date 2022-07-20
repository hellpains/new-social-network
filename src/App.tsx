import React from 'react';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className={'header'}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/VK_Compact_Logo.svg/768px-VK_Compact_Logo.svg.png" alt=""/>
                <span>ВКОНТАКТЕ</span>
            </header>
            <nav className={'nav'}>
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                    <a href="">Messages</a>
                </div>
                <div>
                    <a href="">News</a>
                </div>
                <div>
                    <a href="">Music</a>
                </div>
                <div>
                    <a href="">Settings</a>
                </div>
            </nav>
            <div className={'content'}>
                <div>
                    <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt=""/>
                    <div>
                        ava - description
                    </div>
                    <div>
                        My posts
                        <div>
                            New posts
                        </div>
                        <div>
                            <div>
                                post 1
                            </div>
                            <div>
                                post 2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
