import git from '../image/git.png'
import link from '../image/linkedin.png'
const Footer = () => {
    return <>

        <div className=" footer container-fluid text-center " id="content">
            <div className="row pt-5">
                <div className='col-12'>
                    <h1 className='text-center'>
                        Contact Me
                    </h1>
                </div>
                <div className='col-12'>
                    <p className="text-center"> raghav.bhardwaj@gmail.com | +91 9568339179</p>
                </div>
                <div className='col-12'>
                    <a href='https://github.com/bhardwaj2612' rel="noreferrer" target='_blank'><img src={git} alt='Img' style={{ width: '3rem' }} /> </a>
                    <a href='https://linkedin.com/in/raghav-bhardwaj-aa5071224' rel="noreferrer" target='_blank'>
                        <img src={link} alt='Img' style={{ width: '3rem' }} className='m-3' /></a>
                </div>
            </div>

        </div>
    </>
}

export default Footer