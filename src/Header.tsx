type HeaderProps = {
    fullName: string;
    profession: string;
}

function Header(props: HeaderProps) {
    return (
        < header className='header' >
            <h1>{props.fullName}</h1>
            <p>{props.profession}</p>
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header >
    )
}

export default Header;
