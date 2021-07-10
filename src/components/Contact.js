function Contact({
  contact: { name, phone, email, id, fav },
  deleteContact,
  favToggle,
}) {
  return (
    <>
      <div className="col">
        <div className="card shadow-sm w-100">
          <div className="card-header">
            <div className="row">
              <div className="col-6 ">{name}</div>
              <div
                onClick={() => {
                  favToggle(id);
                }}
                className="col-2 offset-4"
              >
                <i
                  className={
                    fav
                      ? "fas fa-star text-warning"
                      : "far fa-star text-warning"
                  }
                ></i>
              </div>
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{phone} </li>
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">
              <button
                onClick={() => {
                  deleteContact(id);
                }}
                type="button"
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contact;
