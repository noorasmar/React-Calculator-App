import './style.css'

function ScreenData({data, type}) {
    return ( 
        <div className={`screen ${type}`}>
            {data}
        </div>
    );
}

export default ScreenData;