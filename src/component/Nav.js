// import '../Header.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Nav = () => {
    return (<>
        <div className="activity ">
            <div className="span1 w-25  z-3 " > Raghav </div>
            <nav className='nav-wrapper'>
                <AnchorLink className='a' href='#home'>Home</AnchorLink>
                <AnchorLink className='a' href='#education'>Education</AnchorLink>
                <AnchorLink className='a' href='#project'>Project</AnchorLink>
                <AnchorLink className='a' href='#tools'>Tools</AnchorLink>
                <AnchorLink className='a' href='#resume'>Resume</AnchorLink>
                <AnchorLink className='a' href='#content'>Contact</AnchorLink>
                <span> </span>
            </nav>
        </div >
    </>

    )
};

export default Nav;