import React, { useState, useEffect } from 'react';
import api from './services/api';


import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css'

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';
//Componente: Bloco isolado de HTML, CSS e JS, no qual não interfere no restante da aplicação
//Propriedade: Informações q o componente PAI passa pra o componente FILHO
//Estado: Informações mantidas pelo componente

function App() {

  const [devs, setDevs] = useState([]);

  useEffect(() => { //Executa sempre no inicio
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]); //colocando novo cadastrado na exibição, colocando ao final do vetor
  }

  return ( //Fragment <> </>
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />))}
        </ul>
      </main>
    </div>
  );
}

export default App;
