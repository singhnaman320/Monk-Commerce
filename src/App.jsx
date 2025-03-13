import ProductList from './components/ProductList';
import logo from './assets/monkLogo.png'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
          <img
            src={logo} // Replace with your image path
            alt="Logo"
            className="w-8 h-8 object-contain"
          />
          <h1 className="text-xl font-semibold text-gray-800">Monk Upsell & Cross-sell</h1>
        </div>
      </header>
      <main className="py-8">
        <ProductList />
      </main>
    </div>
  );
}

export default App;