export default function Lists({myName}) {






    const myStyle = {
      border: "2px solid green",
      backgroundColor: "orange",
    };
    return (
      <div style={myStyle}>
        <h1>Lists in Header</h1>
        {myName}
        <p>Links coming soon</p>
      </div>
    );
  }