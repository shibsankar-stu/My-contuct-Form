function Mybtn({btnText, classsubmit, onClick}){
    return(<>
    <button id="btn" className={classsubmit} onClick={onClick}  >{btnText}</button>
    </>);
}
export default Mybtn;