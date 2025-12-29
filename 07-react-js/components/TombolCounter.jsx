function TombolCounter() {
    const [count, setCount] = React.useState(0);
    const [like, setLike] = React.useState(0);

    return (
        <div className="container mt-4">
            <h3>Tombol Counter</h3>
            <h5>Counter: {count}</h5>
            <button className="btn btn-primary me-2" onClick={() => setCount(count + 1)}>Tambah</button>
            <button className="btn btn-dark" onClick={() => setCount(count - 1)}>Kurang</button>
            <br />
            <br />
            <button className="btn btn-danger mt-4 d-block" onClick={() => setLike(like + 1)}>Like ❤️ {like}</button>
        </div>
    );
}