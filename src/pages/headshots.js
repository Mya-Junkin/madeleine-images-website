import Image_Gallery from '../components/image gallery.js'

const itemDataDemo = [
    require('../assests/photos/headshots/IMG_0306 copy thumbnail.png'),
    require('../assests/photos/headshots/IMG_8431 copy.png'),
    require('../assests/photos/headshots/mat8960 copy thumbnail.png'),
    require('../assests/photos/headshots/IMG_0306 copy.png'),
    require('../assests/photos/headshots/IMG_8431 copy thumbnail.png'),
    require('../assests/photos/headshots/mat8960 copy.png')
]

const Headshots = () => {
    return(
        <div>
            <h1>HEADSHOTS</h1>
            <Image_Gallery itemData={ itemDataDemo } />
        </div>
    );
}

export default Headshots;