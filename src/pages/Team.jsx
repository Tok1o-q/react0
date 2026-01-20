
import "./pages.css";

export default function Team() {
  const members = [
    {
      name: "Олена",
      role: "Менеджер",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
      description: "Відповідає за організацію турів та роботу з клієнтами."
    },
    {
      name: "Ігор",
      role: "Гід",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      description: "Професійний гід з багаторічним досвідом у гірських походах."
    },
    {
      name: "Марія",
      role: "Консультант",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      description: "Допоможе підібрати найкращий тур для вашого відпочинку."
    }
  ];

  return (
    <div className="page-container">
      <h2>Наша команда</h2>
      <div className="team-grid">
        {members.map((m, i) => (
          <div key={i} className="team-card">
            <img src={m.img} alt={m.name} />
            <h4>{m.name}</h4>
            <p>{m.role}</p>
            <p>{m.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
``
