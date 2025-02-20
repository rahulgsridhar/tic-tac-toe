function Log({ turns }) {
  const logStyles = {
    maxWidth: "20rem",
    color: "#3f3b00",
    listStyle: "none",
    margin: "2rem auto",
    padding: "0",
    textAlign: "center",
  };

  const logItemStyles = {
    borderRadius: "4px",
    margin: "0.75rem",
    padding: "0.5rem",
    backgroundColor: "#f8e5c2",
    transition: "background-color 0.3s ease",
  };

  const evenItemStyles = {
    backgroundColor: "#fcd256",
  };

  const oddItemStyles = {
    backgroundColor: "#f8e5c2",
  };

  const hoverStyles = {
    backgroundColor: "#f8ca31",
    color: "#fff",
  };

  return (
    <ol style={logStyles}>
      {turns.map((turn, index) => (
        <li
          key={`${turn.square.row} ${turn.square.col}`}
          style={{
            ...logItemStyles,
            ...(index % 2 === 0 ? evenItemStyles : oddItemStyles),
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = hoverStyles.backgroundColor;
            e.target.style.color = hoverStyles.color;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor =
              index % 2 === 0
                ? evenItemStyles.backgroundColor
                : oddItemStyles.backgroundColor;
            e.target.style.color = logStyles.color;
          }}
        >
          {`${turn.player} selected row ${turn.square.row + 1}, column ${
            turn.square.col + 1
          }`}
        </li>
      ))}
    </ol>
  );
}

export default Log;
