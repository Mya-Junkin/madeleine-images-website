import Image_Carousel from "../components/image carousel"
import Testimonial from "../components/testimonail"
import testimonialImg1 from "../assests/photos/athletics/addysonfelty_8 thumbnail.png"
import testimonialImg2 from "../assests/photos/headshots/mat8960 copy thumbnail.png"
import testimonialImg3 from "../assests/photos/seniors/IMG_7739 copy thumbnail.png"

const Home = () => {
    return(
        <div>
            <Image_Carousel />
            <h1>Welcome</h1>
            <p style={{width: '70vw'}}>
                Based in Martinsburg, West Virginia, Madeline Images is dedicated to capturing your special
                moments. lskjdfwoj s;dlkfj woja wjok jklsjdl owkdf klsanfdoi owjdko fjow wokjd fowkjdfoawj fo
                knwdfjhnk wjkfh  wpodhkf awp wid hf whf sipfhwijdh fijwh i wfj wijfh iwjdhf wijh ij hdfhal
                kjjiwdfkjh klwjhfkjhwsdjkfnkwj shflwkjehf  jsdfi wjdfhis jdfhdiwh fisjdfhwi fsijdfhiho
                widhfiwp wifhipwafbhjksdbi hpfiwjh iwjdhf ijhxcihvpijwf wjkbfolui whjfpiowd .
            </p>
            <Testimonial
                title="Great Service!"
                message="Madeleine was super friendly and professional the whole time. Loved every single photo she took! Would hire again."
                name="Joe Shmo"
                org="Dumb High School"
                imageEx={ testimonialImg1 }
            />
            <Testimonial
                title="New Favorite"
                message="Madeleine was super friendly and professional the whole time. Loved every single photo she took! Would hire again."
                name="Sharon Dodoo"
                imageEx={ testimonialImg2 }
            />
            <Testimonial
                title="Amazing Experience"
                message="Madeleine was super friendly and professional the whole time. Loved every single photo she took! Would hire again."
                name="Minnie Mouse"
                org="Disney"
                imageEx={ testimonialImg3 }
            />
        </div>
    );
}

export default Home;