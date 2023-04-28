const TextHeader = ({text}) => {
    return(
        <div className="txt-header flex items-center justify-center mb-12 text-5xl">
          <h3 className="font-medium">{text}</h3>
        </div>
    );
}

export default TextHeader;