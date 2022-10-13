import './skill.css';

import backends from './backend';
import frontends from './frontend';

const Skill = () => {
    return (
        <section className="skill container" id='skills'>
            <h4 className='text-warning text-center mt-5'>My Skills</h4>
            <div className='skills d-md-flex justify-content-md-around'>

                <div className='frontend col-11 mx-auto col-md-5 rounded'>
                    <p className='my-md-4 text-center text-white fw-bold'>Frontend Development</p>

                    {
                        frontends.map((frontend) => (
                            <div className='progress my-2' key={frontend.id}>
                                <div className={`progress-bar progress-bar-striped progress-bar-animated ${frontend.color}`} style={{ width: `${frontend.width}` }}>{frontend.name}</div>
                            </div>
                        ))
                    }

                </div>


                <div className='backend col-11 mx-auto col-md-5 rounded'>
                    <p className='my-md-4 text-center text-white fw-bold'>Backend Development</p>

                    {
                        backends.map((backend) => (
                            <div className='progress my-2' key={backend.id}>
                                <div className={`progress-bar progress-bar-striped progress-bar-animated ${backend.color}`} style={{ width: `${backend.width}` }}>{backend.name}</div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Skill;