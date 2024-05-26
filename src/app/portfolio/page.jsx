const { default: Link } = require("next/link");

function Portfolio(){
    return (
        <>
        <h1>TES</h1>
        <Link href={'/'}>Home</Link>
        </>
    )
}

export default Portfolio