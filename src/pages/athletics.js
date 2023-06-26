import Image_Gallery from '../components/image gallery.js'


const itemDataDemo = [
    require('../assests/photos/athletics/7433C.png'),
    require('../assests/photos/athletics/abbyhopkins_18_mat.png'),
    require('../assests/photos/athletics/addysonfelty_8.png'),
    require('../assests/photos/athletics/AlyssiaBalzhiser4.png'),
    require('../assests/photos/athletics/andydarby_8.png'),
    require('../assests/photos/athletics/IMG_7413 copy.png'),
    require('../assests/photos/athletics/isaacweiman_2_mat.png'),
    require('../assests/photos/athletics/Laylamccutchenmat.png'),
    require('../assests/photos/athletics/TreyCanby2.png'),
]

const Athletics = () => {
    return(
        <div>
            <h1>ATHLETICS</h1>
            <Image_Gallery itemData={itemDataDemo} />
        </div>
    );
}

export default Athletics;