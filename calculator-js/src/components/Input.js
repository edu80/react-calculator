import "./Input.css"

const Input = ({text, result}) => {
    return(
      <div className="input-wrapper">
        <div className="result">
            </div> <h1> {result}</h1>
          
          <div className="text">
            <h1>{text}</h1>
          </div>
        </div>  
    );
}
export default Input;
