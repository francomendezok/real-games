import nude from '../api/nude.json';
import { useState } from 'react';
import ProductArrows from '../home/ProductArrows';


function handleMouseEnter (product, image, setImage, newImage, setShowSize, setHideInfo, setShowArrows) {
    if (image === nude[0].images[0].src) {
        setImage(product.images[newImage].src)
    }
    setShowSize(true)
    setHideInfo(true)
    setShowArrows(true)
}
function handleMouseLeave (product, image, setImage, newImage, setShowSize, setHideInfo, setShowArrows) {
    if (image === nude[0].images[1].src) {
        setImage(product.images[newImage].src)
    }
    setShowSize(false)
    setHideInfo(false)
    setShowArrows(false)    
}



export default function Tshirts () {
    const [showArrows, setShowArrows] = useState(false)
    const [position, setPosition] = useState(0)
    const [image, setImage] = useState(nude[0].images[0].src)
    const [showSizes, setShowSize] = useState(false)
    const [hideInfo, setHideInfo] = useState(false)

    return (
        <div className='images-container'>

            <div onMouseEnter={() => handleMouseEnter(nude[0], image, setImage, 1, setShowSize, setHideInfo, setShowArrows)} onMouseLeave={() => handleMouseLeave(nude[0], image, setImage, 0, setShowSize, setHideInfo, setShowArrows)} className='product-home-box'>
                <p className='new-in'>NEW IN</p>
                <img className='product-home-img cursor-pointer' src={image} alt="" />
                {showArrows ? <ProductArrows position={position} setPosition={setPosition} setImage={setImage} product={nude[0]} /> : ''}
                <div className={hideInfo ? 'hidden' : 'product-info'}>
                    <p className='product-title'>{nude[0].title}</p>
                    <p className='product-price'>€ {nude[0].variants[0].price}</p>
                    <div style={{backgroundColor: nude[0].options[1].values[0]}} className='clothes-colors'> </div>
                </div>
                <div className={showSizes ? "product-sizes-container" : "hidden"}>
                    <p className={nude[0].options[0].values[0] == null ? "crossed" : ''}>XS</p>
                    <p className={nude[0].options[0].values[1] == null ? "crossed" : ''}>S</p>
                    <p className={nude[0].options[0].values[2] == null ? "crossed" : ''}>M</p>
                    <p className={nude[0].options[0].values[3] == null ? "crossed" : ''}>L</p>
                    <p className={nude[0].options[0].values[4] == null ? "crossed" : ''}>XL</p>
                    <p className={nude[0].options[0].values[5] == null ? "crossed" : ''} >XXL</p>
                </div>
            </div>
            <div className='product-home-box'>
                <p className='new-in'>NEW IN</p>
                <img className='product-home-img cursor-pointer' src={nude[1].images[0].src} alt="" />
                <img className='product-home-img hidden cursor-pointer' src={nude[1].images[2].src} alt="" />
                <div className='product-info'>
                    <p className='product-title'>{nude[1].title}</p>
                    <p className='product-price'>€ {nude[1].variants[0].price}</p>
                    <p className='product-sizes'>{nude[1].options[0].values}</p> 
                    <div style={{backgroundColor: nude[1].options[1].values[0]}} className='clothes-colors'> </div>
                </div>
            </div>
            <div className='product-home-box'>
                <p className='new-in'>NEW IN</p>
                <img className='product-home-img cursor-pointer' src={nude[2].images[0].src} alt="" />
                <img className='product-home-img hidden cursor-pointer' src={nude[0].images[2].src} alt="" />
                <div className='product-info'>
                    <p className='product-title'>{nude[2].title}</p>
                    <p className='product-price'>€ {nude[2].variants[0].price}</p>
                    <p className='product-sizes'>{nude[2].options[0].values}</p> 
                    <div style={{backgroundColor: nude[2].options[1].values[0]}} className='clothes-colors'> </div>
                </div>
            </div>
            <div className='product-home-box'>
                <p className='new-in'>NEW IN</p>
                <img className='product-home-img cursor-pointer' src={nude[3].images[0].src} alt="" />
                <img className='product-home-img hidden cursor-pointer' src={nude[0].images[2].src} alt="" />
                <div className='product-info'>
                    <p className='product-title'>{nude[3].title}</p>
                    <p className='product-price'>€ {nude[3].variants[0].price}</p>
                    <p className='product-sizes'>{nude[3].options[0].values}</p> 
                    <div style={{backgroundColor: 'lightblue'}} className='clothes-colors'> </div>
                </div>
            </div>
            <div className='product-home-box'>
                <p className='new-in'>NEW IN</p>
                <img className='product-home-img cursor-pointer' src={nude[4].images[0].src} alt="" />
                <img className='product-home-img hidden cursor-pointer' src={nude[4].images[2].src} alt="" />
                <div className='product-info'>
                    <p className='product-title'>{nude[4].title}</p>
                    <p className='product-price'>€ {nude[4].variants[0].price}</p>
                    <p className='product-sizes'>{nude[4].options[0].values}</p> 
                    <div style={{backgroundColor: nude[4].options[1].values[0]}} className='clothes-colors'> </div>
                </div>
            </div>
            <div className='product-home-box'>
                <p className='new-in'>NEW IN</p>
                <img className='product-home-img cursor-pointer' src={nude[5].images[0].src} alt="" />
                <img className='product-home-img hidden cursor-pointer' src={nude[5].images[2].src} alt="" />
                <div className='product-info'>
                    <p className='product-title'>{nude[5].title}</p>
                    <p className='product-price'>€ {nude[5].variants[0].price}</p>
                    <p className='product-sizes'>{nude[5].options[0].values}</p> 
                    <div style={{backgroundColor: nude[5].options[1].values[0]}} className='clothes-colors'> </div>
                </div>
            </div>
            <div className='product-home-box'>
                <p className='new-in'>NEW IN</p>
                <img className='product-home-img cursor-pointer' src={nude[9].images[0].src} alt="" />
                <img className='product-home-img hidden cursor-pointer' src={nude[9].images[2].src} alt="" />
                <div className='product-info'>
                    <p className='product-title'>{nude[9].title}</p>
                    <p className='product-price'>€ {nude[9].variants[0].price}</p>
                    <p className='product-sizes'>{nude[9].options[0].values}</p> 
                    <div style={{backgroundColor: "#000080"}} className='clothes-colors'> </div>
                </div>
            </div>
            <div className='product-home-box'>
                <p className='new-in'>NEW IN</p>
                <img className='product-home-img cursor-pointer' src={nude[10].images[0].src} alt="" />
                <img className='product-home-img hidden cursor-pointer' src={nude[10].images[2].src} alt="" />
                <div className='product-info'>
                    <p className='product-title'>{nude[10].title}</p>
                    <p className='product-price'>€ {nude[10].variants[0].price}</p>
                    <p className='product-sizes'>{nude[10].options[0].values}</p> 
                    <div style={{backgroundColor: nude[10].options[1].values[0]}} className='clothes-colors'> </div>
                </div>
            </div>
            <div className='product-home-box'>
                <p className='new-in'>NEW IN</p>
                <img className='product-home-img cursor-pointer' src={nude[11].images[0].src} alt="" />
                <img className='product-home-img hidden cursor-pointer' src={nude[11].images[2].src} alt="" />
                <div className='product-info'>
                    <p className='product-title'>{nude[11].title}</p>
                    <p className='product-price'>€ {nude[11].variants[0].price}</p>
                    <p className='product-sizes'>{nude[11].options[0].values}</p> 
                    <div style={{backgroundColor: nude[11].options[1].values[0]}} className='clothes-colors'> </div>
                </div>
            </div>
            <div className='product-home-box'>
                <p className='new-in'>NEW IN</p>
                <img className='product-home-img cursor-pointer' src={nude[12].images[0].src} alt="" />
                <img className='product-home-img hidden cursor-pointer' src={nude[12].images[2].src} alt="" />
                <div className='product-info'>
                    <p className='product-title'>{nude[12].title}</p>
                    <p className='product-price'>€ {nude[12].variants[0].price}</p>
                    <p className='product-sizes'>{nude[12].options[0].values}</p> 
                    <div style={{backgroundColor: nude[12].options[1].values[0]}} className='clothes-colors'> </div>
                </div>
            </div>
            <div className='product-home-box'>
                <p className='new-in'>NEW IN</p>
                <img className='product-home-img cursor-pointer' src={nude[13].images[0].src} alt="" />
                <img className='product-home-img hidden cursor-pointer' src={nude[13].images[2].src} alt="" />
                <div className='product-info'>
                    <p className='product-title'>{nude[13].title}</p>
                    <p className='product-price'>€ {nude[13].variants[0].price}</p>
                    <p className='product-sizes'>{nude[13].options[0].values}</p> 
                    <div style={{backgroundColor: "#89CFF0"}} className='clothes-colors'> </div>
                </div>
            </div>
            <div className='product-home-box'>
                <p className='new-in'>NEW IN</p>
                <img className='product-home-img cursor-pointer' src={nude[14].images[0].src} alt="" />
                <img className='product-home-img hidden cursor-pointer' src={nude[14].images[2].src} alt="" />
                <div className='product-info'>
                    <p className='product-title'>{nude[14].title}</p>
                    <p className='product-price'>€ {nude[14].variants[0].price}</p>
                    <p className='product-sizes'>{nude[14].options[0].values}</p> 
                    <div style={{backgroundColor: "#B2BEB5"}} className='clothes-colors'> </div>
                </div>
            </div>
            <div className='product-home-box'>
                <p className='new-in'>NEW IN</p>
                <img className='product-home-img cursor-pointer' src={nude[15].images[0].src} alt="" />
                <img className='product-home-img hidden cursor-pointer' src={nude[15].images[2].src} alt="" />
                <div className='product-info'>
                    <p className='product-title'>{nude[15].title}</p>
                    <p className='product-price'>€ {nude[15].variants[0].price}</p>
                    <p className='product-sizes'>{nude[15].options[0].values}</p> 
                    <div style={{backgroundColor: nude[15].options[1].values[0]}} className='clothes-colors'> </div>
                </div>
            </div>
            <div className='product-home-box'>
                <p className='new-in'>NEW IN</p>
                <img className='product-home-img cursor-pointer' src={nude[16].images[0].src} alt="" />
                <img className='product-home-img hidden cursor-pointer' src={nude[16].images[2].src} alt="" />
                <div className='product-info'>
                    <p className='product-title'>{nude[16].title}</p>
                    <p className='product-price'>€ {nude[16].variants[0].price}</p>
                    <p className='product-sizes'>{nude[16].options[0].values}</p> 
                    <div style={{backgroundColor: "#B2BEB5"}} className='clothes-colors'> </div>
                </div>
            </div>
            <div className='product-home-box'>
                <p className='new-in'>NEW IN</p>
                <img className='product-home-img cursor-pointer' src={nude[20].images[0].src} alt="" />
                <img className='product-home-img hidden cursor-pointer' src={nude[20].images[2].src} alt="" />
                <div className='product-info'>
                    <p className='product-title'>{nude[20].title}</p>
                    <p className='product-price'>€ {nude[20].variants[0].price}</p>
                    <p className='product-sizes'>{nude[20].options[0].values}</p> 
                    <div style={{backgroundColor: "#89CFF0"}} className='clothes-colors'> </div>
                </div>
            </div>
            <div className='product-home-box'>
                <p className='new-in'>NEW IN</p>
                <img className='product-home-img cursor-pointer' src={nude[30].images[0].src} alt="" />
                <img className='product-home-img hidden cursor-pointer' src={nude[30].images[2].src} alt="" />
                <div className='product-info'>
                    <p className='product-title'>{nude[30].title}</p>
                    <p className='product-price'>€ {nude[30].variants[0].price}</p>
                    <p className='product-sizes'>{nude[30].options[0].values}</p> 
                    <div style={{backgroundColor: "#B2BEB5"}} className='clothes-colors'> </div>
                </div>
            </div>
        </div>
    )
}

