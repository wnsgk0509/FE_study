import '../pages/HomePage.css';

function SiteSpecText({data}){

    return(
        <div className='Site-Spec-text'>
            <p style={{fontSize:'40px'}}>{data[1]}</p>
            <p>{data[0]}</p>
        </div>
    )
}
export default SiteSpecText;