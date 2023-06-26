import Image_Gallery from '../components/image gallery.js'


const itemDataDemo = [
    require('../assests/photos/seniors/IMG_0139 copy.png'),
    require('../assests/photos/seniors/IMG_0310 copy.png'),
    require('../assests/photos/headshots/mat8960 copy thumbnail.png'),
    require('../assests/photos/headshots/IMG_0306 copy.png'),
    require('../assests/photos/headshots/IMG_8431 copy thumbnail.png'),
    require('../assests/photos/headshots/mat8960 copy.png')
]

const Seniors = () => {
    return(
        <div>
            <h1>SENIORS</h1>
            <Image_Gallery itemData={ itemDataDemo } />
        </div>
    );
}

export default Seniors;