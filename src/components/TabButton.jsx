const TabButton = ({children, onSelect, isSelected})=>{
    return(
        <li><button onClick={onSelect} className={isSelected==true?'active': 0}>{children}</button></li>
    );
}
export default TabButton;