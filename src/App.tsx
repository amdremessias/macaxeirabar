import React from 'react';
import { Beer, UtensilsCrossed, Clock, MapPin, Phone } from 'lucide-react';

function App() {
  const bebidas = [
    { categoria: 'Lata', items: [
      { nome: 'Brahma', preco: 5 },
      { nome: 'Skol', preco: 5 },
      { nome: 'Antarctica', preco: 5 }
    ]},
    { categoria: 'Garrafa', items: [
      { nome: 'Original', preco: 8 },
      { nome: 'Heineken', preco: 10 },
      { nome: 'Stella Artois', preco: 10 }
    ]},
    { categoria: 'Litrão', items: [
      { nome: 'Brahma Litrão', preco: 12 },
      { nome: 'Skol Litrão', preco: 12 }
    ]}
  ];

  const comidas = [
    { nome: 'Mocotó', preco: 25, imagem: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1280' },
    { nome: 'Dobradinha', preco: 28, imagem: 'https://images.unsplash.com/photo-1547928576-b822bc410bdf?q=80&w=1280' },
    { nome: 'Torresmo', preco: 20, imagem: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1280' },
    { nome: 'Porção de Tilápia', preco: 35, imagem: 'https://images.unsplash.com/photo-1553557202-e8e60357f061?q=80&w=1280' },
    { nome: 'Frango a Passarinho', preco: 30, imagem: 'https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?q=80&w=1280' }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-amber-900 text-white p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Bar do Macaxeira</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#bebidas" className="hover:text-amber-200">Bebidas</a>
            <a href="#comidas" className="hover:text-amber-200">Comidas</a>
            <a href="#contato" className="hover:text-amber-200">Contato</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        <section id="bebidas" className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Beer className="w-6 h-6 text-amber-700" />
            <h2 className="text-2xl font-bold text-amber-900">Bebidas</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {bebidas.map((categoria, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Cervejas {categoria.categoria}</h3>
                <ul className="space-y-2">
                  {categoria.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex justify-between">
                      <span>{item.nome}</span>
                      <span className="text-amber-600">R$ {item.preco},00</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="comidas" className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <UtensilsCrossed className="w-6 h-6 text-amber-700" />
            <h2 className="text-2xl font-bold text-amber-900">Comidas</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comidas.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
                <img src={item.imagem} alt={item.nome} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{item.nome}</h3>
                  <p className="text-amber-600">R$ {item.preco},00</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contato" className="bg-amber-900 text-white py-8">
        <div className="max-w-4xl mx-auto p-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Horário de Funcionamento</h3>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5" />
                <span>Segunda a Sábado: 11h às 23h</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Domingo: 11h às 16h</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Localização</h3>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5" />
                <span>Rua da Macaxeira, 123 - Recife, PE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>(81) 99999-9999</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;