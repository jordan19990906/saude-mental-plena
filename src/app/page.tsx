'use client';

import { useState } from 'react';
import { 
  Menu, 
  User, 
  Crown, 
  Settings, 
  MessageCircle, 
  PieChart, 
  TrendingUp, 
  Target, 
  Lightbulb,
  Calendar,
  Bell,
  Clock,
  Phone,
  ShoppingBag,
  History,
  MapPin,
  MessageSquare,
  Dumbbell,
  Brain,
  Globe,
  BarChart3,
  Users,
  Heart
} from 'lucide-react';

export default function SaudeMentalPlena() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mensagemPositiva, setMensagemPositiva] = useState('');
  const [escolhasTexto, setEscolhasTexto] = useState('');
  const [sugestoes, setSugestoes] = useState<string[]>([]);

  const gerarSugestoes = (texto: string) => {
    const sugestoesMap: { [key: string]: string[] } = {
      'desanimado': ['Fazer uma caminhada', 'Ir à academia', 'Ouvir música relaxante', 'Conversar com um amigo'],
      'ansioso': ['Exercícios de respiração', 'Meditação', 'Caminhada ao ar livre', 'Tomar um chá'],
      'estressado': ['Alongamento', 'Banho relaxante', 'Leitura', 'Exercícios físicos'],
      'triste': ['Assistir algo engraçado', 'Ligar para alguém querido', 'Fazer algo criativo', 'Sair de casa'],
      'cansado': ['Descansar', 'Dormir mais cedo', 'Fazer exercícios leves', 'Tomar água']
    };

    const palavrasChave = Object.keys(sugestoesMap);
    const palavraEncontrada = palavrasChave.find(palavra => 
      texto.toLowerCase().includes(palavra)
    );

    if (palavraEncontrada) {
      setSugestoes(sugestoesMap[palavraEncontrada]);
    } else {
      setSugestoes(['Fazer uma pausa', 'Respirar fundo', 'Beber água', 'Dar uma volta']);
    }
  };

  const dadosGraficoPizza = [
    { nome: 'Sono', valor: 8, cor: '#FFE066' },
    { nome: 'Celular', valor: 4, cor: '#FF9999' },
    { nome: 'Lazer', valor: 3, cor: '#99CCFF' },
    { nome: 'Trabalho', valor: 8, cor: '#99FF99' },
    { nome: 'Outros', valor: 1, cor: '#FFCC99' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo e Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg hover:bg-yellow-100 transition-colors"
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/af3b6793-c600-460e-adfa-3dd14c096bcd.webp" 
                alt="Saúde Mental Plena" 
                className="h-10 w-auto"
              />
            </div>

            {/* Menu Superior Direito */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-100 hover:bg-yellow-200 rounded-lg transition-colors">
                <User className="w-4 h-4" />
                <span className="text-sm font-medium">Gerenciar Conta</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-lg hover:from-yellow-500 hover:to-orange-500 transition-all">
                <Crown className="w-4 h-4" />
                <span className="text-sm font-medium">Premium</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                <span className="text-sm font-medium">Dados Pessoais</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Menu</h2>
            <nav className="space-y-3">
              <a href="https://www.saudementalplena.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-yellow-50 transition-colors">
                <Globe className="w-5 h-5 text-yellow-600" />
                <span>Acesso ao Site</span>
              </a>
              <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-yellow-50 transition-colors w-full text-left">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span>Cronograma</span>
              </button>
              <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-yellow-50 transition-colors w-full text-left">
                <Bell className="w-5 h-5 text-green-600" />
                <span>Alertas</span>
              </button>
              <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-yellow-50 transition-colors w-full text-left">
                <Clock className="w-5 h-5 text-purple-600" />
                <span>Rotina</span>
              </button>
              <button 
                onClick={() => window.location.href = 'tel:188'}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 transition-colors w-full text-left border-2 border-red-200"
              >
                <Phone className="w-5 h-5 text-red-600" />
                <span className="text-red-600 font-medium">Urgência (188)</span>
              </button>
              <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-yellow-50 transition-colors w-full text-left">
                <ShoppingBag className="w-5 h-5 text-indigo-600" />
                <span>Acessórios</span>
              </button>
              <button className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 text-white hover:from-yellow-500 hover:to-orange-500 transition-all w-full text-left">
                <Crown className="w-5 h-5" />
                <span className="font-medium">Acesso Premium - R$ 97,00</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Mensagem Positiva */}
            <div className="mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-200">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-yellow-600" />
                  <h2 className="text-xl font-semibold text-gray-800">Mensagem Positiva para Você</h2>
                </div>
                <textarea
                  value={mensagemPositiva}
                  onChange={(e) => setMensagemPositiva(e.target.value)}
                  placeholder="Escreva uma mensagem positiva para si mesmo... 💛"
                  className="w-full p-4 border border-yellow-200 rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <div className="mt-3 text-sm text-gray-600">
                  Exemplo: "Eu sou capaz de superar qualquer desafio que aparecer no meu caminho!"
                </div>
              </div>
            </div>

            {/* Gráficos */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Gráfico Dia a Dia */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-200">
                <div className="flex items-center space-x-3 mb-4">
                  <PieChart className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-800">Gráfico Dia a Dia</h3>
                </div>
                <div className="relative h-48 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-8 border-yellow-300 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-700">24h</span>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  {dadosGraficoPizza.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: item.cor }}></div>
                        <span className="text-sm text-gray-700">{item.nome}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-800">{item.valor}h</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gráfico Melhora */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-200">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-800">Gráfico Melhora</h3>
                </div>
                <div className="h-48 flex items-end justify-center space-x-2">
                  {[65, 70, 75, 80, 85, 90].map((altura, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div 
                        className="w-8 bg-gradient-to-t from-green-400 to-green-600 rounded-t"
                        style={{ height: `${altura}%` }}
                      ></div>
                      <span className="text-xs text-gray-600 mt-1">M{index + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <span className="text-sm text-gray-600">Progresso dos últimos 6 meses</span>
                </div>
              </div>
            </div>

            {/* Escolhas e Visão de Futuro */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Escolhas */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-orange-600" />
                  <h3 className="text-lg font-semibold text-gray-800">Escolhas</h3>
                </div>
                <textarea
                  value={escolhasTexto}
                  onChange={(e) => {
                    setEscolhasTexto(e.target.value);
                    if (e.target.value.length > 3) {
                      gerarSugestoes(e.target.value);
                    }
                  }}
                  placeholder="Como você está se sentindo? (ex: estou desanimado)"
                  className="w-full p-3 border border-yellow-200 rounded-lg resize-none h-20 focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-4"
                />
                {sugestoes.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-700">Sugestões para você:</h4>
                    {sugestoes.map((sugestao, index) => (
                      <button
                        key={index}
                        className="block w-full text-left p-3 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors text-sm"
                      >
                        {sugestao}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Visão de Futuro */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-800">Visão de Futuro</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Metas Curto Prazo (3-6 meses)</h4>
                    <textarea
                      placeholder="Ex: Fazer exercícios 3x por semana, meditar diariamente..."
                      className="w-full p-3 border border-yellow-200 rounded-lg resize-none h-16 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Metas Longo Prazo (1 ano+)</h4>
                    <textarea
                      placeholder="Ex: Correr uma maratona, ter mais equilíbrio emocional..."
                      className="w-full p-3 border border-yellow-200 rounded-lg resize-none h-16 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Botões Principais */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Histórico */}
              <button className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-200 hover:shadow-xl transition-all group">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                    <History className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-800">Histórico</span>
                  <span className="text-xs text-gray-600 text-center">Evolução, conversas IA, dashboard</span>
                </div>
              </button>

              {/* Perto de Mim */}
              <button className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-200 hover:shadow-xl transition-all group">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-800">Perto de Mim</span>
                  <span className="text-xs text-gray-600 text-center">Psicólogos e personals próximos</span>
                </div>
              </button>

              {/* Iniciar Conversa */}
              <button className="bg-white rounded-2xl shadow-lg p-6 border border-yellow-200 hover:shadow-xl transition-all group">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                    <MessageSquare className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="font-medium text-gray-800">Iniciar Conversa</span>
                  <span className="text-xs text-gray-600 text-center">Chat IA: Personal ou Psicólogo</span>
                </div>
              </button>

              {/* AtlasFit */}
              <button className="bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all group text-white">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                    <Dumbbell className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium">AtlasFit</span>
                  <span className="text-xs text-center opacity-90">Dietas, treinos, exercícios</span>
                  <span className="text-xs font-medium">R$ 69,90</span>
                </div>
              </button>
            </div>

            {/* Pleni - Linha separada para destaque */}
            <div className="mt-4">
              <button className="w-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all group text-white">
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <span className="text-xl font-bold block">Pleni</span>
                      <span className="text-sm opacity-90">Controle emocional, exercícios terapêuticos, respiração</span>
                      <span className="text-lg font-medium block mt-1">R$ 69,90</span>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}