import { useReducer } from 'react'
import './App.css'
import Lienzo from './componentes/lienzo/lienzo'
import { ElementsContext, ElementsDispatchContext } from './core/layers/elements-context'
import { ShortContext, ShortDispatchContext } from './core/short/short-context'
import ElementsButtonBox from './ui/element-button-box/element-button-box'
import ShortButtonBox from './ui/short-button-box/short-button-box'
import shortReducer from './core/short/short-reducer'
import elementsReducer from './core/layers/elements-reducer'
import { TalleContext, TalleDispatchContext } from './core/talle/talle-context'
import talleReducer from './core/talle/talle-reducer'

function App() {
  const [elements, dispatch] = useReducer(elementsReducer, []);
  const [short, shortDispatch] = useReducer(shortReducer, 'short_1_liso.svg');
  const [talle, talleDispatch] = useReducer(talleReducer, 'S');
  return (
    <ElementsContext.Provider value={elements}>
      <ElementsDispatchContext.Provider value={dispatch}>
        <ShortContext.Provider value={short}>
          <ShortDispatchContext.Provider value={shortDispatch}>
            <TalleContext.Provider value={talle}>
              <TalleDispatchContext.Provider value={talleDispatch}>
                <h1 className='app-title'>Creá tu short</h1>
                <div className="app-container">
                  <section className="top-section">
                    <ShortButtonBox />
                  </section>
                  <section className="middle-section">
                    <ElementsButtonBox />
                  </section>
                  <Lienzo />
                </div>
              </TalleDispatchContext.Provider>
            </TalleContext.Provider>
          </ShortDispatchContext.Provider>
        </ShortContext.Provider>
      </ElementsDispatchContext.Provider>
    </ElementsContext.Provider>
  )
}

export default App
