import { useReducer } from 'react'
import './App.css'
import Lienzo from './componentes/lienzo/lienzo'
import { ElementsContext, ElementsDispatchContext } from './core/layers/elements-context'
import { ShortContext, ShortDispatchContext } from './core/short/short-context'
import shortReducer from './core/short/short-reducer'
import elementsReducer from './core/layers/elements-reducer'
import { TalleContext, TalleDispatchContext } from './core/talle/talle-context'
import talleReducer from './core/talle/talle-reducer'
import ShortButton from './ui/short-button/short-button'
import ElementsButton from './ui/elements-button/elements-button'
import TextButton from './ui/text-button/text-button'

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
                <div className='app-title'>
                  <h1>Doja Fight</h1>
                  <h2>Crea tu short</h2>
                </div>
                <div className="app-container">
                  <section className="top-section">
                    <ShortButton />
                    <TextButton />
                    <ElementsButton />
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
