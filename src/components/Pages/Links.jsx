export default function Links({myName}) {






    const myStyle = {
      border: "2px solid green",
      backgroundColor: "orange",
    };
    return (
      <div style={myStyle}>
        <h1>Links</h1>
        {myName}
        <p>Links coming soon</p>
      </div>
    );
  }