import {Link } from 'react-router-dom';




function Catalog(){
    return(
        <div>
        <nav style={{ padding: '10px', backgroundColor: '#eee', marginBottom: '20px' }}>
            <Link to="/catalog/catalogDetail"><button>카탈로그 상세페이지</button></Link>
            </nav>

            


        </div>
    )
}

export default Catalog;