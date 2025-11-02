import './style.css';

const MyComponent = () => {
    const number = 5;
    return (
        <>
            <div className="child"
                style={
                    { borderRadius: "10px" }
                }
            >test component {number} </div>
        </>
    );
}

export default MyComponent;