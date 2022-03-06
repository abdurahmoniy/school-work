import React from 'react'

const Header = () => {
    return (
        <div className='container'>
            <div className='main'>
                <div className='topbar'>
                    <div className='toggle'>
                        <h2>FootClub</h2>
                    </div>
                    <div className='search'>
                        <label>
                            <input className='input' type='search' placeholder='Search club' />
                            <h4>O</h4>
                        </label>
                    </div>
                    <div className='login'>
                        <button type='button' className='btn'>Log IN</button>
                    </div>
                    <div className='user'>
                        <h4>O</h4>
                    </div>
                </div>
                <div className='cardBox'>
                    <div className='card'>
                        <div>
                            <div className='cardName'>APL</div>
                        </div>
                        <div className='iconBox'>
                            <img src='./img/apl.png' />
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <div className='cardName'>La Liga</div>
                        </div>
                        <div className='iconBox'>
                            <img src='./img/laliga.png' />
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <div className='cardName'>Serie A</div>
                        </div>
                        <div className='iconBox'>
                            <img src='./img/seriaa.png' />
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <div className='cardName'>Bundesliga</div>
                        </div>
                        <div className='iconBox'>
                            <img src='./img/bndsliga.png' />
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <div className='cardName'>League 1</div>
                        </div>
                        <div className='iconBox'>
                            <img src='./img/liga1.png' />
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <div className='cardName'>Top Clubs</div>
                        </div>
                        <div className='iconBox'>
                            <img src='./img/liga1.png' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header