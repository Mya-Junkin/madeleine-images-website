const About = () => {
    return(
        <div>
            <h1>ABOUT</h1>
            <div style={{ display: 'flex', alignContent: 'center'}}>
                <img
                    src={require('../assests/photos/madeleine profile.jpg')}
                    alt='madeleine profile picture'
                    height='300vh'
                    style={{margin: '25px'}}
                />
                <p>
                    Madeleine Junkin grew up in Queens, New York, and has long harbored a passion for photography.
                    She now lives with her husband and four daughters in Martinsburg, West Virginia, and still pursues
                    her passion by helping others capture the important moments in their lives.
                </p>
            </div>
        </div>
    );
}

export default About;