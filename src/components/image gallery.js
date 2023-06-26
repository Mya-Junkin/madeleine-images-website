import { ImageList, ImageListItem } from '@mui/material'


const Image_Gallery = ({ itemData }) => {
    return (
        <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
                <ImageListItem key={item}>
                    <img
                        src={`${item}?w=248&fit=crop&auto=format`}
                        srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt='alt text'
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default Image_Gallery;