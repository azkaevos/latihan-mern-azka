function DaftarTugas(props) {
    return (
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
            DAFTAR TUGAS
            </a>
            {props.tugas.map((tugas, index) => (
            <a href="#" class="list-group-item list-group-item-action" key ={index}>{tugas}</a>
            ))}
        </div>
    );
}