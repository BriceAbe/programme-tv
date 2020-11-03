function Description({ data }) {
  return (
    <div className="description">
      <h1>{data.title}</h1>
      <h2>{data.type}</h2>
      <p>
        <span className="duree">{data.duration}</span>{" "}
        {data.direct ? (
          <ul>
            <li>Direct</li>
          </ul>
        ) : null}
        <span>
          {data.isUnseen ? (
            <ul>
              <li>Inédit</li>
            </ul>
          ) : null}
        </span>
      </p>
    </div>
  );
}

export default Description;
