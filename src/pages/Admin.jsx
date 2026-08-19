import { useEffect, useState } from "react";
import "./Admin.css";

import { useNavigate } from "react-router-dom";
import { auth, db, storage } from "../firebase";
import { signOut } from "firebase/auth";

import {
  ref as dbRef,
  push,
  onValue,
  remove,
  off,
} from "firebase/database";

import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export default function Admin() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("wildlife");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [tours, setTours] = useState([]);
  const [bookings, setBookings] = useState([]);

  /* =========================
     🔐 AUTH PROTECTION
  ========================= */
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/admin-login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  /* =========================
     FETCH DATA (SAFE LISTENERS)
  ========================= */
  useEffect(() => {
    const toursRef = dbRef(db, "tours");
    const bookingsRef = dbRef(db, "bookings");

    onValue(toursRef, (snapshot) => {
      const data = snapshot.val();
      const loaded = data
        ? Object.entries(data).map(([id, value]) => ({
            id,
            ...value,
          }))
        : [];
      setTours(loaded);
    });

    onValue(bookingsRef, (snapshot) => {
      const data = snapshot.val();
      const loaded = data
        ? Object.entries(data).map(([id, value]) => ({
            id,
            ...value,
          }))
        : [];
      setBookings(loaded);
    });

    return () => {
      off(toursRef);
      off(bookingsRef);
    };
  }, []);

  /* =========================
     ADD TOUR
  ========================= */
  const handleAddTour = async (e) => {
    e.preventDefault();

    if (!title || !duration || !description || !image) {
      return alert("Please fill all fields");
    }

    try {
      setLoading(true);

      const imgRef = storageRef(
        storage,
        `tours/${Date.now()}-${image.name}`
      );

      await uploadBytes(imgRef, image);
      const imageUrl = await getDownloadURL(imgRef);

      await push(dbRef(db, "tours"), {
        title,
        duration,
        category,
        description,
        image: imageUrl,
        createdAt: Date.now(),
      });

      setTitle("");
      setDuration("");
      setCategory("wildlife");
      setDescription("");
      setImage(null);

      alert("Tour added successfully!");
    } catch (error) {
      console.error(error);
      alert("Error adding tour");
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     DELETE TOUR
  ========================= */
  const deleteTour = (id) => {
    if (window.confirm("Delete this tour?")) {
      remove(dbRef(db, `tours/${id}`));
    }
  };

  /* =========================
     LOGOUT
  ========================= */
  const logout = async () => {
    await signOut(auth);
    navigate("/admin-login");
  };

  return (
    <section className="admin-page">
      <div className="container">

        {/* HEADER */}
        <div className="admin-header">
          <h1 className="admin-title">Admin Dashboard</h1>

          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>

        {/* ================= ADD TOUR ================= */}
        <div className="admin-card">
          <h2>Add New Tour</h2>

          <form className="admin-form" onSubmit={handleAddTour}>

            <input
              type="text"
              placeholder="Tour Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="wildlife">Wildlife</option>
              <option value="gorilla">Gorilla</option>
              <option value="primates">Primates</option>
              <option value="adventure">Adventure</option>
            </select>

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Uploading..." : "Add Tour"}
            </button>

          </form>
        </div>

        {/* ================= TOURS ================= */}
        <div className="admin-card">
          <h2>Manage Tours</h2>

          <div className="admin-grid">
            {tours.map((tour) => (
              <div key={tour.id} className="admin-tour-card">

                <img src={tour.image} alt={tour.title} />

                <div className="tour-info">
                  <h3>{tour.title}</h3>
                  <p>{tour.duration}</p>
                  <span className="category">{tour.category}</span>
                </div>

                <button
                  onClick={() => deleteTour(tour.id)}
                  className="delete-btn"
                >
                  Delete
                </button>

              </div>
            ))}
          </div>
        </div>

        {/* ================= BOOKINGS ================= */}
        <div className="admin-card">
          <h2>Bookings</h2>

          <div className="booking-list">
            {bookings.length === 0 && (
              <p>No bookings yet.</p>
            )}

            {bookings.map((b) => (
              <div key={b.id} className="booking-card">

                <h3>{b.name}</h3>

                <p><b>Tour:</b> {b.tour}</p>
                <p><b>Date:</b> {b.date}</p>
                <p><b>People:</b> {b.people}</p>
                <p><b>Phone:</b> {b.phone}</p>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}