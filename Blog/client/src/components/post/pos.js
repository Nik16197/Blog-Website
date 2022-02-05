import React from 'react';
import "./pos.css"

function Pos() {
    return (
        <div className='pos'>
            <img className='posImage' src="https://github.githubassets.com/images/modules/site/home/hero-glow.svg" alt="" />
            <div className='posInfo'>
                <div className='posCats'>
                    <span className='posCat'>Music</span>
                    <span className='posCat'>Life</span>

                </div>

                <span className="posTitle">  Lorem ipsum dolor sit amet</span>
                <hr />

                <span className="posDate">1hr ago</span>

                <p className="posDesc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                    officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                    fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                    atque, exercitationem quibusdam, reiciendis odio laboriosam?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                    officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                    fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                    atque, exercitationem quibusdam, reiciendis odio laboriosam?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                    officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                    fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                    atque, exercitationem quibusdam, reiciendis odio laboriosam?
                </p>
            </div>
        </div>
    );
}

export default Pos;