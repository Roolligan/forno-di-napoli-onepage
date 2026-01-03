import React from "react";
import logo from "./assets/brand/logo-forno-di-napoli.png";



const menuItems = [
  {
    name: "Margherita Classica",
    ingredients: "Molho de tomate San Marzano, mozzarella, manjericao e azeite",
    price: "R$ 45,90"
  },
  {
    name: "Marinara Antiga",
    ingredients: "Tomate, alho confitado, oregano, azeitonas pretas",
    price: "R$ 41,90"
  },
  {
    name: "Napoli Diavola",
    ingredients: "Calabresa artesanal, pimenta dedo-de-moca, mozzarella",
    price: "R$ 54,90"
  },
  {
    name: "Quattro Formaggi",
    ingredients: "Mozzarella, gorgonzola, provolone, parmesao",
    price: "R$ 58,90"
  },
  {
    name: "Prosciutto e Funghi",
    ingredients: "Presunto cru, cogumelos frescos, mozzarella, tomilho",
    price: "R$ 62,90"
  },
  {
    name: "Caprese do Forno",
    ingredients: "Tomate, mozzarella de bufala, pesto de manjericao",
    price: "R$ 56,90"
  },
  {
    name: "Calabresa da Casa",
    ingredients: "Calabresa artesanal, cebola roxa, mozzarella",
    price: "R$ 49,90"
  },
  {
    name: "Portuguesa Napoletana",
    ingredients: "Presunto, ovos, cebola, ervilha, azeitona, mozzarella",
    price: "R$ 57,90"
  },
  {
    name: "Frango com Catupiry",
    ingredients: "Frango desfiado, catupiry cremoso, milho, oregano",
    price: "R$ 55,90"
  },
  {
    name: "Toscana Rustica",
    ingredients: "Linguiça toscana, mozzarella, cebola caramelizada",
    price: "R$ 59,90"
  },
  {
    name: "Parma e Rucula",
    ingredients: "Presunto parma, rucula, lascas de parmesao",
    price: "R$ 66,90"
  },
  {
    name: "Funghi Trufado",
    ingredients: "Mix de cogumelos, creme de trufas, mozzarella",
    price: "R$ 69,90"
  },
  {
    name: "Quatro Stagioni",
    ingredients: "Presunto, cogumelos, alcachofra, azeitonas",
    price: "R$ 63,90"
  },
  {
    name: "Vegetariana Mediterranea",
    ingredients: "Berinjela, abobrinha, pimentao assado, tomate seco",
    price: "R$ 53,90"
  },
  {
    name: "Burrata Pomodoro",
    ingredients: "Burrata cremosa, tomate confit, basilico",
    price: "R$ 64,90"
  },
  {
    name: "Napoli Suprema",
    ingredients: "Mozzarella, pepperoni, azeitonas, oregano",
    price: "R$ 60,90"
  },
  {
    name: "Gamberi al Forno",
    ingredients: "Camaroes, alho, mozzarella, toque de limao",
    price: "R$ 74,90"
  },
  {
    name: "Costela Barbecue",
    ingredients: "Costela desfiada, molho barbecue, cebola roxa",
    price: "R$ 67,90"
  },
  {
    name: "Caccio e Pepe",
    ingredients: "Creme de pecorino, pimenta-do-reino, mozzarella",
    price: "R$ 58,90"
  },
  {
    name: "Dolce Napoli",
    ingredients: "Mascarpone, calda de chocolate, morangos",
    price: "R$ 52,90"
  }
];

export default function App() {
  return (
    <div className="page">
      {/* Header */}
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Forno di Napoli">
            <img
                src={logo}
                alt="Forno di Napoli"
                className="logo"
              />

          </a>
          <nav className="nav" aria-label="Navegacao principal">
            <a href="#inicio">Inicio</a>
            <a href="#cardapio">Cardapio</a>
            <a href="#quem-somos">Quem Somos</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="hero">
          <div className="hero-overlay" aria-hidden="true"></div>
          <div className="container hero-content">
            <p className="eyebrow">Forno a lenha desde 1987</p>
            <h1>Forno di Napoli</h1>
            <p className="hero-subtitle">
              Tradicao italiana, massa lenta e sabores que nascem do fogo. Uma
              experiencia autentica de Napoli em cada fatia.
            </p>
            <a className="btn" href="#cardapio">
              Ver Cardapio
            </a>
          </div>
        </section>

        {/* Quem Somos */}
        <section id="quem-somos" className="section about">
          <div className="container about-grid">
            <div className="about-text">
              <h2>Quem Somos</h2>
              <p>
                O Forno di Napoli nasceu da paixao pela cozinha italiana
                tradicional. Nossa massa descansa por 48 horas, garantindo leveza
                e sabor, enquanto o forno a lenha de tijolos refratarios imprime
                o aroma inconfundivel da napoletana autentica.
              </p>
              <p>
                Selecionamos ingredientes frescos e importados, com azeites,
                queijos e tomates escolhidos a dedo para manter viva a heranca
                dos antigos mestres pizzaiolos.
              </p>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1601924582971-cf3ecb8a5b76?auto=format&fit=crop&w=900&q=80"
                alt="Pizzaiolo retirando pizza do forno a lenha"
              />
            </div>
          </div>
        </section>

        {/* Cardapio */}
        <section id="cardapio" className="section menu">
          <div className="container">
            <div className="section-heading">
              <h2>Cardapio</h2>
              <p>
                Combinações tradicionais e releituras brasileiras feitas com
                ingredientes selecionados e muito forno a lenha.
              </p>
            </div>

            <div className="menu-visual">
              <img
                src="https://images.unsplash.com/photo-1548365328-5bdbb2b4f70e?auto=format&fit=crop&w=700&q=80"
                alt="Pizza artesanal com borda alta"
                className="menu-image primary"
              />
              <img
                src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80"
                alt="Pizza com ingredientes frescos"
                className="menu-image secondary"
              />
            </div>

            <div className="menu-grid">
              {menuItems.map((item) => (
                <div className="menu-item" key={item.name}>
                  <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p className="ingredients">{item.ingredients}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="section contact">
          <div className="container contact-grid">
            <div className="contact-info">
              <h2>Contato e Onde Estamos</h2>
              <p>
                Rua da Tradicao, 245 - Vila Napoli, Sao Paulo - SP
              </p>
              <p>
                <strong>Horarios:</strong> Ter a Dom, 18h as 23h30
              </p>
              <p>
                <strong>Telefone:</strong> (11) 3456-7890
              </p>
              <a
                className="btn outline"
                href="https://maps.google.com/?q=Rua%20da%20Tradicao%2C%20245%20Sao%20Paulo"
                target="_blank"
                rel="noreferrer"
              >
                Ver no Google Maps
              </a>
            </div>
            <div className="contact-map">
              <iframe
                title="Mapa do Forno di Napoli"
                src="https://maps.google.com/maps?q=Rua%20da%20Tradicao%2C%20245%20Sao%20Paulo&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <p className="footer-brand">Forno di Napoli</p>
          <p>Copyright 2026. Todos os direitos reservados.</p>
          <p>Feito por seu portfolio.</p>
        </div>
      </footer>
    </div>
  );
}
