
import "./pages.css";

export default function Gallery() {
  const tours = [
    {
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      title: "Пляжний відпочинок",
      description: "Насолоджуйтесь сонцем і морем на найкращих пляжах світу."
    },
    {
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Гірські походи",
      description: "Відкрийте для себе красу гірських пейзажів."
    },
    {
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      title: "Міські тури",
      description: "Екскурсії по найцікавіших містах світу."
    },
    {
      img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
      title: "Круїзи",
      description: "Розкішні круїзи по океанах та морях."
    },
    {
      img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
      title: "Природні заповідники",
      description: "Відпочинок серед дикої природи та національних парків."
    }
  ];

  return (
    <div className="page-container">

      <h2>Галерея турів</h2>
      <p>Оберіть свій ідеальний відпочинок серед наших найкращих пропозицій:</p>
      <div className="gallery-grid">
        {tours.map((tour, i) => (
          <div key={i} className="gallery-card">
            <img src={tour.img} alt={tour.title} />
            <h4>{tour.title}</h4>
            <p>{tour.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
``
