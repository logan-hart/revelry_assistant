
export default function Step4({promoter, setPromoter, images, setImages, promotionalLinks, setPromotionalLinks, media, setMedia}) {

  return (
    <div>
      <div>
                {/* <div className="create-category">
                    <div className="red-text medium-text create-subheader"> / PROMOTERS</div>
                    <div>
                        <textarea className="full-input" onChange={(e)=> setPromoter(e.target.value) } value={promoter}></textarea>
                        <div className='form-label errors'>possible errors {promoter}</div>
                    </div>
                </div> */}
                <div className="create-category">
                    <div className="red-text medium-text create-subheader"> / IMAGES</div>
                    <div>                    
                        <div className='form-label'> Flyer Image</div>
                        <input className='form-input full-input' onChange={(e)=> setImages(e.target.value) } value={images}></input>
                        <div className='form-label errors'>possible errors {images}</div>
                        {/* <div className='form-label'> Flyer back url</div>
                        <input className='form-input full-input' onChange={(e)=> setImages(e.target.value)} value={images}></input>
                        <div className='form-label errors'>possible errors {images}</div> */}
                    </div>
                </div>
                <div className="create-category">
                    <div className="red-text medium-text create-subheader"> / PROMOTIONAL LINKS</div>
                    <div className="step-divider">      
                        <div className="half-input">
                            <div className='form-label'>Website name</div>
                            <input className='form-input full-input' onChange={(e)=> setPromotionalLinks(e.target.value) } value={promotionalLinks}></input>
                            <div className='form-label errors'>possible errors {promotionalLinks}</div>
                        </div>  
                        <div className="half-input">
                            <div className='form-label'>Website URL</div>
                            <input className='form-input full-input' onChange={(e)=> setPromotionalLinks(e.target.value) } value={promotionalLinks}></input>
                            <div className='form-label errors'>possible errors {promotionalLinks}</div>
                        </div>            
                    </div>
                </div>
                {/* <div>
                    <div className="red-text medium-text create-subheader"> / Media</div>
                    <div>
                        <div className='form-label'>Add SoundCloud or YouTube media links to embed them on your event page.</div>
                        <div className='form-label'>Media Links</div>
                        <input className='form-input full-input' onChange={(e)=> setMedia(e.target.value) } value={media}></input>
                        <div className='form-label errors'>possible errors {media}</div>
                    </div>
                </div> */}
            </div>
    </div>
  )
}